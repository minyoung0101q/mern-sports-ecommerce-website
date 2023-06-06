## MERN-react-ecommerce
**MERN stack === MongoDB + Express.js + React.js + Node.js 사용해 웹 어플리케이션을 개발하는 JavaScript 기반 프레임워크**

> 👉🏻 BES : Backend Sports <br />
> 스포츠 용품을 판매하는 브랜드 웹사이트 <br />
대표 상품인 운동화를 비롯해 의류 등 각종 스포츠 웨어 판매

> 👉🏻 **간단한 설명** <br />
>  회원 사이트와 관리자 사이트를 따로 구현했습니다. <br />
>  회원 계정에서는 회원가입, 로그인, 상품 조회/장바구니/구매/리뷰/별점/댓글 등의 쇼핑몰 서비스를 제공합니다. <br />
>  **결제는 Paypal을 활용했습니다.**
>   현재 [I am paypal](https://developer.paypal.com/) paypal 개발자 계정을 활용 => 결제 API를 연동하여 결제 프로세스를 구현했습니다. 실제 결제는 이루어지지 않습니다. 상업적 사용 X
<br />

> 👉🏻 시스템 요구 분석 <br />
> **회원(사용자)** <br /> 1. 간단한 프로필 수정, 세부적인 주문내역 확인 <br />
세부적인 주문내역에는 아이디, 결제유무, 결제일, 금액 등이 있습니다. <br />
> 2. 간편한 상품 선택, 리뷰 comment + 별등급 & 빠른 리뷰 확인 <br />
> 3. 빠른 결제 과정 & 배달 유무 확인
> <br /> <br />
> **관리자** <br /> 1. 통계화면 => 총 판매액, 총 주문 건수, 총 상품 수
> <br /> 2. 제품/주문관리 => 제품 추가/수정/삭제, 등록한 제품 확인, 주문/상세 내역 확인, 배송 완료 체크 <br /> 3. 사용자 목록 관리 => 사용자 목록 확인

> 👉🏻 시스템 기능도 <br />
![정보변경](https://github.com/minyoung0101q/mern-sports-ecommerce-website/assets/130943387/cc1634d9-89de-4508-a836-2b6bf50fbc35) <br />

## 사용 기술 스택
- **React** 
  - 가상 DOM(Virtual DOM)을 활용합니다.
리액트는 가상 DOM을 활용하여 UI 업데이트 성능을 최적화합니다. <br />가상 DOM은 메모리 상에 가상의 UI 트리를 유지하고 변경 사항을 비교하여 필요한 부분만 실제 DOM에 반영함으로써 성능을 향상시킵니다.
  - 가독성이 높아지고 유지보수가 용이합니다.
JSX 문법을 사용하여 리액트 컴포넌트를 작성할 수 있으며, 이는 HTML과 JavaScript를 결합한 형태입니다. 이를 통해 코드의 가독성이 높아지고 UI 구조를 쉽게 파악할 수 있습니다. 또한, 컴포넌트 기반 아키텍처와 단방향 데이터 흐름으로 인해 유지보수가 용이합니다.
- **JWT**
  - 토큰 기반 인증 방식으로, 클라이언트와 서버 간의 인증 정보를 토큰으로 전달합니다.
Session 과 비교했을 때, 세션은 서버 측에서 상태를 유지하기 때문에 서버 자원을 사용하고 저장소를 유지해야 합니다. 이로 인해 서버에 부하가 발생할 수 있지만, JWT는 토큰 기반으로 동작하므로 서버 측에서 상태를 유지하지 않습니다. 토큰은 클라이언트에 저장되고 필요할 때마다 서버에 전달되어 인증에 사용됩니다. 이로 인해 서버에 부하를 줄일 수 있고, 확장성과 유연성이 향상됩니다. 
- **MongoDB**
  - MongoDB는 유연한 문서 지향 데이터 모델을 제공하여 데이터 구조를 쉽게 조정하고 변경할 수 있습니다. 필드의 추가, 제거, 수정이 간편하며, 데이터 스키마의 엄격한 정의가 필요하지 않습니다. 이는 애플리케이션의 요구 사항이 변경되거나 확장해야 할 때 유용합니다.
- **MERN**
  - 모든 구성 요소가 JavaScript로 작성되어 있어 개발자들이 일관된 언어와 문법을 사용하여 애플리케이션을 개발할 수 있습니다. 이는 학습 곡선을 감소시키고 코드를 재사용하며 유지보수하기 쉽게 만들어 줍니다.
<br />

## 주요 기능
> BES 회원이 사이트에 가입해서 ecommerce 웹을 사용할 때를 초점으로 맞춰 주요 기능을 말씀드리겠습니다.

### 로그인
![로그인](https://github.com/minyoung0101q/mern-sports-ecommerce-website/assets/130943387/2af2a883-36b2-458f-b3f6-61e9f1b0b9e1) <br />
로그인을 진행합니다. <br /> <br />
![메인화면에서 프로필 확인](https://github.com/minyoung0101q/mern-sports-ecommerce-website/assets/130943387/2f96d79b-ea94-4668-82bb-781840a6ed22) <br />
메인 화면에서 프로필을 확인할 수 있습니다. <br /> <br />

![프로필 수정](https://github.com/minyoung0101q/mern-sports-ecommerce-website/assets/130943387/053f63a4-0d49-4a54-a10e-e8bfc6ff4d0f) <br />

### 프로필 수정 <br />
![홍길동 프로필 수정-이현지로 수정 모든 요소 수정](https://github.com/minyoung0101q/mern-sports-ecommerce-website/assets/130943387/08333dbc-b1d9-4f78-b10c-2bbd003f701f)
프로필의 이름, 이메일, 비밀번호 모두 수정 가능합니다.
3가지를 모두 수정했습니다.
<br />
> 지금부터 사용자, 회원이 BES 웹사이트를 사용하는 과정을 시연 영상을 통해 보여드리겠습니다. 
<br />

### 주문번호 생성과정의 시연영상 <br />
> 결제 이전까지의 과정을 담은 시연 영상 입니다. <br />
https://github.com/minyoung0101q/mern-sports-ecommerce-website/assets/130943387/8188bc5e-44f3-44e8-be12-daefefcc8884 
<br />

> 관리자 페이지에서는 이현이라는 회원이 주문하기 버튼을 눌러 생성한 주문번호 관련 정보를 확인할 수 있습니다.
https://github.com/minyoung0101q/mern-sports-ecommerce-website/assets/130943387/d5370d40-7968-47ee-92ef-b110b2c990b3
<br />
<br />
### 주문번호 생성과정의 시연영상 <br />
> 결제 이전까지의 과정을 담은 시연 영상 입니다. <br />
https://github.com/minyoung0101q/mern-sports-ecommerce-website/assets/130943387/8188bc5e-44f3-44e8-be12-daefefcc8884 
<br />

> 관리자 페이지에서는 이현이라는 회원이 주문하기 버튼을 눌러 생성한 주문번호 관련 정보를 확인할 수 있습니다.
https://github.com/minyoung0101q/mern-sports-ecommerce-website/assets/130943387/d5370d40-7968-47ee-92ef-b110b2c990b3
<br />

<br /> <hr /> <br /> <br />

### 📝 클론코딩 후기 및 React 개발자 꿈!
**클론 코딩을 통해 처음으로 개발한 풀스택 프로젝트입니다.**
+ React 개발자의 꿈을 향해  <br />
이 프로젝트는 클론 코딩을 통해 개발한 결과물입니다. 
<br />
기존의 MERN 스택 기반 e-commerce 웹사이트를 모델로 하여 구현하였습니다.
<br />
이 프로젝트를 통해 MERN 스택의 기본 개념과 구성 요소에 대한 이해를 향상시킬 수 있었습니다.
<br />
클론 코딩 과정에서 웹 애플리케이션 개발에 대한 경험을 쌓을 수 있었고, 프로젝트를 완료함으로써 MERN 스택의 각 구성 요소(몽고DB, 익스프레스, 리액트, 노드)에 대한 기본적인 이해를 얻을 수 있었습니다. 
<br /> 그러나, 더 많은 공부와 학습이 필요하다는 것을 깨달았습니다.
프로젝트의 코드를 꾸준히 복습할 계획입니다. <br /> <br />
앞으로는 리액트 개발자로 성장하고자 하며, 리액트에 대한 깊은 이해와 기술을 습득하기 위해 지속적인 학습을 진행할 계획입니다. 리액트를 활용한 다양한 프로젝트에 참여하고, 개인적인 실력 향상을 위해 지속적으로 도전할 것입니다. 리액트 생태계의 새로운 트렌드와 기술 동향을 주시하며, 개발 커뮤니티와 지식 공유에도 참여하여 함께 성장하고 싶습니다.
<br /> 
<br />
현재 4학년 졸업작품으로 React와 Spring을 활용한 개발을 진행중입니다.
저는 리액트를 맡았고 공부하며 진행중에 있습니다.
열심히 하다보면 결과도 따라올거라고 믿습니다.
<br /> <br />
리액트의 가상 DOM(Virtual DOM) 개념과 컴포넌트 기반 아키텍처를 활용하여 웹사이트의 동적이고 반응형 UI를 구현했습니다. 사용자들에게 더 나은 사용자 경험을 제공하기 위해 리액트를 선택하게 되었습니다.<br />
 
<br /> 긴 글 읽어주셔서 감사합니다:)





