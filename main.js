// Vocabulary data
const vocabulary = {
  n5: [
    { kanji: "私", reading: "わたし", meaning: "나, 저" },
    { kanji: "人", reading: "ひと", meaning: "사람" },
    { kanji: "日", reading: "ひ", meaning: "날, 해" },
    { kanji: "本", reading: "ほん", meaning: "책, 근본" },
    { kanji: "学", reading: "がく", meaning: "배움, 학문" },
    { kanji: "生", reading: "せい", meaning: "삶, 태어남" },
    { kanji: "先", reading: "せん", meaning: "먼저, 앞" },
    { kanji: "名", reading: "な", meaning: "이름" },
    { kanji: "前", reading: "まえ", meaning: "앞, 이전" },
    { kanji: "何", reading: "なに", meaning: "무엇" },
    { kanji: "国", reading: "くに", meaning: "나라" },
    { kanji: "語", reading: "ご", meaning: "언어, 말" },
    { kanji: "円", reading: "えん", meaning: "엔, 원" },
    { kanji: "時", reading: "とき", meaning: "시간, 시" },
    { kanji: "分", reading: "ふん/ぷん", meaning: "분, 부분" },
    { kanji: "今", reading: "いま", meaning: "지금" },
    { kanji: "週", reading: "しゅう", meaning: "주" },
    { kanji: "月", reading: "つき", meaning: "월, 달" },
    { kanji: "火", reading: "ひ", meaning: "불" },
    { kanji: "水", reading: "みず", meaning: "물" }
  ],
  n4: [], // Placeholder for future levels
  n3: [],
  n2: [],
  n1: []
};

const vocabularyDisplay = document.getElementById('vocabulary-display');
const levelSelection = document.getElementById('level-selection');
const currentLevelDisplay = document.getElementById('current-level'); // Will add this to HTML

// Modal elements
const vocabularyModal = document.getElementById('vocabulary-modal');
const modalKanji = vocabularyModal.querySelector('.modal-kanji');
const modalReading = vocabularyModal.querySelector('.modal-reading');
const modalMeaning = vocabularyModal.querySelector('.modal-meaning');
const closeButton = vocabularyModal.querySelector('.close-button');
const toggleDetailButton = document.getElementById('toggle-detail-button'); // Get the toggle button

// Navigation elements - will be added to HTML
const prevNavButton = document.getElementById('nav-prev');
const nextNavButton = document.getElementById('nav-next');

let currentLevel = 'n5'; // Track the currently selected level
let currentWordIndex = 0; // Track the current word index for navigation

function createVocabularyCard(word, index) {
  const card = document.createElement('div');
  card.classList.add('vocabulary-card');
  card.dataset.kanji = word.kanji;
  card.dataset.reading = word.reading;
  card.dataset.meaning = word.meaning;
  card.dataset.index = index; // Store index for easy access

  const kanji = document.createElement('div');
  kanji.classList.add('kanji');
  kanji.textContent = word.kanji;
  card.appendChild(kanji);

  const reading = document.createElement('div');
  reading.classList.add('reading');
  reading.textContent = word.reading;
  card.appendChild(reading);

  const meaning = document.createElement('div');
  meaning.classList.add('meaning');
  meaning.textContent = word.meaning;
  card.appendChild(meaning);

  // Add click listener to open modal
  card.addEventListener('click', () => {
    showModal(word, index); // Pass index to showModal
  });

  return card;
}

function displayVocabulary(level) {
  currentLevel = level; // Update currentLevel when displaying new vocabulary
  vocabularyDisplay.innerHTML = ''; // Clear current display
  const words = vocabulary[level];

  if (words && words.length > 0) {
    words.forEach((word, index) => {
      vocabularyDisplay.appendChild(createVocabularyCard(word, index));
    });
  } else {
    const placeholder = document.createElement('p');
    placeholder.classList.add('placeholder');
    placeholder.textContent = `"${level.toUpperCase()}" 레벨의 단어가 아직 없습니다.`;
    vocabularyDisplay.appendChild(placeholder);
  }
}

