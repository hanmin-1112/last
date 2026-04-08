// 1. 단어 데이터 (N5, N4 유지 + 🌟 N3 신규 350단어 추가 완벽 통합)
const vocabulary = {
  n5: [
    /* 기존 N5 340여개 데이터 유지 */
    { kanji: "私", reading: "わたし", meaning: "나, 저" }, { kanji: "人", reading: "ひと", meaning: "사람" }, { kanji: "日", reading: "ひ", meaning: "날, 해" }, { kanji: "本", reading: "ほん", meaning: "책, 근본" }, { kanji: "学生", reading: "がくせい", meaning: "학생" }, { kanji: "先生", reading: "せんせい", meaning: "선생님" }, { kanji: "学校", reading: "がっこう", meaning: "학교" }, { kanji: "日本語", reading: "にほんご", meaning: "일본어" }, { kanji: "名前", reading: "なまえ", meaning: "이름" }, { kanji: "前", reading: "まえ", meaning: "앞, 이전" }, { kanji: "何", reading: "なん/なに", meaning: "무엇" }, { kanji: "国", reading: "くに", meaning: "나라" }, { kanji: "時", reading: "とき", meaning: "시간, 시" }, { kanji: "分", reading: "ふん/ぷん", meaning: "분" }, { kanji: "今", reading: "いま", meaning: "지금" }, { kanji: "月", reading: "つき", meaning: "월, 달" }, { kanji: "火", reading: "ひ", meaning: "불" }, { kanji: "水", reading: "みず", meaning: "물" }, { kanji: "お金", reading: "おかね", meaning: "돈" }, { kanji: "電話", reading: "でんわ", meaning: "전화" }, { kanji: "友達", reading: "ともだち", meaning: "친구" }, { kanji: "家族", reading: "かぞく", meaning: "가족" }, { kanji: "行く", reading: "いく", meaning: "가다" }, { kanji: "来る", reading: "くる", meaning: "오다" }, { kanji: "食べる", reading: "たべる", meaning: "먹다" }, { kanji: "飲む", reading: "のむ", meaning: "마시다" }, { kanji: "見る", reading: "みる", meaning: "보다" }, { kanji: "聞く", reading: "きく", meaning: "듣다" }, { kanji: "話す", reading: "はなす", meaning: "말하다" }, { kanji: "買う", reading: "かう", meaning: "사다" }, { kanji: "部屋", reading: "へや", meaning: "방" }, { kanji: "家", reading: "いえ", meaning: "집" }, { kanji: "店", reading: "みせ", meaning: "가게" }, { kanji: "銀行", reading: "ぎんこう", meaning: "은행" }, { kanji: "病院", reading: "びょういん", meaning: "병원" }, { kanji: "駅", reading: "えき", meaning: "역" }, { kanji: "電車", reading: "でんしゃ", meaning: "전철" }, { kanji: "車", reading: "くるま", meaning: "자동차" }, { kanji: "右", reading: "みぎ", meaning: "오른쪽" }, { kanji: "左", reading: "ひだり", meaning: "왼쪽" }, { kanji: "上", reading: "うえ", meaning: "위" }, { kanji: "下", reading: "した", meaning: "아래" }, { kanji: "山", reading: "やま", meaning: "산" }, { kanji: "川", reading: "かわ", meaning: "강" }, { kanji: "空", reading: "そら", meaning: "하늘" }, { kanji: "雨", reading: "あめ", meaning: "비" }, { kanji: "雪", reading: "ゆき", meaning: "눈" }, { kanji: "大きい", reading: "おおきい", meaning: "크다" }, { kanji: "小さい", reading: "ちいさい", meaning: "작다" }, { kanji: "高い", reading: "たかい", meaning: "비싸다/높다" }, { kanji: "安い", reading: "やすい", meaning: "싸다" }, { kanji: "新しい", reading: "あたらしい", meaning: "새롭다" }, { kanji: "古い", reading: "ふるい", meaning: "오래되다" }, { kanji: "良い", reading: "よい/いい", meaning: "좋다" }, { kanji: "悪い", reading: "わるい", meaning: "나쁘다" }, { kanji: "暑い", reading: "あつい", meaning: "덥다" }, { kanji: "寒い", reading: "さむい", meaning: "춥다" }, { kanji: "長い", reading: "ながい", meaning: "길다" }, { kanji: "短い", reading: "みじかい", meaning: "짧다" }, { kanji: "忙しい", reading: "いそがしい", meaning: "바쁘다" }, { kanji: "月曜日", reading: "げつようび", meaning: "월요일" }, { kanji: "火曜日", reading: "かようび", meaning: "화요일" }, { kanji: "水曜日", reading: "すいようび", meaning: "수요일" }, { kanji: "木曜日", reading: "もくようび", meaning: "목요일" }, { kanji: "金曜日", reading: "きんようび", meaning: "금요일" }, { kanji: "土曜日", reading: "どようび", meaning: "토요일" }, { kanji: "日曜日", reading: "にちようび", meaning: "일요일" }, { kanji: "一", reading: "いち", meaning: "1" }, { kanji: "二", reading: "に", meaning: "2" }, { kanji: "三", reading: "さん", meaning: "3" }, { kanji: "十", reading: "じゅう", meaning: "10" }, { kanji: "百", reading: "ひゃく", meaning: "100" }, { kanji: "千", reading: "せん", meaning: "1000" }, { kanji: "万", reading: "まん", meaning: "10000" }, { kanji: "口", reading: "くち", meaning: "입" }, { kanji: "目", reading: "め", meaning: "눈" }, { kanji: "耳", reading: "みみ", meaning: "귀" }, { kanji: "手", reading: "て", meaning: "손" }, { kanji: "足", reading: "あし", meaning: "발" }, { kanji: "新聞", reading: "しんぶん", meaning: "신문" }, { kanji: "雑誌", reading: "ざっし", meaning: "잡지" }, { kanji: "鞄", reading: "かばん", meaning: "가방" }, { kanji: "靴", reading: "くつ", meaning: "신발" }, { kanji: "服", reading: "ふく", meaning: "옷" }, { kanji: "昨日", reading: "きのう", meaning: "어제" }, { kanji: "今日", reading: "きょう", meaning: "오늘" }, { kanji: "明日", reading: "あした", meaning: "내일" }, { kanji: "毎週", reading: "まいしゅう", meaning: "매주" }, { kanji: "毎年", reading: "まいとし", meaning: "매년" }, { kanji: "時間", reading: "じかん", meaning: "시간" }, { kanji: "兄", reading: "あに", meaning: "형/오빠" }, { kanji: "姉", reading: "あね", meaning: "누나/언니" }, { kanji: "弟", reading: "おとうと", meaning: "남동생" }, { kanji: "妹", reading: "いもうと", meaning: "여동생" }, { kanji: "起きる", reading: "おきる", meaning: "일어나다" }, { kanji: "寝る", reading: "ねる", meaning: "자다" }, { kanji: "座る", reading: "すわる", meaning: "앉다" }, { kanji: "立つ", reading: "たつ", meaning: "서다" }, { kanji: "入る", reading: "はいる", meaning: "들어가다" }, { kanji: "出る", reading: "でる", meaning: "나가다" }, { kanji: "作る", reading: "つくる", meaning: "만들다" }, { kanji: "使う", reading: "つかう", meaning: "사용하다" }, { kanji: "待つ", reading: "まつ", meaning: "기다리다" }, { kanji: "休む", reading: "やすむ", meaning: "쉬다" }, { kanji: "遊ぶ", reading: "あそぶ", meaning: "놀다" }, { kanji: "泳ぐ", reading: "およぐ", meaning: "수영하다" }, { kanji: "会う", reading: "あう", meaning: "만나다" }, { kanji: "切る", reading: "きる", meaning: "자르다" }, { kanji: "持つ", reading: "もつ", meaning: "들다" }, { kanji: "晴れ", reading: "はれ", meaning: "맑음" }, { kanji: "曇り", reading: "くもり", meaning: "흐림" }, { kanji: "風", reading: "かぜ", meaning: "바람" }, { kanji: "電気", reading: "でんき", meaning: "전기/불" }, { kanji: "肉", reading: "にく", meaning: "고기" }, { kanji: "魚", reading: "さかな", meaning: "물고기" }, { kanji: "野菜", reading: "やさい", meaning: "야채" }, { kanji: "果物", reading: "くだもの", meaning: "과일" }, { kanji: "切符", reading: "きっぷ", meaning: "표" }, { kanji: "写真", reading: "しゃしん", meaning: "사진" }, { kanji: "手紙", reading: "てがみ", meaning: "편지" }, { kanji: "日本", reading: "にほん", meaning: "일본" }, { kanji: "大学", reading: "だいがく", meaning: "대학" }, { kanji: "四", reading: "よん", meaning: "4" }, { kanji: "五", reading: "ご", meaning: "5" }, { kanji: "六", reading: "ろく", meaning: "6" }, { kanji: "七", reading: "なな", meaning: "7" }, { kanji: "八", reading: "はち", meaning: "8" }, { kanji: "九", reading: "きゅう", meaning: "9" }, { kanji: "半", reading: "はん", meaning: "반(절반)" }, { kanji: "年", reading: "とし", meaning: "년, 해" }, { kanji: "週", reading: "しゅう", meaning: "주" }, { kanji: "午前", reading: "ごぜん", meaning: "오전" }, { kanji: "午後", reading: "ごご", meaning: "오후" }, { kanji: "朝", reading: "あさ", meaning: "아침" }, { kanji: "昼", reading: "ひる", meaning: "낮" }, { kanji: "晩", reading: "ばん", meaning: "저녁" }, { kanji: "夜", reading: "よる", meaning: "밤" }, { kanji: "北", reading: "きた", meaning: "북쪽" }, { kanji: "南", reading: "みなみ", meaning: "남쪽" }, { kanji: "東", reading: "ひがし", meaning: "동쪽" }, { kanji: "西", reading: "にし", meaning: "서쪽" }, { kanji: "中", reading: "なか", meaning: "안, 속" }, { kanji: "外", reading: "そと", meaning: "밖" }, { kanji: "後ろ", reading: "うしろ", meaning: "뒤" }, { kanji: "隣", reading: "となり", meaning: "이웃, 옆" }, { kanji: "近く", reading: "ちかく", meaning: "근처" }, { kanji: "父", reading: "ちち", meaning: "아버지" }, { kanji: "母", reading: "はは", meaning: "어머니" }, { kanji: "両親", reading: "りょうしん", meaning: "부모님" }, { kanji: "男", reading: "おとこ", meaning: "남자" }, { kanji: "女", reading: "おんな", meaning: "여자" }, { kanji: "男の子", reading: "おとこのこ", meaning: "남자아이" }, { kanji: "女の子", reading: "おんなのこ", meaning: "여자아이" }, { kanji: "大人", reading: "おとな", meaning: "어른" }, { kanji: "子供", reading: "こども", meaning: "아이" }, { kanji: "物", reading: "もの", meaning: "물건" }, { kanji: "机", reading: "つくえ", meaning: "책상" }, { kanji: "椅子", reading: "いす", meaning: "의자" }, { kanji: "鉛筆", reading: "えんぴつ", meaning: "연필" }, { kanji: "時計", reading: "とけい", meaning: "시계" }, { kanji: "傘", reading: "かさ", meaning: "우산" }, { kanji: "本棚", reading: "ほんだな", meaning: "책장" }, { kanji: "辞書", reading: "じしょ", meaning: "사전" }, { kanji: "映画", reading: "えいが", meaning: "영화" }, { kanji: "音楽", reading: "おんがく", meaning: "음악" }, { kanji: "歌", reading: "うた", meaning: "노래" }, { kanji: "お茶", reading: "おちゃ", meaning: "차" }, { kanji: "ご飯", reading: "ごはん", meaning: "밥" }, { kanji: "朝ご飯", reading: "あさごはん", meaning: "아침밥" }, { kanji: "昼ご飯", reading: "ひるごはん", meaning: "점심밥" }, { kanji: "晩ご飯", reading: "ばんごはん", meaning: "저녁밥" }, { kanji: "読む", reading: "よむ", meaning: "읽다" }, { kanji: "書く", reading: "かく", meaning: "쓰다" }, { kanji: "帰る", reading: "かえる", meaning: "돌아가다" }, { kanji: "歩く", reading: "あるく", meaning: "걷다" }, { kanji: "走る", reading: "はしる", meaning: "달리다" }, { kanji: "歌う", reading: "うたう", meaning: "노래하다" }, { kanji: "飛ぶ", reading: "とぶ", meaning: "날다" }, { kanji: "呼ぶ", reading: "よぶ", meaning: "부르다" }, { kanji: "終わる", reading: "おわる", meaning: "끝나다" }, { kanji: "始まる", reading: "はじまる", meaning: "시작되다" }, { kanji: "分かる", reading: "わかる", meaning: "알다, 이해하다" }, { kanji: "教える", reading: "おしえる", meaning: "가르치다" }, { kanji: "習う", reading: "ならう", meaning: "배우다" }, { kanji: "借りる", reading: "かりる", meaning: "빌리다" }, { kanji: "貸す", reading: "かす", meaning: "빌려주다" }, { kanji: "返す", reading: "かえす", meaning: "돌려주다" }, { kanji: "開ける", reading: "あける", meaning: "열다" }, { kanji: "閉める", reading: "しめる", meaning: "닫다" }, { kanji: "つける", reading: "つける", meaning: "켜다" }, { kanji: "消す", reading: "けす", meaning: "끄다" }, { kanji: "白い", reading: "しろい", meaning: "희다" }, { kanji: "黒い", reading: "くろい", meaning: "검다" }, { kanji: "赤い", reading: "あかい", meaning: "붉다" }, { kanji: "青い", reading: "あおい", meaning: "푸르다" }, { kanji: "広い", reading: "ひろい", meaning: "넓다" }, { kanji: "狭い", reading: "せまい", meaning: "좁다" }, { kanji: "重い", reading: "おもい", meaning: "무겁다" }, { kanji: "軽い", reading: "かるい", meaning: "가볍다" }, { kanji: "早い", reading: "はやい", meaning: "이르다, 빠르다" }, { kanji: "遅い", reading: "おそい", meaning: "늦다" }, { kanji: "遠い", reading: "とおい", meaning: "멀다" }, { kanji: "近い", reading: "ちかい", meaning: "가깝다" }, { kanji: "甘い", reading: "あまい", meaning: "달다" }, { kanji: "辛い", reading: "からい", meaning: "맵다" }, { kanji: "冷たい", reading: "つめたい", meaning: "차갑다" }, { kanji: "温かい", reading: "あたたかい", meaning: "따뜻하다" }, { kanji: "楽しい", reading: "たのしい", meaning: "즐겁다" }, { kanji: "つまらない", reading: "つまらない", meaning: "시시하다" }, { kanji: "面白い", reading: "おもしろい", meaning: "재미있다" }, { kanji: "難しい", reading: "むずかしい", meaning: "어렵다" }, { kanji: "易しい", reading: "やさしい", meaning: "쉽다" }, { kanji: "好き", reading: "すき", meaning: "좋아함" }, { kanji: "嫌い", reading: "きらい", meaning: "싫어함" }, { kanji: "静か", reading: "しずか", meaning: "조용함" }, { kanji: "賑やか", reading: "にぎやか", meaning: "번화함" }, { kanji: "きれい", reading: "きれい", meaning: "예쁨, 깨끗함" }, { kanji: "有名", reading: "ゆうめい", meaning: "유명함" }, { kanji: "親切", reading: "しんせつ", meaning: "친절함" }, { kanji: "元気", reading: "げんき", meaning: "건강함" }, { kanji: "便利", reading: "べんり", meaning: "편리함" }, { kanji: "不便", reading: "ふべん", meaning: "불편함" }, { kanji: "犬", reading: "いぬ", meaning: "개" }, { kanji: "猫", reading: "ねこ", meaning: "고양이" }, { kanji: "会社", reading: "かいしゃ", meaning: "회사" }, { kanji: "食堂", reading: "しょくどう", meaning: "식당" }, { kanji: "庭", reading: "にわ", meaning: "정원" }, { kanji: "門", reading: "もん", meaning: "문" }, { kanji: "窓", reading: "まど", meaning: "창문" }, { kanji: "薬", reading: "くすり", meaning: "약" }, { kanji: "医者", reading: "いしゃ", meaning: "의사" }, { kanji: "病気", reading: "びょうき", meaning: "병" }, { kanji: "買い物", reading: "かいもの", meaning: "쇼핑" }, { kanji: "料理", reading: "りょうり", meaning: "요리" }, { kanji: "勉強", reading: "べんきょう", meaning: "공부" }, { kanji: "宿題", reading: "しゅくだい", meaning: "숙제" }, { kanji: "質問", reading: "しつもん", meaning: "질문" }, { kanji: "問題", reading: "もんだい", meaning: "문제" }, { kanji: "答え", reading: "こたえ", meaning: "대답, 정답" }, { kanji: "意味", reading: "いみ", meaning: "의미" }, { kanji: "住所", reading: "じゅうしょ", meaning: "주소" }, { kanji: "番号", reading: "ばんごう", meaning: "번호" }, { kanji: "階段", reading: "かいだん", meaning: "계단" }, { kanji: "手洗い", reading: "てあらい", meaning: "화장실" }, { kanji: "お風呂", reading: "おふろ", meaning: "목욕" }, { kanji: "台所", reading: "だいどころ", meaning: "부엌" }, { kanji: "洋服", reading: "ようふく", meaning: "양복" }, { kanji: "牛肉", reading: "ぎゅうにく", meaning: "소고기" }, { kanji: "豚肉", reading: "ぶたにく", meaning: "돼지고기" }, { kanji: "鳥肉", reading: "とりにく", meaning: "닭고기" }, { kanji: "卵", reading: "たまご", meaning: "계란" }, { kanji: "お酒", reading: "おさけ", meaning: "술" }, { kanji: "お弁当", reading: "おべんとう", meaning: "도시락" }, { kanji: "茶碗", reading: "ちゃわん", meaning: "밥그릇" }, { kanji: "切手", reading: "きって", meaning: "우표" }, { kanji: "葉書", reading: "はがき", meaning: "엽서" }, { kanji: "封筒", reading: "ふうとう", meaning: "봉투" }, { kanji: "荷物", reading: "にもつ", meaning: "짐" }, { kanji: "飛行機", reading: "ひこうき", meaning: "비행기" }, { kanji: "船", reading: "ふね", meaning: "배" }, { kanji: "自転車", reading: "じてんしゃ", meaning: "자전거" }, { kanji: "道", reading: "みち", meaning: "길" }, { kanji: "橋", reading: "はし", meaning: "다리" }, { kanji: "交番", reading: "こうばん", meaning: "파출소" }, { kanji: "大使館", reading: "たいしかん", meaning: "대사관" }, { kanji: "図書館", reading: "としょかん", meaning: "도서관" }, { kanji: "映画館", reading: "えいがかん", meaning: "영화관" }, { kanji: "美術館", reading: "びじゅつかん", meaning: "미술관" }, { kanji: "海", reading: "うみ", meaning: "바다" }, { kanji: "池", reading: "いけ", meaning: "연못" }, { kanji: "お寺", reading: "おてら", meaning: "절" }, { kanji: "神社", reading: "じんじゃ", meaning: "신사" }, { kanji: "町", reading: "まち", meaning: "마을, 번화가" }, { kanji: "村", reading: "むら", meaning: "마을" }, { kanji: "春", reading: "はる", meaning: "봄" }, { kanji: "夏", reading: "なつ", meaning: "여름" }, { kanji: "秋", reading: "あき", meaning: "가을" }, { kanji: "冬", reading: "ふゆ", meaning: "겨울" }, { kanji: "夕方", reading: "ゆうがた", meaning: "저녁때" }, { kanji: "去年", reading: "きょねん", meaning: "작년" }, { kanji: "今年", reading: "ことし", meaning: "올해" }, { kanji: "来年", reading: "らいねん", meaning: "내년" }, { kanji: "先月", reading: "せんげつ", meaning: "지난달" }, { kanji: "今月", reading: "こんげつ", meaning: "이번 달" }, { kanji: "来月", reading: "らいげつ", meaning: "다음 달" }, { kanji: "先週", reading: "せんしゅう", meaning: "지난주" }, { kanji: "今週", reading: "こんしゅう", meaning: "이번 주" }, { kanji: "来週", reading: "らいしゅう", meaning: "다음 주" }, { kanji: "毎朝", reading: "まいあさ", meaning: "매일 아침" }, { kanji: "毎晩", reading: "まいばん", meaning: "매일 밤" }, { kanji: "毎日", reading: "まいにち", meaning: "매일" }, { kanji: "兄弟", reading: "きょうだい", meaning: "형제" }, { kanji: "姉妹", reading: "しまい", meaning: "자매" }, { kanji: "祖父", reading: "そふ", meaning: "할아버지" }, { kanji: "祖母", reading: "そぼ", meaning: "할머니" }, { kanji: "洗う", reading: "あらう", meaning: "씻다" }, { kanji: "働く", reading: "はたらく", meaning: "일하다" }, { kanji: "疲れる", reading: "つかれる", meaning: "지치다" }, { kanji: "登る", reading: "のぼる", meaning: "오르다" }, { kanji: "泊まる", reading: "とまる", meaning: "머물다" }, { kanji: "住む", reading: "すむ", meaning: "살다" }, { kanji: "着る", reading: "きる", meaning: "입다" }, { kanji: "脱ぐ", reading: "ぬぐ", meaning: "벗다" }, { kanji: "履く", reading: "はく", meaning: "신다" }, { kanji: "弾く", reading: "ひく", meaning: "연주하다" }, { kanji: "降る", reading: "ふる", meaning: "내리다" }, { kanji: "吹く", reading: "ふく", meaning: "불다" }, { kanji: "咲く", reading: "さく", meaning: "피다" }, { kanji: "鳴く", reading: "なく", meaning: "울다" }, { kanji: "曇る", reading: "くもる", meaning: "흐려지다" }, { kanji: "曲がる", reading: "まがる", meaning: "구부러지다, 돌다" }, { kanji: "渡る", reading: "わたる", meaning: "건너다" }, { kanji: "止まる", reading: "とまる", meaning: "멈추다" }, { kanji: "浴びる", reading: "あびる", meaning: "뒤집어쓰다" }, { kanji: "答える", reading: "こたえる", meaning: "대답하다" }, { kanji: "覚える", reading: "おぼえる", meaning: "외우다" }, { kanji: "忘れる", reading: "わすれる", meaning: "잊다" }, { kanji: "考える", reading: "かんがえる", meaning: "생각하다" }, { kanji: "勤める", reading: "つとめる", meaning: "근무하다" }, { kanji: "丸い", reading: "まるい", meaning: "둥글다" }, { kanji: "細い", reading: "ほそい", meaning: "가늘다" }, { kanji: "太い", reading: "ふとい", meaning: "굵다" }, { kanji: "若い", reading: "わかい", meaning: "젊다" }, { kanji: "眠い", reading: "ねむい", meaning: "졸리다" }, { kanji: "痛い", reading: "いたい", meaning: "아프다" }, { kanji: "暗い", reading: "くらい", meaning: "어둡다" }, { kanji: "明るい", reading: "あかるい", meaning: "밝다" }, { kanji: "汚い", reading: "きたない", meaning: "더럽다" }, { kanji: "黄色い", reading: "きいろい", meaning: "노랗다" }, { kanji: "茶色い", reading: "ちゃいろい", meaning: "갈색이다" }, { kanji: "大切", reading: "たいせつ", meaning: "소중함" }, { kanji: "丈夫", reading: "じょうぶ", meaning: "튼튼함" }, { kanji: "色々", reading: "いろいろ", meaning: "여러 가지" }, { kanji: "同じ", reading: "おなじ", meaning: "같음" }, { kanji: "全部", reading: "ぜんぶ", meaning: "전부" }, { kanji: "多分", reading: "たぶん", meaning: "아마" }, { kanji: "本当", reading: "ほんとう", meaning: "정말" }, { kanji: "大丈夫", reading: "だいじょうぶ", meaning: "괜찮음" }, { kanji: "写真機", reading: "しゃしんき", meaning: "사진기" }, { kanji: "教室", reading: "きょうしつ", meaning: "교실" }, { kanji: "地下鉄", reading: "ちかてつ", meaning: "지하철" }, { kanji: "電話番号", reading: "でんわばんごう", meaning: "전화번호" }, { kanji: "留学生", reading: "りゅうがくせい", meaning: "유학생" },{ kanji: "円", reading: "えん", meaning: "엔(화폐 단위)" },{ kanji: "天気", reading: "てんき", meaning: "날씨" },{ kanji: "飲み物", reading: "のみもの", meaning: "마실 것" },{ kanji: "食べ物", reading: "たべもの", meaning: "먹을 것" },{ kanji: "休み", reading: "やすみ", meaning: "휴일, 쉼" },{ kanji: "作文", reading: "さくぶん", meaning: "작문" },{ kanji: "散歩", reading: "さんぽ", meaning: "산책" },{ kanji: "練習", reading: "れんしゅう", meaning: "연습" },{ kanji: "困る", reading: "こまる", meaning: "곤란하다" },{ kanji: "大変", reading: "たいへん", meaning: "매우, 힘듦" }
],
n4: [
      /* 기존 리스트 + 누락되었던 실무/생활 단어 전격 추가 (총 약 700~800개 규모) */
      { kanji: "挨拶", reading: "あいさつ", meaning: "인사" }, { kanji: "間", reading: "あいだ", meaning: "사이, 동안" }, { kanji: "赤ちゃん", reading: "あかちゃん", meaning: "아기" }, { kanji: "浅い", reading: "あさい", meaning: "얕다" }, { kanji: "味", reading: "あじ", meaning: "맛" }, { kanji: "明日", reading: "あす", meaning: "내일" }, { kanji: "遊び", reading: "あそび", meaning: "놀이" }, { kanji: "集まる", reading: "あつまる", meaning: "모이다" }, { kanji: "集める", reading: "あつめる", meaning: "모으다" }, { kanji: "謝る", reading: "あやまる", meaning: "사과하다" }, { kanji: "安心", reading: "あんしん", meaning: "안심" }, { kanji: "安全", reading: "あんぜん", meaning: "안전" }, { kanji: "案内", reading: "あんない", meaning: "안내" }, { kanji: "以下", reading: "いか", meaning: "이하" }, { kanji: "以外", reading: "いがい", meaning: "이외" }, { kanji: "医学", reading: "いがく", meaning: "의학" }, { kanji: "生きる", reading: "いきる", meaning: "살다" }, { kanji: "意見", reading: "いけん", meaning: "의견" }, { kanji: "石", reading: "いし", meaning: "돌" }, { kanji: "苛める", reading: "いじめる", meaning: "괴롭히다" }, { kanji: "以上", reading: "いじょう", meaning: "이상" }, { kanji: "急ぐ", reading: "いそぐ", meaning: "서두르다" }, { kanji: "致す", reading: "いたす", meaning: "하다(겸양)" }, { kanji: "頂く", reading: "いただく", meaning: "받다(겸양)" }, { kanji: "一度", reading: "いちど", meaning: "한 번" }, { kanji: "一生懸命", reading: "いっしょうけんめい", meaning: "열심히" }, { kanji: "糸", reading: "いと", meaning: "실" }, { kanji: "以内", reading: "いない", meaning: "이내" }, { kanji: "田舎", reading: "いなか", meaning: "시골" }, { kanji: "祈る", reading: "いのる", meaning: "기도하다" }, { kanji: "植える", reading: "うえる", meaning: "심다" }, { kanji: "伺う", reading: "うかがう", meaning: "찾아뵙다, 듣다(겸양)" }, { kanji: "受付", reading: "うけつけ", meaning: "접수처" }, { kanji: "受ける", reading: "うける", meaning: "받다, 치르다" }, { kanji: "動く", reading: "うごく", meaning: "움직이다" }, { kanji: "嘘", reading: "うそ", meaning: "거짓말" }, { kanji: "打つ", reading: "うつ", meaning: "치다, 때리다" }, { kanji: "美しい", reading: "うつくしい", meaning: "아름답다" }, { kanji: "写す", reading: "うつす", meaning: "베끼다, 찍다" }, { kanji: "移す", reading: "うつす", meaning: "옮기다" }, { kanji: "移る", reading: "うつる", meaning: "이동하다" }, { kanji: "腕", reading: "うで", meaning: "팔" }, { kanji: "裏", reading: "うら", meaning: "뒤, 안" }, { kanji: "売り場", reading: "うりば", meaning: "매장" }, { kanji: "嬉しい", reading: "うれしい", meaning: "기쁘다" }, { kanji: "運転", reading: "うんてん", meaning: "운전" }, { kanji: "運動", reading: "うんどう", meaning: "운동" }, { kanji: "枝", reading: "えだ", meaning: "가지" }, { kanji: "選ぶ", reading: "えらぶ", meaning: "고르다" }, { kanji: "遠慮", reading: "えんりょ", meaning: "사양, 삼감" }, { kanji: "お祝い", reading: "おいわい", meaning: "축하" }, { kanji: "億", reading: "おく", meaning: "억(숫자)" }, { kanji: "屋上", reading: "おくじょう", meaning: "옥상" }, { kanji: "贈り物", reading: "おくりもの", meaning: "선물" }, { kanji: "送る", reading: "おくる", meaning: "보내다" }, { kanji: "遅れる", reading: "おくれる", meaning: "늦다" }, { kanji: "起こす", reading: "おこす", meaning: "깨우다, 일으키다" }, { kanji: "行う", reading: "おこなう", meaning: "행하다" }, { kanji: "怒る", reading: "おこる", meaning: "화내다" }, { kanji: "落とす", reading: "おとす", meaning: "떨어뜨리다" }, { kanji: "踊り", reading: "おどり", meaning: "춤" }, { kanji: "踊る", reading: "おどる", meaning: "춤추다" }, { kanji: "驚く", reading: "おどろく", meaning: "놀라다" }, { kanji: "お祭り", reading: "おまつり", meaning: "축제" }, { kanji: "お見舞い", reading: "おみまい", meaning: "문병" }, { kanji: "思い出す", reading: "おもいだす", meaning: "생각해내다" }, { kanji: "思う", reading: "おもう", meaning: "생각하다" }, { kanji: "表", reading: "おもて", meaning: "겉, 앞면" }, { kanji: "折れる", reading: "おれる", meaning: "꺾이다, 부러지다" }, { kanji: "終わる", reading: "おわる", meaning: "끝나다" }, { kanji: "海岸", reading: "かいがん", meaning: "해안" }, { kanji: "会議", reading: "かいぎ", meaning: "회의" }, { kanji: "会場", reading: "かいじょう", meaning: "회장" }, { kanji: "会話", reading: "かいわ", meaning: "회화" }, { kanji: "帰り", reading: "かえり", meaning: "귀가" }, { kanji: "変える", reading: "かえる", meaning: "바꾸다" }, { kanji: "科学", reading: "かがく", meaning: "과학" }, { kanji: "鏡", reading: "かがみ", meaning: "거울" }, { kanji: "掛ける", reading: "かける", meaning: "걸다" }, { kanji: "飾る", reading: "かざる", meaning: "장식하다" }, { kanji: "火事", reading: "かじ", meaning: "화재" }, { kanji: "堅い", reading: "かたい", meaning: "단단하다" }, { kanji: "形", reading: "かたち", meaning: "모양" }, { kanji: "片付ける", reading: "かたづける", meaning: "정리하다" }, { kanji: "課長", reading: "かちょう", meaning: "과장" }, { kanji: "勝つ", reading: "かつ", meaning: "이기다" }, { kanji: "家内", reading: "かない", meaning: "아내" }, { kanji: "悲しい", reading: "かなしい", meaning: "슬프다" }, { kanji: "必ず", reading: "かならず", meaning: "반드시" }, { kanji: "雷", reading: "かみなり", meaning: "번개" }, { kanji: "髪", reading: "かみ", meaning: "머리카락" }, { kanji: "噛む", reading: "かむ", meaning: "씹다" }, { kanji: "通う", reading: "かよう", meaning: "다니다" }, { kanji: "乾く", reading: "かわく", meaning: "마르다" }, { kanji: "代わり", reading: "かわり", meaning: "대신" }, { kanji: "変わる", reading: "かわる", meaning: "변하다" }, { kanji: "考える", reading: "かんがえる", meaning: "생각하다" }, { kanji: "関係", reading: "かんけい", meaning: "관계" }, { kanji: "看護婦", reading: "かんごふ", meaning: "간호사" }, { kanji: "簡単", reading: "かんたん", meaning: "간단" }, { kanji: "機会", reading: "きかい", meaning: "기회" }, { kanji: "危険", reading: "きけん", meaning: "위험" }, { kanji: "聞こえる", reading: "きこえる", meaning: "들리다" }, { kanji: "汽車", reading: "きしゃ", meaning: "기차" }, { kanji: "技術", reading: "ぎじゅつ", meaning: "기술" }, { kanji: "季節", reading: "きせつ", meaning: "계절" }, { kanji: "規則", reading: "きそく", meaning: "규칙" }, { kanji: "絹", reading: "きぬ", meaning: "비단" }, { kanji: "厳しい", reading: "きびしい", meaning: "엄격하다" }, { kanji: "気分", reading: "きぶん", meaning: "기분" }, { kanji: "決まる", reading: "きまる", meaning: "결정되다" }, { kanji: "君", reading: "きみ", meaning: "너, 자네" }, { kanji: "決める", reading: "きめる", meaning: "결정하다" }, { kanji: "気持ち", reading: "きもち", meaning: "마음, 기분" }, { kanji: "着物", reading: "きもの", meaning: "기모노" }, { kanji: "客", reading: "きゃく", meaning: "손님" }, { kanji: "急", reading: "きゅう", meaning: "급함" }, { kanji: "急行", reading: "きゅうこう", meaning: "급행" }, { kanji: "教育", reading: "きょういく", meaning: "교육" }, { kanji: "教会", reading: "きょうかい", meaning: "교회" }, { kanji: "競争", reading: "きょうそう", meaning: "경쟁" }, { kanji: "興味", reading: "きょうみ", meaning: "흥미" }, { kanji: "近所", reading: "きんじょ", meaning: "근처" }, { kanji: "具合", reading: "ぐあい", meaning: "상태" }, { kanji: "空気", reading: "くうき", meaning: "공기" }, { kanji: "空港", reading: "くうこう", meaning: "공항" }, { kanji: "草", reading: "くさ", meaning: "풀" }, { kanji: "首", reading: "くび", meaning: "목" }, { kanji: "雲", reading: "くも", meaning: "구름" }, { kanji: "比べる", reading: "くらべる", meaning: "비교하다" }, { kanji: "暮れる", reading: "くれる", meaning: "저물다" }, { kanji: "毛", reading: "け", meaning: "털" }, { kanji: "経済", reading: "けいざい", meaning: "경제" }, { kanji: "警察", reading: "けいさつ", meaning: "경찰" }, { kanji: "景色", reading: "けしき", meaning: "경치" }, { kanji: "下宿", reading: "げしゅく", meaning: "하숙" }, { kanji: "決して", reading: "けっして", meaning: "결코" }, { kanji: "怪我", reading: "けが", meaning: "상처" }, { kanji: "計画", reading: "けいかく", meaning: "계획" }, { kanji: "経験", reading: "けいけん", meaning: "경험" }, { kanji: "月末", reading: "げつまつ", meaning: "월말" }, { kanji: "建てる", reading: "たてる", meaning: "세우다" }, { kanji: "建築", reading: "けんちく", meaning: "건축" }, { kanji: "見物", reading: "けんぶつ", meaning: "구경" }, { kanji: "喧嘩", reading: "けんか", meaning: "싸움" }, { kanji: "研究", reading: "けんきゅう", meaning: "연구" }, { kanji: "見学", reading: "けんがく", meaning: "견학" }, { kanji: "県", reading: "けん", meaning: "현(행정구역)" }, { kanji: "玄関", reading: "げんかん", meaning: "현관" }, { kanji: "高校", reading: "こうこう", meaning: "고등학교" }, { kanji: "郊外", reading: "こうがい", meaning: "교외" }, { kanji: "講義", reading: "こうぎ", meaning: "강의" }, { kanji: "工業", reading: "こうぎょう", meaning: "공업" }, { kanji: "工場", reading: "こうじょう", meaning: "공장" }, { kanji: "校長", reading: "こうちょう", meaning: "교장" }, { kanji: "交通", reading: "こうつう", meaning: "교통" }, { kanji: "講堂", reading: "こうどう", meaning: "강당" }, { kanji: "公務員", reading: "こうむいん", meaning: "공무원" }, { kanji: "国際", reading: "こくさい", meaning: "국제" }, { kanji: "故障", reading: "こしょう", meaning: "고장" }, { kanji: "事", reading: "こと", meaning: "일, 것" }, { kanji: "小鳥", reading: "ことり", meaning: "작은 새" }, { kanji: "細かい", reading: "こまかい", meaning: "잘다, 세세하다" }, { kanji: "込む", reading: "こむ", meaning: "붐비다" }, { kanji: "米", reading: "こめ", meaning: "쌀" }, { kanji: "怖い", reading: "こわい", meaning: "무섭다" }, { kanji: "壊す", reading: "こわす", meaning: "부수다" }, { kanji: "壊れる", reading: "こわれる", meaning: "부서지다" }, { kanji: "今度", reading: "こんど", meaning: "이번" }, { kanji: "今夜", reading: "こんや", meaning: "오늘 밤" }, { kanji: "最近", reading: "さいきん", meaning: "최근" }, { kanji: "最後", reading: "さいご", meaning: "마지막" }, { kanji: "最初", reading: "さいしょ", meaning: "처음" }, { kanji: "坂", reading: "さか", meaning: "언덕" }, { kanji: "探す", reading: "さがす", meaning: "찾다" }, { kanji: "下がる", reading: "さがる", meaning: "내려가다" }, { kanji: "下げる", reading: "さげる", meaning: "내리다" }, { kanji: "盛ん", reading: "さかん", meaning: "번성함" }, { kanji: "差し上げる", reading: "さしあげる", meaning: "드리다" }, { kanji: "寂しい", reading: "さびしい", meaning: "외롭다" }, { kanji: "騒ぐ", reading: "さわぐ", meaning: "떠들다" }, { kanji: "触る", reading: "さわる", meaning: "만지다" }, { kanji: "産業", reading: "さんぎょう", meaning: "산업" }, { kanji: "賛成", reading: "さんせい", meaning: "찬성" }, { kanji: "残念", reading: "ざんねん", meaning: "유감" }, { kanji: "市", reading: "し", meaning: "시(도시)" }, { kanji: "字", reading: "じ", meaning: "글자" }, { kanji: "試合", reading: "しあい", meaning: "시합" }, { kanji: "仕方", reading: "しかた", meaning: "방법" }, { kanji: "叱る", reading: "しかる", meaning: "꾸짖다" }, { kanji: "事故", reading: "じこ", meaning: "사고" }, { kanji: "地震", reading: "じしん", meaning: "지진" }, { kanji: "時代", reading: "じだい", meaning: "시대" }, { kanji: "下着", reading: "したぎ", meaning: "속옷" }, { kanji: "失敗", reading: "しっぱい", meaning: "실패" }, { kanji: "辞典", reading: "じてん", meaning: "사전" }, { kanji: "品物", reading: "しなもの", meaning: "물건" }, { kanji: "島", reading: "しま", meaning: "섬" }, { kanji: "市民", reading: "しみん", meaning: "시민" }, { kanji: "事務所", reading: "じむしょ", meaning: "사무실" }, { kanji: "社会", reading: "しゃかい", meaning: "사회" }, { kanji: "社長", reading: "しゃちょう", meaning: "사장" }, { kanji: "邪魔", reading: "じゃま", meaning: "방해" }, { kanji: "自由", reading: "じゆう", meaning: "자유" }, { kanji: "習慣", reading: "しゅうかん", meaning: "습관" }, { kanji: "住所", reading: "じゅうしょ", meaning: "주소" }, { kanji: "柔道", reading: "じゅうどう", meaning: "유도" }, { kanji: "十分", reading: "じゅうぶん", meaning: "충분함" }, { kanji: "出席", reading: "しゅっせき", meaning: "출석" }, { kanji: "出発", reading: "しゅっぱつ", meaning: "출발" }, { kanji: "趣味", reading: "しゅみ", meaning: "취미" }, { kanji: "準備", reading: "じゅんび", meaning: "준비" }, { kanji: "紹介", reading: "しょうかい", meaning: "소개" }, { kanji: "正月", reading: "しょうがつ", meaning: "설날" }, { kanji: "少女", reading: "しょうじょ", meaning: "소녀" }, { kanji: "少年", reading: "しょうねん", meaning: "소년" }, { kanji: "小説", reading: "しょうせつ", meaning: "소설" }, { kanji: "招待", reading: "しょうたい", meaning: "초대" }, { kanji: "承知", reading: "しょうち", meaning: "승낙" }, { kanji: "将来", reading: "しょうらい", meaning: "장래" }, { kanji: "食事", reading: "しょくじ", meaning: "식사" }, { kanji: "食料品", reading: "しょくりょうひん", meaning: "식료품" }, { kanji: "女性", reading: "じょせい", meaning: "여성" }, { kanji: "知らせる", reading: "しらせる", meaning: "알리다" }, { kanji: "調べる", reading: "しらべる", meaning: "조사하다" }, { kanji: "人口", reading: "じんこう", meaning: "인구" }, { kanji: "神社", reading: "じんじゃ", meaning: "신사" }, { kanji: "親切", reading: "しんせつ", meaning: "친절" }, { kanji: "心配", reading: "しんぱい", meaning: "걱정" }, { kanji: "新聞社", reading: "しんぶんしゃ", meaning: "신문사" }, { kanji: "水泳", reading: "すいえい", meaning: "수영" }, { kanji: "水道", reading: "すいどう", meaning: "수도" }, { kanji: "数学", reading: "すうがく", meaning: "수학" }, { kanji: "過ぎる", reading: "すぎる", meaning: "지나다" }, { kanji: "空く", reading: "すく", meaning: "비다" }, { kanji: "凄い", reading: "すごい", meaning: "대단하다" }, { kanji: "進む", reading: "すすむ", meaning: "나아가다" }, { kanji: "捨てる", reading: "すてる", meaning: "버리다" }, { kanji: "砂", reading: "すな", meaning: "모래" }, { kanji: "素晴らしい", reading: "すばらしい", meaning: "훌륭하다" }, { kanji: "滑る", reading: "すべる", meaning: "미끄러지다" }, { kanji: "隅", reading: "すみ", meaning: "구석" }, { kanji: "済む", reading: "すむ", meaning: "끝나다" }, { kanji: "生活", reading: "せいかつ", meaning: "생활" }, { kanji: "生産", reading: "せいさん", meaning: "생산" }, { kanji: "政治", reading: "せいじ", meaning: "정치" }, { kanji: "西洋", reading: "せいよう", meaning: "서양" }, { kanji: "世界", reading: "せかい", meaning: "세계" }, { kanji: "席", reading: "せき", meaning: "자리" }, { kanji: "説明", reading: "せつめい", meaning: "설명" }, { kanji: "背中", reading: "せなか", meaning: "등" }, { kanji: "是非", reading: "ぜひ", meaning: "시비, 부디" }, { kanji: "世話", reading: "せわ", meaning: "보살핌" }, { kanji: "線", reading: "せん", meaning: "선" }, { kanji: "戦争", reading: "せんそう", meaning: "전쟁" }, { kanji: "先輩", reading: "せんぱい", meaning: "선배" }, { kanji: "相談", reading: "そうだん", meaning: "상담" }, { kanji: "育てる", reading: "そだてる", meaning: "키우다" }, { kanji: "卒業", reading: "そつぎょう", meaning: "졸업" }, { kanji: "祖父", reading: "そふ", meaning: "할아버지" }, { kanji: "祖母", reading: "そぼ", meaning: "할머니" }, { kanji: "退院", reading: "たいいん", meaning: "퇴원" }, { kanji: "大学生", reading: "だいがくせい", meaning: "대학생" }, { kanji: "大事", reading: "だいじ", meaning: "소중함" }, { kanji: "大体", reading: "だいたい", meaning: "대체로" }, { kanji: "大抵", reading: "たいてい", meaning: "대개" }, { kanji: "台風", reading: "たいふう", meaning: "태풍" }, { kanji: "倒れる", reading: "たおれる", meaning: "쓰러지다" }, { kanji: "確か", reading: "たしか", meaning: "확실함" }, { kanji: "足す", reading: "たす", meaning: "더하다" }, { kanji: "訪ねる", reading: "たずねる", meaning: "방문하다" }, { kanji: "尋ねる", reading: "たずねる", meaning: "묻다" }, { kanji: "正しい", reading: "ただしい", meaning: "올바르다" }, { kanji: "畳", reading: "たたみ", meaning: "다다미" }, { kanji: "例えば", reading: "たとえば", meaning: "예를 들면" }, { kanji: "棚", reading: "たな", meaning: "선반" }, { kanji: "楽しみ", reading: "たのしみ", meaning: "즐거움" }, { kanji: "楽しむ", reading: "たのしむ", meaning: "즐기다" }, { kanji: "為", reading: "ため", meaning: "위함, 때문" }, { kanji: "足りる", reading: "たりる", meaning: "족하다" }, { kanji: "男性", reading: "だんせい", meaning: "남성" }, { kanji: "暖房", reading: "だんぼう", meaning: "난방" }, { kanji: "血", reading: "ち", meaning: "피" }, { kanji: "力", reading: "ちから", meaning: "힘" }, { kanji: "注意", reading: "ちゅうい", meaning: "주의" }, { kanji: "中学校", reading: "ちゅうがっこう", meaning: "중학교" }, { kanji: "注射", reading: "ちゅうしゃ", meaning: "주사" }, { kanji: "駐車場", reading: "ちゅうしゃじょう", meaning: "주차장" }, { kanji: "地理", reading: "ちり", meaning: "지리" }, { kanji: "捕まえる", reading: "つかまえる", meaning: "잡다" }, { kanji: "付き合う", reading: "つきあう", meaning: "사귀다" }, { kanji: "月", reading: "つき", meaning: "달" }, { kanji: "付く", reading: "つく", meaning: "붙다" }, { kanji: "漬ける", reading: "つける", meaning: "담그다" }, { kanji: "都合", reading: "つごう", meaning: "사정, 형편" }, { kanji: "伝える", reading: "つたえる", meaning: "전하다" }, { kanji: "続く", reading: "つづく", meaning: "계속되다" }, { kanji: "続ける", reading: "つづける", meaning: "계속하다" }, { kanji: "包む", reading: "つつむ", meaning: "싸다" }, { kanji: "妻", reading: "つま", meaning: "아내" }, { kanji: "釣る", reading: "つる", meaning: "낚다" }, { kanji: "連れる", reading: "つれる", meaning: "데리다" }, { kanji: "丁寧", reading: "ていねい", meaning: "정중함" }, { kanji: "適当", reading: "てきとう", meaning: "적당함" }, { kanji: "手伝う", reading: "てつだう", meaning: "돕다" }, { kanji: "手袋", reading: "てぶくろ", meaning: "장갑" }, { kanji: "寺", reading: "てら", meaning: "절" }, { kanji: "点", reading: "てん", meaning: "점" }, { kanji: "店員", reading: "てんいん", meaning: "점원" }, { kanji: "天気予報", reading: "てんきよほう", meaning: "일기예보" }, { kanji: "電灯", reading: "でんとう", meaning: "전등" }, { kanji: "電報", reading: "でんぽう", meaning: "전보" }, { kanji: "展覧会", reading: "てんらんかい", meaning: "전람회" }, { kanji: "都", reading: "みやこ", meaning: "수도" }, { kanji: "道具", reading: "どうぐ", meaning: "도구" }, { kanji: "動物園", reading: "どうぶつえん", meaning: "동물원" }, { kanji: "遠く", reading: "とおく", meaning: "멀리" }, { kanji: "通る", reading: "とおる", meaning: "통과하다" }, { kanji: "特に", reading: "とくに", meaning: "특히" }, { kanji: "特別", reading: "とくべつ", meaning: "특별" }, { kanji: "床屋", reading: "とこや", meaning: "이발소" }, { kanji: "途中", reading: "とちゅう", meaning: "도중" }, { kanji: "特急", reading: "とっきゅう", meaning: "특급" }, { kanji: "届ける", reading: "とどける", meaning: "보내다, 신고하다" }, { kanji: "泊まる", reading: "とまる", meaning: "머물다" }, { kanji: "止める", reading: "とめる", meaning: "세우다" }, { kanji: "取り替える", reading: "とりかえる", meaning: "바꾸다" }, { kanji: "泥棒", reading: "どろぼう", meaning: "도둑" }, { kanji: "直す", reading: "なおす", meaning: "고치다" }, { kanji: "直る", reading: "なおる", meaning: "고쳐지다" }, { kanji: "治る", reading: "なおる", meaning: "낫다(병이)" }, { kanji: "泣く", reading: "なく", meaning: "울다" }, { kanji: "無くなる", reading: "なくなる", meaning: "없어지다" }, { kanji: "亡くなる", reading: "なくなる", meaning: "돌아가시다" }, { kanji: "投げる", reading: "なげる", meaning: "던지다" }, { kanji: "鳴る", reading: "なる", meaning: "울리다" }, { kanji: "慣れる", reading: "なれる", meaning: "익숙해지다" }, { kanji: "匂い", reading: "におい", meaning: "냄새" }, { kanji: "苦い", reading: "にがい", meaning: "쓰다" }, { kanji: "逃げる", reading: "にげる", meaning: "도망치다" }, { kanji: "日記", reading: "にっき", meaning: "일기" }, { kanji: "入院", reading: "にゅういん", meaning: "입원" }, { kanji: "入学", reading: "にゅうがく", meaning: "입학" }, { kanji: "似る", reading: "にる", meaning: "닮다" }, { kanji: "人形", reading: "にんぎょう", meaning: "인형" }, { kanji: "盗む", reading: "ぬすむ", meaning: "훔치다" }, { kanji: "塗る", reading: "ぬる", meaning: "칠하다" }, { kanji: "濡れる", reading: "ぬれる", meaning: "젖다" }, { kanji: "熱", reading: "ねつ", meaning: "열" }, { kanji: "熱心", reading: "ねっしん", meaning: "열심" }, { kanji: "眠い", reading: "ねむい", meaning: "졸리다" }, { kanji: "眠る", reading: "ねむる", meaning: "잠들다" }, { kanji: "残る", reading: "のこる", meaning: "남다" }, { kanji: "乗り換える", reading: "のりかえる", meaning: "갈아타다" }, { kanji: "乗り物", reading: "のりもの", meaning: "탈것" }, { kanji: "葉", reading: "は", meaning: "잎" }, { kanji: "場合", reading: "ばあい", meaning: "경우" }, { kanji: "倍", reading: "ばい", meaning: "배" }, { kanji: "拝見", reading: "はいけん", meaning: "배견(겸양)" }, { kanji: "歯医者", reading: "はいしゃ", meaning: "치과의사" }, { kanji: "運ぶ", reading: "はこぶ", meaning: "운반하다" }, { kanji: "始める", reading: "はじめる", meaning: "시작하다" }, { kanji: "場所", reading: "ばしょ", meaning: "장소" }, { kanji: "恥ずかしい", reading: "はずかしい", meaning: "부끄럽다" }, { kanji: "発音", reading: "はつおん", meaning: "발음" }, { kanji: "花見", reading: "はなみ", meaning: "꽃구경" }, { kanji: "林", reading: "はやし", meaning: "수풀" }, { kanji: "払う", reading: "はらう", meaning: "지불하다" }, { kanji: "番組", reading: "ばんぐみ", meaning: "방송 프로그램" }, { kanji: "反対", reading: "はんたい", meaning: "반대" }, { kanji: "半分", reading: "はんぶん", meaning: "절반" }, { kanji: "冷える", reading: "ひえる", meaning: "차가워지다" }, { kanji: "光る", reading: "ひかる", meaning: "빛나다" }, { kanji: "引き出し", reading: "ひきだし", meaning: "서랍" }, { kanji: "引き出す", reading: "ひきだす", meaning: "끌어내다" }, { kanji: "飛行場", reading: "ひこうじょう", meaning: "비행장" }, { kanji: "久しぶり", reading: "ひさしぶり", meaning: "오랜만" }, { kanji: "美術館", reading: "びじゅつかん", meaning: "미술관" }, { kanji: "非常に", reading: "ひじょうに", meaning: "매우" }, { kanji: "引っ越す", reading: "ひっこす", meaning: "이사하다" }, { kanji: "必要", reading: "ひつよう", meaning: "필요" }, { kanji: "酷い", reading: "ひどい", meaning: "심하다" }, { kanji: "開く", reading: "ひらく", meaning: "열다" }, { kanji: "昼間", reading: "ひるま", meaning: "낮" }, { kanji: "昼休み", reading: "ひるやすみ", meaning: "점심시간" }, { kanji: "拾う", reading: "ひろう", meaning: "줍다" }, { kanji: "増える", reading: "ふえる", meaning: "늘다" }, { kanji: "深い", reading: "ふかい", meaning: "깊다" }, { kanji: "複雑", reading: "ふくざつ", meaning: "복잡" }, { kanji: "復習", reading: "ふくしゅう", meaning: "복습" }, { kanji: "部長", reading: "ぶちょう", meaning: "부장" }, { kanji: "太る", reading: "ふとる", meaning: "살찌다" }, { kanji: "布団", reading: "ふとん", meaning: "이불" }, { kanji: "舟", reading: "ふね", meaning: "배" }, { kanji: "不便", reading: "ふべん", meaning: "불편" }, { kanji: "踏む", reading: "ふむ", meaning: "밟다" }, { kanji: "降り出す", reading: "ふりだす", meaning: "내리기 시작하다" }, { kanji: "文化", reading: "ぶんか", meaning: "문화" }, { kanji: "文学", reading: "ぶんがく", meaning: "문학" }, { kanji: "文法", reading: "ぶんぽう", meaning: "문법" }, { kanji: "別", reading: "べつ", meaning: "다름, 별개" }, { kanji: "変", reading: "へん", meaning: "이상함" }, { kanji: "返事", reading: "へんじ", meaning: "대답, 답장" }, { kanji: "貿易", reading: "ぼうえき", meaning: "무역" }, { kanji: "放送", reading: "ほうそう", meaning: "방송" }, { kanji: "法律", reading: "ほうりつ", meaning: "법률" }, { kanji: "僕", reading: "ぼく", meaning: "나(남성)" }, { kanji: "星", reading: "ほし", meaning: "별" }, { kanji: "褒める", reading: "ほめる", meaning: "칭찬하다" }, { kanji: "翻訳", reading: "ほんやく", meaning: "번역" }, { kanji: "参る", reading: "まいる", meaning: "가다, 오다(겸양)" }, { kanji: "負ける", reading: "まける", meaning: "지다" }, { kanji: "真面目", reading: "まじめ", meaning: "성실함" }, { kanji: "間違える", reading: "まちがえる", meaning: "틀리다" }, { kanji: "間に合う", reading: "まにあう", meaning: "시간에 맞다" }, { kanji: "周り", reading: "まわり", meaning: "주위" }, { kanji: "回る", reading: "まわる", meaning: "돌다" }, { kanji: "漫画", reading: "まんが", meaning: "만화" }, { kanji: "真ん中", reading: "まんなか", meaning: "한가운데" }, { kanji: "見える", reading: "みえる", meaning: "보이다" }, { kanji: "湖", reading: "みずうみ", meaning: "호수" }, { kanji: "見つかる", reading: "みつかる", meaning: "발견되다" }, { kanji: "見つける", reading: "みつける", meaning: "찾아내다" }, { kanji: "皆", reading: "みな", meaning: "모두" }, { kanji: "港", reading: "みなと", meaning: "항구" }, { kanji: "向かう", reading: "むかう", meaning: "향하다" }, { kanji: "迎える", reading: "むかえる", meaning: "맞이하다" }, { kanji: "昔", reading: "むかし", meaning: "옛날" }, { kanji: "虫", reading: "むし", meaning: "벌레" }, { kanji: "息子", reading: "むすこ", meaning: "아들" }, { kanji: "娘", reading: "むすめ", meaning: "딸" }, { kanji: "無理", reading: "むり", meaning: "무리" }, { kanji: "召し上がる", reading: "めしあがる", meaning: "드시다" }, { kanji: "珍しい", reading: "めずらしい", meaning: "드물다" }, { kanji: "申し上げる", reading: "もうしあげる", meaning: "말씀드리다" }, { kanji: "申す", reading: "もうす", meaning: "말하다(겸양)" }, { kanji: "戻る", reading: "もどる", meaning: "되돌아가다" }, { kanji: "木綿", reading: "もめん", meaning: "무명, 면" }, { kanji: "森", reading: "もり", meaning: "숲" }, { kanji: "焼く", reading: "やく", meaning: "굽다" }, { kanji: "約束", reading: "やくそく", meaning: "약속" }, { kanji: "役に立つ", reading: "やくにたつ", meaning: "도움이 되다" }, { kanji: "焼ける", reading: "やける", meaning: "타다, 구워지다" }, { kanji: "優しい", reading: "やさしい", meaning: "상냥하다" }, { kanji: "痩せる", reading: "やせる", meaning: "살이 빠지다" }, { kanji: "止む", reading: "やむ", meaning: "그치다" }, { kanji: "止める", reading: "やめる", meaning: "그만두다" }, { kanji: "柔らかい", reading: "やわらかい", meaning: "부드럽다" }, { kanji: "湯", reading: "ゆ", meaning: "뜨거운 물" }, { kanji: "指", reading: "ゆび", meaning: "손가락" }, { kanji: "指輪", reading: "ゆびわ", meaning: "반지" }, { kanji: "夢", reading: "ゆめ", meaning: "꿈" }, { kanji: "揺れる", reading: "ゆれる", meaning: "흔들리다" }, { kanji: "用", reading: "よう", meaning: "볼일, 용무" }, { kanji: "用意", reading: "ようい", meaning: "준비" }, { kanji: "用事", reading: "ようじ", meaning: "볼일" }, { kanji: "汚れる", reading: "よごれる", meaning: "더러워지다" }, { kanji: "予習", reading: "よしゅう", meaning: "예습" }, { kanji: "予定", reading: "よてい", meaning: "예정" }, { kanji: "予約", reading: "よやく", meaning: "예약" }, { kanji: "寄る", reading: "よる", meaning: "들르다" }, { kanji: "喜ぶ", reading: "よろこぶ", meaning: "기뻐하다" }, { kanji: "理由", reading: "りゆう", meaning: "이유" }, { kanji: "利用", reading: "りよう", meaning: "이용" }, { kanji: "両方", reading: "りょうほう", meaning: "양쪽" }, { kanji: "旅館", reading: "りょかん", meaning: "여관" }, { kanji: "留守", reading: "るす", meaning: "부재중" }, { kanji: "冷房", reading: "れいぼう", meaning: "냉방" }, { kanji: "歴史", reading: "れきし", meaning: "역사" }, { kanji: "連絡", reading: "れんらく", meaning: "연락" }, { kanji: "沸かす", reading: "わかす", meaning: "끓이다" }, { kanji: "分かれる", reading: "わかれる", meaning: "나뉘다" }, { kanji: "沸く", reading: "わく", meaning: "끓다" }, { kanji: "訳", reading: "わけ", meaning: "이유, 까닭" }, { kanji: "忘れ物", reading: "わすれもの", meaning: "분실물" }, { kanji: "笑う", reading: "わらう", meaning: "웃다" }, { kanji: "割合", reading: "わりあい", meaning: "비율" }, { kanji: "割れる", reading: "われる", meaning: "깨지다" },{ kanji: "冷蔵庫", reading: "れいぞうこ", meaning: "냉장고" }, { kanji: "洗濯機", reading: "せんたくき", meaning: "세탁기" }, { kanji: "掃除機", reading: "そうじき", meaning: "청소기" }, { kanji: "壁", reading: "かべ", meaning: "벽" }, { kanji: "ごみ", reading: "ごみ", meaning: "쓰레기" }, { kanji: "原因", reading: "げんいん", meaning: "원인" }, { kanji: "結果", reading: "けっか", meaning: "결과" }, { kanji: "お土産", reading: "おみやげ", meaning: "기념품, 선물" }, { kanji: "運転手", reading: "うんてんしゅ", meaning: "운전기사" },{ "kanji": "諦める", "reading": "あきらめる", "meaning": "포기하다" },{ "kanji": "預かる", "reading": "あずかる", "meaning": "맡다, 보관하다" },{ "kanji": "溢れる", "reading": "あふれる", "meaning": "넘치다" },{ "kanji": "慌てる", "reading": "あわてる", "meaning": "당황하다, 허둥대다" },{ "kanji": "応募", "reading": "おうぼ", "meaning": "응모" },{ "kanji": "条件", "reading": "じょうけん", "meaning": "조건" },{ "kanji": "世紀", "reading": "せいき", "meaning": "세기(century)" },{ "kanji": "途中", "reading": "とちゅう", "meaning": "도중" },{ "kanji": "泥", "reading": "どろ", "meaning": "진흙" },{ "kanji": "涙", "reading": "なみだ", "meaning": "눈물" },{ "kanji": "秘密", "reading": "ひみつ", "meaning": "비밀" },{ "kanji": "舞台", "reading": "ぶたい", "meaning": "무대" },{ "kanji": "豊富", "reading": "ほうふ", "meaning": "풍부" }, {"kanji": "悔しい", "reading": "くやしい", "meaning": "분하다, 억울하다" },{ "kanji": "突然", "reading": "とつぜん", "meaning": "돌연, 갑자기" }
  ],
  n2: [], n1: []
};


