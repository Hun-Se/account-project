<h1>간편한 매출장부</h1>
📍 프로젝트 기간 : 2023.3.27 ~ 
<br>
📍 배포 URL :  http://www.accountproject.shop/
<br>
<br>

# 📌 개요

```
- 평소 매출장부를 엑셀에 작성하지만 macOS 환경에서는 사용 할 수 없고, 언제 어디서든 확인 할 수 있는, 엑셀보다 쉽게 사용 될 수 있는 매출장부를 만들고자 해당 프로젝트를 만들 었습니다.

- 날짜, 항목, 수입, 지출, 총합, 메모로 구성됀 form을 통해 간단하게 매출장부를 생성, 변경, 삭제 할 수 있도록 만든 프로젝트입니다.

- 대시보드를 통해 월 수입, 월 지출, 월 총합, 전체 총합을 확인 할 수 있고 또 지난달 가계와 비교하여 퍼센트로 차이를 쉽게 확일 할 수 있습니다.

- 월별 매출을 쉽게 확인 할 수 있도록 매출장부에 따라 자동으로 생성되는 Bar 그래프를 만들었습니다.

- 어떤 항목에서 지출을 많이 하는지 쉽게 확인 할 수 있도록 항목별 지출을 자동으로 추가하는 Donut 그래프를 만들었습니다.

- 캘린더를 통해 입력했던 매출장부의 목록가 수입,지출이 자동으로 날짜에 맞게 기록이 되로록 기능을 구현하였습니다.

```

</br>

# ⚙️ 기술 및 개발환경

### [기술]

📌 FrontEnd: HTML5, CSS3, React, TypeScript, Redux, Chart.js
<br/>
📌 BackEnd: Node.js, MongoDB
<br/>
📌 Version:

- client

```
  "react": "^18.2.0",
  "axios": "^1.3.4",
  "chart.js": "^4.2.1",
  "react-chartjs-2": "^5.2.0",
  "react-dom": "^18.2.0",
  "react-hook-form": "^7.43.9",
  "react-redux": "^8.0.5",
  "react-router-dom": "^6.10.0",
  "typescript": "^4.9.5",
```

- server

```
  "express": "^4.18.2",
  "jsonwebtoken": "^9.0.0",
  "mongoose": "^7.0.3",
  "ts-node": "^10.9.1",
```

</br>

# ⚙️ 구현 기능

- 🔐 계정

  - 로그인 / 로그아웃
  - 회원가입
  - 회원 정보 수정
  - 유효성 검증
  - 토큰 검증

- 📊 대시보드

  - 통계 대시보드
  - 월별 매출 그래프
  - 지출 항목 및 금액 그래프

- 📄 매출장부

  - 매출장부 생성
  - 매출장부 상세보기
  - 매출장부 수정
  - 매출장부 삭제
  - 페이지네이션
  - 출력 리스트 갯수 설정
  - 최신순, 오래된순, 매출순 정렬
  - 월별 데이터 출력

  - 🗓️ 캘린더

    - 캘린더 기능
    - 월,연 이동 버튼
    - 오늘날짜 마킹 기능
    - 공휴일 출력 기능
    - 날짜에 맞는 매출장부 데이터 출력 기능

- 🎯 공통
  - 로그아웃

# ⚙️ 실행 방법

- client

```
  // 루트 폴더 기준
  > cd client
  > npm start
```

- server

```
  // 루트 폴더 기중
  > cd server
  > npm start
```

# ✨ 코드 포인트

### Redux-toolkit

- Redux-toolkit을 사용하여 action을 생성하고 store를 생성하는 코드를 줄였습니다.
- 미들웨어 Thunk를 생성하여 비동기 통신 하였습니다.
- 전역적으로 사용하는 Modal기능 및 상태값들을 Reducer로 상태관리 하였습니다.
- 기능을 동작하는 여러 action들을 생성하여 뷰와 로직을 분리하였습니다.

### Custom Hook

- 로그인, 회원가입 form 데이터를 받아오고 유효값 검증을 위한 valdation을 custom hook으로 구현했습니다.
- 반복되는 로직을 합쳐줌으로써 불필요한 코드를 제거하고 재사용성 높였습니다.
- 로직 부분을 Custom Hook으로 관리 함으로 써 View와 Logic이 분리되어 구분하기 쉬어지고 가독성도 높아졌습니다.

### react-chartjs-2

