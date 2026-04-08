// 1. 데이터 정의 (N5 120개 + N4/N3 샘플)
const vocabulary = {
  n5: [
      /* 1-30: 기본 명사 및 동사 */
      { kanji: "私", reading: "わたし", meaning: "나, 저" }, { kanji: "人", reading: "ひと", meaning: "사람" },
      { kanji: "日", reading: "ひ", meaning: "날, 해" }, { kanji: "本", reading: "ほん", meaning: "책, 근본" },
      { kanji: "学生", reading: "がくせい", meaning: "학생" }, { kanji: "先生", reading: "せんせい", meaning: "선생님" },
      { kanji: "学校", reading: "がっこう", meaning: "학교" }, { kanji: "日本語", reading: "にほんご", meaning: "일본어" },
      { kanji: "名", reading: "な", meaning: "이름" }, { kanji: "前", reading: "まえ", meaning: "앞, 이전" },
      { kanji: "何", reading: "なに", meaning: "무엇" }, { kanji: "国", reading: "くに", meaning: "나라" },
      { kanji: "時", reading: "とき", meaning: "시간, 시" }, { kanji: "分", reading: "ふん/ぷん", meaning: "분" },
      { kanji: "今", reading: "いま", meaning: "지금" }, { kanji: "月", reading: "つき", meaning: "월, 달" },
      { kanji: "火", reading: "ひ", meaning: "불" }, { kanji: "水", reading: "みず", meaning: "물" },
      { kanji: "お金", reading: "おかね", meaning: "돈" }, { kanji: "電話", reading: "でんわ", meaning: "전화" },
      { kanji: "友達", reading: "ともだち", meaning: "친구" }, { kanji: "家族", reading: "かぞく", meaning: "가족" },
      { kanji: "行く", reading: "いく", meaning: "가다" }, { kanji: "来る", reading: "くる", meaning: "오다" },
      { kanji: "食べる", reading: "たべる", meaning: "먹다" }, { kanji: "飲む", reading: "のむ", meaning: "마시다" },
      { kanji: "見る", reading: "みる", meaning: "보다" }, { kanji: "聞く", reading: "きく", meaning: "듣다" },
      { kanji: "話す", reading: "はなす", meaning: "말하다" }, { kanji: "買う", reading: "かう", meaning: "사다" },

      /* 31-60: 장소, 방향, 형용사 */
      { kanji: "部屋", reading: "へや", meaning: "방" }, { kanji: "家", reading: "いえ", meaning: "집" },
      { kanji: "店", reading: "みせ", meaning: "가게" }, { kanji: "銀行", reading: "ぎんこう", meaning: "은행" },
      { kanji: "病院", reading: "びょういん", meaning: "병원" }, { kanji: "駅", reading: "えき", meaning: "역" },
      { kanji: "電車", reading: "でんしゃ", meaning: "전철" }, { kanji: "車", reading: "くるま", meaning: "자동차" },
      { kanji: "右", reading: "みぎ", meaning: "오른쪽" }, { kanji: "左", reading: "ひだり", meaning: "왼쪽" },
      { kanji: "上", reading: "うえ", meaning: "위" }, { kanji: "下", reading: "した", meaning: "아래" },
      { kanji: "山", reading: "やま", meaning: "산" }, { kanji: "川", reading: "かわ", meaning: "강" },
      { kanji: "空", reading: "そら", meaning: "하늘" }, { kanji: "雨", reading: "あめ", meaning: "비" },
      { kanji: "雪", reading: "ゆき", meaning: "눈" }, { kanji: "大きい", reading: "おおきい", meaning: "크다" },
      { kanji: "小さい", reading: "ちいさい", meaning: "작다" }, { kanji: "高い", reading: "たかい", meaning: "비싸다/높다" },
      { kanji: "安い", reading: "やすい", meaning: "싸다" }, { kanji: "新しい", reading: "あたらしい", meaning: "새롭다" },
      { kanji: "古い", reading: "ふるい", meaning: "오래되다" }, { kanji: "良い", reading: "よい", meaning: "좋다" },
      { kanji: "悪い", reading: "わるい", meaning: "나쁘다" }, { kanji: "暑이", reading: "あつい", meaning: "덥다" },
      { kanji: "寒い", reading: "さむい", meaning: "춥다" }, { kanji: "長い", reading: "ながい", meaning: "길다" },
      { kanji: "短い", reading: "みじかい", meaning: "짧다" }, { kanji: "忙しい", reading: "いそがしい", meaning: "바쁘다" },

      /* 61-90: 요일, 숫자, 신체 */
      { kanji: "月曜日", reading: "げつようび", meaning: "월요일" }, { kanji: "火曜日", reading: "かようび", meaning: "화요일" },
      { kanji: "水曜日", reading: "すいようび", meaning: "수요일" }, { kanji: "木曜日", reading: "もくようび", meaning: "목요일" },
      { kanji: "金曜日", reading: "きんようび", meaning: "금요일" }, { kanji: "土曜日", reading: "どようび", meaning: "토요일" },
      { kanji: "日曜日", reading: "にちようび", meaning: "일요일" }, { kanji: "一", reading: "いち", meaning: "1" },
      { kanji: "二", reading: "に", meaning: "2" }, { kanji: "三", reading: "さん", meaning: "3" },
      { kanji: "十", reading: "じゅう", meaning: "10" }, { kanji: "百", reading: "ひゃく", meaning: "100" },
      { kanji: "千", reading: "せん", meaning: "1000" }, { kanji: "万", reading: "まん", meaning: "10000" },
      { kanji: "口", reading: "くち", meaning: "입" }, { kanji: "目", reading: "め", meaning: "눈" },
      { kanji: "耳", reading: "みみ", meaning: "귀" }, { kanji: "手", reading: "て", meaning: "손" },
      { kanji: "足", reading: "あし", meaning: "발" }, { kanji: "新聞", reading: "しんぶん", meaning: "신문" },
      { kanji: "雑誌", reading: "ざっし", meaning: "잡지" }, { kanji: "鞄", reading: "かばん", meaning: "가방" },
      { kanji: "靴", reading: "くつ", meaning: "신발" }, { kanji: "服", reading: "ふく", meaning: "옷" },
      { kanji: "昨日", reading: "きのう", meaning: "어제" }, { kanji: "今日", reading: "きょう", meaning: "오늘" },
      { kanji: "明日", reading: "あした", meaning: "내일" }, { kanji: "毎週", reading: "まいしゅう", meaning: "매주" },
      { kanji: "毎年", reading: "まいとし", meaning: "매년" }, { kanji: "時間", reading: "じかん", meaning: "시간" },

      /* 91-120: 동작 2탄 및 생활 */
      { kanji: "兄", reading: "あに", meaning: "형/오빠" }, { kanji: "姉", reading: "あね", meaning: "누나/언니" },
      { kanji: "弟", reading: "おとう도", meaning: "남동생" }, { kanji: "妹", reading: "いもうと", meaning: "여동생" },
      { kanji: "起きる", reading: "おきる", meaning: "일어나다" }, { kanji: "寝る", reading: "ねる", meaning: "자다" },
      { kanji: "座る", reading: "すわる", meaning: "앉다" }, { kanji: "立つ", reading: "たつ", meaning: "서다" },
      { kanji: "入る", reading: "はいる", meaning: "들어가다" }, { kanji: "出る", reading: "でる", meaning: "나가다" },
      { kanji: "作る", reading: "つくる", meaning: "만들다" }, { kanji: "使う", reading: "つかう", meaning: "사용하다" },
      { kanji: "待つ", reading: "まつ", meaning: "기다리다" }, { kanji: "休む", reading: "やすむ", meaning: "쉬다" },
      { kanji: "遊ぶ", reading: "あそぶ", meaning: "놀다" }, { kanji: "泳ぐ", reading: "およぐ", meaning: "수영하다" },
      { kanji: "会う", reading: "あう", meaning: "만나다" }, { kanji: "切る", reading: "きる", meaning: "자르다" },
      { kanji: "持つ", reading: "もつ", meaning: "들다" }, { kanji: "晴れ", reading: "はれ", meaning: "맑음" },
      { kanji: "曇り", reading: "くもり", meaning: "흐림" }, { kanji: "風", reading: "かぜ", meaning: "바람" },
      { kanji: "電気", reading: "でんき", meaning: "전기/불" }, { kanji: "肉", reading: "にく", meaning: "고기" },
      { kanji: "魚", reading: "さかな", meaning: "물고기" }, { kanji: "野菜", reading: "やさい", meaning: "야채" },
      { kanji: "果物", reading: "くだもの", meaning: "과일" }, { kanji: "切符", reading: "きっぷ", meaning: "표" },
      { kanji: "写真", reading: "しゃしん", meaning: "사진" }, { kanji: "手紙", reading: "てがみ", meaning: "편지" }
  ],
  n4: [], n3: [], n2: [], n1: []
};

