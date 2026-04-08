// Vocabulary data
const vocabulary = {
  n5: [
    { kanji: "私", reading: "わたし", meaning: "I, myself" },
    { kanji: "人", reading: "ひと", meaning: "person" },
    { kanji: "日", reading: "ひ", meaning: "day, sun" },
    { kanji: "本", reading: "ほん", meaning: "book, origin" },
    { kanji: "学", reading: "がく", meaning: "study, learning" },
    { kanji: "生", reading: "せい", meaning: "life, birth" },
    { kanji: "先", reading: "せん", meaning: "before, ahead" },
    { kanji: "名", reading: "な", meaning: "name" },
    { kanji: "前", reading: "まえ", meaning: "front, before" },
    { kanji: "何", reading: "なに", meaning: "what" },
    { kanji: "国", reading: "くに", meaning: "country" },
    { kanji: "語", reading: "ご", meaning: "language, word" },
    { kanji: "円", reading: "えん", meaning: "yen, circle" },
    { kanji: "時", reading: "とき", meaning: "time, hour" },
    { kanji: "分", reading: "ふん/ぷん", meaning: "minute, part" },
    { kanji: "今", reading: "いま", meaning: "now" },
    { kanji: "週", reading: "しゅう", meaning: "week" },
    { kanji: "月", reading: "つき", meaning: "month, moon" },
    { kanji: "火", reading: "ひ", meaning: "fire" },
    { kanji: "水", reading: "みず", meaning: "water" }
  ],
  n4: [],
  n3: [],
  n2: [],
  n1: []
};

const vocabularyDisplay = document.getElementById('vocabulary-display');
const levelSelection = document.getElementById('level-selection');

// Modal elements
const vocabularyModal = document.getElementById('vocabulary-modal');
const modalKanji = vocabularyModal.querySelector('.modal-kanji');
const modalReading = vocabularyModal.querySelector('.modal-reading');
const modalMeaning = vocabularyModal.querySelector('.modal-meaning');
const closeButton = vocabularyModal.querySelector('.close-button');

function createVocabularyCard(word) {
  const card = document.createElement('div');
  card.classList.add('vocabulary-card');
  // Store data attributes for easy access
  card.dataset.kanji = word.kanji;
  card.dataset.reading = word.reading;
  card.dataset.meaning = word.meaning;

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
    showModal(word);
  });

  return card;
}

function displayVocabulary(level) {
  vocabularyDisplay.innerHTML = ''; // Clear current display
  const words = vocabulary[level];

  if (words && words.length > 0) {
    words.forEach(word => {
      vocabularyDisplay.appendChild(createVocabularyCard(word));
    });
  } else {
    const placeholder = document.createElement('p');
    placeholder.classList.add('placeholder');
    placeholder.textContent = `"${level.toUpperCase()}" 레벨의 단어가 아직 없습니다.`;
    vocabularyDisplay.appendChild(placeholder);
  }
}

// Function to show the modal
function showModal(word) {
  modalKanji.textContent = word.kanji;
  modalReading.textContent = `히라가나: ${word.reading}`;
  modalMeaning.textContent = `의미: ${word.meaning}`;
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