// 1. 단어 데이터 객체 (n5 ~ n1 구조 완성)
const VOCABULARY_LEVELS = ['n5', 'n4', 'n3', 'n2', 'n1'];
let vocabulary = Object.fromEntries(VOCABULARY_LEVELS.map(level => [level, []]));

async function loadVocabulary() {
    const entries = await Promise.all(VOCABULARY_LEVELS.map(async level => {
        const response = await fetch(`${level}.json`, { cache: 'no-cache' });
        if (!response.ok) {
            throw new Error(`Failed to load ${level}.json: ${response.status}`);
        }
        return [level, await response.json()];
    }));
    vocabulary = Object.fromEntries(entries);
}

function showVocabularyLoadError(error) {
    console.error(error);
    const container = document.querySelector('.app-container') || document.body;
    const errorBox = document.createElement('div');
    errorBox.style.cssText = 'margin:16px;padding:16px;border:2px solid #dc3545;border-radius:12px;background:#fff5f5;color:#842029;font-weight:700;text-align:center;';
    errorBox.textContent = '단어 데이터를 불러오지 못했습니다. 로컬 파일로 직접 열었다면 웹 서버에서 실행해 주세요.';
    container.prepend(errorBox);
}
let srsData = JSON.parse(localStorage.getItem('srsData')) || {};

// SRS 업데이트
// SRS 업데이트 (하루에 여러 번 풀어도 폭풍 레벨업 방지)
function updateSRS(wordId, isCorrect) {
    let now = Date.now();

    if (!srsData[wordId]) {
        srsData[wordId] = {
            interval: 1,
            repetition: 0,
            ease: 2.5,
            // 처음 등록할 때는 과거(0)로 설정하여 첫 퀴즈 시 무조건 레벨업되도록 함
            nextReview: 0 
        };
    }

    let card = srsData[wordId];

    if (isCorrect) {
        // 🔥 핵심: 현재 시간이 '다음 복습 예정일'을 지났을 때만 레벨업!
        // (즉, 오늘 이미 맞혀서 복습일이 내일로 미뤄진 상태라면 숙련도가 오르지 않음)
        if (now >= card.nextReview) {
            card.repetition++;
            
            if (card.repetition === 1) card.interval = 1;
            else if (card.repetition === 2) card.interval = 3;
            else card.interval = Math.round(card.interval * card.ease);
            
            card.ease = Math.max(1.3, card.ease + 0.1);
            
            // 레벨업을 했을 때만 다음 복습 시간을 미래로 밀어줍니다.
            card.nextReview = now + card.interval * 24 * 60 * 60 * 1000;
        }
        // now < card.nextReview 인 경우(하루에 여러 번 정답): 아무 일도 일어나지 않음 현상 유지!
        
    } else {
        // 🚨 틀렸을 때는 언제 풀었든 상관없이 무조건 숙련도 초기화
        card.repetition = 0;
        card.interval = 1;
        card.ease = Math.max(1.3, card.ease - 0.2);
        
        // 틀렸으므로 다시 1일 뒤(정확히는 24시간 뒤)로 복습 시간 재설정
        card.nextReview = now + card.interval * 24 * 60 * 60 * 1000;
    }

    localStorage.setItem('srsData', JSON.stringify(srsData));
}

// 오늘 복습 단어
function getTodayReviewWords() {
    let now = Date.now();
    let result = [];
    Object.keys(srsData).forEach(wordId => {
        if (srsData[wordId].nextReview <= now) {
            result.push(wordId);
        }
    });
    return result;
}

let oboetaWords = [...new Set(JSON.parse(localStorage.getItem('oboetaWords')) || [])];
let oboenakattaWords = [...new Set(JSON.parse(localStorage.getItem('oboenakattaWords')) || [])];

let currentScreen = 'screen-home';
let currentTab = 'n5';
let currentJlptFilter = 'all';
let currentDisplayedWords = [];
let currentWordIndex = 0;

let quizWords = [];
let incorrectQuestions = [];
let currentQuizIndex = 0;
let score = 0;
let quizConfig = { level: 'n5', qTypes: [], aTypes: [], count: 20 };

let hideState = { kanji: false, reading: false, meaning: false };
let revHideState = { kanji: false, reading: false, meaning: false };

let memorizedInReview = new Set();
let reviewIndex = 0;
let listToClear = '';

// --- 화면 전환 함수 ---
function switchScreen(screenId) {
    currentScreen = screenId;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active-screen');
    window.scrollTo(0, 0);

    document.querySelectorAll('.nav-item:not(.help-btn)').forEach(nav => nav.classList.remove('active'));
    if (screenId === 'screen-home') {
        const homeNav = document.getElementById('nav-home');
        if (homeNav) homeNav.classList.add('active');
    }

    if (screenId === 'screen-vocab') {
        const vocabNav = document.getElementById('nav-vocab');
        if (vocabNav) vocabNav.classList.add('active');
        currentJlptFilter = 'all';
        displayVocabulary(currentTab);
    }

    if (screenId.includes('quiz') || screenId.includes('review')) {
        const testNav = document.getElementById('nav-test');
        if (testNav) testNav.classList.add('active');
    }
}

