// 1. 데이터 정의 (중복 제거 및 정리)
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
      { kanji: "何", reading: "なに", meaning: "무엇" }
  ],
  n4: [
      { kanji: "日本", reading: "에ほん", meaning: "일본" },
      { kanji: "大学", reading: "だいがく", meaning: "대학" }
  ],
  n3: [
      { kanji: "処理", reading: "しょり", meaning: "처리" }
  ],
  n2: [], n1: []
};

// 2. 엘리먼트 참조 (한 번만 선언!)
const vocabularyDisplay = document.getElementById('vocabulary-display');
const levelSelection = document.getElementById('level-selection');
const currentLevelDisplay = document.getElementById('current-level');
const vocabularyModal = document.getElementById('vocabulary-modal');
const modalKanji = document.querySelector('.modal-kanji');
const modalReading = document.querySelector('.modal-reading');
const modalMeaning = document.querySelector('.modal-meaning');
const closeButton = document.querySelector('.close-button');
const toggleDetailButton = document.getElementById('toggle-detail-button');
const prevNavButton = document.getElementById('nav-prev');
const nextNavButton = document.getElementById('nav-next');

let currentLevel = 'n5';
let currentWordIndex = 0;

// 3. 카드 생성 함수
function createVocabularyCard(word, index) {
  const card = document.createElement('div');
  card.className = 'vocabulary-card';
  card.innerHTML = `
      <div class="kanji">${word.kanji}</div>
      <div class="reading hidden-detail">${word.reading}</div>
      <div class="meaning hidden-detail">${word.meaning}</div>
  `;
  card.addEventListener('click', () => showModal(word, index));
  return card;
}

// 4. 단어 표시 함수
function displayVocabulary(level) {
  if (!vocabularyDisplay) return;
  currentLevel = level;
  vocabularyDisplay.innerHTML = '';
  
  if (currentLevelDisplay) currentLevelDisplay.textContent = level.toUpperCase();

  const words = vocabulary[level];
  if (words && words.length > 0) {
      words.forEach((word, index) => {
          vocabularyDisplay.appendChild(createVocabularyCard(word, index));
      });
  } else {
      vocabularyDisplay.innerHTML = `<p class="placeholder">"${level.toUpperCase()}" 단어가 없습니다.</p>`;
  }
}

// 5. 모달 및 내비게이션 로직
function showModal(word, index) {
  currentWordIndex = index;
  modalKanji.textContent = word.kanji;
  modalReading.textContent = word.reading;
  modalMeaning.textContent = word.meaning;
  
  if (vocabularyModal) vocabularyModal.style.display = 'flex';
  updateNavButtons();
}

function updateNavButtons() {
  const words = vocabulary[currentLevel];
  if (prevNavButton) prevNavButton.style.display = currentWordIndex === 0 ? 'none' : 'block';
  if (nextNavButton) nextNavButton.style.display = currentWordIndex === words.length - 1 ? 'none' : 'block';
}

function navigateWord(direction) {
  const words = vocabulary[currentLevel];
  if (direction === 'prev' && currentWordIndex > 0) currentWordIndex--;
  else if (direction === 'next' && currentWordIndex < words.length - 1) currentWordIndex++;
  
  showModal(words[currentWordIndex], currentWordIndex);
}

// 6. 이벤트 리스너 등록 (안전하게)
if (closeButton) closeButton.onclick = () => vocabularyModal.style.display = 'none';
if (prevNavButton) prevNavButton.onclick = () => navigateWord('prev');
if (nextNavButton) nextNavButton.onclick = () => navigateWord('next');

if (levelSelection) {
  levelSelection.addEventListener('click', (e) => {
      const btn = e.target.closest('.level-button');
      if (btn) displayVocabulary(btn.dataset.level);
  });
}

// 초기 로딩
document.addEventListener('DOMContentLoaded', () => {
  displayVocabulary('n5');
});