// --- 이하 로직은 동일 (변수 중복 선언 주의!) ---
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

function createVocabularyCard(word, index) {
  const card = document.createElement('div');
  card.classList.add('vocabulary-card');
  card.innerHTML = `<div class="kanji">${word.kanji}</div>`;
  card.addEventListener('click', () => showModal(word, index));
  return card;
}

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

function showModal(word, index) {
  currentWordIndex = index;
  modalKanji.textContent = word.kanji;
  modalReading.textContent = word.reading;
  modalMeaning.textContent = word.meaning;
  modalReading.classList.remove('hidden-detail');
  modalMeaning.classList.remove('hidden-detail');
  if (toggleDetailButton) toggleDetailButton.textContent = '정보 숨기기';
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

if (closeButton) closeButton.onclick = () => vocabularyModal.style.display = 'none';
if (prevNavButton) prevNavButton.onclick = () => navigateWord('prev');
if (nextNavButton) nextNavButton.onclick = () => navigateWord('next');
if (toggleDetailButton) {
  toggleDetailButton.onclick = () => {
      const isHidden = modalReading.classList.toggle('hidden-detail');
      modalMeaning.classList.toggle('hidden-detail');
      toggleDetailButton.textContent = isHidden ? '정보 보기' : '정보 숨기기';
  };
}
if (levelSelection) {
  levelSelection.onclick = (e) => {
      const btn = e.target.closest('.level-button');
      if (btn) {
          document.querySelectorAll('.level-button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          displayVocabulary(btn.dataset.level);
      }
  };
}
window.onclick = (e) => { if (e.target === vocabularyModal) vocabularyModal.style.display = 'none'; };

document.addEventListener('DOMContentLoaded', () => displayVocabulary('n5'));