// --- 도움말 모달 ---
function openHelp() {
    const helpTitle = document.getElementById('help-title');
    const helpContent = document.getElementById('help-content');
    if (helpTitle && helpContent) {
        helpTitle.textContent = "바이브 漢 사용법";
        helpContent.innerHTML = `
        <li style="margin-bottom:12px;">
        <strong>단어장:</strong> 레벨별 한자를 확인할 수 있습니다.
        </li>
        
        <li style="margin-bottom:12px;">
        <strong>암기 / 부족:</strong><br>
        단어를 암기 여부에 따라 분류할 수 있습니다.
        </li>
        
        <li style="margin-bottom:12px;">
        <strong>복습 탭:</strong><br>
        퀴즈를 풀면서 자동으로 단어가 등록됩니다.<br>
        👉 시간이 지나 “복습할 시점”이 되면 자동으로 나타납니다.
        </li>
        
        <li>
        <strong>숙련도 바(카드 하단):</strong><br>
        🔴 빨강 (학습 초기) / 🟡 노랑 (기억 형성 중) / 🟢 초록 (완전 암기)
        </li>
        `;
    }
    const helpModal = document.getElementById('help-modal');
    if (helpModal) helpModal.style.display = 'flex';
}

function closeHelp() {
    const helpModal = document.getElementById('help-modal');
    if (helpModal) helpModal.style.display = 'none';
}

