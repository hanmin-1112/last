// 1. 단어 데이터 (N5 파트 정제 완료)
const vocabulary = {
  n5: [
    { kanji: "私", reading: "わたし", meaning: "나, 저" },
    { kanji: "人", reading: "ひと", meaning: "사람" },
    { kanji: "日", reading: "ひ", meaning: "날, 해" },
    { kanji: "本", reading: "ほん", meaning: "책, 근본" },
    { kanji: "学生", reading: "がくせい", meaning: "학생" },
    { kanji: "先生", reading: "せんせい", meaning: "선생님" },
    { kanji: "学校", reading: "がっこう", meaning: "학교" },
    { kanji: "日本語", reading: "にほんご", meaning: "일본어" },
    { kanji: "名前", reading: "なまえ", meaning: "이름" },
    { kanji: "前", reading: "まえ", meaning: "앞, 이전" },
    { kanji: "何", reading: "なん/なに", meaning: "무엇" },
    { kanji: "国", reading: "くに", meaning: "나라" },
    { kanji: "時", reading: "とき", meaning: "시간, 시" },
    { kanji: "分", reading: "ふん/ぷん", meaning: "분" },
    { kanji: "今", reading: "いま", meaning: "지금" },
    { kanji: "月", reading: "つき", meaning: "월, 달" },
    { kanji: "火", reading: "ひ", meaning: "불" },
    { kanji: "水", reading: "みず", meaning: "물" },
    { kanji: "お金", reading: "おかね", meaning: "돈" },
    { kanji: "電話", reading: "でんわ", meaning: "전화" },
    { kanji: "友達", reading: "ともだち", meaning: "친구" },
    { kanji: "家族", reading: "かぞく", meaning: "가족" },
    { kanji: "行く", reading: "いく", meaning: "가다" },
    { kanji: "来る", reading: "くる", meaning: "오다" },
    { kanji: "食べる", reading: "たべる", meaning: "먹다" },
    { kanji: "飲む", reading: "のむ", meaning: "마시다" },
    { kanji: "見る", reading: "みる", meaning: "보다" },
    { kanji: "聞く", reading: "きく", meaning: "듣다" },
    { kanji: "話す", reading: "はなす", meaning: "말하다" },
    { kanji: "買う", reading: "かう", meaning: "사다" },
    { kanji: "部屋", reading: "へや", meaning: "방" },
    { kanji: "家", reading: "いえ", meaning: "집" },
    { kanji: "店", reading: "みせ", meaning: "가게" },
    { kanji: "銀行", reading: "ぎんこう", meaning: "은행" },
    { kanji: "病院", reading: "びょういん", meaning: "병원" },
    { kanji: "駅", reading: "えき", meaning: "역" },
    { kanji: "電車", reading: "でんしゃ", meaning: "전철" },
    { kanji: "車", reading: "くるま", meaning: "자동차" },
    { kanji: "右", reading: "みぎ", meaning: "오른쪽" },
    { kanji: "左", reading: "ひだり", meaning: "왼쪽" },
    { kanji: "上", reading: "うえ", meaning: "위" },
    { kanji: "下", reading: "した", meaning: "아래" },
    { kanji: "山", reading: "やま", meaning: "산" },
    { kanji: "川", reading: "かわ", meaning: "강" },
    { kanji: "空", reading: "そら", meaning: "하늘" },
    { kanji: "雨", reading: "あめ", meaning: "비" },
    { kanji: "雪", reading: "ゆき", meaning: "눈" },
    { kanji: "大きい", reading: "おおきい", meaning: "크다" },
    { kanji: "小さい", reading: "ちいさい", meaning: "작다" },
    { kanji: "高い", reading: "たかい", meaning: "비싸다/높다" },
    { kanji: "安い", reading: "やすい", meaning: "싸다" },
    { kanji: "新しい", reading: "あたらしい", meaning: "새롭다" },
    { kanji: "古い", reading: "ふるい", meaning: "오래되다" },
    { kanji: "良い", reading: "よい/いい", meaning: "좋다" },
    { kanji: "悪い", reading: "わるい", meaning: "나쁘다" },
    { kanji: "暑い", reading: "あつい", meaning: "덥다" },
    { kanji: "寒い", reading: "さむい", meaning: "춥다" },
    { kanji: "長い", reading: "ながい", meaning: "길다" },
    { kanji: "短い", reading: "みじかい", meaning: "짧다" },
    { kanji: "忙しい", reading: "いそがしい", meaning: "바쁘다" },
    { kanji: "月曜日", reading: "げつようび", meaning: "월요일" },
    { kanji: "火曜日", reading: "かようび", meaning: "화요일" },
    { kanji: "水曜日", reading: "すいようび", meaning: "수요일" },
    { kanji: "木曜日", reading: "もくようび", meaning: "목요일" },
    { kanji: "金曜日", reading: "きんようび", meaning: "금요일" },
    { kanji: "土曜日", reading: "どようび", meaning: "토요일" },
    { kanji: "日曜日", reading: "にちようび", meaning: "일요일" },
    { kanji: "一", reading: "いち", meaning: "1" },
    { kanji: "二", reading: "に", meaning: "2" },
    { kanji: "三", reading: "さん", meaning: "3" },
    { kanji: "四", reading: "よん/し", meaning: "4" },
    { kanji: "五", reading: "ご", meaning: "5" },
    { kanji: "六", reading: "ろく", meaning: "6" },
    { kanji: "七", reading: "なな/しち", meaning: "7" },
    { kanji: "八", reading: "はち", meaning: "8" },
    { kanji: "九", reading: "きゅう/く", meaning: "9" },
    { kanji: "十", reading: "じゅう", meaning: "10" },
    { kanji: "百", reading: "ひゃく", meaning: "100" },
    { kanji: "千", reading: "せん", meaning: "1000" },
    { kanji: "万", reading: "まん", meaning: "10000" },
    { kanji: "目", reading: "め", meaning: "눈" },
    { kanji: "耳", reading: "みみ", meaning: "귀" },
    { kanji: "口", reading: "くち", meaning: "입" },
    { kanji: "手", reading: "て", meaning: "손" },
    { kanji: "足", reading: "あし", meaning: "발, 다리" },
    { kanji: "中", reading: "なか", meaning: "안, 속" },
    { kanji: "外", reading: "そと", meaning: "밖" },
    { kanji: "間", reading: "あいだ", meaning: "사이" },
    { kanji: "北", reading: "きた", meaning: "북쪽" },
    { kanji: "南", reading: "みなみ", meaning: "남쪽" },
    { kanji: "東", reading: "ひがし", meaning: "동쪽" },
    { kanji: "西", reading: "にし", meaning: "서쪽" },
    { kanji: "木", reading: "き", meaning: "나무" },
    { kanji: "花", reading: "はな", meaning: "꽃" },
    { kanji: "魚", reading: "さかな", meaning: "물고기" },
    { kanji: "天", reading: "てん", meaning: "하늘, 천" },
    { kanji: "気", reading: "き", meaning: "기운, 마음" },
    { kanji: "天気", reading: "てんき", meaning: "날씨" },
    { kanji: "年", reading: "とし", meaning: "해, 년" },
    { kanji: "半年", reading: "はんとし", meaning: "반년" },
    { kanji: "父", reading: "ちち", meaning: "아버지" },
    { kanji: "母", reading: "はは", meaning: "어머니" },
    { kanji: "男", reading: "おとこ", meaning: "남자" },
    { kanji: "女", reading: "おんな", meaning: "여자" },
    { kanji: "子", reading: "こ", meaning: "아이" },
    { kanji: "書く", reading: "かく", meaning: "쓰다" },
    { kanji: "百円", reading: "ひゃくえん", meaning: "백 엔" },
    { kanji: "半分", reading: "はんぶん", meaning: "절반" }

  ],
  n4: [
        /* 기존 리스트 + 누락되었던 실무/생활 단어 전격 추가 (총 약 700~800개 규모) */
        { kanji: "挨拶", reading: "あいさつ", meaning: "인사" }, { kanji: "間", reading: "あいだ", meaning: "사이, 동안" }, { kanji: "赤ちゃん", reading: "あかちゃん", meaning: "아기" }, { kanji: "浅い", reading: "あさい", meaning: "얕다" }, { kanji: "味", reading: "あじ", meaning: "맛" }, { kanji: "明日", reading: "あす", meaning: "내일" }, { kanji: "遊び", reading: "あそび", meaning: "놀이" }, { kanji: "集まる", reading: "あつまる", meaning: "모이다" }, { kanji: "集める", reading: "あつめる", meaning: "모으다" }, { kanji: "謝る", reading: "あやまる", meaning: "사과하다" }, { kanji: "安心", reading: "あんしん", meaning: "안심" }, { kanji: "安全", reading: "あんぜん", meaning: "안전" }, { kanji: "案内", reading: "あんない", meaning: "안내" }, { kanji: "以下", reading: "いか", meaning: "이하" }, { kanji: "以外", reading: "いがい", meaning: "이외" }, { kanji: "医学", reading: "いがく", meaning: "의학" }, { kanji: "生きる", reading: "いきる", meaning: "살다" }, { kanji: "意見", reading: "いけん", meaning: "의견" }, { kanji: "石", reading: "いし", meaning: "돌" }, { kanji: "苛める", reading: "いじめる", meaning: "괴롭히다" }, { kanji: "以上", reading: "いじょう", meaning: "이상" }, { kanji: "急ぐ", reading: "いそぐ", meaning: "서두르다" }, { kanji: "致す", reading: "いたす", meaning: "하다(겸양)" }, { kanji: "頂く", reading: "いただく", meaning: "받다(겸양)" }, { kanji: "一度", reading: "いちど", meaning: "한 번" }, { kanji: "一生懸命", reading: "いっしょうけんめい", meaning: "열심히" }, { kanji: "糸", reading: "いと", meaning: "실" }, { kanji: "以内", reading: "いない", meaning: "이내" }, { kanji: "田舎", reading: "いなか", meaning: "시골" }, { kanji: "祈る", reading: "いのる", meaning: "기도하다" }, { kanji: "植える", reading: "うえる", meaning: "심다" }, { kanji: "伺う", reading: "うかがう", meaning: "찾아뵙다, 듣다(겸양)" }, { kanji: "受付", reading: "うけつけ", meaning: "접수처" }, { kanji: "受ける", reading: "うける", meaning: "받다, 치르다" }, { kanji: "動く", reading: "うごく", meaning: "움직이다" }, { kanji: "嘘", reading: "うそ", meaning: "거짓말" }, { kanji: "打つ", reading: "うつ", meaning: "치다, 때리다" }, { kanji: "美しい", reading: "うつくしい", meaning: "아름답다" }, { kanji: "写す", reading: "うつす", meaning: "베끼다, 찍다" }, { kanji: "移す", reading: "うつす", meaning: "옮기다" }, { kanji: "移る", reading: "うつる", meaning: "이동하다" }, { kanji: "腕", reading: "うで", meaning: "팔" }, { kanji: "裏", reading: "うら", meaning: "뒤, 안" }, { kanji: "売り場", reading: "うりば", meaning: "매장" }, { kanji: "嬉しい", reading: "うれしい", meaning: "기쁘다" }, { kanji: "運転", reading: "うんてん", meaning: "운전" }, { kanji: "運動", reading: "うんどう", meaning: "운동" }, { kanji: "枝", reading: "えだ", meaning: "가지" }, { kanji: "選ぶ", reading: "えらぶ", meaning: "고르다" }, { kanji: "遠慮", reading: "えんりょ", meaning: "사양, 삼감" }, { kanji: "お祝い", reading: "おいわい", meaning: "축하" }, { kanji: "億", reading: "おく", meaning: "억(숫자)" }, { kanji: "屋上", reading: "おくじょう", meaning: "옥상" }, { kanji: "贈り物", reading: "おくりもの", meaning: "선물" }, { kanji: "送る", reading: "おくる", meaning: "보내다" }, { kanji: "遅れる", reading: "おくれる", meaning: "늦다" }, { kanji: "起こす", reading: "おこす", meaning: "깨우다, 일으키다" }, { kanji: "行う", reading: "おこなう", meaning: "행하다" }, { kanji: "怒る", reading: "おこる", meaning: "화내다" }, { kanji: "落とす", reading: "おとす", meaning: "떨어뜨리다" }, { kanji: "踊り", reading: "おどり", meaning: "춤" }, { kanji: "踊る", reading: "おどる", meaning: "춤추다" }, { kanji: "驚く", reading: "おどろく", meaning: "놀라다" }, { kanji: "お祭り", reading: "おまつり", meaning: "축제" }, { kanji: "お見舞い", reading: "おみまい", meaning: "문병" }, { kanji: "思い出す", reading: "おもいだす", meaning: "생각해내다" }, { kanji: "思う", reading: "おもう", meaning: "생각하다" }, { kanji: "表", reading: "おもて", meaning: "겉, 앞면" }, { kanji: "折れる", reading: "おれる", meaning: "꺾이다, 부러지다" }, { kanji: "終わる", reading: "おわる", meaning: "끝나다" }, { kanji: "海岸", reading: "かいがん", meaning: "해안" }, { kanji: "会議", reading: "かいぎ", meaning: "회의" }, { kanji: "会場", reading: "かいじょう", meaning: "회장" }, { kanji: "会話", reading: "かいわ", meaning: "회화" }, { kanji: "帰り", reading: "かえり", meaning: "귀가" }, { kanji: "変える", reading: "かえる", meaning: "바꾸다" }, { kanji: "科学", reading: "かがく", meaning: "과학" }, { kanji: "鏡", reading: "かがみ", meaning: "거울" }, { kanji: "掛ける", reading: "かける", meaning: "걸다" }, { kanji: "飾る", reading: "かざる", meaning: "장식하다" }, { kanji: "火事", reading: "かじ", meaning: "화재" }, { kanji: "堅い", reading: "かたい", meaning: "단단하다" }, { kanji: "形", reading: "かたち", meaning: "모양" }, { kanji: "片付ける", reading: "かたづける", meaning: "정리하다" }, { kanji: "課長", reading: "かちょう", meaning: "과장" }, { kanji: "勝つ", reading: "かつ", meaning: "이기다" }, { kanji: "家内", reading: "かない", meaning: "아내" }, { kanji: "悲しい", reading: "かなしい", meaning: "슬프다" }, { kanji: "必ず", reading: "かならず", meaning: "반드시" }, { kanji: "雷", reading: "かみなり", meaning: "번개" }, { kanji: "髪", reading: "かみ", meaning: "머리카락" }, { kanji: "噛む", reading: "かむ", meaning: "씹다" }, { kanji: "通う", reading: "かよう", meaning: "다니다" }, { kanji: "乾く", reading: "かわく", meaning: "마르다" }, { kanji: "代わり", reading: "かわり", meaning: "대신" }, { kanji: "変わる", reading: "かわる", meaning: "변하다" }, { kanji: "考える", reading: "かんがえる", meaning: "생각하다" }, { kanji: "関係", reading: "かんけい", meaning: "관계" }, { kanji: "看護婦", reading: "かんごふ", meaning: "간호사" }, { kanji: "簡単", reading: "かんたん", meaning: "간단" }, { kanji: "機会", reading: "きかい", meaning: "기회" }, { kanji: "危険", reading: "きけん", meaning: "위험" }, { kanji: "聞こえる", reading: "きこえる", meaning: "들리다" }, { kanji: "汽車", reading: "きしゃ", meaning: "기차" }, { kanji: "技術", reading: "ぎじゅつ", meaning: "기술" }, { kanji: "季節", reading: "きせつ", meaning: "계절" }, { kanji: "規則", reading: "きそく", meaning: "규칙" }, { kanji: "絹", reading: "きぬ", meaning: "비단" }, { kanji: "厳しい", reading: "きびしい", meaning: "엄격하다" }, { kanji: "気分", reading: "きぶん", meaning: "기분" }, { kanji: "決まる", reading: "きまる", meaning: "결정되다" }, { kanji: "君", reading: "きみ", meaning: "너, 자네" }, { kanji: "決める", reading: "きめる", meaning: "결정하다" }, { kanji: "気持ち", reading: "きもち", meaning: "마음, 기분" }, { kanji: "着物", reading: "きもの", meaning: "기모노" }, { kanji: "客", reading: "きゃく", meaning: "손님" }, { kanji: "急", reading: "きゅう", meaning: "급함" }, { kanji: "急行", reading: "きゅうこう", meaning: "급행" }, { kanji: "教育", reading: "きょういく", meaning: "교육" }, { kanji: "教会", reading: "きょうかい", meaning: "교회" }, { kanji: "競争", reading: "きょうそう", meaning: "경쟁" }, { kanji: "興味", reading: "きょうみ", meaning: "흥미" }, { kanji: "近所", reading: "きんじょ", meaning: "근처" }, { kanji: "具合", reading: "ぐあい", meaning: "상태" }, { kanji: "空気", reading: "くうき", meaning: "공기" }, { kanji: "空港", reading: "くうこう", meaning: "공항" }, { kanji: "草", reading: "くさ", meaning: "풀" }, { kanji: "首", reading: "くび", meaning: "목" }, { kanji: "雲", reading: "くも", meaning: "구름" }, { kanji: "比べる", reading: "くらべる", meaning: "비교하다" }, { kanji: "暮れる", reading: "くれる", meaning: "저물다" }, { kanji: "毛", reading: "け", meaning: "털" }, { kanji: "経済", reading: "けいざい", meaning: "경제" }, { kanji: "警察", reading: "けいさつ", meaning: "경찰" }, { kanji: "景色", reading: "けしき", meaning: "경치" }, { kanji: "下宿", reading: "げしゅく", meaning: "하숙" }, { kanji: "決して", reading: "けっして", meaning: "결코" }, { kanji: "怪我", reading: "けが", meaning: "상처" }, { kanji: "計画", reading: "けいかく", meaning: "계획" }, { kanji: "経験", reading: "けいけん", meaning: "경험" }, { kanji: "月末", reading: "げつまつ", meaning: "월말" }, { kanji: "建てる", reading: "たてる", meaning: "세우다" }, { kanji: "建築", reading: "けんちく", meaning: "건축" }, { kanji: "見物", reading: "けんぶつ", meaning: "구경" }, { kanji: "喧嘩", reading: "けんか", meaning: "싸움" }, { kanji: "研究", reading: "けんきゅう", meaning: "연구" }, { kanji: "見学", reading: "けんがく", meaning: "견학" }, { kanji: "県", reading: "けん", meaning: "현(행정구역)" }, { kanji: "玄関", reading: "げんかん", meaning: "현관" }, { kanji: "高校", reading: "こうこう", meaning: "고등학교" }, { kanji: "郊外", reading: "こうがい", meaning: "교외" }, { kanji: "講義", reading: "こうぎ", meaning: "강의" }, { kanji: "工業", reading: "こうぎょう", meaning: "공업" }, { kanji: "工場", reading: "こうじょう", meaning: "공장" }, { kanji: "校長", reading: "こうちょう", meaning: "교장" }, { kanji: "交通", reading: "こうつう", meaning: "교통" }, { kanji: "講堂", reading: "こうどう", meaning: "강당" }, { kanji: "公務員", reading: "こうむいん", meaning: "공무원" }, { kanji: "国際", reading: "こくさい", meaning: "국제" }, { kanji: "故障", reading: "こしょう", meaning: "고장" }, { kanji: "事", reading: "こと", meaning: "일, 것" }, { kanji: "小鳥", reading: "ことり", meaning: "작은 새" }, { kanji: "細かい", reading: "こまかい", meaning: "잘다, 세세하다" }, { kanji: "込む", reading: "こむ", meaning: "붐비다" }, { kanji: "米", reading: "こめ", meaning: "쌀" }, { kanji: "怖い", reading: "こわい", meaning: "무섭다" }, { kanji: "壊す", reading: "こわす", meaning: "부수다" }, { kanji: "壊れる", reading: "こわれる", meaning: "부서지다" }, { kanji: "今度", reading: "こんど", meaning: "이번" }, { kanji: "今夜", reading: "こんや", meaning: "오늘 밤" }, { kanji: "最近", reading: "さいきん", meaning: "최근" }, { kanji: "最後", reading: "さいご", meaning: "마지막" }, { kanji: "最初", reading: "さいしょ", meaning: "처음" }, { kanji: "坂", reading: "さか", meaning: "언덕" }, { kanji: "探す", reading: "さがす", meaning: "찾다" }, { kanji: "下がる", reading: "さがる", meaning: "내려가다" }, { kanji: "下げる", reading: "さげる", meaning: "내리다" }, { kanji: "盛ん", reading: "さかん", meaning: "번성함" }, { kanji: "差し上げる", reading: "さしあげる", meaning: "드리다" }, { kanji: "寂しい", reading: "さびしい", meaning: "외롭다" }, { kanji: "騒ぐ", reading: "さわぐ", meaning: "떠들다" }, { kanji: "触る", reading: "さわる", meaning: "만지다" }, { kanji: "産業", reading: "さんぎょう", meaning: "산업" }, { kanji: "賛成", reading: "さんせい", meaning: "찬성" }, { kanji: "残念", reading: "ざんねん", meaning: "유감" }, { kanji: "市", reading: "し", meaning: "시(도시)" }, { kanji: "字", reading: "じ", meaning: "글자" }, { kanji: "試合", reading: "しあい", meaning: "시합" }, { kanji: "仕方", reading: "しかた", meaning: "방법" }, { kanji: "叱る", reading: "しかる", meaning: "꾸짖다" }, { kanji: "事故", reading: "じこ", meaning: "사고" }, { kanji: "地震", reading: "じしん", meaning: "지진" }, { kanji: "時代", reading: "じだい", meaning: "시대" }, { kanji: "下着", reading: "したぎ", meaning: "속옷" }, { kanji: "失敗", reading: "しっぱい", meaning: "실패" }, { kanji: "辞典", reading: "じてん", meaning: "사전" }, { kanji: "品物", reading: "しなもの", meaning: "물건" }, { kanji: "島", reading: "しま", meaning: "섬" }, { kanji: "市民", reading: "しみん", meaning: "시민" }, { kanji: "事務所", reading: "じむしょ", meaning: "사무실" }, { kanji: "社会", reading: "しゃかい", meaning: "사회" }, { kanji: "社長", reading: "しゃちょう", meaning: "사장" }, { kanji: "邪魔", reading: "じゃま", meaning: "방해" }, { kanji: "自由", reading: "じゆう", meaning: "자유" }, { kanji: "習慣", reading: "しゅうかん", meaning: "습관" }, { kanji: "住所", reading: "じゅうしょ", meaning: "주소" }, { kanji: "柔道", reading: "じゅうどう", meaning: "유도" }, { kanji: "十分", reading: "じゅうぶん", meaning: "충분함" }, { kanji: "出席", reading: "しゅっせき", meaning: "출석" }, { kanji: "出発", reading: "しゅっぱつ", meaning: "출발" }, { kanji: "趣味", reading: "しゅみ", meaning: "취미" }, { kanji: "準備", reading: "じゅんび", meaning: "준비" }, { kanji: "紹介", reading: "しょうかい", meaning: "소개" }, { kanji: "正月", reading: "しょうがつ", meaning: "설날" }, { kanji: "少女", reading: "しょうじょ", meaning: "소녀" }, { kanji: "少年", reading: "しょうねん", meaning: "소년" }, { kanji: "小説", reading: "しょうせつ", meaning: "소설" }, { kanji: "招待", reading: "しょうたい", meaning: "초대" }, { kanji: "承知", reading: "しょうち", meaning: "승낙" }, { kanji: "将来", reading: "しょうらい", meaning: "장래" }, { kanji: "食事", reading: "しょくじ", meaning: "식사" }, { kanji: "食料品", reading: "しょくりょうひん", meaning: "식료품" }, { kanji: "女性", reading: "じょせい", meaning: "여성" }, { kanji: "知らせる", reading: "しらせる", meaning: "알리다" }, { kanji: "調べる", reading: "しらべる", meaning: "조사하다" }, { kanji: "人口", reading: "じんこう", meaning: "인구" }, { kanji: "神社", reading: "じんじゃ", meaning: "신사" }, { kanji: "親切", reading: "しんせつ", meaning: "친절" }, { kanji: "心配", reading: "しんぱい", meaning: "걱정" }, { kanji: "新聞社", reading: "しんぶんしゃ", meaning: "신문사" }, { kanji: "水泳", reading: "すいえい", meaning: "수영" }, { kanji: "水道", reading: "すいどう", meaning: "수도" }, { kanji: "数学", reading: "すうがく", meaning: "수학" }, { kanji: "過ぎる", reading: "すぎる", meaning: "지나다" }, { kanji: "空く", reading: "すく", meaning: "비다" }, { kanji: "凄い", reading: "すごい", meaning: "대단하다" }, { kanji: "進む", reading: "すすむ", meaning: "나아가다" }, { kanji: "捨てる", reading: "すてる", meaning: "버리다" }, { kanji: "砂", reading: "すな", meaning: "모래" }, { kanji: "素晴らしい", reading: "すばらしい", meaning: "훌륭하다" }, { kanji: "滑る", reading: "すべる", meaning: "미끄러지다" }, { kanji: "隅", reading: "すみ", meaning: "구석" }, { kanji: "済む", reading: "すむ", meaning: "끝나다" }, { kanji: "生活", reading: "せいかつ", meaning: "생활" }, { kanji: "生産", reading: "せいさん", meaning: "생산" }, { kanji: "政治", reading: "せいじ", meaning: "정치" }, { kanji: "西洋", reading: "せいよう", meaning: "서양" }, { kanji: "世界", reading: "せかい", meaning: "세계" }, { kanji: "席", reading: "せき", meaning: "자리" }, { kanji: "説明", reading: "せつめい", meaning: "설명" }, { kanji: "背中", reading: "せなか", meaning: "등" }, { kanji: "是非", reading: "ぜひ", meaning: "시비, 부디" }, { kanji: "世話", reading: "せわ", meaning: "보살핌" }, { kanji: "線", reading: "せん", meaning: "선" }, { kanji: "戦争", reading: "せんそう", meaning: "전쟁" }, { kanji: "先輩", reading: "せんぱい", meaning: "선배" }, { kanji: "相談", reading: "そうだん", meaning: "상담" }, { kanji: "育てる", reading: "そだてる", meaning: "키우다" }, { kanji: "卒業", reading: "そつぎょう", meaning: "졸업" }, { kanji: "祖父", reading: "そふ", meaning: "할아버지" }, { kanji: "祖母", reading: "そぼ", meaning: "할머니" }, { kanji: "退院", reading: "たいいん", meaning: "퇴원" }, { kanji: "大学生", reading: "だいがくせい", meaning: "대학생" }, { kanji: "大事", reading: "だいじ", meaning: "소중함" }, { kanji: "大体", reading: "だいたい", meaning: "대체로" }, { kanji: "大抵", reading: "たいてい", meaning: "대개" }, { kanji: "台風", reading: "たいふう", meaning: "태풍" }, { kanji: "倒れる", reading: "たおれる", meaning: "쓰러지다" }, { kanji: "確か", reading: "たしか", meaning: "확실함" }, { kanji: "足す", reading: "たす", meaning: "더하다" }, { kanji: "訪ねる", reading: "たずねる", meaning: "방문하다" }, { kanji: "尋ねる", reading: "たずねる", meaning: "묻다" }, { kanji: "正しい", reading: "ただしい", meaning: "올바르다" }, { kanji: "畳", reading: "たたみ", meaning: "다다미" }, { kanji: "例えば", reading: "たとえば", meaning: "예를 들면" }, { kanji: "棚", reading: "たな", meaning: "선반" }, { kanji: "楽しみ", reading: "たのしみ", meaning: "즐거움" }, { kanji: "楽しむ", reading: "たのしむ", meaning: "즐기다" }, { kanji: "為", reading: "ため", meaning: "위함, 때문" }, { kanji: "足りる", reading: "たりる", meaning: "족하다" }, { kanji: "男性", reading: "だんせい", meaning: "남성" }, { kanji: "暖房", reading: "だんぼう", meaning: "난방" }, { kanji: "血", reading: "ち", meaning: "피" }, { kanji: "力", reading: "ちから", meaning: "힘" }, { kanji: "注意", reading: "ちゅうい", meaning: "주의" }, { kanji: "中学校", reading: "ちゅうがっこう", meaning: "중학교" }, { kanji: "注射", reading: "ちゅうしゃ", meaning: "주사" }, { kanji: "駐車場", reading: "ちゅうしゃじょう", meaning: "주차장" }, { kanji: "地理", reading: "ちり", meaning: "지리" }, { kanji: "捕まえる", reading: "つかまえる", meaning: "잡다" }, { kanji: "付き合う", reading: "つきあう", meaning: "사귀다" }, { kanji: "月", reading: "つき", meaning: "달" }, { kanji: "付く", reading: "つく", meaning: "붙다" }, { kanji: "漬ける", reading: "つける", meaning: "담그다" }, { kanji: "都合", reading: "つごう", meaning: "사정, 형편" }, { kanji: "伝える", reading: "つたえる", meaning: "전하다" }, { kanji: "続く", reading: "つづく", meaning: "계속되다" }, { kanji: "続ける", reading: "つづける", meaning: "계속하다" }, { kanji: "包む", reading: "つつむ", meaning: "싸다" }, { kanji: "妻", reading: "つま", meaning: "아내" }, { kanji: "釣る", reading: "つる", meaning: "낚다" }, { kanji: "連れる", reading: "つれる", meaning: "데리다" }, { kanji: "丁寧", reading: "ていねい", meaning: "정중함" }, { kanji: "適当", reading: "てきとう", meaning: "적당함" }, { kanji: "手伝う", reading: "てつだう", meaning: "돕다" }, { kanji: "手袋", reading: "てぶくろ", meaning: "장갑" }, { kanji: "寺", reading: "てら", meaning: "절" }, { kanji: "点", reading: "てん", meaning: "점" }, { kanji: "店員", reading: "てんいん", meaning: "점원" }, { kanji: "天気予報", reading: "てんきよほう", meaning: "일기예보" }, { kanji: "電灯", reading: "でんとう", meaning: "전등" }, { kanji: "電報", reading: "でんぽう", meaning: "전보" }, { kanji: "展覧会", reading: "てんらんかい", meaning: "전람회" }, { kanji: "都", reading: "みやこ", meaning: "수도" }, { kanji: "道具", reading: "どうぐ", meaning: "도구" }, { kanji: "動物園", reading: "どうぶつえん", meaning: "동물원" }, { kanji: "遠く", reading: "とおく", meaning: "멀리" }, { kanji: "通る", reading: "とおる", meaning: "통과하다" }, { kanji: "特に", reading: "とくに", meaning: "특히" }, { kanji: "特別", reading: "とくべつ", meaning: "특별" }, { kanji: "床屋", reading: "とこや", meaning: "이발소" }, { kanji: "途中", reading: "とちゅう", meaning: "도중" }, { kanji: "特急", reading: "とっきゅう", meaning: "특급" }, { kanji: "届ける", reading: "とどける", meaning: "보내다, 신고하다" }, { kanji: "泊まる", reading: "とまる", meaning: "머물다" }, { kanji: "止める", reading: "とめる", meaning: "세우다" }, { kanji: "取り替える", reading: "とりかえる", meaning: "바꾸다" }, { kanji: "泥棒", reading: "どろぼう", meaning: "도둑" }, { kanji: "直す", reading: "なおす", meaning: "고치다" }, { kanji: "直る", reading: "なおる", meaning: "고쳐지다" }, { kanji: "治る", reading: "なおる", meaning: "낫다(병이)" }, { kanji: "泣く", reading: "なく", meaning: "울다" }, { kanji: "無くなる", reading: "なくなる", meaning: "없어지다" }, { kanji: "亡くなる", reading: "なくなる", meaning: "돌아가시다" }, { kanji: "投げる", reading: "なげる", meaning: "던지다" }, { kanji: "鳴る", reading: "なる", meaning: "울리다" }, { kanji: "慣れる", reading: "なれる", meaning: "익숙해지다" }, { kanji: "匂い", reading: "におい", meaning: "냄새" }, { kanji: "苦い", reading: "にがい", meaning: "쓰다" }, { kanji: "逃げる", reading: "にげる", meaning: "도망치다" }, { kanji: "日記", reading: "にっき", meaning: "일기" }, { kanji: "入院", reading: "にゅういん", meaning: "입원" }, { kanji: "入学", reading: "にゅうがく", meaning: "입학" }, { kanji: "似る", reading: "にる", meaning: "닮다" }, { kanji: "人形", reading: "にんぎょう", meaning: "인형" }, { kanji: "盗む", reading: "ぬすむ", meaning: "훔치다" }, { kanji: "塗る", reading: "ぬる", meaning: "칠하다" }, { kanji: "濡れる", reading: "ぬれる", meaning: "젖다" }, { kanji: "熱", reading: "ねつ", meaning: "열" }, { kanji: "熱心", reading: "ねっしん", meaning: "열심" }, { kanji: "眠い", reading: "ねむい", meaning: "졸리다" }, { kanji: "眠る", reading: "ねむる", meaning: "잠들다" }, { kanji: "残る", reading: "のこる", meaning: "남다" }, { kanji: "乗り換える", reading: "のりかえる", meaning: "갈아타다" }, { kanji: "乗り物", reading: "のりもの", meaning: "탈것" }, { kanji: "葉", reading: "は", meaning: "잎" }, { kanji: "場合", reading: "ばあい", meaning: "경우" }, { kanji: "倍", reading: "ばい", meaning: "배" }, { kanji: "拝見", reading: "はいけん", meaning: "배견(겸양)" }, { kanji: "歯医者", reading: "はいしゃ", meaning: "치과의사" }, { kanji: "運ぶ", reading: "はこぶ", meaning: "운반하다" }, { kanji: "始める", reading: "はじめる", meaning: "시작하다" }, { kanji: "場所", reading: "ばしょ", meaning: "장소" }, { kanji: "恥ずかしい", reading: "はずかしい", meaning: "부끄럽다" }, { kanji: "発音", reading: "はつおん", meaning: "발음" }, { kanji: "花見", reading: "はなみ", meaning: "꽃구경" }, { kanji: "林", reading: "はやし", meaning: "수풀" }, { kanji: "払う", reading: "はらう", meaning: "지불하다" }, { kanji: "番組", reading: "ばんぐみ", meaning: "방송 프로그램" }, { kanji: "反対", reading: "はんたい", meaning: "반대" }, { kanji: "半分", reading: "はんぶん", meaning: "절반" }, { kanji: "冷える", reading: "ひえる", meaning: "차가워지다" }, { kanji: "光る", reading: "ひかる", meaning: "빛나다" }, { kanji: "引き出し", reading: "ひきだし", meaning: "서랍" }, { kanji: "引き出す", reading: "ひきだす", meaning: "끌어내다" }, { kanji: "飛行場", reading: "ひこうじょう", meaning: "비행장" }, { kanji: "久しぶり", reading: "ひさしぶり", meaning: "오랜만" }, { kanji: "美術館", reading: "びじゅつかん", meaning: "미술관" }, { kanji: "非常に", reading: "ひじょうに", meaning: "매우" }, { kanji: "引っ越す", reading: "ひっこす", meaning: "이사하다" }, { kanji: "必要", reading: "ひつよう", meaning: "필요" }, { kanji: "酷い", reading: "ひどい", meaning: "심하다" }, { kanji: "開く", reading: "ひらく", meaning: "열다" }, { kanji: "昼間", reading: "ひるま", meaning: "낮" }, { kanji: "昼休み", reading: "ひるやすみ", meaning: "점심시간" }, { kanji: "拾う", reading: "ひろう", meaning: "줍다" }, { kanji: "増える", reading: "ふえる", meaning: "늘다" }, { kanji: "深い", reading: "ふかい", meaning: "깊다" }, { kanji: "複雑", reading: "ふくざつ", meaning: "복잡" }, { kanji: "復習", reading: "ふくしゅう", meaning: "복습" }, { kanji: "部長", reading: "ぶちょう", meaning: "부장" }, { kanji: "太る", reading: "ふとる", meaning: "살찌다" }, { kanji: "布団", reading: "ふとん", meaning: "이불" }, { kanji: "舟", reading: "ふね", meaning: "배" }, { kanji: "不便", reading: "ふべん", meaning: "불편" }, { kanji: "踏む", reading: "ふむ", meaning: "밟다" }, { kanji: "降り出す", reading: "ふりだす", meaning: "내리기 시작하다" }, { kanji: "文化", reading: "ぶんか", meaning: "문화" }, { kanji: "文学", reading: "ぶんがく", meaning: "문학" }, { kanji: "文法", reading: "ぶんぽう", meaning: "문법" }, { kanji: "別", reading: "べつ", meaning: "다름, 별개" }, { kanji: "変", reading: "へん", meaning: "이상함" }, { kanji: "返事", reading: "へんじ", meaning: "대답, 답장" }, { kanji: "貿易", reading: "ぼうえき", meaning: "무역" }, { kanji: "放送", reading: "ほうそう", meaning: "방송" }, { kanji: "法律", reading: "ほうりつ", meaning: "법률" }, { kanji: "僕", reading: "ぼく", meaning: "나(남성)" }, { kanji: "星", reading: "ほし", meaning: "별" }, { kanji: "褒める", reading: "ほめる", meaning: "칭찬하다" }, { kanji: "翻訳", reading: "ほんやく", meaning: "번역" }, { kanji: "参る", reading: "まいる", meaning: "가다, 오다(겸양)" }, { kanji: "負ける", reading: "まける", meaning: "지다" }, { kanji: "真面目", reading: "まじめ", meaning: "성실함" }, { kanji: "間違える", reading: "まちがえる", meaning: "틀리다" }, { kanji: "間に合う", reading: "まにあう", meaning: "시간에 맞다" }, { kanji: "周り", reading: "まわり", meaning: "주위" }, { kanji: "回る", reading: "まわる", meaning: "돌다" }, { kanji: "漫画", reading: "まんが", meaning: "만화" }, { kanji: "真ん中", reading: "まんなか", meaning: "한가운데" }, { kanji: "見える", reading: "みえる", meaning: "보이다" }, { kanji: "湖", reading: "みずうみ", meaning: "호수" }, { kanji: "見つかる", reading: "みつかる", meaning: "발견되다" }, { kanji: "見つける", reading: "みつける", meaning: "찾아내다" }, { kanji: "皆", reading: "みな", meaning: "모두" }, { kanji: "港", reading: "みなと", meaning: "항구" }, { kanji: "向かう", reading: "むかう", meaning: "향하다" }, { kanji: "迎える", reading: "むかえる", meaning: "맞이하다" }, { kanji: "昔", reading: "むかし", meaning: "옛날" }, { kanji: "虫", reading: "むし", meaning: "벌레" }, { kanji: "息子", reading: "むすこ", meaning: "아들" }, { kanji: "娘", reading: "むすめ", meaning: "딸" }, { kanji: "無理", reading: "むり", meaning: "무리" }, { kanji: "召し上がる", reading: "めしあがる", meaning: "드시다" }, { kanji: "珍しい", reading: "めずらしい", meaning: "드물다" }, { kanji: "申し上げる", reading: "もうしあげる", meaning: "말씀드리다" }, { kanji: "申す", reading: "もうす", meaning: "말하다(겸양)" }, { kanji: "戻る", reading: "もどる", meaning: "되돌아가다" }, { kanji: "木綿", reading: "もめん", meaning: "무명, 면" }, { kanji: "森", reading: "もり", meaning: "숲" }, { kanji: "焼く", reading: "やく", meaning: "굽다" }, { kanji: "約束", reading: "やくそく", meaning: "약속" }, { kanji: "役に立つ", reading: "やくにたつ", meaning: "도움이 되다" }, { kanji: "焼ける", reading: "やける", meaning: "타다, 구워지다" }, { kanji: "優しい", reading: "やさしい", meaning: "상냥하다" }, { kanji: "痩せる", reading: "やせる", meaning: "살이 빠지다" }, { kanji: "止む", reading: "やむ", meaning: "그치다" }, { kanji: "止める", reading: "やめる", meaning: "그만두다" }, { kanji: "柔らかい", reading: "やわらかい", meaning: "부드럽다" }, { kanji: "湯", reading: "ゆ", meaning: "뜨거운 물" }, { kanji: "指", reading: "ゆび", meaning: "손가락" }, { kanji: "指輪", reading: "ゆびわ", meaning: "반지" }, { kanji: "夢", reading: "ゆめ", meaning: "꿈" }, { kanji: "揺れる", reading: "ゆれる", meaning: "흔들리다" }, { kanji: "用", reading: "よう", meaning: "볼일, 용무" }, { kanji: "用意", reading: "ようい", meaning: "준비" }, { kanji: "用事", reading: "ようじ", meaning: "볼일" }, { kanji: "汚れる", reading: "よごれる", meaning: "더러워지다" }, { kanji: "予習", reading: "よしゅう", meaning: "예습" }, { kanji: "予定", reading: "よてい", meaning: "예정" }, { kanji: "予約", reading: "よやく", meaning: "예약" }, { kanji: "寄る", reading: "よる", meaning: "들르다" }, { kanji: "喜ぶ", reading: "よろこぶ", meaning: "기뻐하다" }, { kanji: "理由", reading: "りゆう", meaning: "이유" }, { kanji: "利用", reading: "りよう", meaning: "이용" }, { kanji: "両方", reading: "りょうほう", meaning: "양쪽" }, { kanji: "旅館", reading: "りょかん", meaning: "여관" }, { kanji: "留守", reading: "るす", meaning: "부재중" }, { kanji: "冷房", reading: "れいぼう", meaning: "냉방" }, { kanji: "歴史", reading: "れきし", meaning: "역사" }, { kanji: "連絡", reading: "れんらく", meaning: "연락" }, { kanji: "沸かす", reading: "わかす", meaning: "끓이다" }, { kanji: "分かれる", reading: "わかれる", meaning: "나뉘다" }, { kanji: "沸く", reading: "わく", meaning: "끓다" }, { kanji: "訳", reading: "わけ", meaning: "이유, 까닭" }, { kanji: "忘れ物", reading: "わすれもの", meaning: "분실물" }, { kanji: "笑う", reading: "わらう", meaning: "웃다" }, { kanji: "割合", reading: "わりあい", meaning: "비율" }, { kanji: "割れる", reading: "われる", meaning: "깨지다" }, { kanji: "冷蔵庫", reading: "れいぞうこ", meaning: "냉장고" }, { kanji: "洗濯機", reading: "せんたくき", meaning: "세탁기" }, { kanji: "掃除機", reading: "そうじき", meaning: "청소기" }, { kanji: "壁", reading: "かべ", meaning: "벽" }, { kanji: "ごみ", reading: "ごみ", meaning: "쓰레기" }, { kanji: "原因", reading: "げんいん", meaning: "원인" }, { kanji: "結果", reading: "けっか", meaning: "결과" }, { kanji: "お土産", reading: "おみやげ", meaning: "기념품, 선물" }, { kanji: "運転手", reading: "うんてんしゅ", meaning: "운전기사" },
{ kanji: "不便", reading: "ふべん", meaning: "불편" },
{ kanji: "文学", reading: "ぶんがく", meaning: "문학" },
{ kanji: "文法", reading: "ぶんぽう", meaning: "문법" },
{ kanji: "別れる", reading: "わかれる", meaning: "헤어지다" },
{ kanji: "翻訳", reading: "ほんやく", meaning: "번역" },
{ kanji: "漫画", reading: "まん가", meaning: "만화" },
{ kanji: "準備", reading: "じゅんび", meaning: "준비" },
{ kanji: "説明", reading: "せつめい", meaning: "설명" },
{ kanji: "紹介", reading: "しょうかい", meaning: "소개" },
{ kanji: "反対", reading: "はんたい", meaning: "반대" },
{ kanji: "放送", reading: "ほうそう", meaning: "방송" },
{ kanji: "注意", reading: "ちゅうい", meaning: "주의" },
{ kanji: "用意", reading: "ようい", meaning: "준비, 용의" },
{ kanji: "品物", reading: "しなもの", meaning: "물건, 물품" },
{ kanji: "相談", reading: "そうだん", meaning: "상담" },
{ kanji: "賛成", reading: "さんせい", meaning: "찬성" }
    ],
    n3: [
      /* 기존 리스트 + 핵심 동사/형용사/명사 약 200개 추가 보정 (총 약 950개 규모) */
      { kanji: "愛情", reading: "あいじょう", meaning: "애정" }, { kanji: "合図", reading: "あいず", meaning: "신호" }, { kanji: "相手", reading: "あいて", meaning: "상대" }, { kanji: "悪魔", reading: "あくま", meaning: "악마" }, { kanji: "汗", reading: "あせ", meaning: "땀" }, { kanji: "当たり前", reading: "あたりまえ", meaning: "당연함" }, { kanji: "胃", reading: "い", meaning: "위(장기)" }, { kanji: "委員", reading: "いいん", meaning: "위원" }, { kanji: "息", reading: "いき", meaning: "숨, 호흡" }, { kanji: "居間", reading: "いま", meaning: "거실" }, { kanji: "宇宙", reading: "うちゅう", meaning: "우주" }, { kanji: "噂", reading: "うわさ", meaning: "소문" }, { kanji: "栄養", reading: "えいよう", meaning: "영양" }, { kanji: "笑顔", reading: "えがお", meaning: "웃는 얼굴" }, { kanji: "王様", reading: "おうさま", meaning: "임금님" }, { kanji: "お祝い", reading: "おいわい", meaning: "축하" }, { kanji: "温度", reading: "おんど", meaning: "온도" }, { kanji: "蚊", reading: "か", meaning: "모기" }, { kanji: "解決", reading: "かいけつ", meaning: "해결" }, { kanji: "記憶", reading: "きおく", meaning: "기억" }, { kanji: "記事", reading: "きじ", meaning: "기사" }, { kanji: "期待", reading: "きたい", meaning: "기대" }, { kanji: "休日", reading: "きゅうじつ", meaning: "휴일" }, { kanji: "共通", reading: "きょうつう", meaning: "공통" }, { kanji: "記録", reading: "きろく", meaning: "기록" }, { kanji: "偶然", reading: "ぐうぜん", meaning: "우연" }, { kanji: "苦労", reading: "くろう", meaning: "고생" }, { kanji: "経営", reading: "けいえい", meaning: "경영" }, { kanji: "警察", reading: "けいさつ", meaning: "경찰" }, { kanji: "劇", reading: "げき", meaning: "연극" }, { kanji: "結論", reading: "けつろん", meaning: "결론" }, { kanji: "建築", reading: "けんちく", meaning: "건축" }, { kanji: "氷", reading: "こおり", meaning: "얼음" }, { kanji: "呼吸", reading: "こきゅう", meaning: "호흡" }, { kanji: "砂漠", reading: "さばく", meaning: "사막" }, { kanji: "賛成", reading: "さんせい", meaning: "찬성" }, { kanji: "資源", reading: "しげん", meaning: "자원" }, { kanji: "支出", reading: "ししゅつ", meaning: "지출" }, { kanji: "事情", reading: "じじょう", meaning: "사정, 형편" }, { kanji: "状態", reading: "じょうたい", meaning: "상태" }, { kanji: "睡眠", reading: "すいみん", meaning: "수면" }, { kanji: "成功", reading: "せいこう", meaning: "성공" }, { kanji: "責任", reading: "せきにん", meaning: "책임" }, { kanji: "想像", reading: "そうぞう", meaning: "상상" }, { kanji: "態度", reading: "たいど", meaning: "태도" }, { kanji: "知識", reading: "ちしき", meaning: "지식" }, { kanji: "努力", reading: "どりょく", meaning: "노력" }, { kanji: "表情", reading: "ひょうじょう", meaning: "표정" }, { kanji: "夫婦", reading: "ふうふ", meaning: "부부" }, { kanji: "満足", reading: "まんぞく", meaning: "만족" }, { kanji: "役割", reading: "やくわり", meaning: "역할" }, { kanji: "流行", reading: "りゅうこう", meaning: "유행" }, { kanji: "恋愛", reading: "れんあい", meaning: "연애" }, { kanji: "永遠", reading: "えいえん", meaning: "영원" }, { kanji: "延期", reading: "えんき", meaning: "연기(미룸)" }, { kanji: "汚染", reading: "おせん", meaning: "오염" }, { kanji: "温暖", reading: "おんだん", meaning: "온난" }, { kanji: "改善", reading: "かいぜん", meaning: "개선" }, { kanji: "快適", reading: "かいてき", meaning: "쾌적" }, { kanji: "完了", reading: "かんりょう", meaning: "완료" }, { kanji: "管理", reading: "かんり", meaning: "관리" }, { kanji: "基礎", reading: "きそ", meaning: "기초" }, { kanji: "疑問", reading: "ぎもん", meaning: "의문" }, { kanji: "逆", reading: "ぎゃく", meaning: "역, 반대" }, { kanji: "競争", reading: "きょうそう", meaning: "경쟁" }, { kanji: "緊張", reading: "きんちょう", meaning: "긴장" }, { kanji: "具体", reading: "ぐたい", meaning: "구체" }, { kanji: "群れ", reading: "むれ", meaning: "무리, 떼" }, { kanji: "敬語", reading: "けいご", meaning: "경어" }, { kanji: "契約", reading: "けいやく", meaning: "계약" }, { kanji: "検査", reading: "けん사", meaning: "검사" }, { kanji: "限界", reading: "げんかい", meaning: "한계" }, { kanji: "幸運", reading: "こううん", meaning: "행운" }, { kanji: "効果", reading: "こうか", meaning: "효과" }, { kanji: "広告", reading: "こうこく", meaning: "광고" }, { kanji: "混雑", reading: "こんざつ", meaning: "혼잡" }, { kanji: "最小", reading: "さいしょう", meaning: "최소" }, { kanji: "才能", reading: "さいのう", meaning: "재능" }, { kanji: "差別", reading: "さべつ", meaning: "차별" }, { kanji: "参加", reading: "さんか", meaning: "참가" }, { kanji: "刺激", reading: "しげき", meaning: "자극" }, { kanji: "姿勢", reading: "しせい", meaning: "자세" }, { kanji: "湿気", reading: "しっけ", meaning: "습기" }, { kanji: "寿命", reading: "じゅみょう", meaning: "수명" }, { kanji: "就職", reading: "しゅうしょく", meaning: "취직" }, { kanji: "修正", reading: "しゅうせい", meaning: "수정" }, { kanji: "渋滞", reading: "じゅうたい", meaning: "정체(막힘)" }, { kanji: "種類", reading: "しゅるい", meaning: "종류" }, { kanji: "状況", reading: "じょうきょう", meaning: "상황" }, { kanji: "信用", reading: "しんよう", meaning: "신용" }, { kanji: "推薦", reading: "すいせん", meaning: "추천" }, { kanji: "制限", reading: "せいげん", meaning: "제한" }, { kanji: "接続", reading: "せつぞく", meaning: "접속" }, { kanji: "装置", reading: "そうち", meaning: "장치" }, { kanji: "尊敬", reading: "そんけい", meaning: "존경" }, { kanji: "対象", reading: "たいしょう", meaning: "대상" }, { kanji: "逮捕", reading: "たいほ", meaning: "체포" }, { kanji: "妥協", reading: "だきょう", meaning: "타협" }, { kanji: "単純", reading: "たんじゅん", meaning: "단순" }, { kanji: "知恵", reading: "ちえ", meaning: "지혜" }, { kanji: "注目", reading: "ちゅうもく", meaning: "주목" }, { kanji: "調査", reading: "ちょうさ", meaning: "조사" }, { kanji: "納得", reading: "なっとく", meaning: "납득" }, { kanji: "悩み", reading: "なやみ", meaning: "고민" }, { kanji: "似顔絵", reading: "にがおえ", meaning: "초상화" }, { kanji: "日常", reading: "にちじょう", meaning: "일상" }, { kanji: "農業", reading: "のうぎょう", meaning: "농업" }, { kanji: "拝見", reading: "はいけん", meaning: "배견(봄의 겸양)" }, { kanji: "爆発", reading: "ばくはつ", meaning: "폭발" }, { kanji: "罰金", reading: "ばっきん", meaning: "벌금" }, { kanji: "比較", reading: "ひかく", meaning: "비교" }, { kanji: "批判", reading: "ひはん", meaning: "비판" }, { kanji: "疲労", reading: "ひろう", meaning: "피로" }, { kanji: "武器", reading: "ぶき", meaning: "무기" }, { kanji: "物価", reading: "ぶっか", meaning: "물가" }, { kanji: "変更", reading: "へんこう", meaning: "변경" }, { kanji: "保険", reading: "ほけん", meaning: "보험" }, { kanji: "摩擦", reading: "まさつ", meaning: "마찰" }, { kanji: "魅力", reading: "みりょく", meaning: "매력" }, { kanji: "矛盾", reading: "むじゅん", meaning: "모순" }, { kanji: "免許", reading: "めんきょ", meaning: "면허" }, { kanji: "輸出", reading: "ゆしゅつ", meaning: "수출" }, { kanji: "輸入", reading: "ゆにゅう", meaning: "수입" }, { kanji: "予算", reading: "よさん", meaning: "예산" }, { kanji: "予測", reading: "よそく", meaning: "예측" }, { kanji: "利益", reading: "りえき", meaning: "이익" }, { kanji: "離婚", reading: "りこん", meaning: "이혼" }, { kanji: "留守番", reading: "るすばん", meaning: "집보기" }, { kanji: "例外", reading: "れいがい", meaning: "예외" }, { kanji: "連続", reading: "れんぞく", meaning: "연속" }, { kanji: "愛する", reading: "あいする", meaning: "사랑하다" }, { kanji: "預ける", reading: "あずける", meaning: "맡기다" }, { kanji: "与える", reading: "あたえる", meaning: "주다" }, { kanji: "扱う", reading: "あつかう", meaning: "다루다" }, { kanji: "余る", reading: "あまる", meaning: "남다" }, { kanji: "祝う", reading: "いわう", meaning: "축하하다" }, { kanji: "疑う", reading: "うたがう", meaning: "의심하다" }, { kanji: "打ち合わせる", reading: "うちあわせる", meaning: "협의하다" }, { kanji: "埋める", reading: "うめる", meaning: "묻다, 메우다" }, { kanji: "追う", reading: "おう", meaning: "쫓다" }, { kanji: "終える", reading: "おえる", meaning: "끝내다" }, { kanji: "及ぼす", reading: "およぼす", meaning: "미치게 하다" }, { kanji: "折る", reading: "おる", meaning: "꺾다, 접다" }, { kanji: "隠す", reading: "かくす", meaning: "숨기다" }, { kanji: "囲む", reading: "かこむ", meaning: "둘러싸다" }, { kanji: "稼ぐ", reading: "かせぐ", meaning: "돈을 벌다" }, { kanji: "語る", reading: "かたる", meaning: "말하다, 이야기하다" }, { kanji: "悲しむ", reading: "かなしむ", meaning: "슬퍼하다" }, { kanji: "枯れる", reading: "かれる", meaning: "마르다, 시들다" }, { kanji: "効く", reading: "きく", meaning: "효과가 있다" }, { kanji: "削る", reading: "けずる", meaning: "깎다" }, { kanji: "蹴る", reading: "ける", meaning: "차다" }, { kanji: "越える", reading: "こえる", meaning: "넘다" }, { kanji: "凍る", reading: "こおる", meaning: "얼다" }, { kanji: "転ぶ", reading: "ころぶ", meaning: "구르다, 넘어지다" }, { kanji: "殺す", reading: "ころす", meaning: "죽이다" }, { kanji: "探る", reading: "さぐる", meaning: "뒤지다, 더듬다" }, { kanji: "叫ぶ", reading: "さけぶ", meaning: "외치다" }, { kanji: "沈む", reading: "しずむ", meaning: "가라앉다" }, { kanji: "従う", reading: "したがう", meaning: "따르다" }, { kanji: "支払う", reading: "しはらう", meaning: "지불하다" }, { kanji: "救う", reading: "すくう", meaning: "구하다" }, { kanji: "過ごす", reading: "すごす", meaning: "보내다, 지내다" }, { kanji: "育つ", reading: "そだつ", meaning: "자라다" }, { kanji: "倒す", reading: "たおす", meaning: "쓰러뜨리다" }, { kanji: "抱く", reading: "だく", meaning: "안다, 품다" }, { kanji: "確かめる", reading: "たしかめる", meaning: "확인하다" }, { kanji: "助ける", reading: "たすける", meaning: "돕다" }, { kanji: "戦う", reading: "たたかう", meaning: "싸우다" }, { kanji: "頼む", reading: "たのむ", meaning: "부탁하다" }, { kanji: "試す", reading: "ためす", meaning: "시험하다" }, { kanji: "伝える", reading: "つたえる", meaning: "전하다" }, { kanji: "繋ぐ", reading: "つなぐ", meaning: "연결하다" }, { kanji: "飛ばす", reading: "とばす", meaning: "날리다" }, { kanji: "眺める", reading: "ながめる", meaning: "바라보다" }, { kanji: "治る", reading: "なおる", meaning: "낫다(병이)" }, { kanji: "泣く", reading: "なく", meaning: "울다" }, { kanji: "似る", reading: "にる", meaning: "닮다" }, { kanji: "残す", reading: "のこす", meaning: "남기다" }, { kanji: "省く", reading: "はぶく", meaning: "생략하다" }, { kanji: "流行る", reading: "はやる", meaning: "유행하다" }, { kanji: "減る", reading: "へる", meaning: "줄다" }, { kanji: "吠える", reading: "ほえる", meaning: "짖다" }, { kanji: "掘る", reading: "ほる", meaning: "파다" }, { kanji: "曲げる", reading: "まげる", meaning: "구부리다" }, { kanji: "混ざる", reading: "まざる", meaning: "섞이다" }, { kanji: "守る", reading: "まもる", meaning: "지키다" }, { kanji: "迷う", reading: "まよう", meaning: "헤매다, 망설이다" }, { kanji: "戻す", reading: "もどす", meaning: "되돌리다" }, { kanji: "燃える", reading: "もえる", meaning: "타다(불이)" }, { kanji: "雇う", reading: "やとう", meaning: "고용하다" }, { kanji: "破る", reading: "やぶる", meaning: "찢다, 깨다" }, { kanji: "辞める", reading: "やめる", meaning: "그만두다(직장)" }, { kanji: "許す", reading: "ゆるす", meaning: "용서하다, 허락하다" }, { kanji: "揺れる", reading: "ゆれる", meaning: "흔들리다" }, { kanji: "汚れる", reading: "よごれる", meaning: "더러워지다" }, { kanji: "割る", reading: "わる", meaning: "나누다, 깨다" }, { kanji: "貧しい", reading: "まずしい", meaning: "가난하다" }, { kanji: "眩しい", reading: "まぶしい", meaning: "눈부시다" },
      /* 🌟 N3 실전 대비 추가 어휘 세트 */
      { kanji: "青葉", reading: "あおば", meaning: "푸른 잎" }, { kanji: "明かり", reading: "あかり", meaning: "불빛" }, { kanji: "空き", reading: "あき", meaning: "빈자리" }, { kanji: "悪口", reading: "わるぐち", meaning: "욕설" }, { kanji: "足跡", reading: "あしあと", meaning: "발자국" }, { kanji: "味わう", reading: "あじわう", meaning: "맛보다" }, { kanji: "宛名", reading: "あてな", meaning: "수신인" }, { kanji: "暴れる", reading: "あばれる", meaning: "날뛰다" }, { kanji: "脂", reading: "あぶら", meaning: "기름" }, { kanji: "怪しい", reading: "あやしい", meaning: "수상하다" }, { kanji: "誤り", reading: "あやまり", meaning: "오류" }, { kanji: "粗い", reading: "あらい", meaning: "거칠다" }, { kanji: "嵐", reading: "あらし", meaning: "폭풍" }, { kanji: "新た", reading: "あらた", meaning: "새로움" }, { kanji: "表す", reading: "あらわす", meaning: "나타내다" }, { kanji: "現れ", reading: "あらわれ", meaning: "나타남" }, { kanji: "慌ただしい", reading: "あわただしい", meaning: "분주하다" }, { kanji: "哀れ", reading: "あわれ", meaning: "불쌍함" }, { kanji: "案外", reading: "あんがい", meaning: "의외로" }, { kanji: "暗記", reading: "あんき", meaning: "암기" }, { kanji: "安定", reading: "あんてい", meaning: "안정" }, { kanji: "一致", reading: "いっち", meaning: "일치" }, { kanji: "一般", reading: "いっぱん", meaning: "일반" }, { kanji: "一方", reading: "いっぽう", meaning: "한편" }, { kanji: "命", reading: "いのち", meaning: "생명" }, { kanji: "違反", reading: "いはん", meaning: "위반" }, { kanji: "衣服", reading: "いふく", meaning: "의복" }, { kanji: "引退", reading: "いんたい", meaning: "은퇴" }, { kanji: "引用", reading: "いんよう", meaning: "인용" }, { kanji: "浮く", reading: "うく", meaning: "뜨다" }, { kanji: "承る", reading: "うけたまわる", meaning: "듣다, 받다" }, { kanji: "失う", reading: "うしなう", meaning: "잃다" }, { kanji: "疑い", reading: "うたがい", meaning: "의심" }, { kanji: "内側", reading: "うちがわ", meaning: "안쪽" }, { kanji: "訴える", reading: "うったえる", meaning: "호소하다" }, { kanji: "奪う", reading: "うばう", meaning: "빼앗다" }, { kanji: "馬", reading: "うま", meaning: "말" }, { kanji: "生まれ", reading: "うまれ", meaning: "태생" }, { kanji: "梅", reading: "うめ", meaning: "매화" }, { kanji: "裏切る", reading: "うらぎる", meaning: "배신하다" }, { kanji: "売上", reading: "うりあげ", meaning: "매출" }, { kanji: "売り切れ", reading: "うりきれ", meaning: "매진" }, { kanji: "運河", reading: "うんが", meaning: "운하" }, { kanji: "衛星", reading: "えいせい", meaning: "위성" }, { kanji: "映像", reading: "えいぞう", meaning: "영상" }, { kanji: "英雄", reading: "えいゆう", meaning: "영웅" }, { kanji: "液体", reading: "えきたい", meaning: "액체" }, { kanji: "演技", reading: "えんぎ", meaning: "연기" }, { kanji: "援助", reading: "えんじょ", meaning: "원조" }, { kanji: "演説", reading: "えんぜつ", meaning: "연설" }, { kanji: "追いかける", reading: "おいかける", meaning: "뒤쫓다" }, { kanji: "追いつく", reading: "おいつく", meaning: "따라잡다" }, { kanji: "応援", reading: "おうえん", meaning: "응원" }, { kanji: "往復", reading: "おうふく", meaning: "왕복" }, { kanji: "応用", reading: "おうよう", meaning: "응용" }, { kanji: "大型", reading: "おおがた", meaning: "대형" }, { kanji: "大通り", reading: "おおどおり", meaning: "큰길" }, { kanji: "拝む", reading: "おがむ", meaning: "절하다" }, { kanji: "補う", reading: "おぎなう", meaning: "보충하다" }, { kanji: "奥", reading: "おく", meaning: "안쪽" }, { kanji: "穏やか", reading: "おだやか", meaning: "온화함" }, { kanji: "衰える", reading: "おとろえる", meaning: "쇠퇴하다" }, { kanji: "溺れる", reading: "おぼれる", meaning: "빠지다" }, { kanji: "思い込む", reading: "おもいこむ", meaning: "믿어버리다" }, { kanji: "思いつく", reading: "おもいつく", meaning: "생각나다" }, { kanji: "重たい", reading: "おもたい", meaning: "무겁다" }, { kanji: "卸す", reading: "おろす", meaning: "도매하다" }, { kanji: "恩恵", reading: "おんけい", meaning: "은혜" }, { kanji: "音声", reading: "おんせい", meaning: "음성" }, { kanji: "会員", reading: "かいいん", meaning: "회원" }, { kanji: "開会", reading: "かいかい", meaning: "개회" }, { kanji: "会計", reading: "かいけい", meaning: "회계" }, { kanji: "会合", reading: "かいごう", meaning: "모임" }, { kanji: "解散", reading: "かいさん", meaning: "해산" }, { kanji: "開始", reading: "かいし", meaning: "시작" }, { kanji: "解釈", reading: "かいしゃく", meaning: "해석" }, { kanji: "外出", reading: "がいしゅつ", meaning: "외출" }, { kanji: "解除", reading: "かいじょ", meaning: "해제" }, { kanji: "回数", reading: "かいすう", meaning: "횟수" }, { kanji: "回復", reading: "かいふく", meaning: "회복" }, { kanji: "解放", reading: "かいほう", meaning: "해방" }, { kanji: "香り", reading: "かおり", meaning: "향기" }, { kanji: "価格", reading: "かかく", meaning: "가격" }, { kanji: "抱える", reading: "かかえる", meaning: "안다" }, { kanji: "係", reading: "かかり", meaning: "담당" }, { kanji: "限る", reading: "かぎる", meaning: "제한하다" }, { kanji: "学習", reading: "がくしゅう", meaning: "학습" }, { kanji: "拡大", reading: "かくだい", meaning: "확대" }, { kanji: "確認", reading: "かくにん", meaning: "확인" }, { kanji: "影", reading: "かげ", meaning: "그림자" }, { kanji: "加減", reading: "かげん", meaning: "정도" }, { kanji: "過去", reading: "かこ", meaning: "과거" }, { kanji: "火災", reading: "かさい", meaning: "화재" }, { kanji: "菓子", reading: "かし", meaning: "과자" }, { kanji: "賢い", reading: "かしこい", meaning: "현명하다" }, { kanji: "稼ぎ", reading: "かせぎ", meaning: "벌이" }, { kanji: "数える", reading: "かぞえる", meaning: "세다" }, { kanji: "型", reading: "かた", meaning: "틀" }, { kanji: "偏る", reading: "かたよる", meaning: "치우치다" }, { kanji: "楽器", reading: "がっき", meaning: "악기" }, { kanji: "勝手", reading: "かって", meaning: "제멋대로" }, { kanji: "活動", reading: "かつどう", meaning: "활동" }, { kanji: "可能", reading: "かのう", meaning: "가능" }, { kanji: "株", reading: "かぶ", meaning: "주식" }, { kanji: "我慢", reading: "がまん", meaning: "인내" }, { kanji: "雷", reading: "かみなり", meaning: "번개" }, { kanji: "画面", reading: "가めん", meaning: "화면" }, { kanji: "皮", reading: "かわ", meaning: "껍질" }, { kanji: "乾く", reading: "かわく", meaning: "마르다" }, { kanji: "環境", reading: "かんきょう", meaning: "환경" }, { kanji: "歓迎", reading: "かんげい", meaning: "환영" }, { kanji: "感激", reading: "かんげき", meaning: "감격" }, { kanji: "観光", reading: "かんこう", meaning: "관광" }, { kanji: "観察", reading: "かんさつ", meaning: "관찰" }, { kanji: "感謝", reading: "かんしゃ", meaning: "감사" }, { kanji: "勘定", reading: "かんじょう", meaning: "계산" }, { kanji: "感情", reading: "かんじょう", meaning: "감정" }, { kanji: "関心", reading: "かんしん", meaning: "관심" }, { kanji: "感心", reading: "かんしん", meaning: "감탄" }, { kanji: "完成", reading: "かんせい", meaning: "완성" }, { kanji: "完全", reading: "かんぜん", meaning: "완전" }, { kanji: "感動", reading: "かんどう", meaning: "감동" }, { kanji: "監督", reading: "かんとく", meaning: "감독" }, { kanji: "看板", reading: "かんばん", meaning: "간판" }, { kanji: "看病", reading: "かんびょう", meaning: "간병" }, { kanji: "関連", reading: "かんれん", meaning: "관련" }, { kanji: "議員", reading: "ぎいん", meaning: "의원" }, { kanji: "期間", reading: "きかん", meaning: "기간" }, { kanji: "企業", reading: "きぎょう", meaning: "기업" }, { kanji: "気候", reading: "きこう", meaning: "기후" }, { kanji: "記号", reading: "きご우", meaning: "기호" }, { kanji: "刻む", reading: "きざむ", meaning: "새기다" }, { kanji: "儀式", reading: "ぎしき", meaning: "의식" }, { kanji: "基準", reading: "きじゅん", meaning: "기준" }, { kanji: "起床", reading: "きしょう", meaning: "기상" }, { kanji: "基礎", reading: "きそ", meaning: "기초" }, { kanji: "貴重", reading: "きちょう", meaning: "귀중" }, { kanji: "記入", reading: "きにゅう", meaning: "기입" }, { kanji: "記念", reading: "きねん", meaning: "기념" }, { kanji: "機能", reading: "きのう", meaning: "기능" }, { kanji: "気の毒", reading: "きのどく", meaning: "가엾음" }, { kanji: "寄付", reading: "きふ", meaning: "기부" }, { kanji: "希望", reading: "きぼう", meaning: "희망" }, { kanji: "基本", reading: "きほん", meaning: "기본" }, { kanji: "奇妙", reading: "きみょう", meaning: "기묘" }, { kanji: "義務", reading: "ぎむ", meaning: "의무" }, { kanji: "休憩", reading: "きゅうけい", meaning: "휴식" }, { kanji: "急激", reading: "きゅうげき", meaning: "급격" }, { kanji: "吸収", reading: "きゅうしゅう", meaning: "흡수" }, { kanji: "救助", reading: "きゅうじょ", meaning: "구조" }, { kanji: "急速", reading: "きゅうそく", meaning: "급속" }, { kanji: "給与", reading: "きゅうよ", meaning: "급여" }, { kanji: "清い", reading: "きよい", meaning: "맑다" }, { kanji: "器用", reading: "きよう", meaning: "재주" }, { kanji: "距離", reading: "きょり", meaning: "거리" }, { kanji: "金額", reading: "きんがく", meaning: "금액" }, { kanji: "禁止", reading: "きんし", meaning: "금지" }, { kanji: "近代", reading: "きんだい", meaning: "근대" }, { kanji: "筋肉", reading: "きんにく", meaning: "근육" }, { kanji: "金融", reading: "きんゆう", meaning: "금융" }, { kanji: "空想", reading: "くうそう", meaning: "공상" }, { kanji: "釘", reading: "くぎ", meaning: "못" }, { kanji: "区切り", reading: "くぎり", meaning: "단락" }, { kanji: "工夫", reading: "くふう", meaning: "궁리" }, { kanji: "区分", reading: "くぶん", meaning: "구분" }, { kanji: "暮らす", reading: "くらす", meaning: "살다" }, { kanji: "繰り返す", reading: "くりかえす", meaning: "반복하다" }, { kanji: "狂う", reading: "쿠루우", meaning: "미치다" }, { kanji: "訓練", reading: "くんれん", meaning: "훈련" }, { kanji: "血液", reading: "けつえき", meaning: "혈액" }, { kanji: "結果", reading: "けっか", meaning: "결과" }, { kanji: "決心", reading: "けっしん", meaning: "결심" }, { kanji: "決定", reading: "けってい", meaning: "결정" }, { kanji: "欠点", reading: "けってん", meaning: "결점" }, { kanji: "現在", reading: "げんざい", meaning: "현재" }, { kanji: "建設", reading: "けんせつ", meaning: "건설" }, { kanji: "現代", reading: "げんだい", meaning: "현대" }, { kanji: "検討", reading: "けんとう", meaning: "검토" }, { kanji: "現場", reading: "げんば", meaning: "현장" }, { kanji: "憲法", reading: "けんぽう", meaning: "헌법" }, { kanji: "権利", reading: "けんり", meaning: "권리" }, { kanji: "講演", reading: "こうえん", meaning: "강연" }, { kanji: "効果", reading: "こうか", meaning: "효과" }, { kanji: "交換", reading: "こうかん", meaning: "교환" }, { kanji: "合計", reading: "ごうけい", meaning: "합계" }, { kanji: "攻撃", reading: "こうげき", meaning: "공격" }, { kanji: "貢献", reading: "こうけん", meaning: "공헌" }, { kanji: "広告", reading: "こうこく", meaning: "광고" }, { kanji: "構成", reading: "こうせい", meaning: "구성" }, { kanji: "高速", reading: "こうそく", meaning: "고속" }, { kanji: "行動", reading: "こうどう", meaning: "행동" }, { kanji: "候補", reading: "こうほ", meaning: "후보" }, { kanji: "考慮", reading: "こうりょ", meaning: "고려" }, { kanji: "誤解", reading: "ごかい", meaning: "오해" }, { kanji: "故郷", reading: "こきょう", meaning: "고향" }, { kanji: "国籍", reading: "こくせき", meaning: "국적" }, { kanji: "個人", reading: "こじん", meaning: "개인" }, { kanji: "断る", reading: "ことわる", meaning: "거절하다" }, { kanji: "困難", reading: "こんなん", meaning: "곤란" }, { kanji: "婚約", reading: "こんやく", meaning: "약혼" }, { kanji: "混乱", reading: "こんらん", meaning: "혼란" }, { kanji: "際", reading: "さい", meaning: "즈음" }, { kanji: "財産", reading: "ざいさん", meaning: "재산" }, { kanji: "裁判", reading: "さいばん", meaning: "재판" }, { kanji: "材料", reading: "ざいりょう", meaning: "재료" }, { kanji: "避ける", reading: "사ける", meaning: "피하다" }, { kanji: "支える", reading: "사사える", meaning: "지탱하다" }, { kanji: "指す", reading: "사스", meaning: "가리키다" }, { kanji: "差別", reading: "사베つ", meaning: "차별" }, { kanji: "作法", reading: "사ほう", meaning: "예법" }, { kanji: "左右", reading: "사ゆう", meaning: "좌우" }, { kanji: "参考", reading: "さんこう", meaning: "참고" }, { kanji: "酸素", reading: "さんそ", meaning: "산소" }, { kanji: "支配", reading: "しはい", meaning: "지배" }, { kanji: "資本", reading: "しほん", meaning: "자본" }, { kanji: "示す", reading: "しめす", meaning: "보이다" }, { kanji: "占める", reading: "しめる", meaning: "차지하다" }, { kanji: "周囲", reading: "しゅうい", meaning: "주위" }, { kanji: "収穫", reading: "しゅうかく", meaning: "수확" }, { kanji: "宗教", reading: "しゅうきょう", meaning: "종교" }, { kanji: "重視", reading: "じゅうし", meaning: "중시" }, { kanji: "重大", reading: "じゅうだい", meaning: "중대" }, { kanji: "住宅", reading: "じゅうたく", meaning: "주택" }, { kanji: "集団", reading: "しゅうだん", meaning: "집단" }, { kanji: "集中", reading: "しゅうちゅう", meaning: "집중" }, { kanji: "収入", reading: "しゅうにゅう", meaning: "수입" }, { kanji: "住民", reading: "じゅうみん", meaning: "주민" }, { kanji: "修理", reading: "しゅうり", meaning: "수리" }, { kanji: "主義", reading: "しゅぎ", meaning: "주의" }, { kanji: "宿泊", reading: "しゅくはく", meaning: "숙박" }, { kanji: "首相", reading: "しゅしょう", meaning: "수상" }, { kanji: "手段", reading: "しゅだん", meaning: "수단" }, { kanji: "主張", reading: "しゅちょう", meaning: "주장" }, { kanji: "出版", reading: "しゅっぱん", meaning: "출판" }, { kanji: "瞬間", reading: "しゅんかん", meaning: "순간" }, { kanji: "順調", reading: "じゅんちょう", meaning: "순조" }, { kanji: "消費", reading: "しょうひ", meaning: "소비" }, { kanji: "消防", reading: "しょうぼう", meaning: "소방" }, { kanji: "証明", reading: "しょうめい", meaning: "증명" }, { kanji: "女王", reading: "じょおう", meaning: "여왕" }, { kanji: "職", reading: "しょく", meaning: "직" }, { kanji: "書斎", reading: "しょさい", meaning: "서재" }, { kanji: "署名", reading: "しょめい", meaning: "서명" }, { kanji: "処理", reading: "しょり", meaning: "처리" }, { kanji: "書類", reading: "しょるい", meaning: "서류" }, { kanji: "神経", reading: "しんけい", meaning: "신경" }, { kanji: "信仰", reading: "しんこう", meaning: "신앙" }, { kanji: "深刻", reading: "しんこく", meaning: "심각" }, { kanji: "診察", reading: "しんさつ", meaning: "진찰" }, { kanji: "人種", reading: "じんしゅ", meaning: "인종" }, { kanji: "身長", reading: "しんちょう", meaning: "신장" }, { kanji: "慎重", reading: "しんちょう", meaning: "신중" }, { kanji: "審判", reading: "しんぱん", meaning: "심판" }, { kanji: "進歩", reading: "しんぽ", meaning: "진보" }, { kanji: "信頼", reading: "しんらい", meaning: "신뢰" }, { kanji: "心理", reading: "しんり", meaning: "심리" }, { kanji: "人類", reading: "じんるい", meaning: "인류" }, { kanji: "水準", reading: "すいじゅん", meaning: "수준" }, { kanji: "数字", reading: "すうじ", meaning: "숫자" }, { kanji: "姿", reading: "すがた", meaning: "모습" }, { kanji: "勧める", reading: "すすめる", meaning: "권하다" }, { kanji: "頭痛", reading: "ずつう", meaning: "두통" }, { kanji: "鋭い", reading: "するどい", meaning: "날카롭다" }, { kanji: "請求", reading: "せいきゅう", meaning: "청구" }, { kanji: "清潔", reading: "せいけつ", meaning: "청결" }, { kanji: "正式", reading: "せいしき", meaning: "정식" }, { kanji: "精神", reading: "せいしん", meaning: "정신" }, { kanji: "成人", reading: "せいじん", meaning: "성인" }, { kanji: "成績", reading: "せいせき", meaning: "성적" }, { kanji: "製造", reading: "せいぞう", meaning: "제조" }, { kanji: "贅沢", reading: "ぜいたく", meaning: "사치" }, { kanji: "整理", reading: "せいり", meaning: "정리" }, { kanji: "石油", reading: "せきゆ", meaning: "석유" }, { kanji: "世間", reading: "せけん", meaning: "세상" }, { kanji: "積極的", reading: "せっきょくてき", meaning: "적극적" }, { kanji: "設計", reading: "せっけい", meaning: "설계" }, { kanji: "絶対", reading: "ぜったい", meaning: "절대" }, { kanji: "絶望", reading: "ぜつぼう", meaning: "절망" }, { kanji: "全員", reading: "ぜんいん", meaning: "전원" }, { kanji: "専攻", reading: "せんこう", meaning: "전공" }, { kanji: "前進", reading: "ぜんしん", meaning: "전진" }, { kanji: "増加", reading: "ぞうか", meaning: "증가" }, { kanji: "操作", reading: "そうさ", meaning: "조작" }, { kanji: "相続", reading: "そうぞく", meaning: "상속" }, { kanji: "相当", reading: "そうとう", meaning: "상당" }, { kanji: "組織", reading: "そしき", meaning: "조직" }, { kanji: "備える", reading: "そなえる", meaning: "대비하다" }, { kanji: "損害", reading: "そんがい", meaning: "손해" }, { kanji: "尊重", reading: "そんちょう", meaning: "존중" },// n3 배열 끝에 추가해 주세요
{ kanji: "普及", reading: "ふきゅう", meaning: "보급" },
{ kanji: "義務", reading: "ぎむ", meaning: "의무" },
{ kanji: "権利", reading: "けんり", meaning: "권리" },
{ kanji: "常に", reading: "つねに", meaning: "항상" },
{ kanji: "次第", reading: "しだい", meaning: "~에 따라, 순서" },
{ kanji: "蓄える", reading: "たくわえる", meaning: "저장하다, (수염을) 기르다" },
{ kanji: "補う", reading: "おぎなう", meaning: "보충하다" },
{ kanji: "逆", reading: "ぎゃく", meaning: "거꾸로, 반대" },
{ kanji: "貴重", reading: "きちょう", meaning: "귀중함" },
{ kanji: "担当", reading: "たんとう", meaning: "담당" },
{ kanji: "結局", reading: "けっきょく", meaning: "결국" }
    ],
  n2: [], n1: []
};
let oboetaWords = JSON.parse(localStorage.getItem('oboetaWords')) || [];
let oboenakattaWords = JSON.parse(localStorage.getItem('oboenakattaWords')) || [];
let currentDisplayedWords = [];
let currentWordIndex = 0;
let currentLevel = 'n5';

