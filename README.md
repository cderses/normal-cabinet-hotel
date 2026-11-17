# NORMAL CABINET HOTEL · EST. 2026

노멀캐비넷 호텔 브랜드 홈페이지 — 대구 교동점(25실) · 동대구역점(22실) 두 지점을 함께 소개하는 정적 사이트입니다.

- 라이브: https://cderses.github.io/normal-cabinet-hotel/
- 브랜드 QR: [`qr/brand-qr-card.png`](qr/brand-qr-card.png) · [`qr/brand-qr-a4.pdf`](qr/brand-qr-a4.pdf)
- 기존 교동점 워크인 페이지(수정하지 않음): https://cderses.github.io/normal-cabinet-gyodong/

## 구성

| 경로 | 설명 |
| --- | --- |
| `index.html` | 단일 페이지 (히어로 · 브랜드 · 두 지점 · 스테이 · 갤러리 · 로컬 가이드 · 이용 안내 · 푸터) |
| `assets/css/site.css` | 디자인 시스템 — 웜 오프화이트 `#F6F3EE` / 테라코타 `#B65C43` / 딥 차콜 `#1E1E1E` / 브러시드 스틸 |
| `assets/js/i18n.js` | 한국어 · English · 中文 문구 + `SITE_CONFIG.kakaoUrl` |
| `assets/js/site.js` | 언어 전환, 헤더 상태, 등장 애니메이션, 갤러리 라이트박스 |
| `assets/js/chat.js` | 서버 없는 FAQ 스테이 가이드 챗봇 (지점 선택 · 버튼형 질문 · 키워드 응답) |
| `assets/img/` | 지점 실사 사진(웹용 리사이즈), 브랜드 이미지 |
| `qr/` | 브랜드 QR 카드 PNG · 인쇄용 A4 PDF |

## 운영 메모

- **오픈카카오톡 링크**: `assets/js/i18n.js` 맨 아래 `window.SITE_CONFIG.kakaoUrl` 한 곳에 채널 URL을 넣으면 히어로 · 이용 안내 · 푸터 · 챗봇 하단 버튼이 한꺼번에 나타납니다. 비어 있으면 모든 카카오 버튼은 숨겨집니다.
- **챗봇 답변 수정**: `assets/js/chat.js`의 `DATA` 객체 — 언어별 · 지점별로 체크인/셀프 체크인·짐 보관/주차/위치·오시는 길/예약 안내를 수정합니다.
- **공개 금지 정보**: 도어락·비품함 비밀번호, 와이파이 비밀번호, `.ics` 토큰, 개인 연락처·계좌는 페이지·저장소·커밋 어디에도 넣지 않습니다. 출입 코드는 "체크인 당일 예약 메시지로 안내"로만 표현합니다.

## 배포

GitHub Pages — `main` 브랜치 루트. `index.html`을 수정해 커밋·푸시하면 1분 내 반영됩니다.

```bash
git add -A && git commit -m "content: update" && git push
```
