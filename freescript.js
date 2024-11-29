document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for your exercises data array
    const exercises = [
        { "id": 58, "name": "16th - Triplet", "category": ["timing"], "audioSrc": "https://...", "sheetMusicSrc": "https://...", "originalTempo": 120 },
        // ... (include the rest of your exercises here)
    ];

    const audio = document.getElementById('audio');
    const totalTimeDisplay = document.getElementById('totalTime');
    const currentTimeDisplay = document.getElementById('currentTime');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumePercentageDisplay = document.getElementById('volumePercentage');
    const tempoSlider = document.getElementById('tempoSlider');
    const tempoLabel = document.getElementById('tempoLabel');
    const exerciseSelector = document.getElementById('exerciseSelector');
    const categorySelector = document.getElementById('categorySelector');
    const sheetMusicImg = document.querySelector('.sheet-music img');
    const progressContainer = document.querySelector('.progress-bar');
    const progress = document.getElementById('progress');
    const prevExerciseBtn = document.getElementById('prevExerciseBtn');
    const nextExerciseBtn = document.getElementById('nextExerciseBtn');

    let isDragging = false;

    // Set audio.loop to true by default
    audio.loop = true;

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    function updateTotalTime() {
        if (audio.duration) {
            const duration = audio.duration / audio.playbackRate;
            totalTimeDisplay.textContent = formatTime(duration);
        }
    }

    function updateCurrentTime() {
        const currentTime = audio.currentTime / audio.playbackRate;
        currentTimeDisplay.textContent = formatTime(currentTime);
    }

    function updateExerciseList(category) {
        exerciseSelector.innerHTML = '';
        const filteredExercises = exercises.filter(ex => category === 'all' || ex.category.includes(category));
        filteredExercises.forEach((exercise, index) => {
            const option = document.createElement('option');
            option.value = exercise.id;
            option.textContent = exercise.name;
            if (index === 0) {
                option.classList.add('active-option');
            }
            exerciseSelector.appendChild(option);
        });
        if (filteredExercises.length > 0) {
            initializeExercise(filteredExercises[0]); // Ensure the first exercise is loaded
        }
    }

    function initializeExercise(selectedExercise) {
        audio.src = selectedExercise.audioSrc;
        audio.preload = 'auto'; // Ensure the audio is set to preload
        audio.load(); // Load the new audio source
        sheetMusicImg.src = selectedExercise.sheetMusicSrc;
        tempoSlider.min = selectedExercise.originalTempo / 2;
        tempoSlider.max = selectedExercise.originalTempo * 2;
        tempoSlider.value = selectedExercise.originalTempo;
        tempoLabel.textContent = 'BPM: ' + selectedExercise.originalTempo;
        updatePlaybackRate();
        updateSliderBackground(tempoSlider, '#96318d', '#ffffff');
        updateSliderBackground(volumeSlider, '#96318d', '#ffffff');
        audio.onloadedmetadata = function() {
            updateTotalTime();
        };
        // Reset the progress bar
        resetProgressBar();
        // Set play button text to 'Play'
        playPauseBtn.textContent = 'Play';
        audio.pause();
        // Enable looping
        audio.loop = true;

        // Update the active option in exercise selector
        Array.from(exerciseSelector.options).forEach(option => {
            option.classList.remove('active-option');
            if (parseInt(option.value) === selectedExercise.id) {
                option.classList.add('active-option');
            }
        });
    }

    function updatePlaybackRate() {
        const currentTempo = parseInt(tempoSlider.value);
        const originalTempo = parseInt(tempoSlider.max) / 2;
        const playbackRate = currentTempo / originalTempo;
        audio.playbackRate = playbackRate;
        tempoLabel.textContent = 'BPM: ' + currentTempo;
        updateTotalTime();
        updateCurrentTime();
    }

    function resetProgressBar() {
        progress.style.width = '0%';
        currentTimeDisplay.textContent = '0:00';
        audio.currentTime = 0;
    }

    function updateSliderBackground(slider, color1, color2) {
        const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, ${color1} 0%, ${color1} ${value}%, ${color2} ${value}%, ${color2} 100%)`;
    }

    audio.addEventListener('loadedmetadata', updateTotalTime);
    audio.addEventListener('ratechange', updateTotalTime);
    audio.addEventListener('ratechange', updateCurrentTime);

    categorySelector.addEventListener('change', function() {
        updateExerciseList(this.value);
    });

    exerciseSelector.addEventListener('change', function() {
        const selectedExerciseId = parseInt(this.value);
        const selectedExercise = exercises.find(ex => ex.id === selectedExerciseId);

        initializeExercise(selectedExercise);
        audio.pause();
        resetProgressBar();
        playPauseBtn.textContent = 'Play';
    });

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            if (audio.readyState < 3) { // Check if audio is ready
                audio.load(); // Load the audio if not ready
            }
            audio.play().then(() => {
                this.textContent = 'Pause';
                updateProgressBarSmoothly(); // Start smooth updates
            }).catch((error) => {
                console.error('Error playing audio:', error);
                alert('Audio is not ready to play yet. Please try again in a moment.');
            });
        } else {
            audio.pause();
            this.textContent = 'Play';
        }
    });

    // Update the progress bar smoothly using requestAnimationFrame
    function updateProgressBarSmoothly() {
        if (!audio.paused) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progress.style.width = progressPercent + '%';
            updateCurrentTime();
            requestAnimationFrame(updateProgressBarSmoothly);
        }
    }

    // Ensure the progress bar resets instantly when audio ends
    audio.addEventListener('ended', function() {
        resetProgressBar();
        playPauseBtn.textContent = 'Play';
    });

    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value;
        volumePercentageDisplay.textContent = Math.round(this.value * 100) + '%';
        updateSliderBackground(this, '#96318d', '#ffffff');
    });

    tempoSlider.addEventListener('input', function() {
        updatePlaybackRate();
        updateSliderBackground(this, '#96318d', '#ffffff');
    });

    progressContainer.addEventListener('mousedown', startDragging);
    progressContainer.addEventListener('touchstart', startDragging);

    document.addEventListener('mousemove', dragProgress);
    document.addEventListener('touchmove', dragProgress);

    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);

    function startDragging(e) {
        isDragging = true;
        updateProgress(e);
    }

    function dragProgress(e) {
        if (isDragging) {
            updateProgress(e);
        }
    }

    function stopDragging() {
        isDragging = false;
    }

    function updateProgress(e) {
        const rect = progressContainer.getBoundingClientRect();
        let x;
        if (e.type.startsWith('touch')) {
            x = e.touches[0].clientX - rect.left;
        } else {
            x = e.clientX - rect.left;
        }
        const width = progressContainer.clientWidth;
        let clickedValue = (x / width);
        clickedValue = Math.min(1, Math.max(0, clickedValue));
        audio.currentTime = clickedValue * audio.duration;
        updateProgressBar();
    }

    function updateProgressBar() {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = progressPercent + '%';
        updateCurrentTime();
    }

    // Set the category to 'all' on page load
    categorySelector.value = 'all';
    updateExerciseList('all');

    // Exercise Navigation Buttons
    prevExerciseBtn.addEventListener('click', function() {
        navigateExercise(-1);
    });

    nextExerciseBtn.addEventListener('click', function() {
        navigateExercise(1);
    });

    function navigateExercise(direction) {
        // direction: -1 for previous, 1 for next
        const currentIndex = exerciseSelector.selectedIndex;
        const totalOptions = exerciseSelector.options.length;

        let newIndex = currentIndex + direction;

        if (newIndex < 0) {
            newIndex = totalOptions - 1; // Wrap to last
        } else if (newIndex >= totalOptions) {
            newIndex = 0; // Wrap to first
        }

        exerciseSelector.selectedIndex = newIndex;

        const selectedExerciseId = parseInt(exerciseSelector.value);
        const selectedExercise = exercises.find(ex => ex.id === selectedExerciseId);

        initializeExercise(selectedExercise);
        audio.pause();
        resetProgressBar();
        playPauseBtn.textContent = 'Play';
    }
});