let quizWords = [];
let incorrectQuestions = [];
let currentQuizIndex = 0;
let score = 0;
let quizConfig = { level: 'n5', type: 'meaning', count: 20 }; // count 기본값 20
let currentCorrectAnswerStr = "";

let reviewIndex = 0;

// 🌟 글로벌 숨김 상태 변수 (단어를 넘겨도 상태가 유지됨)
let hideState = { kanji: false, reading: false, meaning: false };
let revHideState = { kanji: false, reading: false, meaning: false };

const vocabularyDisplay = document.getElementById('vocabulary-display');
const searchInput = document.getElementById('word-search');
const vocabularyModal = document.getElementById('vocabulary-modal');
const helpModal = document.getElementById('help-modal');

// 화면 전환
function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active-screen');
  window.scrollTo(0, 0);

  document.querySelectorAll('.nav-item:not(.help-btn)').forEach(nav => nav.classList.remove('active'));
  if (screenId === 'screen-home') document.getElementById('nav-home').classList.add('active');
  if (screenId === 'screen-vocab') {
      document.getElementById('nav-vocab').classList.add('active');
      displayVocabulary(currentLevel);
  }
  if (screenId.includes('quiz') || screenId.includes('review')) {
      document.getElementById('nav-test').classList.add('active');
  }
}

