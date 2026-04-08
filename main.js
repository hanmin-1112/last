// 1. 단어 데이터 (N4 -> N5 통합, 신규 100단어 추가 = 총 약 224개)
const vocabulary = {
  n5: [
      /* 기존 단어 */
      { kanji: "私", reading: "わたし", meaning: "나, 저" }, { kanji: "人", reading: "ひと", meaning: "사람" }, { kanji: "日", reading: "ひ", meaning: "날, 해" }, { kanji: "本", reading: "ほん", meaning: "책, 근본" }, { kanji: "学生", reading: "がくせい", meaning: "학생" }, { kanji: "先生", reading: "せんせい", meaning: "선생님" }, { kanji: "学校", reading: "がっこう", meaning: "학교" }, { kanji: "日本語", reading: "にほんご", meaning: "일본어" }, { kanji: "名", reading: "な", meaning: "이름" }, { kanji: "前", reading: "まえ", meaning: "앞, 이전" }, { kanji: "何", reading: "なに", meaning: "무엇" }, { kanji: "国", reading: "くに", meaning: "나라" }, { kanji: "時", reading: "とき", meaning: "시간, 시" }, { kanji: "分", reading: "ふん/ぷん", meaning: "분" }, { kanji: "今", reading: "いま", meaning: "지금" }, { kanji: "月", reading: "つき", meaning: "월, 달" }, { kanji: "火", reading: "ひ", meaning: "불" }, { kanji: "水", reading: "みず", meaning: "물" }, { kanji: "お金", reading: "おかね", meaning: "돈" }, { kanji: "電話", reading: "でんわ", meaning: "전화" }, { kanji: "友達", reading: "ともだち", meaning: "친구" }, { kanji: "家族", reading: "かぞく", meaning: "가족" }, { kanji: "行く", reading: "いく", meaning: "가다" }, { kanji: "来る", reading: "くる", meaning: "오다" }, { kanji: "食べる", reading: "たべる", meaning: "먹다" }, { kanji: "飲む", reading: "のむ", meaning: "마시다" }, { kanji: "見る", reading: "みる", meaning: "보다" }, { kanji: "聞く", reading: "きく", meaning: "듣다" }, { kanji: "話す", reading: "はなす", meaning: "말하다" }, { kanji: "買う", reading: "かう", meaning: "사다" }, { kanji: "部屋", reading: "へや", meaning: "방" }, { kanji: "家", reading: "いえ", meaning: "집" }, { kanji: "店", reading: "みせ", meaning: "가게" }, { kanji: "銀行", reading: "ぎんこう", meaning: "은행" }, { kanji: "病院", reading: "びょういん", meaning: "병원" }, { kanji: "駅", reading: "えき", meaning: "역" }, { kanji: "電車", reading: "でんしゃ", meaning: "전철" }, { kanji: "車", reading: "くるま", meaning: "자동차" }, { kanji: "右", reading: "みぎ", meaning: "오른쪽" }, { kanji: "左", reading: "ひだり", meaning: "왼쪽" }, { kanji: "上", reading: "うえ", meaning: "위" }, { kanji: "下", reading: "した", meaning: "아래" }, { kanji: "山", reading: "やま", meaning: "산" }, { kanji: "川", reading: "かわ", meaning: "강" }, { kanji: "空", reading: "そら", meaning: "하늘" }, { kanji: "雨", reading: "あめ", meaning: "비" }, { kanji: "雪", reading: "ゆき", meaning: "눈" }, { kanji: "大きい", reading: "おおきい", meaning: "크다" }, { kanji: "小さい", reading: "ちいさい", meaning: "작다" }, { kanji: "高い", reading: "たかい", meaning: "비싸다/높다" }, { kanji: "安い", reading: "やすい", meaning: "싸다" }, { kanji: "新しい", reading: "あたらしい", meaning: "새롭다" }, { kanji: "古い", reading: "ふるい", meaning: "오래되다" }, { kanji: "良い", reading: "よい", meaning: "좋다" }, { kanji: "悪い", reading: "わるい", meaning: "나쁘다" }, { kanji: "暑い", reading: "あつい", meaning: "덥다" }, { kanji: "寒い", reading: "さむい", meaning: "춥다" }, { kanji: "長い", reading: "ながい", meaning: "길다" }, { kanji: "短い", reading: "みじかい", meaning: "짧다" }, { kanji: "忙しい", reading: "いそがしい", meaning: "바쁘다" }, { kanji: "月曜日", reading: "げつようび", meaning: "월요일" }, { kanji: "火曜日", reading: "かようび", meaning: "화요일" }, { kanji: "水曜日", reading: "すいようび", meaning: "수요일" }, { kanji: "木曜日", reading: "もくようび", meaning: "목요일" }, { kanji: "金曜日", reading: "きんようび", meaning: "금요일" }, { kanji: "土曜日", reading: "どようび", meaning: "토요일" }, { kanji: "日曜日", reading: "にちようび", meaning: "일요일" }, { kanji: "一", reading: "いち", meaning: "1" }, { kanji: "二", reading: "に", meaning: "2" }, { kanji: "三", reading: "さん", meaning: "3" }, { kanji: "十", reading: "じゅう", meaning: "10" }, { kanji: "百", reading: "ひゃく", meaning: "100" }, { kanji: "千", reading: "せん", meaning: "1000" }, { kanji: "万", reading: "まん", meaning: "10000" }, { kanji: "口", reading: "くち", meaning: "입" }, { kanji: "目", reading: "め", meaning: "눈" }, { kanji: "耳", reading: "みみ", meaning: "귀" }, { kanji: "手", reading: "て", meaning: "손" }, { kanji: "足", reading: "あし", meaning: "발" }, { kanji: "新聞", reading: "しんぶん", meaning: "신문" }, { kanji: "雑誌", reading: "ざっし", meaning: "잡지" }, { kanji: "鞄", reading: "かばん", meaning: "가방" }, { kanji: "靴", reading: "くつ", meaning: "신발" }, { kanji: "服", reading: "ふく", meaning: "옷" }, { kanji: "昨日", reading: "きのう", meaning: "어제" }, { kanji: "今日", reading: "きょう", meaning: "오늘" }, { kanji: "明日", reading: "あした", meaning: "내일" }, { kanji: "毎週", reading: "まいしゅう", meaning: "매주" }, { kanji: "毎年", reading: "まいとし", meaning: "매년" }, { kanji: "時間", reading: "じかん", meaning: "시간" }, { kanji: "兄", reading: "あに", meaning: "형/오빠" }, { kanji: "姉", reading: "あね", meaning: "누나/언니" }, { kanji: "弟", reading: "おとうと", meaning: "남동생" }, { kanji: "妹", reading: "いもうと", meaning: "여동생" }, { kanji: "起きる", reading: "おきる", meaning: "일어나다" }, { kanji: "寝る", reading: "ねる", meaning: "자다" }, { kanji: "座る", reading: "すわる", meaning: "앉다" }, { kanji: "立つ", reading: "たつ", meaning: "서다" }, { kanji: "入る", reading: "はいる", meaning: "들어가다" }, { kanji: "出る", reading: "でる", meaning: "나가다" }, { kanji: "作る", reading: "つくる", meaning: "만들다" }, { kanji: "使う", reading: "つかう", meaning: "사용하다" }, { kanji: "待つ", reading: "まつ", meaning: "기다리다" }, { kanji: "休む", reading: "やすむ", meaning: "쉬다" }, { kanji: "遊ぶ", reading: "あそぶ", meaning: "놀다" }, { kanji: "泳ぐ", reading: "およぐ", meaning: "수영하다" }, { kanji: "会う", reading: "あう", meaning: "만나다" }, { kanji: "切る", reading: "きる", meaning: "자르다" }, { kanji: "持つ", reading: "もつ", meaning: "들다" }, { kanji: "晴れ", reading: "はれ", meaning: "맑음" }, { kanji: "曇り", reading: "くもり", meaning: "흐림" }, { kanji: "風", reading: "かぜ", meaning: "바람" }, { kanji: "電気", reading: "でんき", meaning: "전기/불" }, { kanji: "肉", reading: "にく", meaning: "고기" }, { kanji: "魚", reading: "さかな", meaning: "물고기" }, { kanji: "野菜", reading: "やさい", meaning: "야채" }, { kanji: "果物", reading: "くだもの", meaning: "과일" }, { kanji: "切符", reading: "きっぷ", meaning: "표" }, { kanji: "写真", reading: "しゃしん", meaning: "사진" }, { kanji: "手紙", reading: "てがみ", meaning: "편지" }, { kanji: "日本", reading: "にほん", meaning: "일본" }, { kanji: "大学", reading: "だいがく", meaning: "대학" },
      /* 신규 추가 100단어 */
      { kanji: "四", reading: "よん", meaning: "4" }, { kanji: "五", reading: "ご", meaning: "5" }, { kanji: "六", reading: "ろく", meaning: "6" }, { kanji: "七", reading: "なな", meaning: "7" }, { kanji: "八", reading: "はち", meaning: "8" }, { kanji: "九", reading: "きゅう", meaning: "9" }, { kanji: "半", reading: "はん", meaning: "반(절반)" }, { kanji: "年", reading: "とし", meaning: "년, 해" }, { kanji: "週", reading: "しゅう", meaning: "주" }, { kanji: "午前", reading: "ごぜん", meaning: "오전" }, { kanji: "午後", reading: "ごご", meaning: "오후" }, { kanji: "朝", reading: "あさ", meaning: "아침" }, { kanji: "昼", reading: "ひる", meaning: "낮" }, { kanji: "晩", reading: "ばん", meaning: "저녁" }, { kanji: "夜", reading: "よる", meaning: "밤" }, { kanji: "北", reading: "きた", meaning: "북쪽" }, { kanji: "南", reading: "みなみ", meaning: "남쪽" }, { kanji: "東", reading: "ひがし", meaning: "동쪽" }, { kanji: "西", reading: "にし", meaning: "서쪽" }, { kanji: "中", reading: "なか", meaning: "안, 속" }, { kanji: "外", reading: "そと", meaning: "밖" }, { kanji: "後ろ", reading: "うしろ", meaning: "뒤" }, { kanji: "隣", reading: "となり", meaning: "이웃, 옆" }, { kanji: "近く", reading: "ちかく", meaning: "근처" }, { kanji: "父", reading: "ちち", meaning: "아버지" }, { kanji: "母", reading: "はは", meaning: "어머니" }, { kanji: "両親", reading: "りょうしん", meaning: "부모님" }, { kanji: "男", reading: "おとこ", meaning: "남자" }, { kanji: "女", reading: "おんな", meaning: "여자" }, { kanji: "男の子", reading: "おとこのこ", meaning: "남자아이" }, { kanji: "女の子", reading: "おんなのこ", meaning: "여자아이" }, { kanji: "大人", reading: "おとな", meaning: "어른" }, { kanji: "子供", reading: "こども", meaning: "아이" }, { kanji: "物", reading: "もの", meaning: "물건" }, { kanji: "机", reading: "つくえ", meaning: "책상" }, { kanji: "椅子", reading: "いす", meaning: "의자" }, { kanji: "鉛筆", reading: "えんぴつ", meaning: "연필" }, { kanji: "時計", reading: "とけい", meaning: "시계" }, { kanji: "傘", reading: "かさ", meaning: "우산" }, { kanji: "本棚", reading: "ほんだな", meaning: "책장" }, { kanji: "辞書", reading: "じしょ", meaning: "사전" }, { kanji: "映画", reading: "えいが", meaning: "영화" }, { kanji: "音楽", reading: "おんがく", meaning: "음악" }, { kanji: "歌", reading: "うた", meaning: "노래" }, { kanji: "お茶", reading: "おちゃ", meaning: "차" }, { kanji: "ご飯", reading: "ごはん", meaning: "밥" }, { kanji: "朝ご飯", reading: "あさごはん", meaning: "아침밥" }, { kanji: "昼ご飯", reading: "ひるごはん", meaning: "점심밥" }, { kanji: "晩ご飯", reading: "ばんごはん", meaning: "저녁밥" }, { kanji: "読む", reading: "よむ", meaning: "읽다" }, { kanji: "書く", reading: "かく", meaning: "쓰다" }, { kanji: "帰る", reading: "かえる", meaning: "돌아가다" }, { kanji: "歩く", reading: "あるく", meaning: "걷다" }, { kanji: "走る", reading: "はしる", meaning: "달리다" }, { kanji: "歌う", reading: "うたう", meaning: "노래하다" }, { kanji: "飛ぶ", reading: "とぶ", meaning: "날다" }, { kanji: "呼ぶ", reading: "よぶ", meaning: "부르다" }, { kanji: "終わる", reading: "おわる", meaning: "끝나다" }, { kanji: "始まる", reading: "はじまる", meaning: "시작되다" }, { kanji: "分かる", reading: "わかる", meaning: "알다, 이해하다" }, { kanji: "教える", reading: "おしえる", meaning: "가르치다" }, { kanji: "習う", reading: "ならう", meaning: "배우다" }, { kanji: "借りる", reading: "かりる", meaning: "빌리다" }, { kanji: "貸す", reading: "かす", meaning: "빌려주다" }, { kanji: "返す", reading: "かえす", meaning: "돌려주다" }, { kanji: "開ける", reading: "あける", meaning: "열다" }, { kanji: "閉める", reading: "しめる", meaning: "닫다" }, { kanji: "つける", reading: "つける", meaning: "켜다" }, { kanji: "消す", reading: "けす", meaning: "끄다" }, { kanji: "白い", reading: "しろい", meaning: "희다" }, { kanji: "黒い", reading: "くろい", meaning: "검다" }, { kanji: "赤い", reading: "あかい", meaning: "붉다" }, { kanji: "青い", reading: "あおい", meaning: "푸르다" }, { kanji: "広い", reading: "ひろい", meaning: "넓다" }, { kanji: "狭い", reading: "せまい", meaning: "좁다" }, { kanji: "重い", reading: "おもい", meaning: "무겁다" }, { kanji: "軽い", reading: "かるい", meaning: "가볍다" }, { kanji: "早い", reading: "はやい", meaning: "이르다, 빠르다" }, { kanji: "遅い", reading: "おそい", meaning: "늦다" }, { kanji: "遠い", reading: "とおい", meaning: "멀다" }, { kanji: "近い", reading: "ちかい", meaning: "가깝다" }, { kanji: "甘い", reading: "あまい", meaning: "달다" }, { kanji: "辛い", reading: "からい", meaning: "맵다" }, { kanji: "冷たい", reading: "つめたい", meaning: "차갑다" }, { kanji: "温かい", reading: "あたたかい", meaning: "따뜻하다" }, { kanji: "楽しい", reading: "たのしい", meaning: "즐겁다" }, { kanji: "つまらない", reading: "つまらない", meaning: "시시하다" }, { kanji: "面白い", reading: "おもしろい", meaning: "재미있다" }, { kanji: "難しい", reading: "むずかしい", meaning: "어렵다" }, { kanji: "易しい", reading: "やさしい", meaning: "쉽다" }, { kanji: "好き", reading: "すき", meaning: "좋아함" }, { kanji: "嫌い", reading: "きらい", meaning: "싫어함" }, { kanji: "静か", reading: "しずか", meaning: "조용함" }, { kanji: "賑やか", reading: "にぎやか", meaning: "번화함" }, { kanji: "きれい", reading: "きれい", meaning: "예쁨, 깨끗함" }, { kanji: "有名", reading: "ゆうめい", meaning: "유명함" }, { kanji: "親切", reading: "しんせつ", meaning: "친절함" }, { kanji: "元気", reading: "げんき", meaning: "건강함" }, { kanji: "便利", reading: "べんり", meaning: "편리함" }, { kanji: "不便", reading: "ふべん", meaning: "불편함" }
  ],
  n4: [], n3: [], n2: [], n1: []
};