// --- 탭 및 필터 변경 ---
function changeMainTab(tab, btn) {
    document.querySelectorAll('#level-selection .level-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentJlptFilter = 'all';
    displayVocabulary(tab);
}

function changeSubFilter(filter, btn) {
    document.querySelectorAll('#sub-filter-selection .level-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentJlptFilter = filter;
    const searchVal = document.getElementById('word-search') ? document.getElementById('word-search').value : '';
    displayVocabulary(currentTab, searchVal);
}

function getWordsByLevel(tab) {
    let allWords = [];
    ['n5', 'n4', 'n3', 'n2', 'n1'].forEach(lvl => {
        if (typeof vocabulary !== 'undefined' && vocabulary[lvl]) {
            vocabulary[lvl].forEach(w => allWords.push({ ...w, level: lvl }));
        }
    });

    let baseWords = [];

    if (tab === 'review') {
        let reviewList = getTodayReviewWords();
        baseWords = allWords.filter(w => reviewList.includes(`${w.kanji}|${w.reading}`));
    } else if (tab === 'oboeta') {
        baseWords = allWords.filter(w => oboetaWords.includes(`${w.kanji}|${w.reading}`) || oboetaWords.includes(w.kanji));
    } else if (tab === 'oboenakatta') {
        baseWords = allWords.filter(w => oboenakattaWords.includes(`${w.kanji}|${w.reading}`) || oboenakattaWords.includes(w.kanji));
    } else {
        if (typeof vocabulary !== 'undefined') baseWords = vocabulary[tab] || [];
    }

    if (['oboeta', 'oboenakatta'].includes(tab) && currentJlptFilter !== 'all') {
        baseWords = baseWords.filter(w => w.level === currentJlptFilter);
    }

    let uniqueBaseWords = [];
    let seen = new Set();
    baseWords.forEach(w => {
        let uid = `${w.kanji}|${w.reading}`;
        if (!seen.has(uid)) {
            seen.add(uid);
            uniqueBaseWords.push(w);
        }
    });

    return uniqueBaseWords;
}

function displayVocabulary(tab, searchTerm = '') {
    currentTab = tab;
    const vocabDisplay = document.getElementById('vocabulary-display');
    const reviewQuizBtn = document.getElementById('start-review-quiz-btn');
    if (!vocabDisplay) return;
    
    vocabDisplay.innerHTML = '';
    if (reviewQuizBtn) reviewQuizBtn.style.display = 'none';

    const subFilterNav = document.getElementById('sub-filter-selection');
    const clearBtn = document.getElementById('clear-list-btn');

    if (['oboeta', 'oboenakatta'].includes(tab)) {
        if (subFilterNav) subFilterNav.style.display = 'flex';
        if (clearBtn) {
            clearBtn.style.display = 'block';
            clearBtn.onclick = () => {
                listToClear = tab;
                document.getElementById('confirm-modal').style.display = 'flex';
            };
        }
    } else {
        if (subFilterNav) subFilterNav.style.display = 'none';
        if (clearBtn) clearBtn.style.display = 'none';
    }

    let words = getWordsByLevel(tab);

    if (!['oboeta', 'oboenakatta', 'review'].includes(tab)) {
        words = words.filter(w => 
            !oboetaWords.includes(`${w.kanji}|${w.reading}`) && !oboetaWords.includes(w.kanji) && 
            !oboenakattaWords.includes(`${w.kanji}|${w.reading}`) && !oboenakattaWords.includes(w.kanji)
        );
    }

    if (searchTerm) {
        const t = searchTerm.toLowerCase();
        words = words.filter(w => w.kanji.includes(t) || w.meaning.includes(t) || w.reading.includes(t));
    }

    currentDisplayedWords = words;

    // 🔥 리뷰 퀴즈 시작 버튼 표시
    if (tab === 'review' && words.length > 0 && !searchTerm) {
        if (reviewQuizBtn) {
            reviewQuizBtn.style.display = 'flex';
            document.getElementById('review-quiz-count').textContent = words.length;
        }
    }

    if (words.length > 0) {
        words.forEach((w, i) => {
            const card = document.createElement('div');
            card.className = 'vocabulary-card hover-effect';
            card.onclick = () => showModal(i);

            const uid = `${w.kanji}|${w.reading}`;
            const isOboeta = (oboetaWords.includes(uid) || oboetaWords.includes(w.kanji)) ? 'active' : '';
            const isOboenakatta = (oboenakattaWords.includes(uid) || oboenakattaWords.includes(w.kanji)) ? 'active' : '';
            const kanjiClass = w.kanji.length >= 4 ? 'kanji kanji-small-long' : 'kanji';

            // 🔥 암기 숙련도 계산
            let masteryClass = 'mastery-none';
            let intervalText = '새 단어';
            if (srsData[uid]) {
                const interval = srsData[uid].interval;
                intervalText = `주기: ${interval}일`;
                if (interval < 3) masteryClass = 'mastery-seed';
                else if (interval < 14) masteryClass = 'mastery-growing';
                else masteryClass = 'mastery-mature';
            }

            card.innerHTML = `
                <div class="card-number-small">${i + 1}</div>
                <div class="${kanjiClass}">${w.kanji}</div>
                <div class="reading">${w.reading}</div>
                <div class="meaning">${w.meaning}</div>
                <div class="card-btn-group">
                    <button class="status-btn oboeta-btn ${isOboeta}" onclick="toggleWordStatus(event, '${uid}', 'oboeta')">암기</button>
                    <button class="status-btn oboenakatta-btn ${isOboenakatta}" onclick="toggleWordStatus(event, '${uid}', 'oboenakatta')">부족</button>
                </div>
                <div class="mastery-container" title="${intervalText}">
                    <div class="mastery-bar ${masteryClass}"></div>
                </div>
            `;
            vocabDisplay.appendChild(card);
        });
    } else {
        // 🔥 Zero Inbox 적용
        if (tab === 'review' && !searchTerm) {
            vocabDisplay.innerHTML = `
                <div class="zero-inbox">
                    <div class="zero-inbox-icon" aria-hidden="true">
                        <svg viewBox="0 0 80 80" role="img" focusable="false">
                            <circle class="complete-icon-ring" cx="40" cy="40" r="30"></circle>
                            <path class="complete-icon-check" d="M27 41.5 L36 50.5 L54 30"></path>
                        </svg>
                    </div>
                    <h2 style="color:var(--green); font-weight:900; font-size:2em; margin-bottom:10px;">오늘의 복습 완료!</h2>
                    <p style="color:#666; font-size:1.1em; line-height: 1.5;">내일 다시 확인해주세요!</p>
                </div>
            `;
        } else {
            vocabDisplay.innerHTML = `<p style="grid-column: 1/-1; color: #888; padding: 50px; text-align:center;">단어가 없습니다.</p>`;
        }
    }
}

// 🔥 오늘의 복습 즉시 퀴즈
function startReviewQuiz() {
    let words = getWordsByLevel('review');
    if (words.length === 0) return alert("복습할 단어가 없습니다!");

    // 기본 설정: 뜻과 히라가나를 보고 한자 고르기
    quizConfig.level = 'review';
    quizConfig.qTypes = ['meaning', 'reading'];
    quizConfig.aTypes = ['kanji'];
    quizConfig.count = words.length;

    quizWords = [...words].sort(() => Math.random() - 0.5);

    incorrectQuestions = [];
    currentQuizIndex = 0;
    score = 0;

    switchScreen('screen-quiz-active');
    const feedbackModal = document.getElementById('quiz-feedback-modal');
    if (feedbackModal) feedbackModal.style.display = 'none';
    loadQuizQuestion();
}

// --- 리스트 초기화 ---
function closeConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.style.display = 'none';
}

function executeClearAll() {
    if (listToClear === 'oboeta') oboetaWords = [];
    if (listToClear === 'oboenakatta') oboenakattaWords = [];

    localStorage.setItem('oboetaWords', JSON.stringify(oboetaWords));
    localStorage.setItem('oboenakattaWords', JSON.stringify(oboenakattaWords));

    closeConfirmModal();
    displayVocabulary(currentTab);
}

// --- 단어 상태 토글 ---
function toggleWordStatus(event, wordId, target) {
    if (event) event.stopPropagation();

    let wasInTarget = false;

    if (target === 'oboeta') {
        wasInTarget = oboetaWords.includes(wordId);
        oboetaWords = oboetaWords.filter(w => w !== wordId);
        oboenakattaWords = oboenakattaWords.filter(w => w !== wordId);
        if (!wasInTarget) oboetaWords.push(wordId); 
    }
    
    if (target === 'oboenakatta') {
        wasInTarget = oboenakattaWords.includes(wordId);
        oboenakattaWords = oboenakattaWords.filter(w => w !== wordId);
        oboetaWords = oboetaWords.filter(w => w !== wordId);
        if (!wasInTarget) oboenakattaWords.push(wordId); 
    }
    
    oboetaWords = [...new Set(oboetaWords)];
    oboenakattaWords = [...new Set(oboenakattaWords)];

    localStorage.setItem('oboetaWords', JSON.stringify(oboetaWords));
    localStorage.setItem('oboenakattaWords', JSON.stringify(oboenakattaWords));

    const searchVal = document.getElementById('word-search') ? document.getElementById('word-search').value : '';
    displayVocabulary(currentTab, searchVal);

    if (document.getElementById('vocabulary-modal').style.display === 'flex') {
        updateModalButtons(wordId);
    }
}

function updateModalButtons(wordId) {
    const oboetaBtn = document.getElementById('modal-oboeta-btn');
    const oboenakattaBtn = document.getElementById('modal-oboenakatta-btn');
    if (!oboetaBtn || !oboenakattaBtn) return;

    oboetaBtn.className = `status-btn oboeta-btn modal-action-btn ${oboetaWords.includes(wordId) ? 'active' : ''}`;
    oboenakattaBtn.className = `status-btn oboenakatta-btn modal-action-btn ${oboenakattaWords.includes(wordId) ? 'active' : ''}`;

    oboetaBtn.onclick = (e) => {
        oboetaBtn.blur();
        toggleWordStatus(e, wordId, 'oboeta');
        if (currentWordIndex < currentDisplayedWords.length - 1) setTimeout(() => navigateWord('next'), 150);
        else setTimeout(() => closeModal(), 150);
    };
    oboenakattaBtn.onclick = (e) => {
        oboenakattaBtn.blur();
        toggleWordStatus(e, wordId, 'oboenakatta');
        if (currentWordIndex < currentDisplayedWords.length - 1) setTimeout(() => navigateWord('next'), 150);
        else setTimeout(() => closeModal(), 150);
    };
}

// --- 모달 제어 ---
function showModal(index) {
    currentWordIndex = index;
    const word = currentDisplayedWords[index];
    const k = document.getElementById('modal-kanji');

    document.getElementById('modal-word-number').textContent = `KANJI ${index + 1} / ${currentDisplayedWords.length}`;
    k.textContent = word.kanji;
    document.getElementById('modal-reading').textContent = word.reading;
    document.getElementById('modal-meaning').textContent = word.meaning;

    if (word.kanji.length >= 6) k.style.fontSize = '2.2em';
    else if (word.kanji.length >= 4) k.style.fontSize = '3.2em';
    else k.style.fontSize = '5.5em';

    applyHideStates();
    const uid = `${word.kanji}|${word.reading}`;
    updateModalButtons(uid);
    document.getElementById('vocabulary-modal').style.display = 'flex';
}

function navigateWord(dir) {
    if (dir === 'prev' && currentWordIndex > 0) currentWordIndex--;
    else if (dir === 'next' && currentWordIndex < currentDisplayedWords.length - 1) currentWordIndex++;
    showModal(currentWordIndex);
}

function closeModal() {
    const modal = document.getElementById('vocabulary-modal');
    if (modal) modal.style.display = 'none';
}

// --- 퀴즈 설정 및 실행 ---
function setQuizConfig(key, val, btn) {
    quizConfig[key] = val;
    const container = btn.parentElement;
    container.querySelectorAll('.level-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function setTypeBtn(btn) {
    const group = btn.parentElement;
    group.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function addTypeSlot(category) {
    document.getElementById(`${category}-slot-2`).style.display = 'flex';
    document.getElementById(`btn-add-${category}`).style.display = 'none';
}

function removeTypeSlot(category) {
    document.getElementById(`${category}-slot-2`).style.display = 'none';
    document.getElementById(`btn-add-${category}`).style.display = 'inline-block';
}

function getActiveTypes(category) {
    let types = [];
    const btn1 = document.querySelector(`#${category}-slot-1 .type-btn.active`);
    if (btn1) types.push(btn1.dataset.val);

    const slot2 = document.getElementById(`${category}-slot-2`);
    if (slot2 && slot2.style.display !== 'none') {
        const btn2 = slot2.querySelector('.type-btn.active');
        if (btn2) types.push(btn2.dataset.val);
    }
    return types;
}

function formatWord(wordObj, types) {
    if (Array.isArray(types)) return types.map(t => wordObj[t]).join(' / ');
    return wordObj[types];
}

function startQuiz() {
    let qActive = getActiveTypes('q');
    let aActive = getActiveTypes('a');

    const qSpecific = qActive.filter(v => v !== 'random');
    const aSpecific = aActive.filter(v => v !== 'random');

    if (new Set(qSpecific).size !== qSpecific.length || new Set(aSpecific).size !== aSpecific.length) {
        return alert("오류: 같은 영역 안에 동일한 타입을 중복으로 조합할 수 없습니다.");
    }
    const intersection = qSpecific.filter(v => aSpecific.includes(v));
    if (intersection.length > 0) {
        return alert("중복 불가! 질문 영역과 보기 영역에 동일한 타입을 선택할 수 없습니다.");
    }

    quizConfig.qTypes = qActive;
    quizConfig.aTypes = aActive;

    let words = getWordsByLevel(quizConfig.level);
    if (!words || words.length === 0) return alert("해당 범위에 단어가 없습니다. 다른 범위를 선택해 주세요.");

    const countInput = document.getElementById('quiz-count-input');
    let count = parseInt(countInput.value) || 20;

    if (count < 1) { count = 1; countInput.value = 1; }
    if (count > words.length) {
        count = words.length;
        countInput.value = words.length;
        alert(`해당 범위의 단어가 ${words.length}개뿐이므로, 문항 수가 ${words.length}개로 자동 조정됩니다.`);
    }

    quizConfig.count = count;
    quizWords = [...words].sort(() => Math.random() - 0.5).slice(0, count);

    incorrectQuestions = [];
    currentQuizIndex = 0;
    score = 0;

    switchScreen('screen-quiz-active');
    const feedbackModal = document.getElementById('quiz-feedback-modal');
    if (feedbackModal) feedbackModal.style.display = 'none';
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const feedbackModal = document.getElementById('quiz-feedback-modal');
    if (feedbackModal) feedbackModal.style.display = 'none';
    const currentWord = quizWords[currentQuizIndex];
    document.getElementById('quiz-progress').textContent = `${currentQuizIndex + 1} / ${quizWords.length}`;

    const allTypes = ['kanji', 'reading', 'meaning'];
    let finalQ = [];
    let finalA = [];

    quizConfig.qTypes.forEach(q => {
        if (q === 'random') {
            let available = allTypes.filter(t => !quizConfig.aTypes.includes(t) && !finalQ.includes(t));
            if (available.length === 0) available = allTypes.filter(t => !finalQ.includes(t));
            finalQ.push(available[Math.floor(Math.random() * available.length)]);
        } else finalQ.push(q);
    });

    quizConfig.aTypes.forEach(a => {
        if (a === 'random') {
            let available = allTypes.filter(t => !finalQ.includes(t) && !finalA.includes(t));
            if (available.length === 0) available = allTypes.filter(t => !finalA.includes(t));
            finalA.push(available[Math.floor(Math.random() * available.length)]);
        } else finalA.push(a);
    });

    const labelMap = { kanji: '한자', reading: '히라가나', meaning: '뜻' };
    const qLabelText = finalQ.map(t => labelMap[t]).join(', ');
    const aLabelText = finalA.map(t => labelMap[t]).join('와(과) ');

    const labelEl = document.getElementById('quiz-question-label');
    labelEl.textContent = finalA.length > 1 ? `다음 ${qLabelText}에 맞는 ${aLabelText}을 모두 고르세요.` : `다음 ${qLabelText}에 맞는 ${aLabelText}은?`;

    const kanjiEl = document.getElementById('quiz-kanji');
    kanjiEl.textContent = formatWord(currentWord, finalQ);

    if (kanjiEl.textContent.length >= 8) kanjiEl.style.fontSize = '2.2em';
    else if (kanjiEl.textContent.length >= 5) kanjiEl.style.fontSize = '3.3em';
    else kanjiEl.style.fontSize = '4.6em';

    const container = document.getElementById('quiz-options');
    container.innerHTML = '';

    window.currentQuizSelections = {};
    window.currentCorrectAnswers = {};

    let pool = getWordsByLevel(quizConfig.level);
    if (pool.length < 4 && typeof vocabulary !== 'undefined') {
        let allDict = [];
        ['n5', 'n4', 'n3', 'n2', 'n1'].forEach(l => { if (vocabulary[l]) allDict.push(...vocabulary[l]) });
        pool = allDict;
    }

    finalA.forEach(aType => {
        let correctVal = formatWord(currentWord, [aType]);
        window.currentCorrectAnswers[aType] = correctVal;

        let opts = [correctVal];
        let similarWords = [];
        let kanjiChars = currentWord.kanji.split('');
        let sameKanjiWords = pool.filter(w => w.kanji !== currentWord.kanji && kanjiChars.some(char => w.kanji.includes(char)));
        similarWords.push(...sameKanjiWords);

        if (currentWord.reading) {
            let firstKana = currentWord.reading.charAt(0);
            let sameKanaWords = pool.filter(w => w.kanji !== currentWord.kanji && w.reading.charAt(0) === firstKana);
            similarWords.push(...sameKanaWords);
        }

        let sameLengthWords = pool.filter(w => w.kanji !== currentWord.kanji && (w.kanji.length === currentWord.kanji.length || w.reading.length === currentWord.reading.length));
        similarWords.push(...sameLengthWords);

        similarWords.sort(() => Math.random() - 0.5);
        for (let w of similarWords) {
            if (opts.length >= 4) break;
            let val = formatWord(w, [aType]);
            if (!opts.includes(val)) opts.push(val);
        }

        let fallbackCounter = 0;
        while (opts.length < 4 && fallbackCounter < 50) {
            fallbackCounter++;
            let rand = pool[Math.floor(Math.random() * pool.length)];
            let val = formatWord(rand, [aType]);
            if (!opts.includes(val)) opts.push(val);
        }

        opts.sort(() => Math.random() - 0.5);
        const groupDiv = document.createElement('div');
        groupDiv.className = 'quiz-group-container';

        if (finalA.length > 1) {
            const title = document.createElement('div');
            title.className = 'quiz-group-title';
            title.textContent = `[ ${labelMap[aType]} 선택 ]`;
            groupDiv.appendChild(title);
        }

        opts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'menu-btn hover-effect quiz-option-btn';
            btn.textContent = opt;
            btn.dataset.val = opt;
            btn.onclick = () => handleMultiQuizAnswer(btn, aType, currentWord, finalA);
            groupDiv.appendChild(btn);
        });
        container.appendChild(groupDiv);
    });
}

// ▼ 여기서부터 복사해서 덮어씌우세요 ▼

function handleMultiQuizAnswer(btn, aType, word, finalA) {
    const groupBtns = btn.parentElement.querySelectorAll('.quiz-option-btn');
    groupBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    window.currentQuizSelections[aType] = btn;

    if (Object.keys(window.currentQuizSelections).length === finalA.length) {
        document.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);
        let isAllCorrect = true;

        for (const type of finalA) {
            const selectedBtn = window.currentQuizSelections[type];
            const correctVal = window.currentCorrectAnswers[type];

            if (selectedBtn.dataset.val === correctVal) {
                selectedBtn.classList.add('quiz-correct');
            } else {
                isAllCorrect = false;
                selectedBtn.classList.add('quiz-wrong');
                selectedBtn.parentElement.querySelectorAll('.quiz-option-btn').forEach(b => {
                    if (b.dataset.val === correctVal) b.classList.add('quiz-correct');
                });
            }
        }

        const feedbackMsg = document.getElementById('quiz-feedback-msg');

        if (isAllCorrect) {
            score++;
            updateSRS(word.kanji + "|" + word.reading, true);
            updateReviewUI();
            feedbackMsg.innerHTML = `<span style="color:var(--green); font-weight:900;">정답</span>`;
        } else {
            incorrectQuestions.push(word);
            updateSRS(word.kanji + "|" + word.reading, false);
            updateReviewUI();
            feedbackMsg.innerHTML = `<span style="color:var(--red); font-weight:900;">오답</span>`;
        }
        
        const fbKanji = document.getElementById('fb-kanji');
        const fbReading = document.getElementById('fb-reading');
        const fbMeaning = document.getElementById('fb-meaning');
        
        fbKanji.textContent = word.kanji;
        fbReading.textContent = word.reading;
        fbMeaning.textContent = word.meaning;
        
        // 🔥 단어장 즉시 추가 버튼 로직 구현
        const uid = word.kanji + "|" + word.reading;
        const btnOboeta = document.getElementById('btn-quiz-oboeta');
        const btnOboenakatta = document.getElementById('btn-quiz-oboenakatta');

        // 버튼 상태 초기화
        btnOboeta.textContent = '암기 추가';
        btnOboeta.disabled = false;
        btnOboeta.style.opacity = '1';
        btnOboenakatta.textContent = '부족 추가';
        btnOboenakatta.disabled = false;
        btnOboenakatta.style.opacity = '1';

        if (isAllCorrect) {
            btnOboeta.style.display = 'block';
            btnOboenakatta.style.display = 'none';
            
            // 이미 '암기'에 있는지 확인
            if (oboetaWords.includes(uid) || oboetaWords.includes(word.kanji)) {
                btnOboeta.textContent = '이미 추가됨';
                btnOboeta.disabled = true;
                btnOboeta.style.opacity = '0.5';
            } else {
                btnOboeta.onclick = () => {
                    toggleWordStatus(null, uid, 'oboeta');
                    btnOboeta.textContent = '추가 완료!';
                    btnOboeta.disabled = true;
                    btnOboeta.style.opacity = '0.5';
                };
            }
        } else {
            btnOboeta.style.display = 'none';
            btnOboenakatta.style.display = 'block';

            // 이미 '부족'에 있는지 확인
            if (oboenakattaWords.includes(uid) || oboenakattaWords.includes(word.kanji)) {
                btnOboenakatta.textContent = '이미 추가됨';
                btnOboenakatta.disabled = true;
                btnOboenakatta.style.opacity = '0.5';
            } else {
                btnOboenakatta.onclick = () => {
                    toggleWordStatus(null, uid, 'oboenakatta');
                    btnOboenakatta.textContent = '추가 완료!';
                    btnOboenakatta.disabled = true;
                    btnOboenakatta.style.opacity = '0.5';
                };
            }
        }
        
        document.getElementById('quiz-feedback-modal').style.display = 'flex';
    }
}