function openHelp() { helpModal.style.display = 'flex'; }
function closeHelp() { helpModal.style.display = 'none'; }

// 단어 리스트 표시
function displayVocabulary(level, searchTerm = '') {
  currentLevel = level;
  vocabularyDisplay.innerHTML = '';
  
  let all = [];
  ['n5', 'n4', 'n3', 'n2', 'n1'].forEach(lvl => {
      if (vocabulary[lvl]) vocabulary[lvl].forEach(w => all.push({...w, level: lvl}));
  });

  let words = [];
  if (level === 'oboeta') words = all.filter(w => oboetaWords.includes(w.kanji));
  else if (level === 'oboenakatta') words = all.filter(w => oboenakattaWords.includes(w.kanji));
  else words = vocabulary[level] || [];

  if (searchTerm) {
      const t = searchTerm.toLowerCase();
      words = words.filter(w => w.kanji.includes(t) || w.meaning.includes(t) || w.reading.includes(t));
  }

  currentDisplayedWords = words;

  if (words.length > 0) {
      words.forEach((w, i) => {
          const card = document.createElement('div');
          card.className = 'vocabulary-card hover-effect';
          
          const isOboeta = oboetaWords.includes(w.kanji) ? 'active' : '';
          const isOboenakatta = oboenakattaWords.includes(w.kanji) ? 'active' : '';

          card.innerHTML = `
              <div class="kanji" onclick="showModal(${i})">${w.kanji}</div>
              <div class="reading" onclick="showModal(${i})">${w.reading}</div>
              <div class="meaning" onclick="showModal(${i})">${w.meaning}</div>
              <div class="card-btn-group">
                  <button class="status-btn oboeta-btn ${isOboeta}" onclick="toggleWordStatus(event, '${w.kanji}', 'oboeta')">覚えた</button>
                  <button class="status-btn oboenakatta-btn ${isOboenakatta}" onclick="toggleWordStatus(event, '${w.kanji}', 'oboenakatta')">覚えなかった</button>
              </div>
          `;
          vocabularyDisplay.appendChild(card);
      });
  } else {
      vocabularyDisplay.innerHTML = `<p style="grid-column: 1/-1; color: #888; padding: 50px; text-align:center;">해당하는 단어가 없습니다.</p>`;
  }
}