// ----------------------------------------------------
// 2. 화면 라우팅 & 검색 로직 & 외운 단어 상태
// ----------------------------------------------------
let memorizedWords = JSON.parse(localStorage.getItem('memoWords')) || []; // 로컬스토리지에 외운 단어(한자) 배열 저장
let currentDisplayedWords = []; // 현재 화면에 뿌려진 단어 목록

function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active-screen'));
  document.getElementById(screenId).classList.add('active-screen');
  if(screenId === 'screen-vocab') displayVocabulary('n5');
}

// 외운 단어 토글 함수
function toggleMemorize(event, word) {
  event.stopPropagation(); // 모달창 열리는 거 방지
  const btn = event.currentTarget;
  if (memorizedWords.includes(word.kanji)) {
      memorizedWords = memorizedWords.filter(w => w !== word.kanji);
      btn.classList.remove('memorized');
      btn.innerHTML = '☆';
      // 만약 외운단어 탭에 있다면 바로 화면에서 사라지게 처리
      if(currentLevel === 'memorized') displayVocabulary('memorized', document.getElementById('word-search').value);
  } else {
      memorizedWords.push(word.kanji);
      btn.classList.add('memorized');
      btn.innerHTML = '★';
  }
  localStorage.setItem('memoWords', JSON.stringify(memorizedWords));
}