// ▲ 여기까지 복사하세요 ▲

function proceedQuiz() {
    const feedbackModal = document.getElementById('quiz-feedback-modal');
    if (feedbackModal) feedbackModal.style.display = 'none';
    currentQuizIndex++;
    if (currentQuizIndex < quizWords.length) loadQuizQuestion();
    else endQuiz();
}

function endQuiz() {
    document.getElementById('final-score').textContent = score;
    document.getElementById('total-score').textContent = quizWords.length;
    const reviewBtn = document.getElementById('btn-review-incorrect');
    if (reviewBtn) reviewBtn.style.display = incorrectQuestions.length > 0 ? 'block' : 'none';
    switchScreen('screen-quiz-result');
}

// --- 오답 복습 기능 ---
function startIncorrectReview() {
    reviewIndex = 0;
    memorizedInReview.clear();
    switchScreen('screen-incorrect-review');
    loadReviewWord();
}

function loadReviewWord() {
    const word = incorrectQuestions[reviewIndex];
    document.getElementById('review-progress-card').textContent = `오답 ${reviewIndex + 1} / ${incorrectQuestions.length}`;

    const k = document.getElementById('rev-kanji');
    k.textContent = word.kanji;
    document.getElementById('rev-reading').textContent = word.reading;
    document.getElementById('rev-meaning').textContent = word.meaning;

    const len = word.kanji.length;
    if (len >= 6) k.style.fontSize = '2.5em';
    else if (len >= 4) k.style.fontSize = '3.5em';
    else k.style.fontSize = '5em';

    applyRevHideStates();

    document.getElementById('btn-rev-prev').style.visibility = (reviewIndex === 0) ? 'hidden' : 'visible';
    document.getElementById('btn-rev-next').style.visibility = (reviewIndex === incorrectQuestions.length - 1) ? 'hidden' : 'visible';

    const memoBtn = document.getElementById('btn-rev-memo');
    if (memorizedInReview.has(reviewIndex)) {
        memoBtn.textContent = '완료됨';
        memoBtn.style.background = 'var(--green)';
        memoBtn.style.borderColor = 'var(--green)';
        memoBtn.style.boxShadow = '0 0 10px rgba(40,167,69,0.4)';
    } else {
        memoBtn.textContent = '암기 완료';
        memoBtn.style.background = 'var(--red)';
        memoBtn.style.borderColor = 'var(--red)';
        memoBtn.style.boxShadow = '0 0 10px rgba(220,53,69,0.3)';
    }
}