function toggleWordStatus(event, kanji, target) {
  if(event) event.stopPropagation();

  oboetaWords = oboetaWords.filter(w => w !== kanji);
  oboenakattaWords = oboenakattaWords.filter(w => w !== kanji);
  
  const oldOboeta = JSON.parse(localStorage.getItem('oboetaWords')) || [];
  const oldOboenakatta = JSON.parse(localStorage.getItem('oboenakattaWords')) || [];
  let currentStatus = oldOboeta.includes(kanji) ? 'oboeta' : (oldOboenakatta.includes(kanji) ? 'oboenakatta' : 'none');

  if (currentStatus !== target) {
      if (target === 'oboeta') oboetaWords.push(kanji);
      else if (target === 'oboenakatta') oboenakattaWords.push(kanji);
  }

  localStorage.setItem('oboetaWords', JSON.stringify(oboetaWords));
  localStorage.setItem('oboenakattaWords', JSON.stringify(oboenakattaWords));
  
  displayVocabulary(currentLevel, searchInput.value);
  if (vocabularyModal.style.display === 'flex') updateModalButtons(kanji);
}

// 🌟 큰 단어 카드 모달 제어
function showModal(index) {
  currentWordIndex = index;
  const word = currentDisplayedWords[index];
  const k = document.getElementById('modal-kanji');
  const r = document.getElementById('modal-reading');
  const m = document.getElementById('modal-meaning');
  
  document.getElementById('modal-word-number').textContent = `KANJI ${currentWordIndex + 1} / ${currentDisplayedWords.length}`;
  
  k.textContent = word.kanji;
  r.textContent = word.reading;
  m.textContent = word.meaning;

  // 4글자 이상일 때 폰트 축소 (클래스 토글)
  if (word.kanji.length >= 4) k.classList.add('kanji-long');
  else k.classList.remove('kanji-long');

  // 모달 띄울 때 "글로벌 숨김 상태"를 적용 (초기화하지 않음)
  applyHideStates();

  updateModalButtons(word.kanji);
  vocabularyModal.style.display = 'flex';
  
  document.getElementById('nav-prev').style.visibility = (currentWordIndex === 0) ? 'hidden' : 'visible';
  document.getElementById('nav-next').style.visibility = (currentWordIndex === currentDisplayedWords.length - 1) ? 'hidden' : 'visible';
}

