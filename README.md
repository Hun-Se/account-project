<h1>간편한 가계부</h1>
📍 프로젝트 기간 : 2023.3.27 ~ 
<br>
📍 배포 URL : 
<br>
<br>

<img src="https://media.discordapp.net/attachments/986558961241182208/1003300321260486727/KakaoTalk_Photo_2022-07-31-22-56-15.jpeg?width=1440&height=1362">

<h1>📌 개요</h1>

```
- 평소 가계부를 엑셀에 작성하지만 macOS 환경에서는 사용 할 수 없고, 언제 어디서든 확인 할 수 있는, 엑셀보다 쉽게 사용 될 수 있는 가계부를 만들고자 해당 프로젝트를 만들 었습니다.

- 날짜, 항목, 수입, 지출, 총합, 메모로 구성됀 form을 통해 간단하게 가계부를 생성, 변경, 삭제 할 수 있도록 만든 프로젝트입니다.

- 대시보드를 통해 월 수입, 월 지출, 월 총합, 전체 총합을 확인 할 수 있고 또 지난달 가계와 비교하여 퍼센트로 차이를 쉽게 확일 할 수 있습니다.

- 월별 매출을 쉽게 확인 할 수 있도록 가계부에 따라 자동으로 생성되는 Bar 그래프를 만들었습니다.

- 어떤 항목에서 지출을 많이 하는지 쉽게 확인 할 수 있도록 항목별 지출을 자동으로 추가하는 Donut 그래프를 만들었습니다

```

</br>

<h1>⚙️ 기술 및 개발환경</h1>

### [기술]

📌 FrontEnd: React, TypeScript, Redux-Toolkit,
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

<h1>⚙️ 구현 기능</h1>

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

- 📄 가계부

  - 가계부 생성
  - 가계부 상세보기
  - 가계부 수정
  - 가계부 삭제
  - 페이지네이션
  - 출력 리스트 갯수 설정

- 🎯 공통
  - 로그아웃

<h1>⚙️ API 실헹</h1>

```
  > cd server
  > npm run build
  > npm start
```

<h1> ✨ 코드 포인트</h1>

### Redux-toolkit

- 미들웨어 Thunk를 사용하여 비동기 통신
- 전역적으로 사용하는 Modal기능 및 상태값들을 Reducer로 상태관리

### Custom Hook

- 로그인, 회원가입 form 데이터를 받아오고 유효값 검증을 위한 valdation을 custom hook으로 구현
- 반복되는 로직을 합쳐줌으로써 불필요한 코드를 제거하고 재사용성 높임
- 로직 부분을 Custom Hook으로 관리 함으로 써 View와 Logic이 분리되어 구분하기 쉬어지고 가독성도 높아짐

### react-chartjs-2

- 데이터를 한눈에 파악할 수 있도록 그래프를 만들었다.
- 해당 라이브러리 도입으로 차트 생성을 빠로고 편하게 해줬다.
- 커스텀에 용이하여 여러 색상 및 크기 조절이 편했다.

### react-hook-form

- form 데이터를 편하게 객체 형태로 받을 수 있었다.
- 하지만 리덕스 툴킷을 적용 했을 때는 form 데이터가 제대로 전달이 안되는 현상이 발생헀다.경ㄹ

### Node.js

- api를 직접 제작해 봄으로써 어떻게해야 편하게 req,res를 할 수 있을 지 고민했다.
- 경로의 이름과 규칙을 통일 함으로써 Restful하게 api를 짜려고 노력했다.
- commonJS 방식과 moduleJS 방식 중 프론트단에서 처럼 import를 사용하기 위하여 moduleJS 방식을 선택하였다.

### MongoDB

- 데이터베이스를 쉽게 구축하기 위하여 NoSql인 MongoDB를 선택하였다. 또한 러닝 커브가 낮아서 쉽게 익힐 수 있었다.
- MongoDB와 연동 할 떄 필요한 아이다값과 비밀번호는 dotenv에 작성하여 보안을 위해 git이 추적하지 않도록 설정했다.

### JWT

- 토큰을 사용하여 로그인과 회원가입 기능을 만들기 위하여 도입했다.
- 엑세스토큰과 리플레쉬 토큰을 구분하여 발급받아 보안을 높이고자 했지만 아직 적용하지 못하였다. 리펙토링 과정에서 도입해볼 예정이다.

### 사용성

- 사용성을 위해 valdation 적용 및 페이지네이션을 적용하였다.
- 가계부 생성을 역순으로 하여 등록순으로 배치되게 하였다. 추후에 정렬기능을 도입하여 최신순, 매출순으로 다양한 정렬 기능을 도입할 예정이다.

<h1> 🗂 폴더트리</h1>

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