- 데이터를 한눈에 파악할 수 있도록 매출장부의 데이터를 기반으로 그래프를 만들었습니다.
- 해당 라이브러리 도입으로 차트 생성을 빠로고 편하게 해줬다.
- 커스텀에 용이하여 여러 색상 및 크기 조절을 편하게 할 수 있다는 장점이 있었습니다.

### react-hook-form

- 매출장부의 form 입력 데이터에 수집에 사용 하였습니다.
- 기존의 form 데이터를 받아오는 코드 수를 줄일 수 있었습니다.

### Node.js

- Node.js를 사용하여 mongoDB 연동 및 express로 api 서버를 구축하였습니다.
- 경로의 이름과 규칙을 통일 함으로써 Restful하게 api를 구축하도록 노력 하였습니다.
- commonJS 방식과 moduleJS 방식 중 프론트단에서 처럼 import를 사용하여 모듈을 불러오는 방식이 익숙했기 때문에 moduleJS 방식을 선택하였습니다.

### MongoDB

- 데이터베이스를 쉽게 구축하기 위하여 NoSql인 MongoDB를 선택, 또한 러닝 커브가 낮아서 쉽게 익힐 수 있었습니다.
- MongoDB와 연동 할 떄 필요한 아이다값과 비밀번호는 dotenv에 작성하여 보안을 위해 git이 추적하지 않도록 설정했습니다.

### JWT

- 토큰을 사용하여 로그인과 회원가입 기능을 만들기 위하여 도입했습니다.
- 엑세스토큰과 리플레쉬 토큰을 구분하여 발급받아 보안을 높이고자 했지만 아직 적용하지 못하였다. 리펙토링 과정에서 도입해볼 예정입니다.

### 매출장부 페이지

- 사용성을 위해 valdation 적용 및 장부의 갯수만큼 동적으로 늘어나는 페이지네이션을 적용하였습니다.
- 매출장부 생성을 역순으로 하여 등록순으로 배치되게 하였다. 추후에 정렬기능을 도입하여 최신순, 매출순으로 다양한 정렬 기능을 도입할 예정입니다. -> [완료](#0424)

### 공휴일 openAPI 활용

- 공공데이터 포털의 한국천문연구원 특일 정보 openAPI를 사용하여 공휴일 정보를 받아오고 캘린더에 출력하도록 설정하였습니다.
- 공공데이터를 받오는데 필요한 키는 .env 파일에 보관하여 키 노출의 보안성을 높였습니다.
- 캘린더의 날짜와 비교하여 이에 맞는 공휴날짜에 스타일의 적용하고 공휴일명을 출력하도록 설정했습니다.

### 캘린더의 매출장부 데이터 출력

- 매출장부의 입력했던 날짜에 맞춰 캘린더에서도 기록했던 수입,지출 목록과 금액을 출력하도록 설정했습니다.
- 캘린더 각 월의 날짜와 요일이 다르기 때문에 각 날짜에 맞는 날짜로 동적으로 작용하도록 알고리즘을 적용했습니다. 또한 실제 달력과 같이 월의 첫시작과 끝 남는 칸에는 저번달의 날짜와 다음달의 날짜도 같이 출력되도록 기능을 구현했습니다.

- </br>

# ✔️ 업데이트

### 04.24

- 매출장부의 최신순, 오래된순, 매출순 정렬기능 추가
- 매출장부를 월별로 필터링 할 수 있는 select-box 기능 추가
- 사용성 향상을 위헤 불필요한 alert 기능 제거

### 05.18

- 캘린더 기능 추가
- 캘린더페이지 연이동 월이동버튼 추가
- 캘린더 날짜에 맞게 입력한 장부 데이터 출력 기능 추가
- 공휴일 출력 기능 추가
- 캘린더 각 월에 맞는 날짜로 렌더링 되도록 동적으로 설계

</br>

# 🗂 폴더트리

```
📦 src
 ┣📂 client
 ┃ ┣📂 public
 ┃ ┗📂 src
 ┃  ┣📂 api
 ┃  ┣📂 app
 ┃  ┣📂 asset
 ┃  ┣📂 components
 ┃  ┣📂 constant
 ┃  ┣📂 hoc
 ┃  ┣📂 hook
 ┃  ┣📂 lib
 ┃  ┣📂 pages
 ┃  ┣📂 redux
 ┃  ┣📂 router
 ┃  ┣📂 styles
 ┃  ┗📂 types
 ┃
 ┣📂 server
   ┣📂 dist
   ┗📂 src
    ┣📂 config
    ┣📂 controllers
    ┣📂 middleware
    ┣📂 models
    ┣📂 routes
    ┗📂 utils


```

</br>