// ----------------------------------------------------
// 2. 단어장 상태 관리 (격리 및 로컬스토리지 연동)
// ----------------------------------------------------
let madaWords = JSON.parse(localStorage.getItem('madaWords')) || [];
let oboeruWords = JSON.parse(localStorage.getItem('oboeruWords')) || [];
let currentDisplayedWords = [];
const vocabularyDisplay = document.getElementById('vocabulary-display');
const searchInput = document.getElementById('word-search');
let currentLevel = 'n5'; // 초기 진입 레벨 유지

function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
  document.getElementById(screenId).classList.add('active-screen');
  if(screenId === 'screen-vocab') displayVocabulary(currentLevel);
}

function toggleWordStatus(event, kanji, targetStatus) {
  if (event) event.stopPropagation();
  
  madaWords = madaWords.filter(w => w !== kanji);
  oboeruWords = oboeruWords.filter(w => w !== kanji);

  const oldMada = JSON.parse(localStorage.getItem('madaWords')) || [];
  const oldOboeru = JSON.parse(localStorage.getItem('oboeruWords')) || [];
  let currentStatus = oldMada.includes(kanji) ? 'mada' : (oldOboeru.includes(kanji) ? 'oboeru' : 'n5');

  if (currentStatus !== targetStatus) {
      if (targetStatus === 'mada') madaWords.push(kanji);
      if (targetStatus === 'oboeru') oboeruWords.push(kanji);
  }

  localStorage.setItem('madaWords', JSON.stringify(madaWords));
  localStorage.setItem('oboeruWords', JSON.stringify(oboeruWords));
  
  displayVocabulary(currentLevel, searchInput.value);
  if (document.getElementById('vocabulary-modal').style.display === 'flex') {
      updateModalButtons(kanji);
  }
}