function navigateReview(dir) {
    if (dir === 'prev' && reviewIndex > 0) reviewIndex--;
    else if (dir === 'next' && reviewIndex < incorrectQuestions.length - 1) reviewIndex++;
    loadReviewWord();
}

function markCurrentAsMemorized() {
    memorizedInReview.add(reviewIndex);
    loadReviewWord();

    if (memorizedInReview.size === incorrectQuestions.length) {
        setTimeout(() => { switchScreen('screen-review-complete'); }, 500);
    } else {
        setTimeout(() => {
            let nextIdx = reviewIndex + 1;
            while (nextIdx < incorrectQuestions.length && memorizedInReview.has(nextIdx)) { nextIdx++; }
            if (nextIdx < incorrectQuestions.length) {
                reviewIndex = nextIdx;
                loadReviewWord();
            } else {
                let firstUnmemo = 0;
                while (firstUnmemo < incorrectQuestions.length && memorizedInReview.has(firstUnmemo)) { firstUnmemo++; }
                if (firstUnmemo < incorrectQuestions.length) {
                    reviewIndex = firstUnmemo;
                    loadReviewWord();
                }
            }
        }, 400);
    }
}

function retakeIncorrectQuiz() {
    quizWords = [...incorrectQuestions].sort(() => Math.random() - 0.5);
    incorrectQuestions = [];
    currentQuizIndex = 0;
    score = 0;
    switchScreen('screen-quiz-active');
    loadQuizQuestion();
}

