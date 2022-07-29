<h1 align="center">HelpAnimal-front</h1>

> ## 사용 스택

- React
- Typescript
- Sass
- Redux

<br>

> ## 디렉토리 구조

```bash
src
├── components
│   ├── CrewCard.tsx
│   ├── CrewForm.tsx
│   ├── Crews.tsx
│   ├── DetailBox.tsx
│   ├── DetailContent.tsx
│   ├── Header.tsx
│   ├── InputTitles.tsx
│   ├── QuillEditor.tsx
│   ├── RecruitmentCard.tsx
│   ├── RecruitmentForm.tsx
│   ├── Recruitments.tsx
│   └── Title.tsx
├── routes
│   ├── Crew.tsx
│   ├── CrewCreate.tsx
│   ├── CrewDetail.tsx
│   ├── CrewEdit.tsx
│   ├── Home.tsx
│   ├── Recruitment.tsx
│   └── RecruitmentCreate.tsx
├── shared
│   ├── Props.tsx
├── styles
│   ├── components
│   │   ├── crewCard.scss
│   │   ├── crewForm.scss
│   │   ├── detailBox.scss
│   │   ├── header.scss
│   │   ├── inputTitles.scss
│   │   ├── quillEditor.scss
│   │   ├── recruitmentCard.scss
│   │   ├── recruitmentForm.scss
│   │   ├── recruitments.scss
│   │   └── title.scss
│   ├── config
│   │   ├── _colors.scss
│   │   ├── _font.scss
│   │   ├── _mixins.scss
│   │   ├── _reset.scss
│   │   └── _variables.scss
│   ├── routes
│   │   └── crew.scss
│   └── styles.scss
├── test
│   ├── data.ts
├── App.tsx
├── index.tsx
├── react-app-env.d.ts
└── Router.tsx
```

<br>

> ## 구현 기능 목록

- 사용자
  - 회원가입
    - 이메일 인증
  - 로그인
    - 토큰 인증
  - 회원 조회
    - 내정보 보기(비밀번호 인증)
- 크루
  - 크루 생성
  - 크루 조회
  - 크루 수정
  - 크루 삭제
- 봉사활동 공고

  - 공고 등록
  - 공고 수정
  - 공고 삭제
  - 공고 전체조회(페이징)
  - 공고 상세조회

- 사용자 최초 접속 후 과정

  회원가입 → 로그인 → 크루 생성 →

  회원가입 → 로그인 → 크루 검색 → 크루 가입 →

  <br>

  공고 조회 → 없어 → 공고 생성 →

  공고 조회 → 있어 → 참여신청 →

  <br>

  공고관리자 → 참여신청 조회 → 승인 → 공고 참여 완료

<br>

> ## 페이지 구성

| 화면번호 | 화면이름                               | 화면설명                                | 필요한 기능(api)                   | URL             |
| -------- | -------------------------------------- | --------------------------------------- | ---------------------------------- | --------------- |
| 1        | 메인페이지                             | 크루, 공고를 확인할 수 있는 메인 페이지 | 크루 조회, 공고 조회, 내 정보 조회 | /               |
| 2        | 회원가입                               | 사용자 회원가입 페이지                  | 회원가입                           |                 |
| 3        | 로그인                                 | 사용자 로그인 페이지                    | 로그인                             | /login          |
| 4        | 마이페이지(로그인), 로그아웃(회원가입) | 로그인한 사용자의 마이 페이지           | 내 정보 조회                       |                 |
| 5        | 크루 페이지                            | 크루 목록 조회, 생성 페이지 이동        | 크루 목록 조회                     | /crew           |
| 6        | 크루 상세정보 페이지                   | 크루 상세정보 페이지                    | 크루 상제 정보                     | /crew/detail    |
| 7        | 크루 생성 페이지                       | 크루 생성 페이지                        | 크루 생성                          | /crew/create    |
| 8        | 크루 수정 페이지                       | 크루 수정 페이지                        | 크루 수정                          | /crew/edit      |
| 9        | 공고 페이지                            | 공고 목록 조회, 생성 페이지 이동        | 공고 목록 조회                     | /recruit        |
| 10       | 공고 생성 페이지                       | 공고 생성 페이지                        | 공고 생성                          | /recruit/create |
| 11       | 공고 수정 페이지                       | 공고 수정 페이지                        | 공고 수정                          | /recruit/edit   |
|          |                                        |                                         |                                    |                 |