function navigateWord(dir) {
  if (dir === 'prev' && currentWordIndex > 0) currentWordIndex--;
  else if (dir === 'next' && currentWordIndex < currentDisplayedWords.length - 1) currentWordIndex++;
  showModal(currentWordIndex);
}

function closeModal() { vocabularyModal.style.display = 'none'; }

function updateModalButtons(kanji) {
  const oboetaBtn = document.getElementById('modal-oboeta-btn');
  const oboenakattaBtn = document.getElementById('modal-oboenakatta-btn');
  oboetaBtn.className = `status-btn oboeta-btn ${oboetaWords.includes(kanji) ? 'active' : ''}`;
  oboenakattaBtn.className = `status-btn oboenakatta-btn ${oboenakattaWords.includes(kanji) ? 'active' : ''}`;
  oboetaBtn.onclick = (e) => toggleWordStatus(e, kanji, 'oboeta');
  oboenakattaBtn.onclick = (e) => toggleWordStatus(e, kanji, 'oboenakatta');
}

// 🌟 퀴즈 시스템
function startQuiz() {
  let words = vocabulary[quizConfig.level];
  if (!words || words.length < 4) return alert("해당 레벨의 단어가 4개 이상 필요합니다.");

  // 문항 수 적용
  let count = parseInt(quizConfig.count);
  quizWords = [...words].sort(() => Math.random() - 0.5).slice(0, count); 
  incorrectQuestions = [];
  currentQuizIndex = 0;
  score = 0;

  switchScreen('screen-quiz-active');
  loadQuizQuestion();
}