// --- 숨기기 기능 설정 ---
function setupClickToHide() {
    const kanjiBox = document.getElementById('modal-kanji-box');
    const readingBox = document.getElementById('modal-reading-box');
    const meaningBox = document.getElementById('modal-meaning-box');
    if (kanjiBox) kanjiBox.onclick = () => { hideState.kanji = !hideState.kanji; applyHideStates(); };
    if (readingBox) readingBox.onclick = () => { hideState.reading = !hideState.reading; applyHideStates(); };
    if (meaningBox) meaningBox.onclick = () => { hideState.meaning = !hideState.meaning; applyHideStates(); };

    const revKanjiBox = document.getElementById('rev-kanji-box');
    const revReadingBox = document.getElementById('rev-reading-box');
    const revMeaningBox = document.getElementById('rev-meaning-box');
    if (revKanjiBox) revKanjiBox.onclick = () => { revHideState.kanji = !revHideState.kanji; applyRevHideStates(); };
    if (revReadingBox) revReadingBox.onclick = () => { revHideState.reading = !revHideState.reading; applyRevHideStates(); };
    if (revMeaningBox) revMeaningBox.onclick = () => { revHideState.meaning = !revHideState.meaning; applyRevHideStates(); };
}

function applyHideStates() {
    const k = document.getElementById('modal-kanji');
    const r = document.getElementById('modal-reading');
    const m = document.getElementById('modal-meaning');
    if (k) k.classList.toggle('hidden-content', hideState.kanji);
    if (r) r.classList.toggle('hidden-content', hideState.reading);
    if (m) m.classList.toggle('hidden-content', hideState.meaning);
}

