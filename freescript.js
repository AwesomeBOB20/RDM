document.addEventListener('DOMContentLoaded', () => {
  // ===== Data =====
  const exercises = Array.isArray(window.EXERCISES) ? window.EXERCISES : [];

  // ===== DOM =====
  const audio              = document.getElementById('audio');
  const totalTimeDisplay   = document.getElementById('totalTime');
  const currentTimeDisplay = document.getElementById('currentTime');
  const playPauseBtn       = document.getElementById('playPauseBtn');
  const tempoSlider        = document.getElementById('tempoSlider');
  const tempoLabel         = document.getElementById('tempoLabel');
  const sheetMusicImg      = document.querySelector('.sheet-music img');

  const progressContainer  = document.querySelector('.progress-container .bar');
  let   progress           = document.getElementById('progress') || document.querySelector('.bar__fill');

  const prevExerciseBtn    = document.getElementById('prevExerciseBtn');
  const nextExerciseBtn    = document.getElementById('nextExerciseBtn');

  const categorySearchInput= document.getElementById('categorySearch');
  const exerciseSearchInput= document.getElementById('exerciseSearch');

  // ===== Picker (modal) =====
  const pickerOverlay = document.getElementById('pickerOverlay');
  const pickerClose   = document.getElementById('pickerClose');
  const pickerSearch  = document.getElementById('pickerSearch');
  const pickerList    = document.getElementById('pickerList');
  const pickerTitle   = document.getElementById('pickerTitle'); // optional in HTML
  let pickerMode = null; // 'exercise' | 'category'

  // Pointer heuristic
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;

  // ===== State =====
  let isDragging = false; // (unused elsewhere)
  let displayedExercises = [];
  let currentExerciseIndex = 0;
  let currentSelectedExercise = null;

  let currentOriginalTempo = null;
  let userIsAdjustingTempo = false;
  let suppressTempoInput   = false;
  let prevTempo            = null;
  let lastTempoChangeAt    = 0;

  // Categories (free)
  let displayedCategories = ["all","one-handers","accent-tap","timing","rolls"];
  const categoryDisplayMap = {
    "all":"All Categories",
    "one-handers":"One Handers",
    "accent-tap":"Accent Tap",
    "timing":"Timing",
    "rolls":"Rolls"
  };

  // ===== Audio defaults =====
  if (audio) {
    audio.loop = true;
    if ('preservesPitch' in audio)       audio.preservesPitch = true;
    if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = true;
    if ('mozPreservesPitch' in audio)    audio.mozPreservesPitch = true;
    audio.addEventListener('loadedmetadata', updateTotalTime);
  }

  // Button hygiene
  ['playPauseBtn','prevExerciseBtn','nextExerciseBtn'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    try { el.type = 'button'; } catch {}
    el.style.touchAction = 'manipulation';
    const stop = (e) => e.stopPropagation();
    el.addEventListener('pointerdown', stop, { passive: true });
    el.addEventListener('click', stop);
  });

  // Init
  if (categorySearchInput) categorySearchInput.placeholder = "All Categories";

  displayedExercises = filterExercisesForMode();
  if (displayedExercises.length > 0) {
    currentExerciseIndex    = 0;
    currentSelectedExercise = displayedExercises[currentExerciseIndex];
    initializeExercise(currentSelectedExercise);
    exerciseSearchInput && (exerciseSearchInput.placeholder = currentSelectedExercise.name);
  } else {
    exerciseSearchInput && (exerciseSearchInput.placeholder = "Search Exercises...");
  }

  // ===== Play / Pause =====
  if (playPauseBtn && audio) {
    playPauseBtn.addEventListener('click', function () {
      if (audio.ended || (isFinite(audio.duration) && audio.currentTime >= audio.duration)) {
        audio.currentTime = 0;
        resetProgressBarInstant();
      }
      if (audio.paused) {
        if (audio.readyState < 3) audio.load();
        audio.play().then(() => {
          this.textContent = 'Pause';
          startProgressTicker();
        }).catch(() => alert('Audio is not ready yet. Please wait a moment.'));
      } else {
        audio.pause();
        this.textContent = 'Play';
      }
    });
  }

  // Loop mode doesn't reset UI on ended
  audio?.addEventListener('ended', () => {
    if (!audio.loop) {
      playPauseBtn && (playPauseBtn.textContent = 'Play');
      resetProgressBarInstant();
      stopProgressTicker();
    }
  });

  // ===== Tempo slider: iOS track-tap guard =====
  (function () {
    const isiOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (!isiOS || !tempoSlider) return;

    const wrap = document.createElement('div');
    wrap.style.position = 'relative';
    wrap.style.display  = 'block';
    wrap.style.width    = '100%';
    tempoSlider.parentNode.insertBefore(wrap, tempoSlider);
    wrap.appendChild(tempoSlider);

    const shield = document.createElement('div');
    Object.assign(shield.style, {
      position: 'absolute', inset: '0', background: 'transparent', zIndex: '5', touchAction: 'none'
    });
    wrap.appendChild(shield);

    const THUMB_RADIUS = 24;
    let dragging = false;

    function thumbCenterX() {
      const rect = tempoSlider.getBoundingClientRect();
      const min  = Number(tempoSlider.min) || 0;
      const max  = Number(tempoSlider.max) || 100;
      const v    = Number(tempoSlider.value);
      const pct  = (v - min) / (max - min || 1);
      return rect.left + pct * rect.width;
    }
    function setFromClientX(clientX) {
      const rect = tempoSlider.getBoundingClientRect();
      const x    = Math.min(Math.max(clientX - rect.left, 0), rect.width);
      const min  = Number(tempoSlider.min) || 0;
      const max  = Number(tempoSlider.max) || 100;
      const val  = Math.round(min + (x / (rect.width || 1)) * (max - min));
      tempoSlider.value = String(val);
      updatePlaybackRate();
      updateSliderBackground(tempoSlider, '#96318d', '#ffffff');
    }
    function start(e) {
      const t = e.touches ? e.touches[0] : e;
      const onThumb = Math.abs(t.clientX - thumbCenterX()) <= THUMB_RADIUS;
      if (!onThumb) { e.preventDefault(); e.stopPropagation(); if (tempoSlider && document.activeElement === tempoSlider) tempoSlider.blur(); userIsAdjustingTempo = false; return; }
      dragging = true; userIsAdjustingTempo = true;
      e.preventDefault(); e.stopPropagation();
      try { tempoSlider.focus({ preventScroll: true }); } catch {}
      move(e);
      window.addEventListener('pointermove', move, { passive: false });
      window.addEventListener('pointerup',   end,  { passive: true, once: true });
      window.addEventListener('pointercancel', end, { passive: true, once: true });
      window.addEventListener('touchmove',   move, { passive: false });
      window.addEventListener('touchend',    end,  { passive: true, once: true });
      window.addEventListener('touchcancel', end,  { passive: true, once: true });
    }
    function move(e){ if (!dragging) return; const t=e.touches?e.touches[0]:e; setFromClientX(t.clientX); e.preventDefault(); }
    function end(){ if (!dragging) return; dragging=false; userIsAdjustingTempo=false; if (tempoSlider && document.activeElement===tempoSlider) tempoSlider.blur();
      window.removeEventListener('pointermove', move); window.removeEventListener('touchmove', move);
    }
    shield.addEventListener('pointerdown', start, { passive:false });
    shield.addEventListener('touchstart',  start, { passive:false });
  })();

  // Pointer fallback (mouse/stylus)
  if (tempoSlider) {
    tempoSlider.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'touch') userIsAdjustingTempo = true; }, { passive: true });
    const endDrag = () => { userIsAdjustingTempo = false; };
    tempoSlider.addEventListener('pointerup', endDrag, { passive: true });
    tempoSlider.addEventListener('pointercancel', endDrag, { passive: true });
    tempoSlider.addEventListener('input', function () {
      if (suppressTempoInput) return;
      updatePlaybackRate();
      updateSliderBackground(this, '#96318d', '#ffffff');
    });
    tempoSlider.addEventListener('change', () => {
      if (tempoSlider && document.activeElement === tempoSlider) tempoSlider.blur();
      userIsAdjustingTempo = false;
    });
  }

  // ===== Progress bar =====
  if (progress) {
    progress.style.transformOrigin = 'left center';
    progress.style.transform = 'scaleX(0)';
  }
  function resetProgressBarInstant() {
    if (!progress) return;
    progress.style.transform = 'scaleX(0)';
    void progress.offsetWidth;
    currentTimeDisplay && (currentTimeDisplay.textContent = '0:00');
  }
  let progressRafId = null;
  function startProgressTicker() {
    if (!audio || !progress) return;
    cancelAnimationFrame(progressRafId);
    const tick = () => {
      if (!audio || !progress) return;
      const dur = (isFinite(audio.duration) && audio.duration > 0) ? audio.duration : 1;
      const pct = Math.min(1, Math.max(0, (audio.currentTime || 0) / dur));
      progress.style.transform = `scaleX(${pct})`;
      updateCurrentTime();
      if (!audio.paused && !audio.ended) progressRafId = requestAnimationFrame(tick);
    };
    progressRafId = requestAnimationFrame(tick);
  }
  function stopProgressTicker(){ cancelAnimationFrame(progressRafId); progressRafId = null; }

  // Seek only on click/drag (no hover scrubbing)
  let isSeekingProgress = false;
  if (progressContainer) {
    const endSeek = (e) => {
      isSeekingProgress = false;
      try { progressContainer.releasePointerCapture(e.pointerId); } catch {}
    };

    progressContainer.addEventListener('pointerdown', (e) => {
      // For mouse, only left button; allow touch/pen
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      isSeekingProgress = true;
      try { progressContainer.setPointerCapture(e.pointerId); } catch {}
      updateProgress(e); // jump immediately where clicked
      if (tempoSlider && document.activeElement === tempoSlider) tempoSlider.blur();
    });

    // Only update while actively seeking (dragging with pointer down)
    progressContainer.addEventListener('pointermove', (e) => {
      if (!isSeekingProgress) return;
      updateProgress(e);
    });

    ['pointerup','pointercancel','lostpointercapture','pointerleave']
      .forEach(evt => progressContainer.addEventListener(evt, endSeek, { passive: true }));
  }

  function updateProgress(e) {
    if (!audio || !progressContainer || !progress) return;
    const rect = progressContainer.getBoundingClientRect();
    const clientX = (e.clientX != null) ? e.clientX : (e.touches?.[0]?.clientX ?? 0);
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const clickedValue = (rect.width ? x / rect.width : 0);
    const dur = (isFinite(audio.duration) && audio.duration > 0) ? audio.duration : 1;
    audio.currentTime = clickedValue * dur;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, (audio.currentTime || 0) / dur))})`;
    updateCurrentTime();
  }

  // ===== Tempo / time helpers =====
  function updateSliderBackground(slider, c1, c2) {
    const v = Number(slider.value), min = Number(slider.min), max = Number(slider.max);
    const pct = ((v - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, ${c1} 0%, ${c1} ${pct}%, ${c2} ${pct}%, ${c2} 100%)`;
  }
  function formatTime(t){ const m=Math.floor(t/60); const s=Math.floor(t%60).toString().padStart(2,'0'); return `${m}:${s}`; }
  function updateTotalTime(){
    if (!audio || !totalTimeDisplay) return;
    if (!isFinite(audio.duration) || audio.duration <= 0) return;
    totalTimeDisplay.textContent = formatTime(audio.duration / (audio.playbackRate || 1));
  }
  function updateCurrentTime(){
    if (!audio || !currentTimeDisplay) return;
    const rate = audio.playbackRate || 1;
    currentTimeDisplay.textContent = formatTime((audio.currentTime || 0) / rate);
  }
  function updatePlaybackRate(){
    if (!audio || !tempoSlider || !currentOriginalTempo) return;
    const currentTempo = parseInt(tempoSlider.value, 10);
    audio.playbackRate = currentTempo / currentOriginalTempo;
    tempoLabel && (tempoLabel.textContent = 'BPM: ' + currentTempo);
    updateTotalTime(); updateCurrentTime();
  }
  function setTempoThrottled(bpm,{blur=false}={}){
    const now = (typeof performance!=='undefined' && performance.now) ? performance.now() : Date.now();
    if (now - lastTempoChangeAt < 400) return;
    lastTempoChangeAt = now;
    setTempoSilently(bpm,{blur});
  }
  function setTempoSilently(bpm,{blur=false}={}){
    if (!tempoSlider) return;
    suppressTempoInput = true;
    tempoSlider.value = String(bpm);
    updatePlaybackRate();
    updateSliderBackground(tempoSlider, '#96318d', '#ffffff');
    requestAnimationFrame(()=>{ suppressTempoInput=false; if (blur) tempoSlider.blur(); });
  }

  // ===== Exercise flow =====
  function filterExercisesForMode(){
    const selectedCategory = getSelectedCategory();
    return exercises.filter(ex => selectedCategory === 'all' || ex.category.includes(selectedCategory));
  }
  function getSelectedCategory(){
    if (!categorySearchInput) return 'all';
    const ph = categorySearchInput.placeholder;
    if (ph === '' || ph === 'All Categories') return 'all';
    const entry = Object.entries(categoryDisplayMap).find(([key,val]) => val.toLowerCase() === ph.toLowerCase());
    return entry ? entry[0] : 'all';
  }
  function initializeExercise(ex){
    if (!audio || !tempoSlider || !tempoLabel || !sheetMusicImg) return;
    audio.src     = ex.audioSrc;
    audio.preload = 'auto';
    audio.loop    = true;
    audio.load();

    if ('preservesPitch' in audio)       audio.preservesPitch = true;
    if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = true;
    if ('mozPreservesPitch' in audio)    audio.mozPreservesPitch = true;

    sheetMusicImg.src = ex.sheetMusicSrc;

    currentOriginalTempo = ex.originalTempo;
    tempoSlider.min      = ex.originalTempo / 2;
    tempoSlider.max      = ex.originalTempo * 2;
    tempoSlider.value    = ex.originalTempo;
    tempoLabel.textContent = 'BPM: ' + ex.originalTempo;

    exerciseSearchInput && (exerciseSearchInput.value = '', exerciseSearchInput.placeholder = ex.name);

    updatePlaybackRate();
    updateSliderBackground(tempoSlider, '#96318d', '#ffffff');
  }
  function navigateExercise(step){
    displayedExercises = filterExercisesForMode();
    if (displayedExercises.length === 0) return;
    const len = displayedExercises.length;
    currentExerciseIndex    = (currentExerciseIndex + step + len) % len;
    currentSelectedExercise = displayedExercises[currentExerciseIndex];
    exerciseSearchInput && (exerciseSearchInput.value = '', exerciseSearchInput.placeholder = currentSelectedExercise.name);
    initializeExercise(currentSelectedExercise);
    if (audio){ audio.pause(); resetProgressBarInstant(); playPauseBtn && (playPauseBtn.textContent='Play'); }
  }
  prevExerciseBtn?.addEventListener('click', () => navigateExercise(-1));
  nextExerciseBtn?.addEventListener('click', () => navigateExercise(1));

  // ===== Picker wiring =====
  bindSelector(exerciseSearchInput, 'exercise');
  bindSelector(categorySearchInput,  'category');

  pickerClose?.addEventListener('click', closePicker);
  pickerOverlay?.addEventListener('click', (e) => { if (e.target === pickerOverlay) closePicker(); });

  let pickerKeyHandler = null;
  let currentItems = [];
  let activeIndex  = -1;

  function bindSelector(el, mode){
    if (!el) return;

    // Mobile/tablet: intercept to avoid keyboard
    el.addEventListener('touchstart', (e) => {
      if (!isCoarse) return;
      e.preventDefault(); e.stopPropagation();
      try { el.blur(); } catch {}
      openPicker(mode);
    }, { passive:false });

    el.addEventListener('pointerdown', (e) => {
      if (!(isCoarse && e.pointerType === 'touch')) return;
      e.preventDefault(); e.stopPropagation();
      try { el.blur(); } catch {}
      openPicker(mode);
    }, { passive:false });

    // Desktop: open modal (prevent caret)
    el.addEventListener('click', (e) => { e.preventDefault(); openPicker(mode); });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPicker(mode); }
    });
  }

  function openPicker(mode){
    pickerMode = mode;
    if (!pickerOverlay) return;
    pickerOverlay.dataset.open = '1';
    document.body.style.overflow = 'hidden';

    // Title
    if (pickerTitle) pickerTitle.textContent = (mode === 'exercise') ? 'Select Exercise' : 'Select Category';

    // Prefill search with current field text
    if (pickerSearch) {
      const src = (mode === 'exercise') ? exerciseSearchInput : categorySearchInput;
      pickerSearch.value = src?.value || '';
    }

    // Desktop autofocus only
    if (!isCoarse) {
      requestAnimationFrame(() => { try { pickerSearch?.focus({ preventScroll:true }); } catch {} });
    }

    renderPickerItems(pickerSearch?.value || '');

    // Keyboard handling while open
    pickerKeyHandler = (e) => {
      if (pickerOverlay.dataset.open !== '1') return;
      if (!currentItems.length) { if (e.key === 'Escape') { e.preventDefault(); closePicker(); } return; }

      if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, currentItems.length - 1); syncActive(); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); syncActive(); }
      if (e.key === 'Enter')     { e.preventDefault(); choose(activeIndex); }
      if (e.key === 'Escape')    { e.preventDefault(); closePicker(); }
    };
    document.addEventListener('keydown', pickerKeyHandler);

    pickerSearch?.addEventListener('input', onFilterInput, { once:true });
    function onFilterInput(){ renderPickerItems(pickerSearch.value); pickerSearch.addEventListener('input', onFilterInput); }
  }

  function closePicker(){
    if (!pickerOverlay) return;
    delete pickerOverlay.dataset.open;
    document.body.style.overflow = '';
    pickerMode = null;
    currentItems = [];
    activeIndex = -1;
    if (pickerSearch) pickerSearch.value = '';
    document.removeEventListener('keydown', pickerKeyHandler || (()=>{}));
  }

  function renderPickerItems(query){
    if (!pickerList) return;
    const q = (query || '').toLowerCase();
    pickerList.innerHTML = '';
    pickerList.setAttribute('role','listbox');

    if (pickerMode === 'exercise'){
      currentItems = filterExercisesForMode()
        .filter(ex => ex.name.toLowerCase().includes(q))
        .map(ex => ({ id: ex.id, label: ex.name, ex }));
      // Set initial active to current selection if visible, else first
      const curId = currentSelectedExercise?.id;
      activeIndex = Math.max(0, currentItems.findIndex(i => i.id === curId));
    } else {
      currentItems = displayedCategories
        .map(cat => ({ id: cat, label: categoryDisplayMap[cat] || cat }))
        .filter(c => c.label.toLowerCase().includes(q) || c.id.toLowerCase().includes(q));
      const curLabel = categorySearchInput?.placeholder || 'All Categories';
      activeIndex = Math.max(0, currentItems.findIndex(i => i.label === curLabel));
    }

    currentItems.forEach((it, i) => {
      const li = document.createElement('li');
      li.textContent = it.label;
      li.dataset.index = String(i);
      li.setAttribute('role','option');
      if (i === activeIndex) li.classList.add('active-option');
      li.setAttribute('aria-selected', String(i === activeIndex));
      li.addEventListener('click', () => choose(i));
      pickerList.appendChild(li);
    });

    // ensure active visible
    syncActive(true);
  }

  function syncActive(scroll=false){
    const children = Array.from(pickerList.children);
    children.forEach((el, idx) => {
      if (idx === activeIndex) {
        el.classList.add('active-option');
        el.setAttribute('aria-selected','true');
        if (scroll) el.scrollIntoView({ block:'nearest' });
      } else {
        el.classList.remove('active-option');
        el.setAttribute('aria-selected','false');
      }
    });
  }

  function choose(i){
    const it = currentItems[i];
    if (!it) return;

    if (pickerMode === 'exercise'){
      const exercise = it.ex || exercises.find(e => e.id === it.id);
      if (exercise) {
        currentSelectedExercise = exercise;
        displayedExercises      = filterExercisesForMode();
        currentExerciseIndex    = Math.max(0, displayedExercises.findIndex(ex => ex.id === exercise.id));
        initializeExercise(exercise);
        exerciseSearchInput && (exerciseSearchInput.value = '');
        if (audio) { audio.pause(); resetProgressBarInstant(); playPauseBtn && (playPauseBtn.textContent = 'Play'); }
      }
    } else {
      // category
      if (categorySearchInput) { categorySearchInput.value = ''; categorySearchInput.placeholder = it.label; }
      currentExerciseIndex = 0;
      const filtered = filterExercisesForMode();
      if (filtered.length > 0) {
        currentSelectedExercise = filtered[currentExerciseIndex];
        initializeExercise(currentSelectedExercise);
        exerciseSearchInput && (exerciseSearchInput.value = '', exerciseSearchInput.placeholder = currentSelectedExercise.name);
        if (audio) { audio.pause(); resetProgressBarInstant(); }
        playPauseBtn && (playPauseBtn.textContent = 'Play');
      } else {
        currentSelectedExercise = null;
        exerciseSearchInput && (exerciseSearchInput.value = '', exerciseSearchInput.placeholder = "Search Exercises...");
      }
    }
    closePicker();
  }

  // ===== Helpers =====
  function pickRandomTempo(){
    if (!currentSelectedExercise || !tempoSlider) return;
    if (userIsAdjustingTempo) return;

    const defMin = Math.floor(currentSelectedExercise.originalTempo / 2);
    const defMax = currentSelectedExercise.originalTempo * 2;
    let minTempo = defMin, maxTempo = defMax;

    let randomTempo;
    do {
      randomTempo = Math.floor(Math.random() * (maxTempo - minTempo + 1)) + minTempo;
    } while (prevTempo !== null && (Math.abs(randomTempo - prevTempo) < 8 || Math.abs(randomTempo - prevTempo) > 90));

    prevTempo = randomTempo;
    setTempoThrottled(randomTempo, { blur: true });
  }
});

