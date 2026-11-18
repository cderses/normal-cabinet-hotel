# NORMAL CABINET HOTEL · EST. 2026

노멀캐비넷 호텔 브랜드 홈페이지 — **서울 · 대구 · 호치민**에 걸친 브랜드를 소개하는 **디지털 명함형** 정적 사이트입니다. 대구(교동점·동대구역점)는 사진과 안내까지, 서울과 호치민은 텍스트 인덱스로 담았습니다.

- 라이브: https://cderses.github.io/normal-cabinet-hotel/
- 브랜드 QR: [`qr/brand-qr-card.png`](qr/brand-qr-card.png) · [`qr/brand-qr-a4.pdf`](qr/brand-qr-a4.pdf) · [`qr/brand-qr-only.png`](qr/brand-qr-only.png)
- 기존 교동점 워크인 페이지(수정하지 않음): https://cderses.github.io/normal-cabinet-gyodong/

## v7 — 심플 명함형 리뉴얼

v6의 기능성 섹션을 모두 걷어내고, 브랜드 이름과 도시·지점 소개만 남긴 한 장짜리 페이지입니다.

- **남긴 것**: 브랜드명(`NORMAL CABINET HOTEL`), 브랜드 메시지(`Ordinary, but aesthetic.` / `NOT SO NORMAL.`), 브랜드 스테이트먼트, 도시 인덱스(**SEOUL · DAEGU · HO CHI MINH**), 대구 두 지점 소개(사진·정체성 한두 문장·주소/주차/오는 길 1~2줄), 여행 큐레이션 링크, KO/EN/中文 전환.
- **걷어낸 것**: 예약 바·객실 선택 드로어·교동 워크인 위젯·에어비앤비 링크, FAQ 챗봇(`캐비닛지기`), 키카드 플립, 소재 비율 바, 계단 레터링, 도시 필터 탭(`ALL/DAEGU/SEOUL/BUSAN`), 서울/부산 coming-soon 티저, 지도 임베드(Leaflet), 갤러리 라이트박스, 모바일 하단 바, 뉴스레터·배지·숫자 스트립.
- **지도**: 임베드를 쓰지 않고 지점별 주소 한 줄 + 네이버지도 링크만 둡니다.

## 지점 위계

| 도시 | 지점 | 표기 |
| --- | --- | --- |
| SEOUL | 서울 (사진·주소 추후 추가) | `SEOUL` |
| DAEGU | 교동점 · 동대구역점 | `노멀캐비넷 교동점` · `노멀캐비넷 동대구역점` |
| HO CHI MINH | 호치민 (사진·주소 추후 추가) | `HO CHI MINH` |

- 서울·호치민은 사진이 준비되지 않아 **텍스트 인덱스로만** 표기합니다. 다른 지점 사진을 돌려쓰지 않습니다.
- `동대구점`이 아니라 `노멀캐비넷 동대구역점`으로 통일합니다.

## 구성

| 경로 | 설명 |
| --- | --- |
| `index.html` | 단일 페이지 (히어로 · 스테이트먼트 · 도시 인덱스 · 대구 두 지점 · 푸터) |
| `assets/css/site.css` | 디자인 시스템 — 페이퍼 `#F3EFE7` / 잉크 `#17181A` / 테라코타 `#B4553C`, Inter Tight + Instrument Serif |
| `assets/js/i18n.js` | 한국어 · English · 中文 문구와 전환(`data-i18n`, `data-i18n-alt`) |
| `assets/img/brand/` | 브랜드 이미지 (히어로·명판) — 특정 지점 외관을 브랜드 대표로 쓰지 않음 |
| `assets/img/` | 지점 실사 사진 (교동점 외관, 동대구역점 라운지) |
| `curation-dongdaegu/` | 동대구역점 여행 큐레이션 (자체 페이지, 기존 URL 유지) |
| `qr/` | 브랜드 QR 카드 PNG · 인쇄용 A4 PDF · 순수 QR PNG |

## 타이포그래피 · 문구 규칙

- 브랜드 메시지·섹션 제목은 **영문 고정**입니다. 언어를 바꿔도 영문 그대로 두어 톤을 유지합니다.
- 본문·지점 소개·라벨은 언어별로 번역됩니다(KO 기본, EN·中文).
- 지점 표기는 `노멀캐비넷 교동점`, `노멀캐비넷 동대구역점`으로 통일합니다.
- 히어로 디스플레이는 `clamp(3.2rem, 10.4vw, 8.2rem)`, 섹션 상하 여백 `clamp(72px, 10vw, 150px)`. 장식용 마퀴·필터·카운터는 쓰지 않습니다.

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
- **공개 금지 정보**: 도어락·비품함 비밀번호, 와이파이 비밀번호, `.ics` 토큰, 개인 연락처·계좌는 페이지·저장소·커밋 어디에도 넣지 않습니다.

## 배포

GitHub Pages — `main` 브랜치 루트. `index.html`을 수정해 커밋·푸시하면 1분 내 반영됩니다. CSS/JS를 고친 경우 `index.html`의 `?v=` 쿼리를 함께 올려 캐시를 갱신합니다.

```bash
git add -A && git commit -m "content: update" && git push
```