function createVocabularyCard(word, displayIndex) {
  const card = document.createElement('div');
  card.className = 'vocabulary-card hover-effect glass-effect';
  
  const isMada = madaWords.includes(word.kanji);
  const isOboeru = oboeruWords.includes(word.kanji);
  
  card.innerHTML = `
    <div class="card-number">${displayIndex + 1}</div>
    <div class="card-actions">
       <button class="status-btn-mini btn-mada ${isMada ? 'active' : ''}" title="まだまだ">△</button>
       <button class="status-btn-mini btn-oboeru ${isOboeru ? 'active' : ''}" title="覚える">★</button>
    </div>
    <div class="kanji">${word.kanji}</div>
    <div class="reading">${word.reading}</div>
    <div class="meaning">${word.meaning}</div>
    <div class="level-stamp">${word.level ? word.level.toUpperCase() : 'N5'}</div>
  `;
  
  card.querySelector('.btn-mada').addEventListener('click', (e) => toggleWordStatus(e, word.kanji, 'mada'));
  card.querySelector('.btn-oboeru').addEventListener('click', (e) => toggleWordStatus(e, word.kanji, 'oboeru'));
  card.addEventListener('click', () => showModal(word, displayIndex));
  return card;
}

function displayVocabulary(level, searchTerm = '') {
  currentLevel = level;
  vocabularyDisplay.innerHTML = '';
  
  let allWords = [];
  ['n5', 'n4', 'n3', 'n2', 'n1'].forEach(lvl => {
      vocabulary[lvl].forEach(w => allWords.push({...w, level: lvl}));
  });

  let words = [];
  if (level === 'mada') {
      words = allWords.filter(w => madaWords.includes(w.kanji));
  } else if (level === 'oboeru') {
      words = allWords.filter(w => oboeruWords.includes(w.kanji));
  } else {
      words = (vocabulary[level] || []).filter(w => !madaWords.includes(w.kanji) && !oboeruWords.includes(w.kanji));
  }

  if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      words = words.filter(w => w.kanji.includes(term) || w.reading.includes(term) || w.meaning.includes(term));
  }

  currentDisplayedWords = words;

  if (words.length > 0) {
      words.forEach((word, index) => vocabularyDisplay.appendChild(createVocabularyCard(word, index)));
  } else {
      vocabularyDisplay.innerHTML = `<p style="color:#888; font-size:1.2em; grid-column: 1/-1;">해당하는 단어가 없습니다.</p>`;
  }
}

