# NORMAL CABINET HOTEL · EST. 2026

노멀캐비넷 호텔 브랜드 홈페이지 — **서울 · 대구 · 호치민**에 걸친 브랜드를 소개하는 **디지털 명함형** 정적 사이트입니다. 대구(교동점·동대구역점)와 호치민(호치민점)은 사진·안내까지, 서울은 **서울 마포점** 하나로 묶어 소개합니다.

- 라이브: https://cderses.github.io/normal-cabinet-hotel/
- 브랜드 QR: [`qr/brand-qr-card.png`](qr/brand-qr-card.png) · [`qr/brand-qr-a4.pdf`](qr/brand-qr-a4.pdf) · [`qr/brand-qr-only.png`](qr/brand-qr-only.png)
- 기존 교동점 워크인 페이지(수정하지 않음): https://cderses.github.io/normal-cabinet-gyodong/

## v9 — 숫자·house 제거, 브랜드 중심 정리

v8의 구조·로고·실사 사진을 그대로 두고, 지점을 세는 표현과 `house` 용어를 걷어내고 **브랜드 기준**을 앞세웠습니다.

- **숫자·`house` 제거**: `Two houses in Daegu.`, `One house in Saigon.`, `Four houses, in Seoul.`, `세 도시, 일곱 채의 집`, `서울 네 곳, 대구 두 곳` 같은 지점 개수 문구와 CITIES 인덱스·지점 카드의 `01/02/03` 번호를 모두 뺐습니다. 섹션 제목은 `Normal Cabinet, Daegu.` · `Normal Cabinet, Ho Chi Minh.` · `Normal Cabinet, Seoul.`로 도시명 중심입니다.
- **THE STANDARD 섹션 추가**: `Different designs, one standard.` — 지점마다 디자인은 다르지만 취향을 고르고 공간을 대하는 기준은 하나라는 브랜드 철학을 LIGHT / MATERIAL / TASTE 세 줄로 짧게 적었습니다. 스테이트먼트·도시 인덱스·푸터에도 같은 톤의 문장을 3개국어로 배치했습니다.
- **객실 수 표기**: 지점 정보 첫 줄(`GYODONG · JUNG-GU —— 25실`)에만 담백하게 넣습니다. 서울 마포점 33실 · 교동점 25실 · 동대구역점 22실 · 호치민점 14실. 지점 개수를 세는 숫자는 쓰지 않습니다.
- **서울 마포점 통일**: 홍대점·신촌점·상수점·합정점으로 나누던 표기를 **노멀캐비넷 서울 마포점** 하나로 합치고, 사진이 없는 대신 텍스트 카드(위치·객실)로 정리했습니다.
- **호치민 비주얼 교체**: 워터마크가 있던 프리뷰 사진 2장을 걷어내고, 호치민의 재료(큰 창·종이 등·테라조)로 만든 브랜드 무드 컷 `hcm-light-*.jpg` · `hcm-quiet-*.jpg`를 넣었습니다. 열대 리조트가 아니라 **취향이 담긴 독립적 디자인 공간**으로 보이게 하고, 대구 실사와 색을 억지로 맞추지 않았습니다.
- **레이아웃 다듬기**: 대구 두 지점 카드의 높이를 어긋나게(stagger) 배치하고, 호치민은 가로+세로 비대칭 사진 쌍으로, 서울은 세로 괘선을 둔 텍스트 카드로 정리했습니다. 히어로에 스크롤 큐, 섹션 제목에 테라코타 헤어라인, 은은한 스크롤 리빌(모션 최소화 설정 시 끔)을 더했습니다.
- **걷어낸 것(v7 유지)**: 예약 바·객실 드로어·워크인 위젯·FAQ 챗봇·지도 임베드·필터 탭.

## 지점 위계

| 도시 | 지점 | 표기 | 객실 |
| --- | --- | --- | --- |
| SEOUL | 마포점 (마포·신촌 일대) | `노멀캐비넷 서울 마포점` | 33실 |
| DAEGU | 교동점 | `노멀캐비넷 교동점` | 25실 |
| DAEGU | 동대구역점 | `노멀캐비넷 동대구역점` | 22실 |
| HO CHI MINH | 호치민점 (4군 벤반돈) | `노멀캐비넷 호치민점` | 14실 |

- `동대구점`이 아니라 `노멀캐비넷 동대구역점`으로 통일합니다.
- 서울은 홍대·신촌·상수·합정을 개별 지점으로 나누지 않고 **서울 마포점** 하나로 표기합니다.
- 지점 **개수**를 세는 문구는 쓰지 않습니다(객실 수는 지점 정보에만).

## 구성

| 경로 | 설명 |
| --- | --- |
| `index.html` | 단일 페이지 (히어로 · 스테이트먼트 · THE STANDARD · 도시 인덱스 · 대구 두 지점 · 호치민 · 서울 마포점 · 푸터) |
| `assets/css/site.css` | 디자인 시스템 — 페이퍼 `#F3EFE7` / 잉크 `#17181A` / 테라코타 `#B4553C`, Inter Tight + Instrument Serif |
| `assets/js/i18n.js` | 한국어 · English · 中文 문구와 전환(`data-i18n`, `data-i18n-alt`) |
| `assets/js/site.js` | 스크롤 리빌(IntersectionObserver, `prefers-reduced-motion`에서 끔) |
| `assets/img/brand/` | 공식 로고 PNG(잉크·페이퍼) · 브랜드 이미지 (히어로·명판) — 특정 지점 외관을 브랜드 대표로 쓰지 않음 |
| `assets/img/hochiminh/` | 호치민 브랜드 무드 컷 2컷 (`hcm-light-*`, `hcm-quiet-*`) |
| `assets/img/`, `assets/img/hyomok/` | 대구 지점 실사 사진 (교동점 외관, 동대구역점 라운지) |
| `curation-dongdaegu/` | 동대구역점 여행 큐레이션 (자체 페이지, 기존 URL 유지) |
| `qr/` | 브랜드 QR 카드 PNG · 인쇄용 A4 PDF · 순수 QR PNG |

## 타이포그래피 · 문구 규칙

- 브랜드 메시지·섹션 제목은 **영문 고정**입니다. 언어를 바꿔도 영문 그대로 두어 톤을 유지합니다.
- 본문·지점 소개·라벨은 언어별로 번역됩니다(KO 기본, EN·中文).
- 로고 이미지의 `alt`는 `normal cabinet. Ordinary objects, better spaces. Est. 2026`입니다. 장식용으로만 쓰는 경우에도 alt를 비우지 않습니다.
- 지점 표기는 `노멀캐비넷 서울 마포점`, `노멀캐비넷 교동점`, `노멀캐비넷 동대구역점`, `노멀캐비넷 호치민점`으로 통일합니다.
- 새 지점이 생기면 `cities` 인덱스 → 해당 도시 섹션 순서로 추가합니다.

## 큐레이션 링크

| 지점 | URL |
| --- | --- |
| 교동점 | https://cderses.github.io/normal-cabinet-gyodong/curation/ |
| 동대구역점 | https://cderses.github.io/normal-cabinet-hotel/curation-dongdaegu/ |

두 URL은 기존 QR과 인쇄물에 이미 배포되어 있으므로 **경로를 바꾸지 않습니다**.
