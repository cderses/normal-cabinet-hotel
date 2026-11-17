# NORMAL CABINET HOTEL · EST. 2026

노멀캐비넷 호텔 브랜드 홈페이지 — 도시별 지점 구조(대구 운영 · 서울/부산 예정)로 소개하는 정적 사이트입니다.

- 라이브: https://cderses.github.io/normal-cabinet-hotel/
- 브랜드 QR: [`qr/brand-qr-card.png`](qr/brand-qr-card.png) · [`qr/brand-qr-a4.pdf`](qr/brand-qr-a4.pdf) · [`qr/brand-qr-only.png`](qr/brand-qr-only.png)
- 기존 교동점 워크인 페이지(수정하지 않음): https://cderses.github.io/normal-cabinet-gyodong/

## 구성

| 경로 | 설명 |
| --- | --- |
| `index.html` | 단일 페이지 (히어로 + 예약 바 · 브랜드(C-01) · 지점(C-02) · 스테이(C-03) · 객실 스펙(C-04) · 갤러리(C-05) · 로컬 가이드(C-06) · 이용 안내(C-07) · 푸터 · 모바일 하단 데스크) |
| `assets/css/site.css` | 디자인 시스템 — 웜 오프화이트 `#F6F3EE` / 테라코타 `#B65C43` / 딥 차콜 `#1E1E1E` / 브러시드 스틸 |
| `assets/js/i18n.js` | 한국어 · English · 中文 UI 문구 + `SITE_CONFIG.kakaoUrl` |
| `assets/js/site.js` | 언어 전환, 헤더 상태, 등장 애니메이션, 갤러리 라이트박스, 도시 필터(All/Daegu/Seoul/Busan), 예약 바(지점·날짜·인원 → 에어비앤비/교동 워크인) |
| `assets/js/chat.js` | 서버 없는 FAQ 챗봇 `캐비닛지기` / THE KEEPER (지점 선택 · 버튼형 질문 · 키워드 응답) |
| `assets/img/` | 지점 실사 사진(웹용 리사이즈), 브랜드 이미지 |
| `qr/` | 브랜드 QR 카드 PNG · 인쇄용 A4 PDF · 순수 QR PNG |

## 브랜드 메시지 · 타이포그래피

- 브랜드 메시지(히어로 타이틀, 섹션 제목·리드, 위트 문구, 푸터 슬로건)는 **영문 고정**입니다. 언어를 바꿔도 영문 그대로 두어 톤을 유지합니다.
- 한글 안내 본문(nav·버튼·객실 정보·이용 안내·챗봇)은 `Pretendard`(CDN) + Inter Tight 조합으로 표시됩니다.

## 운영 메모

- **지점 추가/변경**: `#branches` 안의 `[data-city]` 카드(대구) 또는 `.teaser` 카드(서울·부산)를 수정하고, 도시 탭은 `[data-city-tab]`/`[data-city-row]` 값으로 제어합니다. 서울·부산은 내부 지점명 없이 티저 카드만 노출합니다.
- **오픈카카오톡 링크**: `assets/js/i18n.js` 맨 아래 `window.SITE_CONFIG.kakaoUrl` 한 곳에 채널 URL을 넣으면 히어로 · 이용 안내 · 푸터 · 챗봇 하단 버튼이 한꺼번에 나타납니다. 비어 있으면 모든 카카오 버튼은 숨겨집니다.
- **챗봇 답변 수정**: `assets/js/chat.js`의 `DATA` 객체 — 언어별 · 지점별로 체크인/셀프 체크인·짐 보관/주차/위치·오시는 길/예약 안내를 수정합니다.
- **브랜드 QR 재생성**: `work/brand-hotel/make_qr_brand.py` (카드·A4·순수 QR 3종을 `qr/`와 `downloads/`에 동시 출력)
- **공개 금지 정보**: 도어락·비품함 비밀번호, 와이파이 비밀번호, `.ics` 토큰, 개인 연락처·계좌는 페이지·저장소·커밋 어디에도 넣지 않습니다. 출입 코드는 "체크인 당일 예약 메시지로 안내"로만 표현합니다.

## 섹션 인덱스 (CABINET INDEX)

섹션 eyebrow는 문서 순서대로 `C-01` ~ `C-07`을 씁니다(계단 `NO LOBBY`, 연재 `READER` 섹션이 추가되면 그 자리에서 번호를 다시 매깁니다). 영문 라벨은 3개 언어에서 동일하게 유지합니다.

| 코드 | 섹션 | id |
| --- | --- | --- |
| C-01 | BRAND | `#brand` |
| C-02 | SITES | `#branches` |
| C-03 | STAYS | `#stay` |
| C-04 | ROOMS (객실 스펙 시트) | `#rooms` |
| C-05 | GALLERY | `#gallery` |
| C-06 | NEXT DOOR | `#daegu` |
| C-07 | INFO | `#info` |

## 예약 바 · 모바일 데스크

- 히어로 하단 예약 바(`#booking`)는 지점·날짜·인원을 받아 **동대구역점 → 에어비앤비(날짜·인원 파라미터)**, **교동점 → 교동 워크인 페이지(`normal-cabinet-gyodong`)** 로 보냅니다.
- 교동 25실은 아직 게시 전이라 iCal Worker가 25실 전부 `blocked: []`로 응답합니다. 그래서 예약 바에서는 교동을 **`준비 중 · 실시간 워크인 보기`** 로만 표기하고, **가용 객실 수를 숫자로 표시하지 않습니다**(숫자를 지어내지 않는 원칙).
- 모바일(860px 미만)은 하단 3버튼 데스크(`지점` / `큐레이션` / `캐비닛지기`)를 쓰고, 챗봇 버튼은 데스크 위로 올려 겹치지 않게 했습니다.

## 배포

GitHub Pages — `main` 브랜치 루트. `index.html`을 수정해 커밋·푸시하면 1분 내 반영됩니다.

```bash
git add -A && git commit -m "content: update" && git push
```
