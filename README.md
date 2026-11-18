# NORMAL CABINET HOTEL · EST. 2026

노멀캐비넷 호텔 브랜드 홈페이지 — **서울 · 대구 · 호치민**에 걸친 브랜드를 소개하는 **디지털 명함형** 정적 사이트입니다. 대구(교동점·동대구역점)와 호치민(호치민점)은 사진·안내까지, 서울 네 지점(홍대·신촌·상수·합정)은 텍스트 인덱스로 담았습니다.

- 라이브: https://cderses.github.io/normal-cabinet-hotel/
- 브랜드 QR: [`qr/brand-qr-card.png`](qr/brand-qr-card.png) · [`qr/brand-qr-a4.pdf`](qr/brand-qr-a4.pdf) · [`qr/brand-qr-only.png`](qr/brand-qr-only.png)
- 기존 교동점 워크인 페이지(수정하지 않음): https://cderses.github.io/normal-cabinet-gyodong/

## v8 — 공식 로고 · 지점 구조 · 호치민

v7의 명함형 구조를 그대로 두고, 사용자가 보낸 공식 로고와 호치민 실사 사진으로 브랜드 정체성을 세웠습니다.

- **로고**: 공식 로고(`normal cabinet.` / `ORDINARY OBJECTS, BETTER SPACES` / `EST. 2026`)를 배경 없는 PNG(`assets/img/brand/logo-*.png`)로 만들어 헤더·히어로·푸터에 사용합니다. 잉크(#17181A)와 페이퍼(#F7F3EB) 두 색상판이 있고, 어두운 배경에는 페이퍼판을 씁니다. `mix-blend-mode` 없이 알파를 뽑아 써서 배경색과 무관하게 깨끗합니다.
- **히어로**: 큰 활자 대신 공식 로고 락업을 사진 위에 얹습니다. 장식 카피는 두지 않습니다.
- **브랜드 문구**: `Ordinary objects, better spaces.`를 중심으로 스테이트먼트·푸터 문구를 다시 썼습니다(3개 언어).
- **지점 구조**: 도시 인덱스에 도시별 지점명을 전부 노출합니다 — SEOUL(홍대·신촌·상수·합정), DAEGU(교동·동대구역), HO CHI MINH(호치민점).
- **호치민**: 사진 2장과 함께 별도 섹션(`SITES · HO CHI MINH`)으로 소개합니다. 위치는 벤반돈(Bến Vân Đồn), 4군 수준까지만 적고 도어락·내부 정보는 넣지 않습니다.
- **서울**: 사진이 준비되지 않아 `SITES · SEOUL` 텍스트 인덱스로만 표기합니다(다른 지점 사진 재사용 금지).
- **걷어낸 것(v7 유지)**: 예약 바·객실 드로어·워크인 위젯·FAQ 챗봇·지도 임베드·필터 탭.

## 지점 위계

| 도시 | 지점 | 표기 |
| --- | --- | --- |
| SEOUL | 홍대점 · 신촌점 · 상수점 · 합정점 | `노멀캐비넷 홍대점` … (사진·소개 준비 중) |
| DAEGU | 교동점 · 동대구역점 | `노멀캐비넷 교동점` · `노멀캐비넷 동대구역점` |
| HO CHI MINH | 호치민점 | `노멀캐비넷 호치민점` (베트남 · 4군 벤반돈) |

- `동대구점`이 아니라 `노멀캐비넷 동대구역점`으로 통일합니다.
- 서울 지점은 사진이 없으므로 **텍스트 인덱스로만** 표기하고, 다른 지점 사진을 돌려쓰지 않습니다.

## 구성

| 경로 | 설명 |
| --- | --- |
| `index.html` | 단일 페이지 (히어로 · 스테이트먼트 · 도시 인덱스 · 대구 두 지점 · 호치민 · 서울 인덱스 · 푸터) |
| `assets/css/site.css` | 디자인 시스템 — 페이퍼 `#F3EFE7` / 잉크 `#17181A` / 테라코타 `#B4553C`, Inter Tight + Instrument Serif |
| `assets/js/i18n.js` | 한국어 · English · 中文 문구와 전환(`data-i18n`, `data-i18n-alt`) |
| `assets/img/brand/` | 공식 로고 PNG(잉크·페이퍼) · 브랜드 이미지 (히어로·명판) — 특정 지점 외관을 브랜드 대표로 쓰지 않음 |
| `assets/img/hochiminh/` | 호치민점 실사 2장 (`hcm-window-*`, `hcm-lantern-*`) |
| `assets/img/`, `assets/img/hyomok/` | 대구 지점 실사 사진 (교동점 외관, 동대구역점 라운지) |
| `curation-dongdaegu/` | 동대구역점 여행 큐레이션 (자체 페이지, 기존 URL 유지) |
| `qr/` | 브랜드 QR 카드 PNG · 인쇄용 A4 PDF · 순수 QR PNG |

## 타이포그래피 · 문구 규칙

- 브랜드 메시지·섹션 제목은 **영문 고정**입니다. 언어를 바꿔도 영문 그대로 두어 톤을 유지합니다.
- 본문·지점 소개·라벨은 언어별로 번역됩니다(KO 기본, EN·中文).
- 로고 이미지의 `alt`는 `normal cabinet. Ordinary objects, better spaces. Est. 2026`입니다. 장식용으로만 쓰는 경우에도 alt를 비우지 않습니다.
- 지점 표기는 `노멀캐비넷 교동점`, `노멀캐비넷 동대구역점`, `노멀캐비넷 호치민점`으로 통일합니다.
- 새 지점이 생기면 `cities` 인덱스 → 해당 도시 섹션 순서로 추가합니다.

## 큐레이션 링크

| 지점 | URL |
| --- | --- |
| 교동점 | https://cderses.github.io/normal-cabinet-gyodong/curation/ |
| 동대구역점 | https://cderses.github.io/normal-cabinet-hotel/curation-dongdaegu/ |

두 URL은 기존 QR과 인쇄물에 이미 배포되어 있으므로 **경로를 바꾸지 않습니다**.

## 운영 메모

- **문구 수정**: 한국어 기본값은 `index.html`에, EN·中文은 `assets/js/i18n.js`의 `I18N` 객체에 있습니다. 키를 추가하면 세 언어 모두 넣어 주세요.
- **언어 진입**: `?lang=ko|en|zh`로 열 수 있고, 선택은 `localStorage`(`nc-lang`)에 저장됩니다.
- **이미지 교체**: 지점 사진은 `assets/img/`의 실사 사진을 쓰고, 브랜드 대표 이미지는 `assets/img/brand/`만 사용합니다.
- **로고 재생성**: 원본 로고 이미지에서 흰 배경을 알파로 바꿔 `logo-wordmark-*`(헤더용)과 `logo-lockup-*`(히어로·푸터용)을 만듭니다. 새 로고를 받으면 같은 방식으로 잉크/페이퍼 두 판을 다시 뽑습니다.
- **공개 금지 정보**: 도어락·비품함 비밀번호, 와이파이 비밀번호, `.ics` 토큰, 개인 연락처·계좌는 페이지·저장소·커밋 어디에도 넣지 않습니다.

## 배포

GitHub Pages — `main` 브랜치 루트. `index.html`을 수정해 커밋·푸시하면 1분 내 반영됩니다. CSS/JS를 고친 경우 `index.html`의 `?v=` 쿼리를 함께 올려 캐시를 갱신합니다.

```bash
git add -A && git commit -m "content: update" && git push
```
