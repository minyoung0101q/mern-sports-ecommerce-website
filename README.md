# MERN-react-ecommerce
MERN stack === MongoDB + Express.js + React.js + Node.js 사용해 웹 어플리케이션을 개발하는 JavaScript 기반 프레임워크

> 👉🏻 BES : Backend Sports <br />
> 스포츠 용품을 판매하는 브랜드 웹사이트 <br />
대표 상품인 운동화를 비롯해 의류 등 각종 스포츠 웨어 판매

> 👉🏻 간단한 설명 <br />
>  회원 사이트와 관리자 사이트를 따로 구현했습니다. <br />
>  회원 계정에서는 회원가입, 로그인, 상품 조회/장바구니/구매/리뷰/별점/댓글 등의 쇼핑몰 서비스를 제공합니다. <br />
>  결제는 Paypal을 활용했습니다.
>   현재 [I am paypal](https://developer.paypal.com/) paypal 개발자 계정을 활용 => 결제 API를 연동하여 결제 프로세스를 구현했습니다. 실제 결제는 이루어지지 않습니다. 상업적 사용 X
<br />

> 👉🏻 시스템 요구 분석 <br />
> 회원(사용자) <br /> 1. 간단한 프로필 수정, 세부적인 주문내역 확인 <br />
세부적인 주문내역에는 아이디, 결제유무, 결제일, 금액 등이 있습니다. <br />
> 2. 간편한 상품 선택, 리뷰 comment + 별등급 & 빠른 리뷰 확인 <br />
> 3. 빠른 결제 과정 & 배달 유무 확인
> <br /> <br />
> 관리자 <br /> 1. 통계화면 => 총 판매액, 총 주문 건수, 총 상품 수
> <br /> 2. 제품/주문관리 => 제품 추가/수정/삭제, 등록한 제품 확인, 주문/상세 내역 확인, 배송 완료 체크 <br /> 3. 사용자 목록 관리 => 사용자 목록 확인

> 👉🏻 시스템 기능도 <br />
![정보변경](https://github.com/minyoung0101q/mern-sports-ecommerce-website/assets/130943387/cc1634d9-89de-4508-a836-2b6bf50fbc35) <br />

## 사용 기술 스택

- **React** 
  - Spring Framework에서 클래스패스의 라이브러리를 자동으로 인식하여 설정해주고 내장 서버를 제공하는 등 많은 편의성을 제공하기 때문에 빠른 개발이 가능하다고 생각하여 Spring Boot를 사용했습니다.
    서비스에서 회원 기능을 지원하기 때문에 이에 필수적인 인증, 인가 기능을 적용하기 위해 사용했습니다.
- JWT
  - 토큰 기반 인증을 구현하기 위해 사용하였습니다. Session 방식보다 확장성이 높고, 자원낭비가 덜하다고 생각해 (세션 클러스터링 등) 로그인 방식으로 JWT를 사용했습니다. [JWT](https://blog.naver.com/ghdalswl77/222517833354)
- **MongoDB**
  - 상품 검색 기능을 지원하기 때문에 보다 편리한 검색을 위해 문자열 비교에서 대소 문자를 구분하지 않는다는 장점이 있는 MySQL을 사용했습니다.
 

<br />

## 상세 기능
> [A Little Vanilla](http://www.alittlevanilla.kro.kr) 사이트에서 실제 기능 확인 하실 수 있습니다. <br />

## 1.📍 공통 <br />
+ JWT를 활용한 로그인 토큰 발행
+ 일반 회원가입 / 로그인
+ 카카오 소셜 로그인
+ 이메일 유효성 검사

### 일반 회원가입 <br />
![회원가입](https://user-images.githubusercontent.com/68539040/174229163-87deaa3e-713b-428f-8bce-c2c0478e492d.gif) <br />
소셜 로그인(카카오)으로 회원 가입을 진행할 수 있습니다.  <br /> <br />

![회원가입](https://user-images.githubusercontent.com/68539040/174229163-87deaa3e-713b-428f-8bce-c2c0478e492d.gif) <br />

로그인 상태에서 회원 정보(닉네임)을 변경 할 수 있습니다. 변경 후 로그아웃되며, 다시 로그인 하면 변경된 닉네임이 적용됩니다.
이메일과 전화번호는 변경 시 인증 번호가 필요합니다. 회원 정보 변경 시의 인증 기능은 현재 데모 사이트이기 때문에 보안 등의 문제로 구현되어 있지 않습니다.
<br />

+ AWS EC2에 서버 배포
+ AWS RDS에 DB 세팅 및 EC2 서버 연결 <br />

<br /> <br />

### 회원 정보 변경 <br />
![정보변경](https://user-images.githubusercontent.com/68539040/174230527-aedc5dc0-8883-4a3e-bac6-e682ff4d28fc.gif)  <br />  <br />


### 2. 🛍 상품 업로드
상품 업로드는 회원 가입 후 가능합니다. <br />
실제 쇼핑몰에서는 일반 회원가 아닌 판매자 role만 가능한 기능이지만  <br />
원활한 테스트의 진행을 위해 일반 회원도 글 작성이 가능하게 구현했습니다. <br />

![ezgif com-gif-maker](https://user-images.githubusercontent.com/68539040/174232925-6e9cb0d1-d92c-46bc-8f24-d53ba1322936.gif)  <br />  <br />

### 💓 좋아요
상품 목록에서 개별 좋아요/좋아요 취소 <br />
<img width="800" alt="좋아요" src="https://user-images.githubusercontent.com/68539040/174553331-3d8a952e-4d02-4371-b492-82836a7995bd.png"> <br /> <br />

### 🛒 장바구니
상품 1개 장바구니 담기, 내 장바구니 목록 조회, 장바구니 개별 취소 <br />
![2022-06-20-151633-1960221706](https://user-images.githubusercontent.com/68539040/174537326-5f740810-66bf-40af-a4a4-9c9b02e29437.gif) <br /> <br />

### 💳 결제
상품결제 시연 영상 입니다. <br />
https://user-images.githubusercontent.com/68539040/174537846-1ae2891e-dee2-42e8-8196-93af8656267d.MP4 <br /> <hr /> <br /> <br />

### 📝 후기 및 개선방향
+ redux  <br />
프로젝트에 조금씩 살이 붙으며, 상태관리 라이브러리인 redux에 대해 알게 되었다.  <br />
여러 컴포넌트가 공통으로 사용할 상태를 서로 공유해야 할 시점에서 복잡한 구조와 계층이 생겨날 때였다.  <br />
고민 끝에 일단 state와 useref와 같은 hook으로 구현해보고, 코드가 정말 너무 복잡해진다 싶을 때 리덕스를 쓰자 생각했고  <br />
결국 라이브러리 없이 리액트 자체만으로 프로젝트를 마무리 했다.
확실히 실무 레벨에서는 상태 관리 흐름을 리액트만으로 모두 해결하기엔 한계가 있을 것 같지만, 지금의 내 프로젝트는 그 정도 아니라고 판단됐다.
'무조건적으로' 외부 라이브러리를 쓰는 것은 지양하고 싶었다. 조금 더 필요성의 근거가 명확할 때 사용해보고싶다. <br />




