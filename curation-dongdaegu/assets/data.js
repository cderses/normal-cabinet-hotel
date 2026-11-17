/* normal cabinet. — 대구여행 큐레이션 데이터 · 동대구역점
   조사 기준일 2026-11-18 · 동대구역점(대구 동구 효목로 50) 출발 기준
   b: 'f' 대표 유명 / 'h' 숨은 로컬 픽 / 'p' 생활 편의
   거리·시간: 도보는 카카오맵 도보 경로, 차는 티맵 실시간 경로(2026-11-18 조회)
   route.steps: t 시각 · n 상호(3개국어) · m 한 줄 이유/이동 · q 지도 검색어 */
window.CURATION = {
  updated: "2026-11-18",
  cats: [
    {
      id: 1, key: "food",
      title: { ko: "로컬 맛집 · 노포", en: "Food & Local Gems", zh: "本地美食 · 老店" },
      sub: { ko: "효목동 막창부터 평화시장 닭똥집까지", en: "From Hyomok makchang to the gizzard alley", zh: "从孝木洞小肠到平和市场鸡胗街" },
      img: "assets/cat-food.jpg"
    },
    {
      id: 2, key: "cafe",
      title: { ko: "카페 · 브런치 · 빵", en: "Cafes, Brunch & Bakeries", zh: "咖啡 · 早午餐 · 面包" },
      sub: { ko: "역 뒤 골목의 작은 카페와 금호강 뷰", en: "Small cafes behind the station and a river view", zh: "车站后巷的小咖啡馆与琴湖江景" },
      img: "assets/cat-cafe.jpg"
    },
    {
      id: 3, key: "run",
      title: { ko: "러닝 · 산책 코스", en: "Running & Walks", zh: "跑步 · 散步路线" },
      sub: { ko: "금호강·신천·수성못, 거리와 야간 조명까지", en: "Geumho River, Sincheon, Suseong Lake — distances and night lighting", zh: "琴湖江、新川、寿城池——距离与夜间照明" },
      img: "assets/cat-run.jpg"
    },
    {
      id: 4, key: "spots",
      title: { ko: "명소 · 전시 · 야경", en: "Spots & Culture", zh: "景点 · 展览 · 夜景" },
      sub: { ko: "시장 골목의 낮과 앞산의 밤", en: "Market alleys by day, Apsan by night", zh: "白天的市场胡同，夜晚的前山" },
      img: "assets/cat-spots.jpg"
    },
    {
      id: 5, key: "essentials",
      title: { ko: "편의 · 약국 · 마트", en: "Convenience & Mart", zh: "便利店 · 药店 · 超市" },
      sub: { ko: "편의점 · 약국 · 빨래방 · 올리브영 · 마트", en: "Convenience stores, pharmacy, laundry, cosmetics, mart", zh: "便利店 · 药店 · 洗衣房 · 美妆 · 超市" },
      img: "assets/cat-essentials.jpg"
    }
  ],
  places: [
    {
      c: 1, b: "f", n: { ko: "효목골막창", en: "Hyomokgol Makchang (효목골막창)", zh: "孝木谷小肠 (Hyomokgol Makchang)" },
      w: { ko: "도보 5분", en: "5 min walk", zh: "步行 5 分钟" }, d: "0.3km",
      a: "대구 동구 효목로 27-1",
      h: { ko: "매일 11:00–01:00", en: "Daily 11:00–01:00", zh: "每日 11:00–01:00" },
      s: { ko: "동구시장 길가의 돼지막창집. 생막창을 상에 올려 직접 굽고 막장·백김치에 곁들인다. 된장찌개 2,000원에 밥을 말아 마무리하는 게 이 집의 순서.", en: "A pork makchang house on the Dong-gu Market street. Raw intestine arrives at the table to grill yourself, with fermented bean paste and white kimchi; the meal ends with a 2,000-won soybean-paste stew and rice.", zh: "东区市场路边的猪小肠店。生小肠上桌自己烤，配大酱和白泡菜。最后用2,000韩元的大酱汤泡饭收尾，这是这家店的顺序。" },
      t: { ko: "돼지막창 12,000원, 첫 주문은 3인분부터. 저녁엔 이름 적는 대기 보드가 있다 — 15~16시나 21시 이후가 여유롭다.", en: "Pork makchang is ₩12,000 and the first order starts at three portions. There is a waiting board by the door — 15:00–16:00 or after 21:00 is calmer.", zh: "猪小肠12,000韩元，首单需3人份起。傍晚需在候位板写名字——15~16点或21点后较轻松。" }
    },
    {
      c: 1, b: "h", n: { ko: "대해생고기", en: "Daehae Saenggogi (대해생고기)", zh: "大海鲜肉 (Daehae Saenggogi)" },
      w: { ko: "차 4분", en: "4 min by car", zh: "车程 4 分钟" }, d: "1.3km",
      a: "대구 수성구 만촌로 106",
      h: { ko: "월–금 17:00–22:30 · 토·일 휴무", en: "Mon–Fri 17:00–22:30 · closed Sat–Sun", zh: "周一–周五 17:00–22:30 · 周六日休" },
      s: { ko: "대구 사람이 가족과 다시 찾는 로컬 고깃집. 고기 상태와 반찬이 정갈하고, 육회비빔밥이 이 집의 한 끼다.", en: "A local grill house Daegu people come back to with family. The meat and the banchan are immaculate, and the yukhoe bibimbap is the meal to order.", zh: "大邱人会和家人再来的本地烤肉店。肉质与配菜都很干净利落，生牛肉拌饭是这里的招牌一餐。" },
      t: { ko: "저녁 장사만 한다. 토·일은 문을 닫으니 주말 도착이면 순서를 바꿀 것.", en: "Dinner only, and closed Saturday and Sunday — swap the order if you arrive on the weekend.", zh: "只做晚餐，周六日休息——周末抵达的话请调整顺序。" }
    },
    {
      c: 1, b: "h", n: { ko: "키츠네소바", en: "Kitsune Soba (키츠네소바)", zh: "狐狸荞麦面 (Kitsune Soba)" },
      w: { ko: "차 6분", en: "6 min by car", zh: "车程 6 分钟" }, d: "2.8km",
      a: "대구 수성구 달구벌대로489길 61-26",
      h: { ko: "화–일 12:00–15:30 · 17:00–20:30 · 월 휴무", en: "Tue–Sun 12:00–15:30, 17:00–20:30 · closed Mon", zh: "周二–周日 12:00–15:30、17:00–20:30 · 周一休" },
      s: { ko: "주택가 골목의 작은 소바집. 유부초밥을 올린 따뜻한 소바가 기본이고 국물이 맑다. 조용해서 혼자 가도 편하다.", en: "A tiny soba shop in a residential alley. Warm soba topped with inari sushi is the standard, the broth is clear, and it is quiet enough to eat alone.", zh: "住宅区小巷里的小荞麦面店。招牌是放了油炸豆腐寿司的温荞麦面，汤头清澈，安静得一个人来也自在。" },
      t: { ko: "브레이크타임이 확실하다. 15:30–17:00은 문이 닫혀 있다.", en: "The break is strict: closed 15:30–17:00.", zh: "午休很严格，15:30–17:00 不营业。" }
    },
    {
      c: 1, b: "h", n: { ko: "후꾸스시", en: "Fukusushi (후꾸스시)", zh: "福寿司 (Fukusushi)" },
      w: { ko: "차 11분", en: "11 min by car", zh: "车程 11 分钟" }, d: "5.4km",
      a: "대구 수성구 동대구로20길 66",
      h: { ko: "화–토 11:30–21:00 · 일 11:30–15:00 · 월 휴무", en: "Tue–Sat 11:30–21:00 · Sun 11:30–15:00 · closed Mon", zh: "周二–周六 11:30–21:00 · 周日 11:30–15:00 · 周一休" },
      s: { ko: "가성비 좋은 스시로 입소문 난 동네 초밥집. 오마카세보다 정직한 한 끼 — 데이트나 가벼운 저녁에 맞다.", en: "A neighbourhood sushi counter known for value. Less omakase theatre, more an honest meal — good for a date or a light dinner.", zh: "以性价比出名的小区寿司店。没有 omakase 的排场，是诚实的一餐——适合约会或轻晚餐。" },
      t: { ko: "월 휴무. 일요일은 점심만 한다.", en: "Closed Monday; Sunday is lunch only.", zh: "周一休，周日只做午餐。" }
    },
    {
      c: 1, b: "h", n: { ko: "다락방만두", en: "Darakbang Mandu (다락방만두)", zh: "阁楼饺子 (Darakbang Mandu)" },
      w: { ko: "차 13분", en: "13 min by car", zh: "车程 13 分钟" }, d: "4.9km",
      a: "대구 중구 경상감영1길 43",
      h: { ko: "수–일 11:00–18:00 · 월·화 휴무", en: "Wed–Sun 11:00–18:00 · closed Mon–Tue", zh: "周三–周日 11:00–18:00 · 周一二休" },
      s: { ko: "이름처럼 아늑한 2층 만두·중식집. 군만두와 짜장·짬뽕 같은 기본기가 깔끔해 실패가 없다.", en: "A cosy first-floor-over-street dumpling and Chinese kitchen. Fried dumplings, jjajang and jjamppong are all made properly.", zh: "如同名字般温馨的二楼饺子·中餐馆。煎饺、炸酱面、海鲜面基本功扎实，不会失手。" },
      t: { ko: "월·화 이틀 쉰다. 18시에 닫으니 점심이나 이른 저녁으로 넣을 것.", en: "Closed two days, Monday and Tuesday, and shuts at 18:00 — go for lunch or an early dinner.", zh: "周一周二连休，18点关门——请安排在午餐或早晚餐。" }
    },
    {
      c: 1, b: "f", n: { ko: "중앙떡볶이", en: "Jungang Tteokbokki (중앙떡볶이)", zh: "中央炒年糕 (Jungang Tteokbokki)" },
      w: { ko: "지하철 4정거장 · 약 30분", en: "4 subway stops · about 30 min", zh: "地铁 4 站 · 约 30 分钟" }, d: "4.9km",
      a: "대구 중구 동성로2길 81",
      h: { ko: "월–금 11:00–19:00 · 토 ~20:00 · 일 휴무", en: "Mon–Fri 11:00–19:00 · Sat to 20:00 · closed Sun", zh: "周一–周五 11:00–19:00 · 周六至 20:00 · 周日休" },
      s: { ko: "동성로 골목의 오래된 분식집. 매콤달콤한 떡볶이에 납작만두를 곁들이는 게 대구식이고, 시장 특유의 소란함이 그대로 남아 있다.", en: "An old snack shop in a Dongseong-ro alley. Sweet-hot tteokbokki with flat dumplings is the Daegu way, and the market-like din is intact.", zh: "东城路胡同里的老小吃店。甜辣炒年糕配扁饺子是大邱吃法，市场般的热闹气氛也原样保留着。" },
      t: { ko: "평점은 갈리지만 대구 분식의 기준점이다. 일요일 휴무, 19시 마감이라 점심에 넣는 게 안전하다.", en: "Ratings divide, but this is the benchmark for Daegu snacks. Closed Sunday and shuts at 19:00, so make it lunch.", zh: "评价分歧，但它是大邱小吃的基准。周日休、19点打烊，安排在午餐较稳妥。" }
    },
    {
      c: 1, b: "f", n: { ko: "남문납작만두", en: "Nammun Napjak Mandu (남문납작만두)", zh: "南门扁饺子 (Nammun Napjak Mandu)" },
      w: { ko: "차 15분", en: "15 min by car", zh: "车程 15 分钟" }, d: "6.6km",
      a: "대구 중구 명륜로 64-1",
      h: { ko: "월–토 10:00–18:30 · 일 휴무", en: "Mon–Sat 10:00–18:30 · closed Sun", zh: "周一–周六 10:00–18:30 · 周日休" },
      s: { ko: "대구 납작만두의 대표집 중 하나. 얇고 바삭한 만두피에 아삭한 채소와 매콤한 양념을 얹어 먹는다. 값이 가벼워 간식으로 좋다.", en: "One of the reference points for Daegu's flat dumplings: thin crisp skins with crunchy vegetables and a spicy dressing. Cheap enough to be a snack.", zh: "大邱扁饺子的代表店之一。薄脆的饺子皮上放爽脆蔬菜和辣味酱料，价格轻，适合当小吃。" },
      t: { ko: "포장 손님이 많다. 일요일은 닫는다.", en: "Many people take it away. Closed Sunday.", zh: "外带客人很多，周日休息。" }
    },
    {
      c: 1, b: "f", n: { ko: "평화시장 닭똥집골목", en: "Pyeonghwa Market Gizzard Alley (평화시장 닭똥집골목)", zh: "平和市场鸡胗街 (평화시장 닭똥집골목)" },
      w: { ko: "차 8분", en: "8 min by car", zh: "车程 8 分钟" }, d: "2.7km",
      a: "대구 동구 신암동 (평화시장)",
      h: { ko: "골목 상시 · 점포 대개 12:00–03:00", en: "Alley always open · shops mostly 12:00–03:00", zh: "街区常开 · 店铺多为 12:00–03:00" },
      s: { ko: "동대구역 뒤편 평화시장의 닭똥집 골목. 숯불에 구운 닭똥집에 소주 한 잔 — 대구 10미 가운데 하나다.", en: "Behind Dongdaegu Station, this alley grills chicken gizzards over charcoal with soju — one of Daegu's ten signature foods.", zh: "东大邱站后方的平和市场鸡胗街。炭火烤鸡胗配一杯烧酒——大邱十大美食之一。" },
      t: { ko: "늦게까지 연다. KTX 막차 전 마지막 한 잔으로도 좋다.", en: "It stays open late — a good last stop before the last KTX.", zh: "营业到很晚，适合作为末班 KTX 前的最后一杯。" }
    },

    {
      c: 2, b: "h", n: { ko: "베르 (브런치카페)", en: "Beleu, brunch cafe (베르)", zh: "贝르 早午餐咖啡 (Beleu)" },
      w: { ko: "차 5분 / 도보 26분", en: "5 min by car / 26 min walk", zh: "车程 5 分钟 / 步行 26 分钟" }, d: "1.7km",
      a: "대구 동구 화랑로11길 69-14",
      h: { ko: "영업시간 지도 미표기 · 방문 전 확인", en: "Hours not listed on maps — check before going", zh: "地图无营业时间 · 访问前确认" },
      s: { ko: "동대구역 뒤 화랑로 골목의 작은 브런치 카페. 접시가 예쁘고 자리가 적어 조용하다.", en: "A small brunch cafe in a Hwarang-ro alley behind the station. Pretty plates, few tables, quiet.", zh: "车站后方花郎路小巷里的小型早午餐咖啡店。摆盘漂亮、座位少而安静。" },
      t: { ko: "좌석이 적고 영업시간이 지도에 없다. 나가기 전 인스타그램에서 오늘 영업을 확인할 것.", en: "Few seats and no hours on the map — check Instagram for today's opening before you set out.", zh: "座位少且地图上没有营业时间，出门前请在 Instagram 确认当天是否营业。" }
    },
    {
      c: 2, b: "f", n: { ko: "아눅 (a.nook)", en: "a.nook (아눅)", zh: "a.nook (아눅)" },
      w: { ko: "차 7분 / 도보 28분", en: "7 min by car / 28 min walk", zh: "车程 7 分钟 / 步行 28 分钟" }, d: "2.9km",
      a: "대구 동구 동부로 158-5",
      h: { ko: "매일 12:00–22:00", en: "Daily 12:00–22:00", zh: "每日 12:00–22:00" },
      s: { ko: "동대구역 카페 상권이 생기기 전부터 자리 잡은 빵집 겸 카페. 까눌레와 버터바가 대표이고, 직접 굽는 빵이 매일 나온다.", en: "A bakery-cafe that was here before the station's café strip existed. Canelés and butter bars are the signature, with bread baked in house every day.", zh: "在东大邱站咖啡商圈形成之前就已立足的面包咖啡店。可丽露和黄油条是招牌，每天都有自家烘焙的面包。" },
      t: { ko: "KTX 시간이 남을 때 마지막 한 잔으로 좋다. 역까지 걸어 10분 남짓.", en: "A good last cup when you are early for a train — about ten minutes on foot to the station.", zh: "赶火车前的最后时光很好用，步行到车站约十分钟。" }
    },
    {
      c: 2, b: "h", n: { ko: "오프레코드", en: "Off Record (오프레코드)", zh: "Off Record (오프레코드)" },
      w: { ko: "도보 20분 / 차 5분", en: "20 min walk / 5 min by car", zh: "步行 20 分钟 / 车程 5 分钟" }, d: "1.2km",
      a: "대구 동구 동부로34길 16-1",
      h: { ko: "12:00–22:30 (지도·인스타 확인)", en: "12:00–22:30 (check map or Instagram)", zh: "12:00–22:30（请确认地图或 Instagram）" },
      s: { ko: "LP로 음악을 트는 미드센추리 카페. 수제 쿠키와 크림, 그리고 골든리트리버 '희순이'가 상주한다. 반려동물 동반이 가능하다.", en: "A mid-century cafe that plays records. House cookies and cream, and a resident golden retriever named Huisun. Dogs are welcome.", zh: "播放黑胶的中世纪风格咖啡馆。手作曲奇与奶油，还有常驻的金毛犬「熙顺」。可携宠物入内。" },
      t: { ko: "요청하면 원하는 LP를 틀어준다. 영업시간이 바뀌는 편이라 @off__record__ 확인.", en: "Ask and they will play your record. Hours shift, so check @off__record__.", zh: "可以点播黑胶。营业时间常变动，请查 @off__record__。" }
    },
    {
      c: 2, b: "h", n: { ko: "바우트 (baut)", en: "baut (바우트)", zh: "baut (바우트)" },
      w: { ko: "차 4분", en: "4 min by car", zh: "车程 4 分钟" }, d: "1.9km",
      a: "대구 동구 동부로26길 18",
      h: { ko: "월·수–금 10:00–20:00 · 토·일 11:00–21:00 · 화 휴무", en: "Mon, Wed–Fri 10:00–20:00 · Sat–Sun 11:00–21:00 · closed Tue", zh: "周一、周三–周五 10:00–20:00 · 周六日 11:00–21:00 · 周二休" },
      s: { ko: "작은 로스터리 겸 베이커리. 동네 단골이 많고 커피와 빵의 균형이 좋다. 평점 4.9는 리뷰 수가 적은 대신 확실한 신호.", en: "A tiny roastery and bakery with a steady local following; coffee and bread are evenly matched. A 4.9 from a small review count is still a good sign.", zh: "小型烘焙咖啡店，街坊常客很多，咖啡与面包平衡得好。4.9分虽评价不多，却是可靠的信号。" },
      t: { ko: "화요일 휴무. 좌석이 몇 개 없어 오전이 조용하다.", en: "Closed Tuesday. Only a few seats — mornings are quiet.", zh: "周二休息。座位不多，上午最安静。" }
    },
    {
      c: 2, b: "f", n: { ko: "인스퍼레이션디 동촌유원지", en: "Inspiration D, Dongchon (인스퍼레이션디)", zh: "Inspiration D 东村游园地 (인스퍼레이션디)" },
      w: { ko: "차 7분 / 도보 23분", en: "7 min by car / 23 min walk", zh: "车程 7 分钟 / 步行 23 分钟" }, d: "1.9km",
      a: "대구 동구 효동로6길 57",
      h: { ko: "매일 10:30–22:15 · 일 ~21:45", en: "Daily 10:30–22:15 · Sun to 21:45", zh: "每日 10:30–22:15 · 周日至 21:45" },
      s: { ko: "금호강이 통창으로 들어오는 큰 카페. 소금빵·스콘과 브런치가 있고 주차장이 넓다. 동촌유원지 산책 뒤에 앉기 좋다.", en: "A large cafe with the Geumho River filling its windows: salt bread, scones, brunch, and a big car park. The natural seat after a Dongchon walk.", zh: "琴湖江整面落地窗的大咖啡店。有盐面包、司康和早午餐，停车场宽敞。适合东村游园地散步后来坐。" },
      t: { ko: "주말 오후엔 대기한다. 해질 무렵 강 쪽 자리가 좋다.", en: "Expect a wait on weekend afternoons; the river-side seats are best at dusk.", zh: "周末下午需要等位，日落时靠江的座位最好。" }
    },
    {
      c: 2, b: "f", n: { ko: "삼송빵집 동대구역사점", en: "Samsong Bakery, Dongdaegu Station (삼송빵집)", zh: "三松面包店 东大邱站店 (삼송빵집)" },
      w: { ko: "동대구역 내 · 도보 17분", en: "Inside Dongdaegu Station · 17 min walk", zh: "东大邱站内 · 步行 17 分钟" }, d: "1.0km",
      a: "대구 동구 동대구로 550",
      h: { ko: "08:00–22:00 (역 영업시간 내)", en: "08:00–22:00 (station hours)", zh: "08:00–22:00（站内营业时间）" },
      s: { ko: "대구 여행 기념품 1순위인 삼송빵집의 역 안 매장. 명란·마늘빵 계열과 옛날 단팥빵이 기본이다.", en: "The station branch of Daegu's default souvenir bakery: mentaiko and garlic bread, plus old-fashioned red bean buns.", zh: "大邱旅行伴手礼首选的站内门店。明太子·蒜香面包系列与老式红豆面包是基本款。" },
      t: { ko: "KTX 타기 전 5분에 들르기 좋다. 인기 품목은 오후에 빠진다.", en: "Five minutes before your train. Popular items run out in the afternoon.", zh: "上车前五分钟很方便，热门品项下午就会卖完。" }
    },

    {
      c: 3, b: "f", n: { ko: "동촌유원지 · 해맞이다리", en: "Dongchon Park & Sunrise Bridge (동촌유원지·해맞이다리)", zh: "东村游园地 · 迎日桥 (동촌유원지·해맞이다리)" },
      w: { ko: "차 5분 / 도보 23분", en: "5 min by car / 23 min walk", zh: "车程 5 分钟 / 步行 23 分钟" }, d: "1.8km",
      a: "대구 동구 효동로6길 73",
      h: { ko: "24시간", en: "24 hours", zh: "24 小时" },
      s: { ko: "금호강 둔치와 222m 보행 전용 해맞이다리. 아양루에서 해맞이다리를 지나 화랑교까지 왕복 약 5km가 평지로 이어진다.", en: "The Geumho riverside and the 222-metre pedestrian Sunrise Bridge. From Ayangnu across the bridge to Hwarang-gyo is about 5 km return, all flat.", zh: "琴湖江堤与222米步行专用迎日桥。从峨洋楼过桥到花郎桥往返约5公里，全程平地。" },
      t: { ko: "저녁엔 다리 위 조명이 켜진다. 보행로와 자전거길이 나뉘어 있다.", en: "The bridge lights come on at dusk. Walking and cycling paths are separated.", zh: "傍晚桥上会亮灯，步行道与自行车道分开。" }
    },
    {
      c: 3, b: "f", n: { ko: "신천 둔치 (대봉교–칠성교)", en: "Sincheon riverside (Daebong–Chilseong)", zh: "新川堤岸（大凤桥–七星桥）" },
      w: { ko: "차 7분", en: "7 min by car", zh: "车程 7 分钟" }, d: "3.3km",
      a: "대구 중구 칠성교 일대",
      h: { ko: "24시간", en: "24 hours", zh: "24 小时" },
      s: { ko: "대봉교에서 칠성교까지 이어지는 평지 러닝 코스. 탄성 포장과 야간 조명이 갖춰져 밤에도 달린다.", en: "A flat running course from Daebong Bridge to Chilseong Bridge, with springy paving and lighting for night runs.", zh: "从大凤桥到七星桥的平地跑步路线，有弹性铺装与夜间照明，晚上也能跑。" },
      t: { ko: "5km 한 바퀴가 기본. 칠성시장 쪽이 밤에도 밝다.", en: "5 km one way is the standard loop; the Chilseong Market end stays lit at night.", zh: "5公里一圈是基本量，七星市场一侧夜间也很亮。" }
    },
    {
      c: 3, b: "h", n: { ko: "봉무공원", en: "Bongmu Park (봉무공원)", zh: "凤舞公园 (봉무공원)" },
      w: { ko: "차 12분", en: "12 min by car", zh: "车程 12 分钟" }, d: "6.4km",
      a: "대구 동구 팔공로50길 66",
      h: { ko: "산책로 상시 · 주차장 10:00–17:00", en: "Paths always open · car park 10:00–17:00", zh: "步道常开 · 停车场 10:00–17:00" },
      s: { ko: "이시아폴리스 뒤편의 넓은 공원. 완만한 순환로와 잔디밭이 있어 가볍게 걷기 좋다.", en: "A broad park behind Esiapolis with a gentle loop and lawns — easy walking.", zh: "Esiapolis 后方的大公园，有缓坡环路和草坪，适合轻松散步。" },
      t: { ko: "주차장 운영시간이 짧다. 저녁엔 공원 밖에 차를 두고 들어갈 것.", en: "The car park closes early; park outside the gate for an evening walk.", zh: "停车场关闭较早，傍晚请把车停在园外。" }
    },
    {
      c: 3, b: "f", n: { ko: "수성못 둘레길", en: "Suseong Lake Loop (수성못)", zh: "寿城池环湖路 (수성못)" },
      w: { ko: "차 14분", en: "14 min by car", zh: "车程 14 分钟" }, d: "7.0km",
      a: "대구 수성구 두산동",
      h: { ko: "24시간", en: "24 hours", zh: "24 小时" },
      s: { ko: "한 바퀴 2,020m의 호수 순환로. 서쪽은 마사토 흙길, 동쪽은 180m 수변 데크로 이어진다.", en: "A 2,020-metre loop around the lake: decomposed granite on the west side, a 180-metre waterside deck on the east.", zh: "一圈2,020米的环湖路。西侧是土路面，东侧有180米的水边木栈道。" },
      t: { ko: "야간 조명이 좋아 밤 러닝이 가능하다. 음악분수 시간은 계절마다 다르니 현장 안내를 볼 것.", en: "Lit well enough to run at night. The music fountain's times change with the season — check the on-site notice.", zh: "夜间照明好，可以夜跑。音乐喷泉时间随季节变动，请查看现场公告。" }
    },
    {
      c: 3, b: "h", n: { ko: "망우당공원", en: "Mangudang Park (망우당공원)", zh: "忘忧堂公园 (망우당공원)" },
      w: { ko: "차 10분 / 도보 33분", en: "10 min by car / 33 min walk", zh: "车程 10 分钟 / 步行 33 分钟" }, d: "2.0km",
      a: "대구 동구 효목동 산 234",
      h: { ko: "24시간", en: "24 hours", zh: "24 小时" },
      s: { ko: "효목동 뒷산의 숲 공원. 임란호국영남충의단과 완만한 산책로가 있어 운동화만 있으면 오를 수 있다.", en: "The wooded hill behind Hyomok-dong, with a memorial shrine and gentle paths — all you need is shoes.", zh: "孝木洞后山的森林公园，有壬乱护国岭南忠义坛与平缓步道，穿运动鞋就能上山。" },
      t: { ko: "숙소에서 걸어 오를 수 있는 가장 가까운 숲. 해질 무렵이 가장 좋다.", en: "The nearest forest you can walk to from the hotel; best at dusk.", zh: "从酒店步行可达的最近森林，日落时分最好。" }
    },

    {
      c: 4, b: "h", n: { ko: "동구시장", en: "Dong-gu Market (동구시장)", zh: "东区市场 (동구시장)" },
      w: { ko: "도보 6분", en: "6 min walk", zh: "步行 6 分钟" }, d: "0.4km",
      a: "대구 동구 효목로 8",
      h: { ko: "매일 08:40–20:00", en: "Daily 08:40–20:00", zh: "每日 08:40–20:00" },
      s: { ko: "숙소 앞 시장. 반찬·과일·분식이 한 골목에 있고 저녁엔 효목골막창 쪽으로 사람이 모인다.", en: "The market in front of the hotel: banchan, fruit and snacks in one alley, and a crowd drifting toward Hyomokgol Makchang by evening.", zh: "酒店前面的市场。配菜、水果、小吃集中在一条巷子里，傍晚人流会往孝木谷小肠方向聚。" },
      t: { ko: "아침엔 반찬, 저녁엔 골목. 시장이라 현금을 조금 챙길 것.", en: "Banchan in the morning, the alley at night. Bring a little cash.", zh: "早上市集、傍晚巷子。市场里请带些现金。" }
    },
    {
      c: 4, b: "f", n: { ko: "신세계백화점 대구점", en: "Shinsegae Department Store, Daegu (신세계백화점)", zh: "新世界百货 大邱店 (신세계백화점)" },
      w: { ko: "차 5분 / 도보 20분", en: "5 min by car / 20 min walk", zh: "车程 5 分钟 / 步行 20 分钟" }, d: "1.6km",
      a: "대구 동구 동부로 149",
      h: { ko: "화–일 10:30–20:00 · 금–일 ~20:30 · 휴점일은 지도 확인", en: "Tue–Sun 10:30–20:00 · Fri–Sun to 20:30 · check closure days", zh: "周二–周日 10:30–20:00 · 周五–周日至 20:30 · 休店日请确认" },
      s: { ko: "동대구역과 바로 이어진 대형 백화점. 지하 식품관과 파미에스테이션이 한 동선으로 이어진다.", en: "The department store connected to Dongdaegu Station; the basement food hall and Pashion Station sit on one route.", zh: "与东大邱站直接相连的大型百货。地下食品馆与 Fashion Station 一条动线相连。" },
      t: { ko: "비 오는 날 가장 넓은 실내 동선. 휴점일이 달마다 달라 지도에서 한 번 확인할 것.", en: "The widest indoor route on a rainy day. The monthly closing day moves — check the map once.", zh: "雨天最宽敞的室内动线。每月休店日不同，请在地图确认一次。" }
    },
    {
      c: 4, b: "f", n: { ko: "앞산전망대 · 케이블카", en: "Apsan Observatory & Cable Car (앞산)", zh: "前山瞭望台 · 缆车 (앞산)" },
      w: { ko: "차 15분", en: "15 min by car", zh: "车程 15 分钟" }, d: "9.6km",
      a: "대구 남구 앞산순환로 574-114",
      h: { ko: "케이블카 10:30–18:30 · 금·토·일 ~20:30", en: "Cable car 10:30–18:30 · Fri–Sun to 20:30", zh: "缆车 10:30–18:30 · 周五–周日至 20:30" },
      s: { ko: "해발 660m에서 대구 시내를 통째로 내려다보는 전망대. 전망대 자체는 무료이고, 케이블카로 오르면 시가지가 한 장에 들어온다.", en: "An observatory at 660 m that takes in the whole city at once. The observatory itself is free; the cable car puts the sprawl in one frame.", zh: "海拔660米的瞭望台，一眼看尽大邱市区。瞭望台本身免费，坐缆车上山可把市区收进一张照片。" },
      t: { ko: "11월은 막차가 이르다. 매표는 30분 전 마감하니 저녁 일정은 역산해서 잡을 것.", en: "In November the last car goes early and tickets close 30 minutes before — work backwards from the sunset.", zh: "11月末班很早，售票提前30分钟截止，傍晚行程请倒推安排。" }
    },
    {
      c: 4, b: "f", n: { ko: "대구간송미술관", en: "Daegu Kansong Art Museum (대구간송미술관)", zh: "大邱涧松美术馆 (대구간송미술관)" },
      w: { ko: "차 19분", en: "19 min by car", zh: "车程 19 分钟" }, d: "10.2km",
      a: "대구 수성구 미술관로 70",
      h: { ko: "화–일 10:00–18:00 · 입장 17:00까지 · 월 휴관", en: "Tue–Sun 10:00–18:00 · last entry 17:00 · closed Mon", zh: "周二–周日 10:00–18:00 · 入场至 17:00 · 周一休" },
      s: { ko: "2025년 문을 연 대구 최대 미술관. 지금은 겸재 정선 탄신 350주년 특별전(9.16–12.27)이 상설 〈미인도〉와 함께 열린다.", en: "Daegu's largest museum, opened in 2025. On now: the Jeong Seon 350th-anniversary exhibition (16 Sep–27 Dec), alongside the permanent display of Shin Yun-bok's Portrait of a Beauty.", zh: "2025年开馆的大邱最大美术馆。现正展出谦斋郑敾诞辰350周年特展（9.16–12.27），并与常设《美人图》同场。" },
      t: { ko: "성인 14,000원, 7세 미만·65세 이상 무료. NOL 티켓 예매가 가장 빠르다.", en: "₩14,000 for adults; under 7 and over 65 free. NOL Ticket is the fastest booking route.", zh: "成人14,000韩元，7岁以下·65岁以上免费。用 NOL Ticket 预订最快。" }
    },
    {
      c: 4, b: "f", n: { ko: "김광석 다시그리기길", en: "Kim Gwang-seok Street (김광석길)", zh: "金光石回忆之路 (김광석길)" },
      w: { ko: "차 10분", en: "10 min by car", zh: "车程 10 分钟" }, d: "5.0km",
      a: "대구 중구 대봉동 6-11",
      h: { ko: "24시간", en: "24 hours", zh: "24 小时" },
      s: { ko: "김광석이 살던 골목에 벽화와 노래비를 세운 길. 대봉교로 이어져 신천 산책과 바로 붙는다.", en: "The alley where Kim Gwang-seok lived, lined with murals and song lyrics. It runs down to Daebong Bridge and the Sincheon walk.", zh: "金光石曾居住的胡同，墙上画满壁画、立着歌碑。走到大凤桥就接上新川散步路。" },
      t: { ko: "경사와 계단이 있어 러닝보다 산책. 낮에 사진이 잘 나온다.", en: "Slopes and steps make it a walk rather than a run; best photographed in daylight.", zh: "有坡度和台阶，适合散步而非跑步；白天拍照最好。" }
    },
    {
      c: 4, b: "f", n: { ko: "동성로", en: "Dongseong-ro (동성로)", zh: "东城路 (동성로)" },
      w: { ko: "지하철 4정거장 · 약 30분", en: "4 subway stops · about 30 min", zh: "地铁 4 站 · 约 30 分钟" }, d: "4.9km",
      a: "대구 중구 동성로 일대",
      h: { ko: "상점별 상이 (대개 11:00–22:00)", en: "Per shop (mostly 11:00–22:00)", zh: "各店不同（多为 11:00–22:00）" },
      s: { ko: "쇼핑·영화·클럽이 한 블록에 겹친 대구의 중심. 비 오는 날 실내 동선으로도 쓸 수 있다.", en: "Daegu's centre, where shopping, cinemas and clubs overlap in a few blocks — also an indoor route on wet days.", zh: "购物、电影、夜店集中在一个街区的大邱市中心，雨天也能当作室内动线。" },
      t: { ko: "중앙로역에서 바로 이어진다. 저녁엔 클럽 골목까지 이어진다.", en: "It starts at Jungangno Station and runs into the club alleys at night.", zh: "从中央路站直接连上，晚上延伸到夜店街。" }
    },
    {
      c: 4, b: "h", n: { ko: "이시아폴리스 롯데아울렛", en: "Lotte Outlet, Esiapolis (이시아폴리스)", zh: "Esiapolis 乐天奥特莱斯 (이시아폴리스)" },
      w: { ko: "차 12분", en: "12 min by car", zh: "车程 12 分钟" }, d: "6.1km",
      a: "대구 동구 팔공로49길 16",
      h: { ko: "10:30–21:00", en: "10:30–21:00", zh: "10:30–21:00" },
      s: { ko: "동구의 아울렛 몰. 브랜드 매장과 식당, 영화관이 한 건물에 모여 있고 주차가 넉넉하다.", en: "The east side's outlet mall: brands, restaurants and a cinema under one roof, with plenty of parking.", zh: "东区的奥特莱斯商城。品牌店、餐厅、影院集中在一栋楼里，停车宽松。" },
      t: { ko: "비 오거나 더운 날의 실내 코스. 봉무공원과 이어서 반나절이 된다.", en: "The indoor option for rain or heat; pair it with Bongmu Park for half a day.", zh: "下雨或炎热时的室内方案，与凤舞公园连起来正好半天。" }
    },

    {
      c: 5, b: "p", n: { ko: "GS25 대구효목로점", en: "GS25 Hyomok-ro (GS25 대구효목로점)", zh: "GS25 孝木路店 (GS25 대구효목로점)" },
      w: { ko: "도보 3분", en: "3 min walk", zh: "步行 3 分钟" }, d: "0.2km",
      a: "대구 동구 효목로 34",
      h: { ko: "24시간", en: "24 hours", zh: "24 小时" },
      s: { ko: "숙소에서 가장 가까운 편의점. 물·우산·상비약·택배까지 한 번에 해결된다.", en: "The closest convenience store: water, umbrellas, basics, parcel pickup.", zh: "离酒店最近的便利店。水、雨伞、常备药、寄件一次解决。" },
      t: { ko: "밤 12시 이후 필요한 것은 사실상 여기서 해결된다.", en: "After midnight, this is where things get solved.", zh: "午夜之后需要的，几乎都在这里解决。" }
    },
    {
      c: 5, b: "p", n: { ko: "동구시장 심야약국", en: "Dong-gu Market Late-night Pharmacy (동구시장 심야약국)", zh: "东区市场深夜药局 (동구시장 심야약국)" },
      w: { ko: "도보 8분", en: "8 min walk", zh: "步行 8 分钟" }, d: "0.5km",
      a: "대구 동구 화랑로 123 (유림아파트 1층 115호)",
      h: { ko: "매일 09:00–23:00 · 공휴일 포함", en: "Daily 09:00–23:00 · holidays too", zh: "每日 09:00–23:00 · 含公休日" },
      s: { ko: "동구에서 밤 23시까지 문을 여는 몇 안 되는 약국. 공휴일에도 같은 시간에 연다.", en: "One of the few pharmacies in the district open until 23:00, holidays included.", zh: "东区少数营业到23点的药局，公休日也照常。" },
      t: { ko: "늦은 밤 상비약이 필요할 때 먼저 기억할 곳.", en: "The first name to remember for a late-night remedy.", zh: "深夜需要常备药时先想到这里。" }
    },
    {
      c: 5, b: "p", n: { ko: "망고약국", en: "Mango Pharmacy (망고약국)", zh: "芒果药局 (망고약국)" },
      w: { ko: "도보 1분", en: "1 min walk", zh: "步行 1 分钟" }, d: "0.1km",
      a: "대구 동구 효목로 56",
      h: { ko: "월–금 09:00–19:00 · 토 ~14:00 · 일 휴무", en: "Mon–Fri 09:00–19:00 · Sat to 14:00 · closed Sun", zh: "周一–周五 09:00–19:00 · 周六至 14:00 · 周日休" },
      s: { ko: "숙소 바로 옆 약국. 낮 시간엔 여기가 가장 빠르다.", en: "The pharmacy next door — quickest during the day.", zh: "就在酒店旁边的药局，白天最快。" },
      t: { ko: "일요일은 닫는다. 그때는 심야약국으로.", en: "Closed Sunday — use the late-night pharmacy then.", zh: "周日休息，那时去深夜药局。" }
    },
    {
      c: 5, b: "p", n: { ko: "올리브영 동대구역사점", en: "Olive Young, Dongdaegu Station (올리브영)", zh: "Olive Young 东大邱站店 (올리브영)" },
      w: { ko: "차 5분 / 도보 26분", en: "5 min by car / 26 min walk", zh: "车程 5 分钟 / 步行 26 分钟" }, d: "1.6km",
      a: "대구 동구 동대구로 550",
      h: { ko: "08:30–22:00 · 토·일 ~22:30", en: "08:30–22:00 · Sat–Sun to 22:30", zh: "08:30–22:00 · 周六日至 22:30" },
      s: { ko: "동대구역 안의 올리브영. 세면도구나 잊고 온 화장품을 기차 타기 전에 채울 수 있다.", en: "Olive Young inside Dongdaegu Station — toiletries and anything forgotten, before the train.", zh: "东大邱站内的 Olive Young，可在上车前补上洗漱用品或忘带的化妆品。" },
      t: { ko: "아침 8시 30분부터 연다. 이른 기차 전에도 들를 수 있다.", en: "Opens at 08:30, so even an early train leaves time.", zh: "早上8点30分开门，赶早班车也能逛。" }
    },
    {
      c: 5, b: "p", n: { ko: "더런드리 셀프빨래방 동대구역점", en: "The Laundry, Dongdaegu (더런드리)", zh: "The Laundry 东大邱站店 (더런드리)" },
      w: { ko: "차 5분 / 도보 24분", en: "5 min by car / 24 min walk", zh: "车程 5 分钟 / 步行 24 分钟" }, d: "1.5km",
      a: "대구 동구 신천동 331-3",
      h: { ko: "24시간", en: "24 hours", zh: "24 小时" },
      s: { ko: "24시간 무인 셀프빨래방. 세탁과 건조를 한 자리에서 끝낼 수 있다.", en: "A 24-hour unmanned laundrette — wash and dry in one stop.", zh: "24小时自助洗衣房，洗涤与烘干一次完成。" },
      t: { ko: "긴 여행 중이라면 저녁에 맡기고 다음 날 찾는 편이 낫다.", en: "On a long trip, start it in the evening and collect the next day.", zh: "长途旅行时傍晚去洗，第二天再取更好。" }
    },
    {
      c: 5, b: "p", n: { ko: "이마트 만촌점", en: "E-mart Manchon (이마트 만촌점)", zh: "易买得 万村店 (이마트 만촌점)" },
      w: { ko: "차 5분", en: "5 min by car", zh: "车程 5 分钟" }, d: "1.3km",
      a: "대구 수성구 동원로 136",
      h: { ko: "10:00–22:00", en: "10:00–22:00", zh: "10:00–22:00" },
      s: { ko: "가장 가까운 대형 마트. 장을 봐서 숙소에서 먹거나 다음 날 아침을 준비하기 좋다.", en: "The nearest hypermarket — good for groceries to eat in, or breakfast for the next morning.", zh: "最近的大型超市，适合买点东西回酒店吃，或准备第二天的早餐。" },
      t: { ko: "밤 10시까지. 주차장이 넓다.", en: "Open until 22:00, with a big car park.", zh: "营业到22点，停车场宽敞。" }
    }
  ],

  routes: [
    {
      id: "r1", tag: { ko: "COURSE 01 · 도착일", en: "COURSE 01 · Arrival day", zh: "COURSE 01 · 抵达日" },
      title: { ko: "짐 풀고, 걸어서 저녁", en: "Drop the bags, walk to dinner", zh: "放下行李，走去吃晚饭" },
      meta: { ko: "도보 약 2km + 차 5분 · 17:00–22:30 · 첫날 그대로 따라 하면 되는 순서", en: "about 2 km on foot + 5 min by car · 17:00–22:30 · the first evening, in order", zh: "步行约2公里 + 车程5分钟 · 17:00–22:30 · 第一晚照着走即可" },
      steps: [
        { t: "17:00", q: "동구시장", n: { ko: "동구시장 한 바퀴", en: "A loop of Dong-gu Market (동구시장)", zh: "东区市场转一圈 (동구시장)" }, m: { ko: "숙소 도보 6분 — 반찬과 과일, 시장 골목", en: "6 min walk — banchan, fruit, market alleys", zh: "步行6分钟——配菜、水果与市场小巷" } },
        { t: "18:00", q: "효목골막창", n: { ko: "효목골막창 (또는 대해생고기)", en: "Hyomokgol Makchang, or Daehae Saenggogi (효목골막창)", zh: "孝木谷小肠（或大海鲜肉）(효목골막창)" }, m: { ko: "도보 5분 — 이름 적고 기다리기, 첫 주문 3인분", en: "5 min walk — write your name, first order from three portions", zh: "步行5分钟——先写名字，首单3人份起" } },
        { t: "20:00", q: "동촌유원지", n: { ko: "동촌유원지 · 해맞이다리 산책", en: "Dongchon riverside & Sunrise Bridge (동촌유원지)", zh: "东村游园地 · 迎日桥散步 (동촌유원지)" }, m: { ko: "차 5분 — 금호강 야경 30분", en: "5 min by car — 30 minutes of river night view", zh: "车程5分钟——琴湖江夜景30分钟" } },
        { t: "21:00", q: "인스퍼레이션디 동촌유원지", n: { ko: "인스퍼레이션디에서 마무리", en: "Finish at Inspiration D (인스퍼레이션디)", zh: "在 Inspiration D 收尾 (인스퍼레이션디)" }, m: { ko: "차 3분 — 강뷰 카페, 22:15까지", en: "3 min by car — river-view cafe, until 22:15", zh: "车程3分钟——江景咖啡，营业至22:15" } }
      ]
    },
    {
      id: "r2", tag: { ko: "COURSE 02 · 반나절", en: "COURSE 02 · Half day", zh: "COURSE 02 · 半天" },
      title: { ko: "시장에서 시내까지", en: "From the market to downtown", zh: "从市场到市中心" },
      meta: { ko: "도보 3km + 지하철 4정거장 + 차 15분 · 10:00–21:30 · 중앙떡볶이는 일요일 휴무", en: "3 km on foot + 4 subway stops + 15 min by car · 10:00–21:30 · tteokbokki closed Sunday", zh: "步行3公里 + 地铁4站 + 车程15分钟 · 10:00–21:30 · 炒年糕周日休" },
      steps: [
        { t: "10:00", q: "신세계백화점 대구점", n: { ko: "신세계백화점 · 파미에스테이션", en: "Shinsegae & Pashion Station (신세계백화점)", zh: "新世界百货 · Fashion Station (신세계백화점)" }, m: { ko: "차 5분 — 지하 식품관에서 아침", en: "5 min by car — breakfast in the basement food hall", zh: "车程5分钟——地下食品馆吃早餐" } },
        { t: "12:00", q: "중앙떡볶이", n: { ko: "중앙로역 → 중앙떡볶이 점심", en: "Jungangno Station → Jungang Tteokbokki (중앙떡볶이)", zh: "中央路站 → 中央炒年糕午餐 (중앙떡볶이)" }, m: { ko: "지하철 4정거장 + 도보 5분 — 19시 마감", en: "4 subway stops + 5 min walk — closes 19:00", zh: "地铁4站 + 步行5分钟——19点打烊" } },
        { t: "13:30", q: "동성로", n: { ko: "동성로 산책 · 쇼핑", en: "Dongseong-ro for a walk and shops (동성로)", zh: "东城路散步 · 购物 (동성로)" }, m: { ko: "도보 8분 — 중앙로역에서 바로", en: "8 min walk — straight from the station", zh: "步行8分钟——出站即到" } },
        { t: "15:00", q: "김광석다시그리기길", n: { ko: "김광석길 · 대봉교", en: "Kim Gwang-seok Street & Daebong Bridge (김광석길)", zh: "金光石路 · 大凤桥 (김광석길)" }, m: { ko: "차 10분 — 벽화 골목에서 신천으로", en: "10 min by car — murals down to the river", zh: "车程10分钟——壁画胡同走到新川" } },
        { t: "17:30", q: "남문납작만두", n: { ko: "남문납작만두", en: "Nammun Napjak Mandu (남문납작만두)", zh: "南门扁饺子 (남문납작만두)" }, m: { ko: "차 10분 — 18:30 마감, 포장 가능", en: "10 min by car — closes 18:30, takeaway works", zh: "车程10分钟——18:30打烊，可外带" } },
        { t: "19:00", q: "앞산케이블카", n: { ko: "앞산 케이블카 야경", en: "Apsan cable car for the night view (앞산케이블카)", zh: "前山缆车夜景 (앞산케이블카)" }, m: { ko: "차 10분 — 11월 막차 확인 필수", en: "10 min by car — check November's last car", zh: "车程10分钟——务必确认11月末班" } }
      ]
    },
    {
      id: "r3", tag: { ko: "COURSE 03 · 아침", en: "COURSE 03 · Morning", zh: "COURSE 03 · 早晨" },
      title: { ko: "금호강에서 미술관까지", en: "From the river to the museum", zh: "从琴湖江到美术馆" },
      meta: { ko: "차 이동 중심 · 07:00–20:00 · 미술관은 월요일 휴관", en: "mostly by car · 07:00–20:00 · museum closed Monday", zh: "以车程为主 · 07:00–20:00 · 美术馆周一休" },
      steps: [
        { t: "07:00", q: "동촌유원지", n: { ko: "동촌유원지 러닝", en: "A run at Dongchon (동촌유원지)", zh: "东村游园地跑步 (동촌유원지)" }, m: { ko: "차 5분 — 해맞이다리 왕복 5km, 평지", en: "5 min by car — 5 km return over the bridge, flat", zh: "车程5分钟——过桥往返5公里，全程平地" } },
        { t: "09:00", q: "베르 대구", n: { ko: "베르 브런치", en: "Brunch at Beleu (베르)", zh: "贝르 早午餐 (베르)" }, m: { ko: "차 5분 — 작은 골목 카페, 영업 확인", en: "5 min by car — a small alley cafe, check it is open", zh: "车程5分钟——小巷咖啡，先确认营业" } },
        { t: "11:00", q: "봉무공원", n: { ko: "봉무공원 산책", en: "A walk in Bongmu Park (봉무공원)", zh: "凤舞公园散步 (봉무공원)" }, m: { ko: "차 12분 — 완만한 순환로", en: "12 min by car — a gentle loop", zh: "车程12分钟——缓坡环路" } },
        { t: "13:00", q: "이시아폴리스", n: { ko: "이시아폴리스 점심 · 쇼핑", en: "Lunch and shops at Esiapolis (이시아폴리스)", zh: "Esiapolis 午餐 · 购物 (이시아폴리스)" }, m: { ko: "차 5분 — 한 건물에서 해결", en: "5 min by car — everything under one roof", zh: "车程5分钟——一栋楼里解决" } },
        { t: "16:00", q: "대구간송미술관", n: { ko: "대구간송미술관", en: "Daegu Kansong Art Museum (대구간송미술관)", zh: "大邱涧松美术馆 (대구간송미술관)" }, m: { ko: "차 15분 — 17:00 입장 마감", en: "15 min by car — last entry 17:00", zh: "车程15分钟——17点停止入场" } },
        { t: "18:30", q: "키츠네소바", n: { ko: "키츠네소바 저녁", en: "Dinner at Kitsune Soba (키츠네소바)", zh: "狐狸荞麦面晚餐 (키츠네소바)" }, m: { ko: "차 10분 — 20:30 마감, 월 휴무", en: "10 min by car — closes 20:30, shut Monday", zh: "车程10分钟——20:30打烊，周一休" } }
      ]
    }
  ]
};