function loadQuizQuestion() {
  const currentWord = quizWords[currentQuizIndex];
  document.getElementById('quiz-progress').textContent = `${currentQuizIndex + 1} / ${quizWords.length}`;
  
  let type = quizConfig.type === 'random' ? ['meaning', 'reading', 'kanji'][Math.floor(Math.random() * 3)] : quizConfig.type;
  const label = document.getElementById('quiz-question-label');
  const kanjiEl = document.getElementById('quiz-kanji');
  
  if (currentWord.kanji.length >= 4) kanjiEl.classList.add('kanji-long');
  else kanjiEl.classList.remove('kanji-long');

  if (type === 'meaning') {
      label.textContent = "이 한자의 뜻은?";
      kanjiEl.textContent = currentWord.kanji;
      currentCorrectAnswerStr = currentWord.meaning;
  } else if (type === 'reading') {
      label.textContent = "이 한자의 읽기는?";
      kanjiEl.textContent = currentWord.kanji;
      currentCorrectAnswerStr = currentWord.reading;
  } else {
      label.textContent = "다음 뜻/음을 가진 한자는?";
      kanjiEl.textContent = `${currentWord.meaning} (${currentWord.reading})`;
      currentCorrectAnswerStr = currentWord.kanji;
  }

  let opts = [currentCorrectAnswerStr];
  let allPool = vocabulary[quizConfig.level]; 
  while(opts.length < 4) {
      let rand = allPool[Math.floor(Math.random() * allPool.length)];
      let val = (type === 'meaning') ? rand.meaning : (type === 'reading' ? rand.reading : rand.kanji);
      if(!opts.includes(val)) opts.push(val);
  }
  opts.sort(() => Math.random() - 0.5);
  
  const container = document.getElementById('quiz-options');
  container.innerHTML = '';
  opts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'menu-btn hover-effect';
      btn.style.fontSize = '1.2em';
      btn.style.padding = '15px';
      btn.textContent = opt;
      btn.onclick = () => handleQuizAnswer(btn, opt === currentCorrectAnswerStr, currentWord);
      container.appendChild(btn);
  });
}