function applyRevHideStates() {
    const k = document.getElementById('rev-kanji');
    const r = document.getElementById('rev-reading');
    const m = document.getElementById('rev-meaning');
    if (k) k.classList.toggle('hidden-content', revHideState.kanji);
    if (r) r.classList.toggle('hidden-content', revHideState.reading);
    if (m) m.classList.toggle('hidden-content', revHideState.meaning);
}

// --- 오늘의 한자 맛보기 ---
function injectHomeContent() {
    const homeSection = document.getElementById('screen-home');
    if (!homeSection || document.getElementById('home-preview-content')) return;

    const previewContainer = document.createElement('div');
    previewContainer.id = 'home-preview-content';
    previewContainer.style.marginTop = '70px';
    previewContainer.style.marginBottom = '20px';
    previewContainer.style.textAlign = 'left';
    previewContainer.style.padding = '25px';
    previewContainer.style.background = 'white';
    previewContainer.style.borderRadius = '20px';
    previewContainer.style.border = '2px solid var(--accent-blue, #007bff)';
    previewContainer.style.boxShadow = '0 0 15px rgba(0,0,0,0.05)';

    previewContainer.innerHTML = `
        <h3 style="color: var(--accent-blue, #007bff); margin-bottom: 5px; font-size: 1.2em; font-weight: 900;">📖 오늘의 한자 맛보기</h3>
        <p style="color: #666; font-size: 0.9em; margin-bottom: 20px;">매일 새로운 단어를 가볍게 훑어보세요. (새로고침 시 변경됩니다)</p>
    `;

    let allWords = [];
    ['n5', 'n4', 'n3', 'n2', 'n1'].forEach(l => {
        if (typeof vocabulary !== 'undefined' && vocabulary[l]) allWords.push(...vocabulary[l]);
    });

    if (allWords.length > 0) {
        let randomWords = [...allWords].sort(() => 0.5 - Math.random()).slice(0, 12);
        let list = document.createElement('div');
        list.style.display = 'grid';
        list.style.gridTemplateColumns = 'repeat(auto-fit, minmax(140px, 1fr))';
        list.style.gap = '15px';

        randomWords.forEach(w => {
            let item = document.createElement('div');
            item.style.background = '#f4f6fa';
            item.style.padding = '15px 10px';
            item.style.borderRadius = '12px';
            item.style.textAlign = 'center';
            item.innerHTML = `
                <div style="font-size: 2.2em; font-weight: 800; color: var(--accent-blue, #007bff); line-height: 1;">${w.kanji}</div>
                <div style="font-size: 0.95em; font-weight: bold; margin-top: 10px; color: #333;">${w.reading}</div>
                <div style="font-size: 0.85em; color: #666; margin-top: 3px;">${w.meaning}</div>
            `;
            list.appendChild(item);
        });
        previewContainer.appendChild(list);
    }
    
    homeSection.appendChild(previewContainer);
}