function createVocabularyCard(word, displayIndex) {
  const card = document.createElement('div');
  card.className = 'vocabulary-card hover-effect glass-effect';
  
  const isMemo = memorizedWords.includes(word.kanji);
  const memoStar = isMemo ? '★' : '☆';
  const memoClass = isMemo ? 'memorized' : '';
  
  card.innerHTML = `
    <div class="card-number">${displayIndex + 1}</div>
    <button class="memo-check-btn ${memoClass}">${memoStar}</button>
    <div class="kanji">${word.kanji}</div>
    <div class="reading">${word.reading}</div>
    <div class="meaning">${word.meaning}</div>
    <div class="level-stamp">${word.level ? word.level.toUpperCase() : 'N5'}</div>
  `;
  
  card.querySelector('.memo-check-btn').addEventListener('click', (e) => toggleMemorize(e, word));
  card.addEventListener('click', () => showModal(word, displayIndex));
  return card;
}

const vocabularyDisplay = document.getElementById('vocabulary-display');
const searchInput = document.getElementById('word-search');
let currentLevel = 'n5';

function displayVocabulary(level, searchTerm = '') {
  currentLevel = level;
  vocabularyDisplay.innerHTML = '';
  
  // 모든 단어 합치기 (외운단어 탭을 위해)
  let allWords = [];
  ['n5', 'n4', 'n3', 'n2', 'n1'].forEach(lvl => {
      vocabulary[lvl].forEach(w => allWords.push({...w, level: lvl}));
  });

  // 레벨 필터
  let words = [];
  if (level === 'memorized') {
      words = allWords.filter(w => memorizedWords.includes(w.kanji));
  } else {
      words = vocabulary[level] || [];
  }

  // 검색어 필터
  if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      words = words.filter(w => 
          w.kanji.includes(term) || w.reading.includes(term) || w.meaning.includes(term)
      );
  }

  currentDisplayedWords = words;

  if (words.length > 0) {
      words.forEach((word, index) => vocabularyDisplay.appendChild(createVocabularyCard(word, index)));
  } else {
      vocabularyDisplay.innerHTML = `<p style="color:#888; font-size:1.2em; grid-column: 1/-1;">단어를 찾을 수 없습니다.</p>`;
  }
}