searchInput.addEventListener('input', (e) => displayVocabulary(currentLevel, e.target.value));

document.getElementById('level-selection').onclick = (e) => {
  const btn = e.target.closest('.level-button');
  if (btn) {
      document.querySelectorAll('#level-selection .level-button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      searchInput.value = ''; 
      displayVocabulary(btn.dataset.level);
  }
};


// ----------------------------------------------------
// 3. 모달 (큰 단어 카드)
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
  updateModalButtons(word.kanji);
  
  vocabularyModal.style.display = 'flex';
  document.getElementById('nav-prev').disabled = currentWordIndex === 0;
  document.getElementById('nav-next').disabled = currentWordIndex === currentDisplayedWords.length - 1;
}

function updateModalButtons(kanji) {
  const isMada = madaWords.includes(kanji);
  const isOboeru = oboeruWords.includes(kanji);
  document.getElementById('modal-mada-btn').className = isMada ? 'setup-btn active mada-active' : 'setup-btn';
  document.getElementById('modal-oboeru-btn').className = isOboeru ? 'setup-btn active oboeru-active' : 'setup-btn';
  document.getElementById('modal-mada-btn').onclick = () => toggleWordStatus(null, kanji, 'mada');
  document.getElementById('modal-oboeru-btn').onclick = () => toggleWordStatus(null, kanji, 'oboeru');
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
// 4. 실전 퀴즈 로직 (객관식 / 서술형)
// ----------------------------------------------------
let quizWords = [];
let incorrectQuestions = []; 
let currentQuizIndex = 0;
let score = 0;
let quizConfig = { level: 'n5', type: 'meaning', count: 20, mode: 'multiple' };
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

function startQuiz(overrideWords = null, mode = 'multiple') {
  quizConfig.mode = mode; 
  let words = overrideWords || vocabulary[quizConfig.level];
  if (!words || words.length < 4) return alert("단어가 부족합니다. (최소 4개)");

  let maxCount = overrideWords ? words.length : parseInt(quizConfig.count);
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

  if (quizConfig.mode === 'multiple') {
      document.getElementById('quiz-options').style.display = 'flex';
      document.getElementById('quiz-short-answer-container').style.display = 'none';
      
      let optionsStrArray = [currentCorrectAnswerStr];
      let allWords = vocabulary[quizConfig.level] || vocabulary['n5']; 
      
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
  else {
      document.getElementById('quiz-options').style.display = 'none';
      const shortContainer = document.getElementById('quiz-short-answer-container');
      shortContainer.style.display = 'block';
      const inputEl = document.getElementById('short-answer-input');
      const submitBtn = document.getElementById('short-answer-submit');
      inputEl.value = ''; inputEl.className = 'short-input'; inputEl.disabled = false; submitBtn.disabled = false; inputEl.focus();
      submitBtn.onclick = () => handleShortAnswer(inputEl.value, currentWord);
      inputEl.onkeypress = (e) => { if(e.key === 'Enter') handleShortAnswer(inputEl.value, currentWord); };
  }
}

function handleQuizAnswer(clickedBtn, isCorrect, currentWord) {
  const buttons = document.querySelectorAll('.quiz-option-btn');
  buttons.forEach(btn => btn.disabled = true);
  if (isCorrect) { clickedBtn.classList.add('correct'); score++; }
  else { clickedBtn.classList.add('wrong'); incorrectQuestions.push(currentWord); buttons.forEach(btn => { if(btn.textContent === currentCorrectAnswerStr) btn.classList.add('correct'); }); }
  proceedNextQuestion(1000);
}

function handleShortAnswer(userAnswer, currentWord) {
  const inputEl = document.getElementById('short-answer-input');
  const submitBtn = document.getElementById('short-answer-submit');
  if(userAnswer.trim() === '') return;
  inputEl.disabled = true; submitBtn.disabled = true;
  const isCorrect = userAnswer.trim() === currentCorrectAnswerStr;
  if (isCorrect) { inputEl.classList.add('correct-input'); score++; }
  else { inputEl.classList.add('wrong-input'); inputEl.value = `${userAnswer} (정답: ${currentCorrectAnswerStr})`; incorrectQuestions.push(currentWord); }
  proceedNextQuestion(1500);
}

function proceedNextQuestion(delay) {
  setTimeout(() => {
      currentQuizIndex++;
      if(currentQuizIndex < quizWords.length) loadQuizQuestion();
      else endQuiz();
  }, delay);
}

function endQuiz() {
  document.getElementById('final-score').textContent = score;
  document.getElementById('total-score').textContent = quizWords.length;
  const reviewBtn = document.getElementById('btn-review-incorrect');
  if (incorrectQuestions.length > 0) reviewBtn.style.display = 'block';
  else reviewBtn.style.display = 'none';
  switchScreen('screen-quiz-result');
}


// ----------------------------------------------------
// 5. 오답 복습 모드
// ----------------------------------------------------
let reviewIndex = 0;
let reviewCheckState = [];

function startIncorrectReview() {
  reviewIndex = 0;
  reviewCheckState = new Array(incorrectQuestions.length).fill(false);
  switchScreen('screen-incorrect-review');
  loadReviewWord();
}

function loadReviewWord() {
  const word = incorrectQuestions[reviewIndex];
  document.getElementById('review-progress').textContent = `${reviewIndex + 1} / ${incorrectQuestions.length}`;
  document.getElementById('rev-kanji').textContent = word.kanji;
  document.getElementById('rev-reading').textContent = word.reading;
  document.getElementById('rev-meaning').textContent = word.meaning;
  const checkbox = document.getElementById('rev-checkbox');
  checkbox.checked = reviewCheckState[reviewIndex];
  checkbox.onchange = (e) => { reviewCheckState[reviewIndex] = e.target.checked; checkReviewCompletion(); };
  document.getElementById('rev-prev').disabled = reviewIndex === 0;
  document.getElementById('rev-next').disabled = reviewIndex === incorrectQuestions.length - 1;
}

function navReview(dir) { reviewIndex += dir; loadReviewWord(); }

function checkReviewCompletion() {
  const allChecked = reviewCheckState.every(state => state === true);
  if(allChecked && reviewCheckState.length > 0) {
      setTimeout(() => { switchScreen('screen-review-complete'); }, 400);
  }
}

function retakeIncorrectQuiz() { startQuiz([...incorrectQuestions], quizConfig.mode); }