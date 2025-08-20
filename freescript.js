document.addEventListener('DOMContentLoaded', () => {
  // Data
  const exercises = Array.isArray(window.EXERCISES) ? window.EXERCISES : [];

  // DOM
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
  const categoryList       = document.getElementById('categoryList');
  const exerciseSearchInput= document.getElementById('exerciseSearch');
  const exerciseList       = document.getElementById('exerciseList');

  // State
  let isDragging = false;
  let displayedExercises = [];
  let currentExerciseIndex = 0;
  let currentSelectedExercise = null;
  let currentOriginalTempo = null;
  let userIsAdjustingTempo = false;
  let suppressTempoInput   = false;

  // Categories (free version)
let displayedCategories = ["all","one-handers","accent-tap","timing","rolls"];
const categoryDisplayMap = {
  "all":"All Categories",
  "one-handers":"One Handers",
  "accent-tap":"Accent Tap",
  "timing":"Timing",
  "rolls":"Rolls"
};


  // Audio defaults
  if (audio) {
    audio.loop = false;
    if ('preservesPitch' in audio)       audio.preservesPitch = true;
    if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = true;
    if ('mozPreservesPitch' in audio)    audio.mozPreservesPitch = true;
    audio.addEventListener('loadedmetadata', updateTotalTime);
  }

  // Button intent & touch safety
  ['playPauseBtn','prevExerciseBtn','nextExerciseBtn'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    try { el.type = 'button'; } catch {}
    el.style.touchAction = 'manipulation';
    const stop = (e) => e.stopPropagation();
    el.addEventListener('pointerdown', stop, { passive: true });
    el.addEventListener('click', stop);
  });

  // Init lists (we keep them hidden; modal handles picking)
  initializeCategoryList();
  if (exerciseList) exerciseList.style.display = 'none';
  if (categoryList) categoryList.style.display = 'none';

  displayedExercises = filterExercisesForMode();
  if (displayedExercises.length > 0) {
    currentExerciseIndex    = 0;
    currentSelectedExercise = displayedExercises[currentExerciseIndex];
    initializeExercise(currentSelectedExercise);
    if (exerciseSearchInput) exerciseSearchInput.placeholder = currentSelectedExercise.name;
  } else {
    if (exerciseSearchInput) exerciseSearchInput.placeholder = "Search Exercises...";
  }

  // Play/pause
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
        }).catch((err) => {
          console.error('Error playing audio:', err);
          alert('Audio is not ready yet. Please wait a moment.');
        });
      } else {
        audio.pause();
        this.textContent = 'Play';
      }
    });
  }

  // Ended: reset UI
  if (audio) {
    audio.addEventListener('ended', () => {
      if (playPauseBtn) playPauseBtn.textContent = 'Play';
      resetProgressBarInstant();
      stopProgressTicker();
    });
  }

  // --- TEMPO SLIDER (iOS guard for accidental track taps) ---
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
      position: 'absolute',
      inset: '0',
      background: 'transparent',
      zIndex: '5',
      touchAction: 'none'
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

      if (!onThumb) {
        e.preventDefault();
        e.stopPropagation();
        if (tempoSlider && document.activeElement === tempoSlider) tempoSlider.blur();
        userIsAdjustingTempo = false;
        return;
      }

      dragging = true;
      userIsAdjustingTempo = true;
      e.preventDefault();
      e.stopPropagation();
      try { tempoSlider.focus({ preventScroll: true }); } catch {}
      move(e);

      window.addEventListener('pointermove', move, { passive: false });
      window.addEventListener('pointerup',   end,  { passive: true, once: true });
      window.addEventListener('pointercancel', end, { passive: true, once: true });
      window.addEventListener('touchmove',   move, { passive: false });
      window.addEventListener('touchend',    end,  { passive: true, once: true });
      window.addEventListener('touchcancel', end,  { passive: true, once: true });
    }

    function move(e) {
      if (!dragging) return;
      const t = e.touches ? e.touches[0] : e;
      setFromClientX(t.clientX);
      e.preventDefault();
    }

    function end() {
      if (!dragging) return;
      dragging = false;
      userIsAdjustingTempo = false;
      if (tempoSlider && document.activeElement === tempoSlider) tempoSlider.blur();
      window.removeEventListener('pointermove', move);
      window.removeEventListener('touchmove',   move);
    }

    shield.addEventListener('pointerdown', start, { passive: false });
    shield.addEventListener('touchstart',  start, { passive: false });
  })();

  // Pointer fallback (mouse / stylus)
  if (tempoSlider) {
    tempoSlider.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'touch') userIsAdjustingTempo = true;
    }, { passive: true });

    const endTempoDrag = () => { userIsAdjustingTempo = false; };
    tempoSlider.addEventListener('pointerup', endTempoDrag, { passive: true });
    tempoSlider.addEventListener('pointercancel', endTempoDrag, { passive: true });

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

  // Progress bar
  if (progress) {
    progress.style.transformOrigin = 'left center';
    progress.style.transform = 'scaleX(0)';
  }
  function resetProgressBarInstant() {
    if (!progress) return;
    progress.style.transform = 'scaleX(0)';
    void progress.offsetWidth;
    if (currentTimeDisplay) currentTimeDisplay.textContent = '0:00';
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
      if (!audio.paused && !audio.ended) {
        progressRafId = requestAnimationFrame(tick);
      }
    };
    progressRafId = requestAnimationFrame(tick);
  }
  function stopProgressTicker() {
    cancelAnimationFrame(progressRafId);
    progressRafId = null;
  }

  if (progressContainer) {
    progressContainer.addEventListener('pointerdown', (e) => {
      try { progressContainer.setPointerCapture(e.pointerId); } catch {}
      updateProgress(e);
      if (tempoSlider && document.activeElement === tempoSlider) tempoSlider.blur();
    });
    progressContainer.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      updateProgress(e);
    });
    const endProgressDrag = (e) => {
      isDragging = false;
      try { progressContainer.releasePointerCapture(e.pointerId); } catch {}
    };
    progressContainer.addEventListener('pointerup', endProgressDrag, { passive: true });
    progressContainer.addEventListener('pointercancel', endProgressDrag, { passive: true });
    progressContainer.addEventListener('pointerdown', () => { isDragging = true; }, { passive: true });
    window.addEventListener('pointerup',   () => { isDragging = false; }, { passive: true });
    document.addEventListener('visibilitychange', () => { if (document.hidden) isDragging = false; });
  }

  function updateProgress(e) {
    if (!audio || !progressContainer || !progress) return;
    const rect = progressContainer.getBoundingClientRect();
    const clientX = (e.clientX != null) ? e.clientX : (e.touches?.[0]?.clientX ?? 0);
    let x = clientX - rect.left;
    const width = rect.width || 1;
    let clickedValue = Math.min(1, Math.max(0, x / width));
    const dur = (isFinite(audio.duration) && audio.duration > 0) ? audio.duration : 1;
    audio.currentTime = clickedValue * dur;
    const pct = Math.min(1, Math.max(0, (audio.currentTime || 0) / dur));
    progress.style.transform = `scaleX(${pct})`;
    updateCurrentTime();
  }

  // Exercise nav
  prevExerciseBtn?.addEventListener('click', () => navigateExercise(-1));
  nextExerciseBtn?.addEventListener('click', () => navigateExercise(1));

  // We no longer open small dropdowns; modal handles picking
  // (Keep outside-click handler only to ensure any legacy menus stay hidden)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.exercise-container') && exerciseList) exerciseList.style.display = 'none';
    if (!e.target.closest('.category-container') && categoryList) categoryList.style.display = 'none';
  });

  // Helpers
  function filterExercisesForMode() {
    const selectedCategory = getSelectedCategory();
    return exercises.filter(ex => selectedCategory === 'all' || ex.category.includes(selectedCategory));
  }

  function getSelectedCategory() {
    if (!categorySearchInput) return 'all';
    const ph = categorySearchInput.placeholder;
    if (ph === '' || ph === 'All Categories') return 'all';
    const entry = Object.entries(categoryDisplayMap).find(([key, val]) => val.toLowerCase() === ph.toLowerCase());
    return entry ? entry[0] : 'all';
  }

  function initializeExercise(ex) {
    if (!audio || !tempoSlider || !tempoLabel || !sheetMusicImg) return;

    audio.src     = ex.audioSrc;
    audio.preload = 'auto';
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

    if (exerciseSearchInput) {
      exerciseSearchInput.value = '';
      exerciseSearchInput.placeholder = ex.name;
    }

    updatePlaybackRate();
    updateSliderBackground(tempoSlider, '#96318d', '#ffffff');
  }

  function updatePlaybackRate() {
    if (!audio || !tempoSlider || !currentOriginalTempo) return;
    const currentTempo = parseInt(tempoSlider.value, 10);
    const playbackRate = currentTempo / currentOriginalTempo;
    audio.playbackRate = playbackRate;
    if (tempoLabel) tempoLabel.textContent = 'BPM: ' + currentTempo;
    updateTotalTime();
    updateCurrentTime();
  }

  function updateSliderBackground(slider, c1, c2) {
    if (!slider) return;
    const v = Number(slider.value), min = Number(slider.min), max = Number(slider.max);
    const pct = ((v - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, ${c1} 0%, ${c1} ${pct}%, ${c2} ${pct}%, ${c2} 100%)`;
  }

  function formatTime(t) {
    const minutes = Math.floor(t / 60);
    const seconds = Math.floor(t % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  function updateTotalTime() {
    if (!audio || !totalTimeDisplay) return;
    if (!isFinite(audio.duration) || audio.duration <= 0) return;
    const duration = audio.duration / (audio.playbackRate || 1);
    totalTimeDisplay.textContent = formatTime(duration);
  }

  function updateCurrentTime() {
    if (!audio || !currentTimeDisplay) return;
    const rate = audio.playbackRate || 1;
    const current = (audio.currentTime || 0) / rate;
    currentTimeDisplay.textContent = formatTime(current);
  }

  function navigateExercise(step) {
    displayedExercises = filterExercisesForMode();
    if (displayedExercises.length === 0) return;

    const len = displayedExercises.length;
    currentExerciseIndex = (currentExerciseIndex + step + len) % len;
    currentSelectedExercise = displayedExercises[currentExerciseIndex];

    if (exerciseSearchInput) { exerciseSearchInput.value = ''; exerciseSearchInput.placeholder = currentSelectedExercise.name; }

    initializeExercise(currentSelectedExercise);
    if (audio) {
      audio.pause();
      resetProgressBarInstant();
      if (playPauseBtn) playPauseBtn.textContent = 'Play';
    }
  }

  function initializeCategoryList() {
    if (categorySearchInput) categorySearchInput.placeholder = "All Categories";
  }

  // ------ Full-screen picker for Exercise & Category ------
  const pickerOverlay = document.getElementById('pickerOverlay');
  const pickerClose   = document.getElementById('pickerClose');
  const pickerSearch  = document.getElementById('pickerSearch');
  const pickerList    = document.getElementById('pickerList');
  let pickerMode = null; // 'exercise' | 'category'

  // Make triggers read-only but clickable
  if (exerciseSearchInput) exerciseSearchInput.readOnly = true;
  if (categorySearchInput) categorySearchInput.readOnly = true;

  exerciseSearchInput?.addEventListener('click', () => openPicker('exercise'));
  categorySearchInput?.addEventListener('click', () => openPicker('category'));

  pickerClose?.addEventListener('click', closePicker);
  pickerOverlay?.addEventListener('click', (e) => {
    if (e.target === pickerOverlay) closePicker();
  });
  document.addEventListener('keydown', (e) => {
    if (pickerOverlay?.dataset.open === '1' && e.key === 'Escape') closePicker();
  });
  pickerSearch?.addEventListener('input', () => renderPickerItems(pickerSearch.value));

  function openPicker(mode){
    pickerMode = mode;
    if (!pickerOverlay) return;
    pickerOverlay.dataset.open = '1';
    document.body.style.overflow = 'hidden';
    // Prefill search box with current input text (if any)
    if (pickerSearch) {
      const src = (mode === 'exercise') ? exerciseSearchInput : categorySearchInput;
      pickerSearch.value = src?.value || '';
    }
    renderPickerItems(pickerSearch?.value || '');
    requestAnimationFrame(() => pickerSearch?.focus());
  }

  function closePicker(){
    if (!pickerOverlay) return;
    delete pickerOverlay.dataset.open;
    document.body.style.overflow = '';
    pickerMode = null;
    if (pickerSearch) pickerSearch.value = '';
  }

  function renderPickerItems(query){
    if (!pickerList) return;
    const q = (query || '').toLowerCase();
    pickerList.innerHTML = '';

    if (pickerMode === 'exercise'){
      const list = filterExercisesForMode()
        .filter(ex => ex.name.toLowerCase().includes(q));
      list.forEach((exercise) => {
        const li = document.createElement('li');
        li.textContent = exercise.name;
        if (exercise === currentSelectedExercise) li.classList.add('active-option');
        li.addEventListener('click', () => {
          currentSelectedExercise = exercise;
          displayedExercises      = filterExercisesForMode();
          currentExerciseIndex    = displayedExercises.findIndex(ex => ex.id === exercise.id);
          initializeExercise(exercise);
          if (exerciseSearchInput) exerciseSearchInput.value = '';
          if (audio) { audio.pause(); resetProgressBarInstant(); if (playPauseBtn) playPauseBtn.textContent = 'Play'; }
          closePicker();
        });
        pickerList.appendChild(li);
      });
    }

    if (pickerMode === 'category'){
      const cats = displayedCategories
        .map(cat => ({ key: cat, label: categoryDisplayMap[cat] || cat }))
        .filter(c => c.label.toLowerCase().includes(q) || c.key.toLowerCase().includes(q));
      cats.forEach(({key,label}) => {
        const li = document.createElement('li');
        li.textContent = label;
        if (categorySearchInput && label === categorySearchInput.placeholder) li.classList.add('active-option');
        li.addEventListener('click', () => {
          if (categorySearchInput) { categorySearchInput.value = ''; categorySearchInput.placeholder = label; }
          currentExerciseIndex = 0;
          const filtered = filterExercisesForMode();
          if (filtered.length > 0) {
            currentSelectedExercise = filtered[currentExerciseIndex];
            initializeExercise(currentSelectedExercise);
            if (exerciseSearchInput) { exerciseSearchInput.value = ''; exerciseSearchInput.placeholder = currentSelectedExercise.name; }
            if (audio) { audio.pause(); resetProgressBarInstant(); }
            if (playPauseBtn) playPauseBtn.textContent = 'Play';
          } else {
            currentSelectedExercise = null;
            if (exerciseSearchInput) { exerciseSearchInput.value = ''; exerciseSearchInput.placeholder = "Search Exercises..."; }
          }
          closePicker();
        });
        pickerList.appendChild(li);
      });
    }
  }
});