// ==== Desktop control-row switch (keep mobile untouched) ====
document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('playPauseBtn');
  const bottomControls = playBtn?.closest('.control-container');
  const categoryContainer = document.querySelector('.category-container');
  const exerciseGroup = document.querySelector('.exercise-group');
  const topControls = categoryContainer?.closest('.control-container');

  if (!playBtn || !bottomControls || !categoryContainer || !exerciseGroup || !topControls) return;

  // Anchors to restore original positions on mobile
  const catAnchor = document.createComment('cat-anchor');
  const exAnchor  = document.createComment('ex-anchor');
  categoryContainer.parentNode.insertBefore(catAnchor, categoryContainer);
  exerciseGroup.parentNode.insertBefore(exAnchor, exerciseGroup);

  function toDesktop() {
  // Order: Play | Category | Exercise (right after Play)
  bottomControls.insertBefore(categoryContainer, playBtn.nextSibling);
  bottomControls.insertBefore(exerciseGroup, categoryContainer.nextSibling);
  topControls.style.display = 'none';
}


  function toMobile() {
    // Put things back exactly where they were
    if (catAnchor.parentNode) catAnchor.parentNode.insertBefore(categoryContainer, catAnchor);
    if (exAnchor.parentNode)  exAnchor.parentNode.insertBefore(exerciseGroup, exAnchor);
    topControls.style.display = ''; // show original top row again
  }

  function updateLayout() {
    const isDesktop = window.matchMedia('(min-width: 601px)').matches;
    if (isDesktop && categoryContainer.parentNode !== bottomControls) toDesktop();
    if (!isDesktop && categoryContainer.parentNode === bottomControls) toMobile();
  }

  updateLayout();
  window.addEventListener('resize', updateLayout);
});

