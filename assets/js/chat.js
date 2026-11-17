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
    GUIDE_D: "https://cderses.github.io/normal-cabinet-hotel/curation-dongdaegu/",
    GUIDEBOOK_D: "https://www.airbnb.com/s/guidebooks?refinement_paths%5B%5D=/guidebooks/6994868"
  };

  var DATA = {
    ko: {
      greet: "안녕하세요, 캐비닛지기입니다. 교동점엔 최대 4인 객실이 세 개 있고, 동대구역점은 역에서 도보 27분이에요. 열쇠·주차·주변 이야기, 무엇이든 물어보세요.",
      chips: [
        { id: "checkin", label: "체크인 · 체크아웃" },
        { id: "selfcheckin", label: "셀프 체크인 · 짐 보관" },
        { id: "rooms", label: "객실 스펙" },
        { id: "parking", label: "주차" },
        { id: "directions", label: "위치 · 오시는 길" },
        { id: "booking", label: "예약 방법" },
        { id: "guide", label: "주변 큐레이션" }
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
          rooms: {
            text: "교동점은 2인 기준 프라이빗 룸 25실이고, 그중 세 실은 최대 4인까지 묵을 수 있어요. 퀸사이즈 침대 두 개에 화장실이 1.5개 — 샤워만 있는 욕실 하나와 변기·샤워가 함께 있는 욕실 하나입니다. 넷이 오시면 이 방으로 안내드릴게요.",
            links: [{ label: "실시간 빈 방 · 예약", url: L.BOOK_G }]
          },
          parking: {
            text: "교동점은 건물 안에 주차할 수 없어요. 바로 옆 교동공영주차장(교동2길 11)이 도보 1분 거리에 있고, 요금과 운영 시간은 현장 안내를 따릅니다. 골목이 좁아 짐이 많으면 건물 앞에서 먼저 내리는 편이 좋아요."
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
            text: "동대구역점은 체크인 15:00, 체크아웃 12:00이 기준입니다. 일부 객실은 예약 안내 메시지에 적힌 시간이 조금 다를 수 있어요. 체크인은 키패드로 하시면 됩니다."
          },
          rooms: {
            text: "동대구역점은 스튜디오 형태의 더블·퀸 객실로, 1~2인 숙박에 맞춰져 있어요. 체크인 15:00, 체크아웃 12:00이고 키패드로 바로 들어오시면 됩니다. 엘리베이터는 없고 객실은 2~4층이에요.",
            links: [{ label: "에어비앤비에서 보기", url: L.BOOK_D }]
          },
          selfcheckin: {
            text: "동대구역점은 키패드 셀프 체크인으로 출입합니다. 비밀번호는 체크인 당일 예약 메시지로 안내드려요. 짐은 2층 계단 옆 셀프 짐 보관함을 이용하실 수 있고, 이용 방법은 현장 안내를 따라 주세요."
          },
          parking: {
            text: "건물 안에는 전용 주차 공간이 없고, 건물 뒤편 노상 공영주차장을 이용하시면 됩니다. 1일 4,000원이며, 유료 운영은 평일 09:00~17:00, 그 외 시간과 주말은 무료예요. 자리 확보는 보장되지 않고, 건물 앞 도로는 평일 단속 구간입니다. 정확한 진입 위치는 예약 메시지로 안내드려요."
          },
          directions: {
            text: "주소는 대구 동구 효목로 50입니다. 동대구역(KTX·SRT·지하철 1호선·복합환승센터)에서 도보 27분(1.7km)이고, 1호선으로 한 정거장(동구청역) 이동해 2번 출구에서 걸으면 17분이에요. 효목시장은 도보 9분 거리입니다.",
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
            text: "동대구역 주변에서 호스트가 고른 32곳을 큐레이션 페이지에 담았어요 — 효목동 시장 골목, 막창, 역 뒤 카페, 금호강 러닝까지. 에어비앤비 가이드북도 함께 보실 수 있어요.",
            links: [
              { label: "동대구역 큐레이션 열기", url: L.GUIDE_D },
              { label: "에어비앤비 가이드북", url: L.GUIDEBOOK_D }
            ]
          }
        }
      }
    },

    en: {
      greet: "Hello — I'm the Keeper at Normal Cabinet. Gyodong has three rooms that sleep four, and Dongdaegu Station is 27 minutes on foot from the transfer centre. Keys, parking, the neighbourhood — ask me anything.",
      chips: [
        { id: "checkin", label: "Check-in / out" },
        { id: "selfcheckin", label: "Self check-in · luggage" },
        { id: "rooms", label: "Rooms & beds" },
        { id: "parking", label: "Parking" },
        { id: "directions", label: "Location · directions" },
        { id: "booking", label: "How to book" },
        { id: "guide", label: "Neighbourhood" }
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
          rooms: {
            text: "Gyodong has 25 private doubles for two, and three of them take up to four guests: two queen beds and 1.5 bathrooms — one shower room, and one with a toilet and shower. If you are four, that is the room we will give you.",
            links: [{ label: "Live availability · Book", url: L.BOOK_G }]
          },
          parking: {
            text: "There is no parking inside the building at Gyodong. The Gyo-dong public car park (11, Gyodong 2-gil) is one minute away on foot; rates and hours follow what is posted on site. The alley is narrow, so with heavy luggage it is easier to stop in front of the building first."
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
            text: "At Dongdaegu Station check-in is 15:00 and check-out 12:00. A few rooms run on slightly different times — your booking message gives the exact ones. You enter with a keypad.",
            links: []
          },
          rooms: {
            text: "Dongdaegu Station is studio rooms with a double or queen bed, made for one or two guests. Check-in 15:00, check-out 12:00, and you let yourself in with a keypad. There is no elevator; rooms are on floors 2–4.",
            links: [{ label: "See rooms on Airbnb", url: L.BOOK_D }]
          },
          selfcheckin: {
            text: "You enter with a keypad at Dongdaegu Station; the code arrives in your booking message on the day of arrival. Self-service luggage lockers are on the second floor beside the stairs — follow the on-site instructions."
          },
          parking: {
            text: "There is no private parking on site. Use the public street parking behind the building: ₩4,000 a day, paid on weekdays 09:00–17:00 and free outside those hours and at weekends. A space is not guaranteed, and the road in front is a weekday tow-away zone. We send the exact entrance in your booking message."
          },
          directions: {
            text: "The address is 50, Hyomok-ro, Dong-gu, Daegu. It is 27 minutes on foot (1.7 km) from Dongdaegu Station (KTX, SRT, Line 1, transfer centre), or one stop on Line 1 to Dong-gu Office Station and 17 minutes from exit 2. Hyomok Market is 9 minutes on foot.",
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
            text: "The 32 places we picked around Dongdaegu Station are on the curation page — the Hyomok-dong market alleys, makchang, the cafés behind the station, running along the Geumho. The Airbnb guidebook is there too.",
            links: [
              { label: "Open the Dongdaegu guide", url: L.GUIDE_D },
              { label: "Airbnb guidebook", url: L.GUIDEBOOK_D }
            ]
          }
        }
      }
    },

    zh: {
      greet: "您好，我是 Normal Cabinet 的柜管家。校洞店有三间最多可住四人的客房，东大邱站店距综合换乘中心步行 27 分钟。钥匙、停车、周边的事，都可以问我。",
      chips: [
        { id: "checkin", label: "入住 · 退房时间" },
        { id: "selfcheckin", label: "自助入住 · 行李" },
        { id: "rooms", label: "客房与床位" },
        { id: "parking", label: "停车" },
        { id: "directions", label: "位置 · 交通" },
        { id: "booking", label: "预订方式" },
        { id: "guide", label: "周边指南" }
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
          rooms: {
            text: "校洞店有 25 间限两人的独立双人房，其中三间最多可住四人：两张 queen 床，1.5 个卫生间——一间仅淋浴，一间含马桶与淋浴。四位入住时会为您安排这样的客房。",
            links: [{ label: "实时空房 · 预订", url: L.BOOK_G }]
          },
          parking: {
            text: "校洞店楼内不可停车。隔壁的校洞公共停车场（校洞2街 11）步行 1 分钟即可到达，费用与开放时间以现场公示为准。巷子较窄，行李较多时建议先在楼前短暂停靠。"
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
            text: "东大邱站店以 15:00 入住、12:00 退房为准，个别客房时间略有不同，以预订消息为准。出入使用密码锁。"
          },
          rooms: {
            text: "东大邱站店为 Studio 房型，配双人床或 queen 床，适合 1~2 人。入住 15:00、退房 12:00，使用密码锁自助入住。无电梯，客房在 2~4 层。",
            links: [{ label: "在 Airbnb 查看客房", url: L.BOOK_D }]
          },
          selfcheckin: {
            text: "东大邱站店使用密码锁自助入住，密码将在入住当天通过预订消息发送。行李可使用二层楼梯旁的自助行李柜，请按现场指引使用。"
          },
          parking: {
            text: "楼内没有专用停车位，请使用楼后的路边公共停车场：每日 4,000 韩元，平日 09:00~17:00 收费，其余时间与周末免费。车位不保证，楼前道路平日为管制路段。确切入口会在预订消息中告知。"
          },
          directions: {
            text: "地址为大邱东区孝木路 50。从东大邱站（KTX、SRT、1 号线、综合换乘中心）步行 27 分钟（1.7 公里），或乘 1 号线一站到东区厅站，从 2 号出口步行 17 分钟。孝木市场步行 9 分钟。",
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
            text: "东大邱站周边由房东挑选的 32 个地方整理在精选页面——孝木洞市场小巷、烤小肠、车站后巷的咖啡，到琴湖江跑步。也可查看 Airbnb 指南。",
            links: [
              { label: "打开东大邱站精选", url: L.GUIDE_D },
              { label: "Airbnb 指南", url: L.GUIDEBOOK_D }
            ]
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
    booking: ["예약", "에어비앤비", "부킹", "가격", "요금", "book", "airbnb", "reserve", "price", "rate", "预订", "价格", "房价"],
    rooms: ["객실", "침대", "화장실", "욕실", "4인", "인원", "room", "bed", "bathroom", "sleeps", "客房", "床", "浴室", "人数"]
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