function updateReviewUI() {
    const reviewWords = getTodayReviewWords();
    const count = reviewWords.length;

    const countEl = document.getElementById('review-count');
    const tabBtn = document.getElementById('review-tab-btn');

    if (!countEl || !tabBtn) return;

    if (count > 0) {
        countEl.textContent = `(${count})`;
        tabBtn.style.position = 'relative';

        if (!document.getElementById('review-dot')) {
            const dot = document.createElement('span');
            dot.id = 'review-dot';
            dot.style.position = 'absolute';
            dot.style.top = '5px';
            dot.style.right = '5px';
            dot.style.width = '8px';
            dot.style.height = '8px';
            dot.style.background = 'red';
            dot.style.borderRadius = '50%';
            tabBtn.appendChild(dot);
        }
    } else {
        countEl.textContent = '';
        const dot = document.getElementById('review-dot');
        if (dot) dot.remove();
    }
}

window.onload = async () => {
    try {
        await loadVocabulary();
    } catch (error) {
        showVocabularyLoadError(error);
        return;
    }

    setupClickToHide();
    injectHomeContent();
    updateReviewUI();

    const searchInput = document.getElementById('word-search');
    if (searchInput) {
        searchInput.oninput = (e) => displayVocabulary(currentTab, e.target.value);
    }
// --- 🔥 음성 재생(TTS) 기능 (오류 수정 및 안정성 강화 버전) ---
window.playWordAudio = function(wordToPlay) {
    if (!window.speechSynthesis) {
        alert("현재 사용 중인 브라우저(또는 기기)에서는 음성 듣기 기능을 지원하지 않습니다.");
        return;
    }

    const word = wordToPlay || currentDisplayedWords[currentWordIndex];
    if (!word || !word.kanji) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word.kanji);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice = voices.find(voice => voice.lang.includes('ja') || voice.lang.includes('JP'));
    if (japaneseVoice) {
        utterance.voice = japaneseVoice;
    }

    window.speechSynthesis.speak(utterance);
};

window.playQuizWordAudio = function() {
    const word = quizWords[currentQuizIndex];
    if (word) window.playWordAudio(word);
};

if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

};