function handleQuizAnswer(btn, isCorrect, word) {
  if (isCorrect) { btn.style.borderColor = 'var(--green)'; score++; }
  else { btn.style.borderColor = 'var(--red)'; incorrectQuestions.push(word); }
  setTimeout(() => { proceedQuiz(); }, 500);
}

function proceedQuiz() {
  currentQuizIndex++;
  if(currentQuizIndex < quizWords.length) loadQuizQuestion();
  else endQuiz();
}

function endQuiz() {
  document.getElementById('final-score').textContent = score;
  document.getElementById('total-score').textContent = quizWords.length;
  document.getElementById('btn-review-incorrect').style.display = incorrectQuestions.length > 0 ? 'block' : 'none';
  switchScreen('screen-quiz-result');
}

// 🌟 오답 노트
function startIncorrectReview() {
  reviewIndex = 0;
  switchScreen('screen-incorrect-review');
  loadReviewWord();
}

function loadReviewWord() {
  const word = incorrectQuestions[reviewIndex];
  document.getElementById('review-progress-card').textContent = `오답 ${reviewIndex + 1} / ${incorrectQuestions.length}`;
  
  const k = document.getElementById('rev-kanji');
  const r = document.getElementById('rev-reading');
  const m = document.getElementById('rev-meaning');
  
  k.textContent = word.kanji;
  r.textContent = word.reading;
  m.textContent = word.meaning;

  if (word.kanji.length >= 4) k.classList.add('kanji-long');
  else k.classList.remove('kanji-long');

  // 오답 카드 띄울 때 "글로벌 오답 숨김 상태" 적용
  applyRevHideStates();
}

