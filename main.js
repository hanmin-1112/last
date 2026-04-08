let currentView = 'all';
let selectedWord = null;
let wrongAnswers = []; // 퀴즈에서 틀린 문제 저장

// 샘플 데이터 (실제 데이터는 서버나 파일에서 불러오도록 확장 가능)
let db = [
    { id: 1, kanji: "日", reading: "ひ", meaning: "날", status: 'all' },
    { id: 2, kanji: "月", reading: "つき", meaning: "달", status: 'all' },
    { id: 3, kanji: "人", reading: "ひと", meaning: "사람", status: 'all' }
];

function displayVocab() {
    const container = document.getElementById('vocabulary-display');
    container.innerHTML = '';
    
    // 상태에 따른 필터링
    const filtered = db.filter(item => {
        if (currentView === 'all') return item.status === 'all';
        return item.status === currentView;
    });

    // 전체 해제 버튼 (단어장 안에서만 표시)
    if (currentView !== 'all' && filtered.length > 0) {
        const resetBtn = document.createElement('button');
        resetBtn.innerText = "전체 목록에서 제거 (초기화)";
        resetBtn.className = "btn-reset";
        resetBtn.onclick = clearCurrentList;
        container.appendChild(resetBtn);
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vocabulary-card';
        card.innerHTML = `<div class="kanji">${item.kanji}</div>`;
        card.onclick = () => openDetail(item);
        container.appendChild(card);
    });
}

// 단어 이동 (이동 시 기존 목록에서 사라짐)
function moveTo(status) {
    if (!selectedWord) return;
    const target = db.find(w => w.id === selectedWord.id);
    target.status = status;
    closeModal();
    displayVocab();
}

// 단어장 전체 해제
function clearCurrentList() {
    db.forEach(item => {
        if (item.status === currentView) item.status = 'all';
    });
    displayVocab();
}

// 퀴즈 결과 후 오답노트 열기
function openWrongNotes() {
    document.getElementById('quiz-result-modal').style.display = 'none';
    const container = document.getElementById('wrong-cards-container');
    container.innerHTML = '';
    
    wrongAnswers.forEach(item => {
        const div = document.createElement('div');
        div.className = 'wrong-card-item';
        div.innerHTML = `<strong>${item.kanji}</strong> - ${item.reading} (${item.meaning})`;
        container.appendChild(div);
    });
    
    document.getElementById('wrong-note-modal').style.display = 'block';
}

// 틀린 문제만 다시 풀기
function retryWrongAnswers() {
    const retryData = [...wrongAnswers];
    closeWrongNotes();
    startQuiz(retryData); // 기존 퀴즈 함수에 데이터 전달
}

function goHome() {
    document.getElementById('quiz-result-modal').style.display = 'none';
    changeView('all');
}

function changeView(view) {
    currentView = view;
    displayVocab();
}

// 초기 실행
window.onload = () => displayVocab();