/* NORMAL CABINET HOTEL — static FAQ stay-guide chat (no server, no cost) */
(function () {
  "use strict";

  var L = {
    G_NAVER: "https://map.naver.com/p/search/%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EA%B5%90%EB%8F%992%EA%B8%B8%2029-11",
    G_KAKAO: "https://map.kakao.com/?q=%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EA%B5%90%EB%8F%992%EA%B8%B8%2029-11",
    G_GOOGLE: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EA%B5%90%EB%8F%992%EA%B8%B8%2029-11",
    D_NAVER: "https://map.naver.com/p/search/%EB%8C%80%EA%B5%AC%20%EB%8F%99%EA%B5%AC%20%ED%9A%A8%EB%AA%A9%EB%A1%9C%2050",
    D_KAKAO: "https://map.kakao.com/?q=%EB%8C%80%EA%B5%AC%20%EB%8F%99%EA%B5%AC%20%ED%9A%A8%EB%AA%A9%EB%A1%9C%2050",
    D_GOOGLE: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EA%B5%AC%20%EB%8F%99%EA%B5%AC%20%ED%9A%A8%EB%AA%A9%EB%A1%9C%2050",
    BOOK_G: "https://cderses.github.io/normal-cabinet-gyodong/",
    BOOK_D: "https://www.airbnb.co.kr/rooms/1662251362905057666",
    BOOK_D2: "https://www.airbnb.co.kr/rooms/1679661627721861120",
    GUIDE_G: "https://cderses.github.io/normal-cabinet-gyodong/curation/",
    GUIDE_D: "https://www.airbnb.com/s/guidebooks?refinement_paths%5B%5D=/guidebooks/6994868"
  };

  var DATA = {
    ko: {
      greet: "안녕하세요, 노멀캐비넷 스테이 가이드입니다. 지점을 고르고 궁금한 항목을 눌러 주세요.",
      chips: [
        { id: "checkin", label: "체크인 · 체크아웃" },
        { id: "selfcheckin", label: "셀프 체크인 · 짐 보관" },
        { id: "parking", label: "주차" },
        { id: "directions", label: "위치 · 오시는 길" },
        { id: "booking", label: "예약 방법" }
      ],
      mapLinks: { naver: "네이버지도", kakao: "카카오맵", google: "Google 지도" },
      fallback:
        "그 부분은 제가 확실하게 안내드리기 어려워요. 예약 메시지로 문의해 주시면 호스트가 직접 답변드립니다. 아래 버튼으로 예약 페이지를 열어 보실 수도 있어요.",
      prefix: { gyodong: "교동점", dongdaegu: "동대구역점" },
      answers: {
        gyodong: {
          checkin: {
            text: "교동점은 객실마다 체크인·체크아웃 시간이 조금씩 다릅니다. 예약을 확정하시면 보내드리는 안내 메시지에서 정확한 시간을 확인하실 수 있어요. 이른 체크인과 늦은 체크아웃은 당일 정비 일정에 따라 가능 여부가 달라집니다."
          },
          selfcheckin: {
            text: "교동점은 프런트 없이 키패드로 출입하는 무인 스테이입니다. 출입 비밀번호는 체크인 당일 예약 메시지로만 보내드려요. 체크인 전·체크아웃 후 짐 보관은 예약 메시지로 문의해 주시면 당일 상황에 맞춰 안내드립니다."
          },
          parking: {
            text: "교동점은 건물 인근 공영주차장을 이용하시게 됩니다. 정확한 위치와 요금은 예약 후 메시지로 안내드릴게요."
          },
          directions: {
            text: "주소는 대구 중구 교동2길 29-11입니다. 중앙로역 3번 출구에서 도보 10분(0.6km), 대구역에서 도보 10분(0.6km), 반월당역에서 도보 22분(1.4km)이에요. 동성로와 교동 골목, 서문시장까지 걸어서 닿습니다.",
            links: [
              { label: "네이버지도", url: L.G_NAVER },
              { label: "카카오맵", url: L.G_KAKAO },
              { label: "Google 지도", url: L.G_GOOGLE }
            ]
          },
          booking: {
            text: "교동점은 실시간 빈 방 페이지에서 오늘 밤 빈 방을 확인한 뒤 에어비앤비로 예약하실 수 있습니다. 객실을 고르면 에어비앤비 예약 화면으로 이어져요.",
            links: [{ label: "실시간 빈 방 · 예약", url: L.BOOK_G }]
          },
          guide: {
            text: "교동에서 걸어 나가면 닿는 맛집·카페·러닝 코스를 한 장에 정리해 두었습니다.",
            links: [{ label: "교동 큐레이션 열기", url: L.GUIDE_G }]
          }
        },
        dongdaegu: {
          checkin: {
            text: "동대구역점은 객실별로 오후 2시~4시 체크인, 오전 11시~오후 1시 체크아웃입니다. 예를 들어 201·202호는 오후 2시 체크인 / 오전 11시 체크아웃, 203·204호처럼 늦은 체크아웃 객실은 오후 4시 체크인 / 오후 1시 체크아웃이에요. 정확한 시간은 예약하신 객실 안내를 확인해 주세요."
          },
          selfcheckin: {
            text: "동대구역점은 키패드 셀프 체크인으로 출입합니다. 비밀번호는 체크인 당일 예약 메시지로 안내드려요. 짐은 2층 계단 옆 셀프 짐 보관함을 이용하실 수 있고, 이용 방법은 현장 안내를 따라 주세요."
          },
          parking: {
            text: "건물 안에는 전용 주차 공간이 없고, 건물 뒤편 노상 공영주차장을 이용하시면 됩니다. 1일 4,000원이며, 유료 운영은 평일 09:00~17:00, 그 외 시간은 무료예요. 건물 앞 도로는 평일 단속 구간입니다."
          },
          directions: {
            text: "주소는 대구 동구 효목로 50입니다. 동대구역(KTX·SRT·지하철 1호선·복합환승센터)에서 버스 413번으로 3정거장(약 5분), 걸어서는 27분(1.7km)이에요. 신세계백화점 대구점까지 도보 약 10분입니다.",
            links: [
              { label: "네이버지도", url: L.D_NAVER },
              { label: "카카오맵", url: L.D_KAKAO },
              { label: "Google 지도", url: L.D_GOOGLE }
            ]
          },
          booking: {
            text: "동대구역점은 에어비앤비에서 객실을 골라 바로 예약하실 수 있습니다. 퀸베드룸(2인), 트윈베드룸(2인), 늦은 체크아웃 객실이 있어요.",
            links: [
              { label: "에어비앤비에서 예약", url: L.BOOK_D },
              { label: "트윈베드룸 보기", url: L.BOOK_D2 }
            ]
          },
          guide: {
            text: "동대구역 주변에서 호스트가 고른 곳들을 에어비앤비 가이드북에 담았어요 — 막창·고깃집, 브런치 카페, 떡볶이와 만두 노포까지.",
            links: [{ label: "가이드북 열기", url: L.GUIDE_D }]
          }
        }
      }
    },

    en: {
      greet: "Hello — this is the Normal Cabinet stay guide. Choose a site, then tap a question.",
      chips: [
        { id: "checkin", label: "Check-in / out" },
        { id: "selfcheckin", label: "Self check-in · luggage" },
        { id: "parking", label: "Parking" },
        { id: "directions", label: "Location · directions" },
        { id: "booking", label: "How to book" }
      ],
      mapLinks: { naver: "Naver Map", kakao: "Kakao Map", google: "Google Maps" },
      fallback:
        "I can't answer that one reliably. Send it in your booking message and the host will reply directly — the booking page is below too.",
      prefix: { gyodong: "Gyodong", dongdaegu: "Dongdaegu Station" },
      answers: {
        gyodong: {
          checkin: {
            text: "Check-in and check-out times differ slightly from room to room at Gyodong. Your booking message gives the exact times once your stay is confirmed. Early check-in and late check-out depend on the day's housekeeping schedule."
          },
          selfcheckin: {
            text: "Gyodong runs without a front desk — you enter with a keypad, and the code is sent only in your booking message on the day of arrival. For luggage before check-in or after check-out, ask in your booking message and we will advise for that day."
          },
          parking: {
            text: "At Gyodong you will use a nearby public car park. We will send the exact location and rates in your booking message."
          },
          directions: {
            text: "The address is 29-11, Gyodong 2-gil, Jung-gu, Daegu. 10 minutes on foot from Jungangno Stn. exit 3 (0.6 km), 10 minutes from Daegu Stn. (0.6 km) and 22 minutes from Banwoldang Stn. (1.4 km). Dongseongno, the Gyodong alleys and Seomun Market are all within walking distance.",
            links: [
              { label: "Naver Map", url: L.G_NAVER },
              { label: "Kakao Map", url: L.G_KAKAO },
              { label: "Google Maps", url: L.G_GOOGLE }
            ]
          },
          booking: {
            text: "At Gyodong, check live availability for tonight, then book on Airbnb. Choosing a room takes you straight to the Airbnb booking screen.",
            links: [{ label: "Live availability · Book", url: L.BOOK_G }]
          },
          guide: {
            text: "The places we walk to from Gyodong — food, cafés and running routes — are collected in one page.",
            links: [{ label: "Open the Gyodong guide", url: L.GUIDE_G }]
          }
        },
        dongdaegu: {
          checkin: {
            text: "At Dongdaegu Station, check-in is between 2 and 4 pm and check-out between 11 am and 1 pm, room by room. Rooms 201 and 202, for example, check in at 2 pm and out at 11 am; late-check-out rooms such as 203 and 204 check in at 4 pm and out at 1 pm. Your room's exact times are in its listing.",
            links: []
          },
          selfcheckin: {
            text: "You enter with a keypad at Dongdaegu Station; the code arrives in your booking message on the day of arrival. Self-service luggage lockers are on the second floor beside the stairs — follow the on-site instructions."
          },
          parking: {
            text: "There is no private parking on site. Use the public street parking behind the building: ₩4,000 a day, paid on weekdays 09:00–17:00 and free outside those hours. The road in front is a weekday tow-away zone."
          },
          directions: {
            text: "The address is 50, Hyomok-ro, Dong-gu, Daegu. From Dongdaegu Station (KTX, SRT, Line 1, bus terminal) take bus 413 for three stops (about 5 minutes), or walk 27 minutes (1.7 km). Shinsegae Department Store is about 10 minutes on foot.",
            links: [
              { label: "Naver Map", url: L.D_NAVER },
              { label: "Kakao Map", url: L.D_KAKAO },
              { label: "Google Maps", url: L.D_GOOGLE }
            ]
          },
          booking: {
            text: "Book room by room on Airbnb at Dongdaegu Station — queen rooms for two, twin rooms for two, and rooms with a late check-out.",
            links: [
              { label: "Book on Airbnb", url: L.BOOK_D },
              { label: "See a twin room", url: L.BOOK_D2 }
            ]
          },
          guide: {
            text: "The host's picks around Dongdaegu Station are in the Airbnb guidebook — makchang and beef joints, a brunch café, tteokbokki and dumpling spots.",
            links: [{ label: "Open the guidebook", url: L.GUIDE_D }]
          }
        }
      }
    },

    zh: {
      greet: "您好，这里是 Normal Cabinet 住宿指南。请先选择门店，再点击想了解的问题。",
      chips: [
        { id: "checkin", label: "入住 · 退房时间" },
        { id: "selfcheckin", label: "自助入住 · 行李" },
        { id: "parking", label: "停车" },
        { id: "directions", label: "位置 · 交通" },
        { id: "booking", label: "预订方式" }
      ],
      mapLinks: { naver: "Naver 地图", kakao: "Kakao 地图", google: "Google 地图" },
      fallback:
        "这个问题我无法确定回答。请在预订消息中咨询，房东会直接回复您——下方也可打开预订页面。",
      prefix: { gyodong: "校洞店", dongdaegu: "东大邱站店" },
      answers: {
        gyodong: {
          checkin: {
            text: "校洞店各客房的入住与退房时间略有不同。预订确认后发送的消息中会告知确切时间。提前入住与延迟退房需视当天的整理安排而定。"
          },
          selfcheckin: {
            text: "校洞店没有前台，使用密码锁出入，密码仅在入住当天通过预订消息发送。入住前或退房后的行李寄存，请在预订消息中咨询，我们会按当天情况告知。"
          },
          parking: {
            text: "校洞店使用建筑附近的公共停车场。确切位置与费用将在预订后通过消息告知。"
          },
          directions: {
            text: "地址为大邱中区校洞2街 29-11。中央路站 3 号出口步行 10 分钟（0.6 公里），大邱站步行 10 分钟（0.6 公里），半月堂站步行 22 分钟（1.4 公里）。东城路、校洞巷子与西门市场均可步行到达。",
            links: [
              { label: "Naver 地图", url: L.G_NAVER },
              { label: "Kakao 地图", url: L.G_KAKAO },
              { label: "Google 地图", url: L.G_GOOGLE }
            ]
          },
          booking: {
            text: "校洞店可在实时空房页面确认当晚空房，再通过 Airbnb 预订。选择客房后会直接进入 Airbnb 预订页面。",
            links: [{ label: "实时空房 · 预订", url: L.BOOK_G }]
          },
          guide: {
            text: "从校洞步行可达的美食、咖啡馆与跑步路线，已整理成一页指南。",
            links: [{ label: "打开校洞指南", url: L.GUIDE_G }]
          }
        },
        dongdaegu: {
          checkin: {
            text: "东大邱站店的入住时间为 14:00~16:00，退房时间为 11:00~13:00，因客房而异。例如 201·202 号为 14:00 入住 / 11:00 退房；203·204 号等延迟退房客房为 16:00 入住 / 13:00 退房。确切时间请查看您预订客房的说明。"
          },
          selfcheckin: {
            text: "东大邱站店使用密码锁自助入住，密码将在入住当天通过预订消息发送。行李可使用二层楼梯旁的自助行李柜，请按现场指引使用。"
          },
          parking: {
            text: "楼内没有专用停车位，请使用楼后的路边公共停车场：每日 4,000 韩元，平日 09:00~17:00 收费，其余时间免费。楼前道路平日为管制路段。"
          },
          directions: {
            text: "地址为大邱东区孝木路 50。从东大邱站（KTX、SRT、1 号线、综合换乘中心）乘 413 路公交 3 站（约 5 分钟），步行 27 分钟（1.7 公里）。到新世界百货步行约 10 分钟。",
            links: [
              { label: "Naver 地图", url: L.D_NAVER },
              { label: "Kakao 地图", url: L.D_KAKAO },
              { label: "Google 地图", url: L.D_GOOGLE }
            ]
          },
          booking: {
            text: "东大邱站店可在 Airbnb 按客房预订：双人大床房、双人双床房，以及可延迟退房的客房。",
            links: [
              { label: "在 Airbnb 预订", url: L.BOOK_D },
              { label: "查看双床房", url: L.BOOK_D2 }
            ]
          },
          guide: {
            text: "房东在东大邱站周边挑选的地方，已整理在 Airbnb 指南中——烤小肠与烤肉店、早午餐咖啡馆、辣炒年糕与饺子老店。",
            links: [{ label: "打开指南", url: L.GUIDE_D }]
          }
        }
      }
    }
  };

  /* keyword map for free-text questions */
  var KEYS = {
    checkin: ["체크인", "체크아웃", "입실", "퇴실", "시간", "check", "checkin", "checkout", "time", "入住", "退房", "时间"],
    selfcheckin: ["셀프", "키패드", "도어락", "비밀번호", "출입", "짐", "보관", "캐리어", "self", "keypad", "code", "door", "luggage", "bag", "locker", "自助", "密码", "行李", "寄存"],
    parking: ["주차", "파킹", "차", "parking", "park", "car", "停车", "车位"],
    directions: ["위치", "주소", "오시는", "가는", "지도", "역", "교통", "버스", "지하철", "location", "address", "direction", "map", "station", "bus", "subway", "train", "位置", "地址", "交通", "地图", "地铁", "公交"],
    booking: ["예약", "에어비앤비", "부킹", "가격", "요금", "book", "airbnb", "reserve", "price", "rate", "预订", "价格", "房价"]
  };

  var BRANCH_KEYS = {
    gyodong: ["교동", "校洞", "gyodong", "jung-gu"],
    dongdaegu: ["동대구", "효목", "东大邱", "东大邱站", "dongdaegu", "hyomok", "station"]
  };

  var els = {
    panel: document.getElementById("cb"),
    body: document.getElementById("cbBody"),
    chips: document.getElementById("cbChips"),
    form: document.getElementById("cbForm"),
    input: document.getElementById("cbInput"),
    fab: document.getElementById("cbFab"),
    close: document.getElementById("cbClose")
  };
  if (!els.panel) return;

  var state = { open: false, branch: "gyodong", lang: (window.NC && window.NC.getLang()) || "ko" };
  var greeted = false;

  function t() { return DATA[state.lang] || DATA.ko; }

  function scrollBottom() {
    els.body.scrollTop = els.body.scrollHeight;
  }

  function bubble(text, mine, links) {
    var row = document.createElement("div");
    row.className = "cb-msg" + (mine ? " me" : "");
    var b = document.createElement("div");
    b.className = "bubble";
    b.textContent = text;
    if (links && links.length) {
      var wrap = document.createElement("div");
      wrap.className = "cb-links";
      links.forEach(function (l) {
        var a = document.createElement("a");
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8M10 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"/></svg>';
        var s = document.createElement("span");
        s.textContent = l.label;
        a.appendChild(s);
        wrap.appendChild(a);
      });
      b.appendChild(wrap);
    }
    row.appendChild(b);
    els.body.appendChild(row);
    scrollBottom();
  }

  function renderChips() {
    els.chips.innerHTML = "";
    t().chips.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = c.label;
      b.addEventListener("click", function () { ask(c.id, c.label); });
      els.chips.appendChild(b);
    });
  }

  function greet() {
    els.body.innerHTML = "";
    bubble(t().greet, false);
    renderChips();
  }

  function syncBranchButtons() {
    document.querySelectorAll(".cb-branch button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-branch") === state.branch ? "true" : "false");
    });
  }

  function answerById(id) {
    var d = t();
    var set = d.answers[state.branch] || d.answers.gyodong;
    return set[id] || null;
  }

  function ask(id, label) {
    var a = answerById(id);
    bubble(label, true);
    if (a) {
      bubble(a.text, false, a.links);
    } else {
      var d = t();
      var book = d.answers[state.branch].booking;
      bubble(d.fallback, false, book.links);
    }
  }

  function match(text) {
    var s = text.toLowerCase();
    var best = null, bestScore = 0;
    Object.keys(KEYS).forEach(function (id) {
      var score = 0;
      KEYS[id].forEach(function (k) { if (s.indexOf(k.toLowerCase()) !== -1) score += 1; });
      if (score > bestScore) { bestScore = score; best = id; }
    });
    Object.keys(BRANCH_KEYS).forEach(function (b) {
      BRANCH_KEYS[b].forEach(function (k) {
        if (s.indexOf(k.toLowerCase()) !== -1) state.branch = b;
      });
    });
    return bestScore > 0 ? best : null;
  }

  function open() {
    state.open = true;
    els.panel.classList.add("on");
    els.fab.classList.remove("pulse");
    if (!greeted) { greet(); greeted = true; }
    syncBranchButtons();
    setTimeout(function () { try { els.input.focus({ preventScroll: true }); } catch (e) {} }, 320);
  }
  function close() {
    state.open = false;
    els.panel.classList.remove("on");
  }

  document.querySelectorAll("[data-open-chat]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      open();
    });
  });
  els.close.addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && state.open) close();
  });

  document.querySelectorAll(".cb-branch button").forEach(function (b) {
    b.addEventListener("click", function () {
      state.branch = b.getAttribute("data-branch");
      syncBranchButtons();
      greet();
    });
  });

  els.form.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = (els.input.value || "").trim();
    if (!v) return;
    els.input.value = "";
    var id = match(v);
    var d = t();
    bubble(v, true);
    if (id) {
      var a = answerById(id);
      if (a) { bubble(a.text, false, a.links); return; }
    }
    bubble(d.fallback, false, d.answers[state.branch].booking.links);
  });

  document.addEventListener("nc:lang", function (e) {
    state.lang = e.detail;
    if (state.open || greeted) greet();
  });

  /* gentle attention cue once the visitor reaches the stay section */
  if ("IntersectionObserver" in window) {
    var stay = document.getElementById("stay");
    if (stay) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && !state.open && !greeted) els.fab.classList.add("pulse");
        });
      }, { threshold: 0.3 });
      io.observe(stay);
    }
  }
})();