function markAsMemorized() {
    reviewIndex++;
    if (reviewIndex < incorrectQuestions.length) {
        loadReviewWord();
    } else {
        switchScreen('screen-review-complete');
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

// 🌟 숨김/보임 클릭 이벤트 제어 로직 (글로벌 상태 적용)
function setupClickToHide() {
    // 단어장 모달
    document.getElementById('modal-kanji').onclick = () => { hideState.kanji = !hideState.kanji; applyHideStates(); };
    document.getElementById('modal-reading').onclick = () => { hideState.reading = !hideState.reading; applyHideStates(); };
    document.getElementById('modal-meaning').onclick = () => { hideState.meaning = !hideState.meaning; applyHideStates(); };

    // 오답 노트
    document.getElementById('rev-kanji').onclick = () => { revHideState.kanji = !revHideState.kanji; applyRevHideStates(); };
    document.getElementById('rev-reading').onclick = () => { revHideState.reading = !revHideState.reading; applyRevHideStates(); };
    document.getElementById('rev-meaning').onclick = () => { revHideState.meaning = !revHideState.meaning; applyRevHideStates(); };
}

function applyHideStates() {
    document.getElementById('modal-kanji').classList.toggle('hidden-content', hideState.kanji);
    document.getElementById('modal-reading').classList.toggle('hidden-content', hideState.reading);
    document.getElementById('modal-meaning').classList.toggle('hidden-content', hideState.meaning);
}

function applyRevHideStates() {
    document.getElementById('rev-kanji').classList.toggle('hidden-content', revHideState.kanji);
    document.getElementById('rev-reading').classList.toggle('hidden-content', revHideState.reading);
    document.getElementById('rev-meaning').classList.toggle('hidden-content', revHideState.meaning);
}

window.onload = () => {
  setupClickToHide(); // 클릭 숨김 셋업
  
  if (searchInput) searchInput.oninput = (e) => displayVocabulary(currentLevel, e.target.value);
  
  document.getElementById('level-selection').onclick = (e) => {
      const btn = e.target.closest('.level-button');
      if (btn) {
          document.querySelectorAll('#level-selection .level-button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          displayVocabulary(btn.dataset.level);
      }
  };

  // 🌟 퀴즈 설정 버튼 제어 (문항 수 포함)
  document.querySelectorAll('.quiz-setup-list .btn-group').forEach(group => {
        group.onclick = (e) => {
            const btn = e.target.closest('.level-button');
            if (btn) {
                group.querySelectorAll('.level-button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                if (group.id === 'setup-level') quizConfig.level = btn.dataset.val;
                if (group.id === 'setup-type') quizConfig.type = btn.dataset.val;
                if (group.id === 'setup-count') quizConfig.count = btn.dataset.val; // 문항 수 업데이트
            }
        };
    });
};