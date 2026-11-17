# NORMAL CABINET HOTEL · EST. 2026

노멀캐비넷 호텔 브랜드 홈페이지 — 대구 두 지점(교동점·동대구역점)을 소개하는 정적 사이트입니다.

- 라이브: https://cderses.github.io/normal-cabinet-hotel/
- 브랜드 QR: [`qr/brand-qr-card.png`](qr/brand-qr-card.png) · [`qr/brand-qr-a4.pdf`](qr/brand-qr-a4.pdf) · [`qr/brand-qr-only.png`](qr/brand-qr-only.png)
- 기존 교동점 워크인 페이지(수정하지 않음): https://cderses.github.io/normal-cabinet-gyodong/

## 구성

| 경로 | 설명 |
| --- | --- |
| `index.html` | 단일 페이지 (히어로 + 예약 바 · 스테이트먼트 · 브랜드 · 지점 · 지도/위치 · 스테이 · 객실 스펙 · 갤러리 · 로컬 가이드 · 이용 안내 · 푸터 · 모바일 하단 데스크 · 객실 선택 드로어 · 챗봇) |
| `assets/css/site.css` | 디자인 시스템 — 웜 오프화이트 `#F3EFE7` / 테라코타 `#B4553C` / 딥 차콜 `#16191B` / 브러시드 스틸 |
| `assets/js/i18n.js` | 한국어 · English · 中文 UI 문구 + `SITE_CONFIG.kakaoUrl` |
| `assets/js/site.js` | 언어 전환, 헤더 상태, 지점 서랍, Leaflet 지도, 주소 복사, 객실 선택 드로어, 예약 바, 갤러리 라이트박스 |
| `assets/js/chat.js` | 서버 없는 FAQ 챗봇 `캐비닛지기` / THE KEEPER (지점 선택 · 버튼형 질문 · 키워드 응답) |
| `assets/img/` | 지점 실사 사진(웹용 리사이즈), 브랜드 이미지 |
| `qr/` | 브랜드 QR 카드 PNG · 인쇄용 A4 PDF · 순수 QR PNG |

## 브랜드 메시지 · 타이포그래피

- 브랜드 메시지(히어로 타이틀, 섹션 제목, 키카드, 푸터)는 **영문 고정**입니다. 언어를 바꿔도 영문 그대로 두어 톤을 유지합니다.
- 한글 안내 본문(nav·버튼·객실 정보·이용 안내·챗봇)은 `Pretendard`(CDN) + Inter Tight 조합입니다.
- v6 톤 기준: 디스플레이 상한은 히어로 104px · 섹션 54px · 푸터 74px, 섹션 상하 여백 `clamp(50px, 6vw, 92px)`. 마퀴·세로 장식 문구·대형 외곽선 밴드는 쓰지 않습니다.

## 섹션 인덱스 (CABINET INDEX)

| 코드 | 섹션 | id |
| --- | --- | --- |
| C-00 | HERO | `#top` |
| C-01 | THE POINT (스테이트먼트) | `#statement` |
| C-02 | THE CABINET (브랜드) | `#brand` |
| C-03 | SITES (지점 서랍) | `#sites` |
| C-04 | LOCATE (지도·주소·주차) | `#locate` |
| C-05 | THE STAY (어메니티·계단) | `#stay` |
| C-06 | ROOMS (객실 스펙) | `#rooms` |
| C-07 | GALLERY | `#gallery` |
| C-08 | NEXT DOOR (큐레이션) | `#daegu` |
| C-09 | BEFORE YOU BOOK (FAQ) | `#info` |

## 기능 메모

- **지점 동기화**: 지점 서랍 탭이나 예약 바의 지점 버튼을 바꾸면 사진 패널 · LOCATE의 주소/주차/오는 길 · 지도 중심/마커 · 지도 링크(네이버·카카오·구글) · 예약 바가 함께 바뀝니다.
- **주소 복사**: `#copyAddr` → 현재 지점의 **한국어 도로명 주소**를 클립보드에 복사하고 버튼이 `복사됨`으로 1.8초 표시됩니다(Clipboard API, 실패 시 execCommand 폴백).
- **지도**: Leaflet + OpenStreetMap 타일. 타일은 CSS(`.leaflet-tile-pane`)에서 grayscale·sepia로 워시해 브랜드 톤에 맞춥니다. 좌표·마커는 `.map-top`, 건물 마커는 `01/02`, 주차는 `P`(동대구는 근사 영역 점선).
  - Carto Positron(`basemaps.cartocdn.com`)은 현재 API 키를 요구해 워터마크가 찍히므로 쓰지 않습니다. 키가 생기면 `initMap()`의 `L.tileLayer` URL 한 줄만 교체하면 됩니다.
- **객실 선택 드로어**: 예약 바의 `객실 선택`(동대구역점) 또는 지점/객실 섹션의 같은 버튼 → 22실 목록. 각 행은 `https://www.airbnb.co.kr/rooms/{listing_id}?check_in=…&check_out=…&adults=…`로 열려 **선택한 날짜·인원이 그대로 전달**됩니다. 객실 데이터는 `site.js` 상단 `ROOMS`(호수·리스팅 ID·체크인/아웃)에서 관리합니다.
- **교동점 예약 바**: 실시간 빈 방 페이지(`normal-cabinet-gyodong`)로 이동합니다.
- **언어**: `?lang=ko|en|zh`로 진입 가능. 선택은 localStorage에 저장됩니다.

## 운영 메모

- **객실 추가/변경**: `assets/js/site.js`의 `ROOMS` 배열과 `assets/js/i18n.js`의 객실 스펙 문구를 함께 수정합니다. 출입 비밀번호·내부 연락처는 절대 넣지 않습니다.
- **오픈카카오톡 링크**: `assets/js/i18n.js` 맨 아래 `window.SITE_CONFIG.kakaoUrl` 한 곳에 채널 URL을 넣으면 히어로 · 이용 안내 · 푸터 · 챗봇 하단 버튼이 한꺼번에 나타납니다. 비어 있으면 모든 카카오 버튼은 숨겨집니다.
- **챗봇 답변 수정**: `assets/js/chat.js`의 `DATA` 객체 — 언어별 · 지점별로 체크인/셀프 체크인·짐 보관/주차/위치·오시는 길/예약 안내를 수정합니다.
- **브랜드 QR 재생성**: `work/brand-hotel/make_qr_brand.py` (카드·A4·순수 QR 3종을 `qr/`와 `downloads/`에 동시 출력)
- **공개 금지 정보**: 도어락·비품함 비밀번호, 와이파이 비밀번호, `.ics` 토큰, 개인 연락처·계좌는 페이지·저장소·커밋 어디에도 넣지 않습니다. 출입 코드는 "체크인 당일 예약 메시지로 안내"로만 표현합니다.

## 배포

GitHub Pages — `main` 브랜치 루트. `index.html`을 수정해 커밋·푸시하면 1분 내 반영됩니다. 에셋을 고친 경우 `index.html`의 `?v=` 쿼리를 함께 올려 캐시를 갱신합니다.

```bash
git add -A && git commit -m "content: update" && git push
```