// 검색 이벤트 연결
searchInput.addEventListener('input', (e) => displayVocabulary(currentLevel, e.target.value));

// 레벨 탭 이벤트
document.getElementById('level-selection').onclick = (e) => {
  const btn = e.target.closest('.level-button');
  if (btn) {
      document.querySelectorAll('#level-selection .level-button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      searchInput.value = ''; // 탭 바꾸면 검색 초기화
      displayVocabulary(btn.dataset.level);
  }
};

// ----------------------------------------------------
// 3. 모달 제어 로직 (흰색 배경)
// ----------------------------------------------------
const vocabularyModal = document.getElementById('vocabulary-modal');
const modalKanji = document.querySelector('.modal-kanji');
const modalReading = document.querySelector('.modal-reading');
const modalMeaning = document.querySelector('.modal-meaning');
let currentWordIndex = 0;

function showModal(word, index) {
  currentWordIndex = index;
  modalKanji.textContent = word.kanji;
  modalReading.textContent = word.reading;
  modalMeaning.textContent = word.meaning;
  vocabularyModal.style.display = 'flex';
  document.getElementById('nav-prev').disabled = currentWordIndex === 0;
  document.getElementById('nav-next').disabled = currentWordIndex === currentDisplayedWords.length - 1;
}

function navigateWord(direction) {
  if (direction === 'prev' && currentWordIndex > 0) currentWordIndex--;
  else if (direction === 'next' && currentWordIndex < currentDisplayedWords.length - 1) currentWordIndex++;
  showModal(currentDisplayedWords[currentWordIndex], currentWordIndex);
}

['toggle-kanji', 'toggle-reading', 'toggle-meaning'].forEach((id, idx) => {
  const target = [modalKanji, modalReading, modalMeaning][idx];
  const btn = document.getElementById(id);
  if (btn) btn.onclick = () => { btn.classList.toggle('active-toggle'); target.classList.toggle('hidden-detail'); };
});
document.querySelector('.close-button').onclick = () => vocabularyModal.style.display = 'none';
document.getElementById('nav-prev').onclick = () => navigateWord('prev');
document.getElementById('nav-next').onclick = () => navigateWord('next');
window.onclick = (e) => { if (e.target === vocabularyModal) vocabularyModal.style.display = 'none'; };

// ----------------------------------------------------
// 4. 랜덤 퀴즈 로직 (문항 수 조절 및 타입 믹스)
// ----------------------------------------------------
let quizWords = [];
let incorrectQuestions = []; 
let currentQuizIndex = 0;
let score = 0;
let quizConfig = { level: 'n5', type: 'meaning', count: 20 };
let currentCorrectAnswerStr = "";

document.querySelectorAll('.quiz-setup-group .btn-group').forEach(group => {
  group.onclick = (e) => {
    const btn = e.target.closest('.setup-btn');
    if (btn) {
      group.querySelectorAll('.setup-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = group.id.replace('setup-', '');
      quizConfig[type] = btn.dataset.val;
    }
  };
});

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startQuiz() {
  const words = vocabulary[quizConfig.level];
  if (!words || words.length < 4) return alert("단어가 부족합니다. (최소 4개)");

  let maxCount = parseInt(quizConfig.count);
  let shuffled = shuffleArray(words);
  maxCount = Math.min(maxCount, shuffled.length); 
  
  quizWords = shuffled.slice(0, maxCount);
  incorrectQuestions = [];
  currentQuizIndex = 0;
  score = 0;

  switchScreen('screen-quiz-active');
  loadQuizQuestion();
}

function loadQuizQuestion() {
  const currentWord = quizWords[currentQuizIndex];
  document.getElementById('quiz-progress').textContent = `${currentQuizIndex + 1} / ${quizWords.length}`;
  
  let activeType = quizConfig.type;
  if (activeType === 'random') {
    const types = ['meaning', 'reading', 'kanji'];
    activeType = types[Math.floor(Math.random() * types.length)];
  }

  const labelEl = document.getElementById('quiz-question-label');
  const kanjiEl = document.getElementById('quiz-kanji');
  
  if (activeType === 'meaning') {
    labelEl.textContent = "이 한자의 뜻은?";
    kanjiEl.textContent = currentWord.kanji;
    currentCorrectAnswerStr = currentWord.meaning;
  } else if (activeType === 'reading') {
    labelEl.textContent = "이 한자의 히라가나 읽기는?";
    kanjiEl.textContent = currentWord.kanji;
    currentCorrectAnswerStr = currentWord.reading;
  } else if (activeType === 'kanji') {
    labelEl.textContent = "다음 뜻을 가진 한자는?";
    kanjiEl.textContent = currentWord.meaning;
    currentCorrectAnswerStr = currentWord.kanji;
  }

  let optionsStrArray = [currentCorrectAnswerStr];
  let allWords = vocabulary[quizConfig.level];
  
  while(optionsStrArray.length < 4) {
      let randomWord = allWords[Math.floor(Math.random() * allWords.length)];
      let optionStr = (activeType === 'meaning') ? randomWord.meaning : (activeType === 'reading' ? randomWord.reading : randomWord.kanji);
      if(!optionsStrArray.includes(optionStr)) optionsStrArray.push(optionStr);
  }
  optionsStrArray = shuffleArray(optionsStrArray);
  
  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';
  optionsStrArray.forEach(optStr => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn hover-effect glass-effect';
      btn.textContent = optStr;
      btn.onclick = () => handleQuizAnswer(btn, optStr === currentCorrectAnswerStr, currentWord);
      optionsContainer.appendChild(btn);
  });
}

function handleQuizAnswer(clickedBtn, isCorrect, currentWord) {
  const buttons = document.querySelectorAll('.quiz-option-btn');
  buttons.forEach(btn => btn.disabled = true);
  
  if (isCorrect) {
      clickedBtn.classList.add('correct');
      score++;
  } else {
      clickedBtn.classList.add('wrong');
      incorrectQuestions.push(currentWord); 
      buttons.forEach(btn => { if(btn.textContent === currentCorrectAnswerStr) btn.classList.add('correct'); });
  }
  
  setTimeout(() => {
      currentQuizIndex++;
      if(currentQuizIndex < quizWords.length) loadQuizQuestion();
      else endQuiz();
  }, 1000);
}

function endQuiz() {
  document.getElementById('final-score').textContent = score;
  document.getElementById('total-score').textContent = quizWords.length;
  
  const reviewSection = document.getElementById('incorrect-review-section');
  const reviewList = document.getElementById('incorrect-list');
  reviewList.innerHTML = '';
  
  if (incorrectQuestions.length > 0) {
    reviewSection.style.display = 'block';
    incorrectQuestions.forEach(word => {
      const li = document.createElement('li');
      li.className = 'incorrect-item glass-effect';
      li.innerHTML = `
        <div class="inc-kanji">${word.kanji}</div>
        <div class="inc-details">
          <div class="inc-reading">${word.reading}</div>
          <div class="inc-meaning">${word.meaning}</div>
        </div>
      `;
      reviewList.appendChild(li);
    });
  } else {
    reviewSection.style.display = 'none';
  }

  switchScreen('screen-quiz-result');
}