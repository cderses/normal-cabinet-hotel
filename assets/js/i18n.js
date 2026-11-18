/* NORMAL CABINET HOTEL — v9 language layer (KO / EN / 中文) */
(function () {
  "use strict";

  var I18N = {
    ko: {
      "meta.title": "NORMAL CABINET HOTEL — 노멀캐비넷 호텔",
      "hero.alt": "브러시드 스틸 캐비닛 벽과 테라코타 벨벳 벤치가 이어지는 노멀캐비넷의 복도",
      "plaque.alt": "테라조 바닥 위 브러시드 스틸 명판 — hotel normal cabinet",

      "st.body": "캐비닛은 물건을 넣어두는 가구입니다. 노멀캐비넷은 그 안에 하루를 넣어둡니다. 좋은 공간은 대개 특별한 것에서 시작하지 않습니다. 잘 고른 조명 하나, 오래 쓰는 잔 하나, 손이 편한 침구 한 벌. 평범한 물건을 같은 기준으로 고르고 제자리에 두는 일 — 노멀캐비넷이 하는 일은 그 정도입니다.",
      "st.sub": "서울 · 대구 · 호치민 — 서로 다른 디자인, 하나의 기준.",

      "std.lead": "지점마다 디자인은 다릅니다. 브랜드가 같다고 같은 방을 만들지는 않습니다. 다만 물건을 고르고 공간을 대하는 기준은 하나로 이어집니다.",
      "std.light": "종이 등과 낮은 조명. 밤이 되면 방이 조금 조용해지는 빛을 고릅니다.",
      "std.material": "브러시드 스틸, 테라조, 오래 쓰는 목재. 손이 닿는 것부터 고릅니다.",
      "std.taste": "지점마다 다른 얼굴. 그 얼굴을 고르는 일은 우리가 먼저 합니다.",

      "cities.lead": "서울의 골목, 대구의 벽돌, 호치민의 창. 도시가 달라도 물건을 고르는 기준은 같습니다.",
      "city.seoul": "노멀캐비넷 서울 마포점",
      "city.daegu": "노멀캐비넷 교동점 · 동대구역점",
      "city.hcm": "노멀캐비넷 호치민점",

      "sites.lead": "동성로 골목의 벽돌 건물, 역 앞의 라운지. 디자인은 다르게, 기준은 같게.",

      "g.name": "노멀캐비넷 교동점",
      "g.rooms": "25실",
      "g.desc": "동성로와 교동 골목 사이, 테라코타 벽돌 건물을 통째로 쓰는 스테이. 골목을 나서면 대구에서 가장 오래된 카페와 시장, 서점이 이어집니다.",
      "g.addr": "대구 중구 교동2길 29-11",
      "g.park": "건물 내 주차 불가 · 교동공영주차장 도보 1분",
      "g.way": "중앙로역 3번 출구 도보 10분 · 대구역 도보 10분",
      "g.alt": "테라코타 벽돌 외관과 브러시드 스틸 간판 — 노멀캐비넷 교동점",

      "d.name": "노멀캐비넷 동대구역점",
      "d.rooms": "22실",
      "d.desc": "동대구역에서 버스로 세 정거장. 2층에는 LP와 커피가 있는 라운지, 그 위층에는 조용한 방들이 있습니다.",
      "d.addr": "대구 동구 효목로 50",
      "d.park": "건물 뒤 노상 공영주차 · 1일 4,000원",
      "d.way": "동대구역 도보 27분 · 동구청역 2번 출구 도보 17분",
      "d.alt": "빨간 소파와 메모 조명, 붉은 문이 있는 동대구역점 2층 라운지",

      "hcm.lead": "큰 창, 종이 등, 테라조 바닥. 사이공의 빛이 드는 방은 조금 느리게 흐릅니다.",
      "hcm.name": "노멀캐비넷 호치민점",
      "h.rooms": "14실",
      "hcm.desc": "벤반돈, 4군의 오래된 골목. 큰 창을 열어두면 도시의 소리가 들어오고, 종이 등과 화분이 방의 온도를 정합니다. 관광지보다 동네 쪽에 가까운 하루를 지내기 좋은 곳입니다.",
      "hcm.where": "베트남 호치민 4군, 벤반돈",
      "hcm.near": "1군 중심가까지 강 하나 건너 · 4군 로컬 식당가 가까이",
      "hcm.alt1": "큰 창과 종이 등, 테라조 바닥이 있는 호치민의 공간",
      "hcm.alt2": "낮은 침대와 종이 조명, 커튼 사이로 드는 빛",

      "s.name": "노멀캐비넷 서울 마포점",
      "s.rooms": "33실",
      "s.desc": "마포와 신촌 사이, 동네 골목에 자리한 방들. 구조도 빛도 저마다 달라서, 가구와 조명만 같은 기준으로 맞춥니다.",
      "s.where": "서울 마포 · 신촌 일대 (홍대·상수·합정·신촌)",
      "seoul.note": "사진은 준비 중입니다.",

      "ft.hcm": "베트남 호치민 4군, 벤반돈",
      "ft.seoul": "서울 마포 · 신촌 일대",
      "ft.note": "서로 다른 디자인, 하나의 기준.",

      "f.addr": "주소",
      "f.park": "주차",
      "f.way": "오는 길",
      "f.where": "위치",
      "f.near": "주변",
      "f.curation": "여행 큐레이션",
      "f.map": "지도"
    },

    en: {
      "meta.title": "NORMAL CABINET HOTEL — Seoul · Daegu · Ho Chi Minh",
      "hero.alt": "A corridor of brushed-steel cabinets and a terracotta velvet bench at Normal Cabinet",
      "plaque.alt": "A brushed-steel plaque on a terrazzo floor — hotel normal cabinet",

      "st.body": "A cabinet is furniture for keeping things. Ours keeps a day in its drawers. Good rooms rarely begin with something special: a well-chosen lamp, a glass we keep reaching for, sheets that feel right. Choosing ordinary things by the same standard, and putting each one where it belongs — that is about all Normal Cabinet does.",
      "st.sub": "Seoul · Daegu · Ho Chi Minh — different designs, one standard.",

      "std.lead": "Every place is designed differently. One brand does not mean identical rooms. What carries across is the standard for choosing things and for treating a space.",
      "std.light": "Paper lanterns and low light. We choose light that makes a room a little quieter at night.",
      "std.material": "Brushed steel, terrazzo, wood that lasts. We start with what the hand touches.",
      "std.taste": "A different face in every city. The choosing of that face is ours to do first.",

      "cities.lead": "An alley in Seoul, brick in Daegu, a window in Ho Chi Minh. Different cities, the same standard for what we choose.",
      "city.seoul": "NORMAL CABINET SEOUL MAPO",
      "city.daegu": "NORMAL CABINET GYODONG · DONGDAEGU STATION",
      "city.hcm": "NORMAL CABINET HO CHI MINH",

      "sites.lead": "Brick in the Dongseongno alleys, records and coffee by the station. Different designs, one standard.",

      "g.name": "NORMAL CABINET GYODONG",
      "g.rooms": "25 ROOMS",
      "g.desc": "A terracotta-brick building of its own between Dongseongno and the Gyodong alleys. Step out and Daegu's oldest cafés, market and bookshops follow one another.",
      "g.addr": "29-11, Gyodong 2-gil, Jung-gu, Daegu",
      "g.park": "No parking on site · Gyodong public car park, 1 min on foot",
      "g.way": "Jungangno Stn. exit 3, 10 min on foot · Daegu Stn. 10 min on foot",
      "g.alt": "Terracotta brick facade and brushed-steel sign — Normal Cabinet Gyodong",

      "d.name": "NORMAL CABINET DONGDAEGU STATION",
      "d.rooms": "22 ROOMS",
      "d.desc": "Three bus stops from Dongdaegu Station. A lounge of records and coffee on the second floor, quiet rooms above it.",
      "d.addr": "50, Hyomok-ro, Dong-gu, Daegu",
      "d.park": "Street parking behind the building · ₩4,000 per day",
      "d.way": "Dongdaegu Stn. 27 min on foot · Donggucheong Stn. exit 2, 17 min on foot",
      "d.alt": "The second-floor lounge at Normal Cabinet Dongdaegu Station, with a red sofa and a chandelier of handwritten notes",

      "hcm.lead": "Tall windows, paper light, a terrazzo floor. In this room Saigon runs a little slower.",
      "hcm.name": "NORMAL CABINET HO CHI MINH",
      "h.rooms": "14 ROOMS",
      "hcm.desc": "An old alley off Bến Vân Đồn, District 4. Leave the tall windows open and the city comes in; paper lanterns and plants set the temperature of the room. A good base for days spent in the neighbourhood rather than at the sights.",
      "hcm.where": "Bến Vân Đồn, District 4, Ho Chi Minh City, Vietnam",
      "hcm.near": "One canal away from District 1 · District 4's local restaurants within easy reach",
      "hcm.alt1": "A space in Ho Chi Minh with a tall window, a paper lantern and a terrazzo floor",
      "hcm.alt2": "A low bed and paper light, daylight through the curtain",

      "s.name": "NORMAL CABINET SEOUL MAPO",
      "s.rooms": "33 ROOMS",
      "s.desc": "Rooms set in the neighbourhood alleys between Mapo and Sinchon. No two share the same shape or light, so only the furniture and lighting follow one standard.",
      "s.where": "Mapo and Sinchon, Seoul (Hongdae · Sangsu · Hapjeong · Sinchon)",
      "seoul.note": "Photographs are being prepared.",

      "ft.hcm": "Bến Vân Đồn, District 4, Ho Chi Minh City",
      "ft.seoul": "Mapo · Sinchon, Seoul",
      "ft.note": "Different designs, one standard.",

      "f.addr": "ADDRESS",
      "f.park": "PARKING",
      "f.way": "GETTING HERE",
      "f.where": "LOCATION",
      "f.near": "NEARBY",
      "f.curation": "TRAVEL GUIDE",
      "f.map": "MAP"
    },

    zh: {
      "meta.title": "NORMAL CABINET HOTEL — 首尔 · 大邱 · 胡志明市",
      "hero.alt": "拉丝钢柜墙与赤陶色天鹅绒长凳相接的 NORMAL CABINET 走廊",
      "plaque.alt": "水磨石地面上的拉丝钢铭牌 —— hotel normal cabinet",

      "st.body": "橱柜是收纳物件的家具。我们把一天收进它的抽屉里。好的空间往往并非始于特别之物：一盏选得好的灯、一只久用的杯子、一套贴合的床品。以同一把尺挑选平凡之物，并把它们各放其位——NORMAL CABINET 所做的，大致如此。",
      "st.sub": "首尔 · 大邱 · 胡志明市 —— 设计不同，标准如一。",

      "std.lead": "每处的设计都不同。同一个品牌，并不意味着相同的房间。一以贯之的，是挑选物件与对待空间的标准。",
      "std.light": "纸灯与低处的光。入夜后，让房间安静一点的光。",
      "std.material": "拉丝钢、水磨石、耐用的木材。从双手接触到的地方开始挑。",
      "std.taste": "每座城市面孔不同。挑选这张面孔，由我们先行。",

      "cities.lead": "首尔的巷子、大邱的砖墙、胡志明市的窗。城市不同，挑选物件的标准相同。",
      "city.seoul": "NORMAL CABINET 首尔麻浦店",
      "city.daegu": "NORMAL CABINET 校洞店 · 东大邱站店",
      "city.hcm": "NORMAL CABINET 胡志明店",

      "sites.lead": "东城路巷中的砖楼，车站旁的休息室。设计不同，标准相同。",

      "g.name": "NORMAL CABINET 校洞店",
      "g.rooms": "25 间",
      "g.desc": "位于东城路与校洞小巷之间，独用整栋赤陶砖建筑。走出巷口，大邱最老的咖啡馆、市场与书店依次相连。",
      "g.addr": "大邱中区校洞2街 29-11",
      "g.park": "建筑内不可停车 · 校洞公共停车场步行 1 分钟",
      "g.way": "中央路站 3 号出口步行 10 分钟 · 大邱站步行 10 分钟",
      "g.alt": "赤陶砖外墙与拉丝钢招牌 —— NORMAL CABINET 校洞店",

      "d.name": "NORMAL CABINET 东大邱站店",
      "d.rooms": "22 间",
      "d.desc": "距东大邱站三站公交。二层是放着黑胶与咖啡的休息室，楼上是安静的房间。",
      "d.addr": "大邱东区孝睦路 50",
      "d.park": "建筑后侧路边公共停车 · 每天 4,000 韩元",
      "d.way": "东大邱站步行 27 分钟 · 东区厅站 2 号出口步行 17 分钟",
      "d.alt": "东大邱站店二层的休息室，有红色沙发与纸条吊灯",

      "hcm.lead": "大窗、纸灯、水磨石地面。西贡的光落进来，一天慢一些。",
      "hcm.name": "NORMAL CABINET 胡志明店",
      "h.rooms": "14 间",
      "hcm.desc": "位于第四郡 Bến Vân Đồn 的老巷里。把大窗开着，城市的声音就进来了；纸灯与植物决定房间的温度。适合把日子过在街区里，而不是赶在景点之间。",
      "hcm.where": "越南 胡志明市 第四郡 Bến Vân Đồn",
      "hcm.near": "与第一郡一河之隔 · 第四郡本地餐馆近在步行范围",
      "hcm.alt1": "胡志明的一处空间，有大窗、纸灯与水磨石地面",
      "hcm.alt2": "低矮的床与纸灯，窗帘间透进来的光",

      "s.name": "NORMAL CABINET 首尔麻浦店",
      "s.rooms": "33 间",
      "s.desc": "位于麻浦与新村之间街区巷子里的房间。结构与光线各不相同，只让家具与灯遵循同一个标准。",
      "s.where": "首尔麻浦 · 新村一带（弘大·上水·合井·新村）",
      "seoul.note": "照片正在准备中。",

      "ft.hcm": "越南 胡志明市 第四郡 Bến Vân Đồn",
      "ft.seoul": "首尔麻浦 · 新村一带",
      "ft.note": "设计不同，标准如一。",

      "f.addr": "地址",
      "f.park": "停车",
      "f.way": "交通",
      "f.where": "位置",
      "f.near": "周边",
      "f.curation": "旅行指南",
      "f.map": "地图"
    }
  };

  var STORE_KEY = "nc-lang";
  var SUPPORTED = ["ko", "en", "zh"];

  function normalize(value) {
    if (!value) return null;
    var v = String(value).toLowerCase();
    if (v.indexOf("zh") === 0) return "zh";
    if (v.indexOf("en") === 0) return "en";
    if (v.indexOf("ko") === 0) return "ko";
    return null;
  }

  function initial() {
    var fromUrl = null;
    try {
      fromUrl = normalize(new URLSearchParams(window.location.search).get("lang"));
    } catch (e) {}
    if (fromUrl) return fromUrl;

    var stored = null;
    try { stored = normalize(window.localStorage.getItem(STORE_KEY)); } catch (e) {}
    if (stored) return stored;

    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    var guess = normalize(nav);
    if (guess === "en" || guess === "zh") return guess;
    return "ko";
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) < 0) lang = "ko";
    var dict = I18N[lang];

    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    if (dict["meta.title"]) document.title = dict["meta.title"];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] != null) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-lang]");
    if (!btn) return;
    apply(btn.getAttribute("data-lang"));
  });

  apply(initial());
})();