// Function to show the modal
function showModal(word, index) {
  currentWordIndex = index; // Set the current word index
  modalKanji.textContent = word.kanji;
  modalReading.textContent = word.reading; // Display reading directly
  modalMeaning.textContent = word.meaning; // Display meaning directly
  
  // Reset toggle button state and detail visibility
  toggleDetailButton.textContent = '정보 보기'; // Show details initially
  modalReading.classList.remove('hidden-detail');
  modalMeaning.classList.remove('hidden-detail');
  
  // Update navigation button states
  updateNavButtons();
  
  vocabularyModal.style.display = 'flex'; // Use flex to center content
}

// Function to hide the modal
function hideModal() {
  vocabularyModal.style.display = 'none';
}

// Event listener for close button
closeButton.addEventListener('click', hideModal);

// Close modal if clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === vocabularyModal) {
    hideModal();
  }
});

// Toggle detail visibility
toggleDetailButton.addEventListener('click', () => {
  const isHidden = modalReading.classList.contains('hidden-detail');
  if (isHidden) {
    modalReading.classList.remove('hidden-detail');
    modalMeaning.classList.remove('hidden-detail');
    toggleDetailButton.textContent = '정보 숨기기';
  } else {
    modalReading.classList.add('hidden-detail');
    modalMeaning.classList.add('hidden-detail');
    toggleDetailButton.textContent = '정보 보기';
  }
});

// Navigation functions
function updateNavButtons() {
  const wordsInLevel = vocabulary[currentLevel];
  if (!wordsInLevel || wordsInLevel.length === 0) {
    prevNavButton.style.display = 'none';
    nextNavButton.style.display = 'none';
    return;
  }

  if (currentWordIndex === 0) {
    prevNavButton.style.display = 'none'; // Hide previous button if it's the first word
  } else {
    prevNavButton.style.display = 'block';
  }

  if (currentWordIndex === wordsInLevel.length - 1) {
    nextNavButton.style.display = 'none'; // Hide next button if it's the last word
  } else {
    nextNavButton.style.display = 'block';
  }
}

function navigateWord(direction) {
  const wordsInLevel = vocabulary[currentLevel];
  if (!wordsInLevel || wordsInLevel.length === 0) return;

  if (direction === 'prev' && currentWordIndex > 0) {
    currentWordIndex--;
  } else if (direction === 'next' && currentWordIndex < wordsInLevel.length - 1) {
    currentWordIndex++;
  } else {
    return; // No navigation possible
  }

  // Update modal content with the new word
  const nextWord = wordsInLevel[currentWordIndex];
  modalKanji.textContent = nextWord.kanji;
  modalReading.textContent = nextWord.reading;
  modalMeaning.textContent = nextWord.meaning;
  
  // Reset detail visibility and toggle button text for the new word
  modalReading.classList.remove('hidden-detail');
  modalMeaning.classList.remove('hidden-detail');
  toggleDetailButton.textContent = '정보 숨기기';

  updateNavButtons(); // Update button visibility
}

// Event listeners for navigation buttons
prevNavButton.addEventListener('click', () => navigateWord('prev'));
nextNavButton.addEventListener('click', () => navigateWord('next'));

// Event listener for level selection buttons
levelSelection.addEventListener('click', (event) => {
  if (event.target.classList.contains('level-button')) {
    // Remove active class from all buttons
    document.querySelectorAll('.level-button').forEach(button => {
      button.classList.remove('active');
    });

    // Add active class to the clicked button
    event.target.classList.add('active');

    const selectedLevel = event.target.dataset.level;
    displayVocabulary(selectedLevel);
  }
});

// Initial display for N5 on page load
document.addEventListener('DOMContentLoaded', () => {
  displayVocabulary('n5');
});