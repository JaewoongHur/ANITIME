
# AniTime (유기동물 비대면 입양 플랫폼)
<br>
<br>


<!-- 필수 항목 -->
## 카테고리

| Application | Domain | Language | Framework |
| ---- | ---- | ---- | ---- |
| :white_check_mark: Desktop Web | :black_square_button: AI | :white_check_mark: JavaScript | :black_square_button: Vue.js |
| :black_square_button: Mobile Web | :black_square_button: Big Data | :black_square_button: TypeScript | :white_check_mark: React |
| :white_check_mark: Responsive Web | :black_square_button: Blockchain | :black_square_button: C/C++ | :black_square_button: Angular |
| :black_square_button: Android App | :black_square_button: IoT | :black_square_button: C# | :black_square_button: Node.js |
| :black_square_button: iOS App | :black_square_button: AR/VR/Metaverse | :black_square_button: Python | :black_square_button: Flask/Django |
| :black_square_button: Desktop App | :black_square_button: Game | :white_check_mark: Java | :white_check_mark: Spring/Springboot |
| | | :black_square_button: Kotlin | |

<!-- 필수 항목 -->
<br>

# 목차
  * [프로젝트 소개](#프로젝트-소개)
  * [팀 소개](#팀-소개)
- [프로젝트 상세 설명](#프로젝트-상세-설명)
  * [기능 설명](#기능-설명)
    + [보호소 동물 입양 상담 서비스](#보호소-동물-입양-상담-서비스)
    + [실종 동물 찾아주기 서비스](#실종-동물-찾아주기-서비스)
    + [후원 게시판 서비스](#후원-게시판-서비스)
  * [기술 스택](#기술-스택)
  * [프로젝트 설계](#프로젝트-설계)
    + [아키텍쳐](#아키텍쳐)
    + [ERD](#erd)

<br>

## 프로젝트 소개

* 프로젝트명: 애니타임
* 서비스 특징: 비대면 유기동물 입양 플랫폼
* 주요 기능
  - 회원 관리(Kakao SNS인증)
  - 화상 미팅룸(Openvidu)
  - 1 대 1 채팅
  - 추천 시스템
  - 실시간 데이터 동기화(스케쥴러를 사용한 데이터 크롤링)
  - 후원 기능(Toss 결제 API)
  - 지도를 통해 입력받는 위치정보(Kakao Map API)
  - 지도 시각화로 통계 제공
* 주요 기술
  - WebRTC
  - WebSocket
  - RabbitMQ
  - JWT Authentication
  - REST API
  - JPA
  - OpenAPI
  - Schedule
* 참조 리소스
  * Mui : 버튼 및 모달 등 컴포넌트 사용
  * Openvidu : Openvidu 서버 사용
  * Kakao API : SNS 로그인 및 지도 API 사용
* 배포 환경
  - URL: https://i9a208.p.ssafy.io/
  - 테스트 계정: 일반회원: guest2@test.com/1234, 보호소회원: shelter2@test.com/1234

<!-- 자유 양식 -->

<br>

## 팀 소개
* 권지훈: 팀장, CI/CD, HTTPS, Docker, Nginx 구성, 백엔드 개발, 프론트엔드 개발
* 김민태: 백엔드 개발 리더, 프론트엔드 개발
* 김정현: 프론트엔드 개발, 백엔드 개발
* 임성원: 프론트앤드 개발, 백엔드 개발
* 장명주: 백엔드 개발, 프론트엔드 개발
* 허재웅: 프론트엔드 개발

<!-- 자유 양식 -->

<br>

# 프로젝트 상세 설명

<!-- 개발 환경, 기술 스택, 시스템 구성도, ERD, 기능 상세 설명 등 -->

<br>

## 기능 설명

### 보호소 동물 입양 상담 서비스
저희 서비스에 가입한 보호소 회원이 보호중인 동물들을 조회할 수 있습니다

![입양목록](/images/입양목록.gif){: width="700px"}

원하시는 동물의 상세 정보를 확인할 수 있습니다

<br>

![입양동물상세](/images/입양동물상세.gif){: width="700px"}

입양을 위한 화상 상담을 신청할 수 있습니다

<br>

![미팅신청](/images/미팅신청.gif){: width="700px"}

화상 상담을 통해 입양 희망자는 입양할 동물이 어떤 아이인지 확인할 수 있고 보호소는 입양 희망자의 환경을 확인 할 수 있습니다

<br>

![미팅화면](/images/미팅화면.gif){: width="700px"}

<br>
<hr>

### 실종 동물 찾아주기 서비스
잃어버린 동물의 프로필을 작성하면 유사한 보호 동물을 찾아줍니다

![실종동물프로필등록](/images/실종동물프로필등록.gif){: width="700px"}

<br>
<hr>

### 후원 게시판 서비스
보호소에서 올린 후원 공고에 후원할 수 있습니다

![후원하기](/images/후원하기.gif){: width="700px"}

<br>

## 기술 스택
### 협업 및 형상 관리
![Git](https://img.shields.io/badge/Git-gray?logo=Git)
![GitLab](https://img.shields.io/badge/GitLab-gray?logo=GitLab)
![Notion](https://img.shields.io/badge/Notion-gray?logo=Notion)
![Jira](https://img.shields.io/badge/Jira-gray?logo=Jira&logoColor=blue)
![Mattermost](https://img.shields.io/badge/Mattermost-gray?logo=Mattermost)

### 사용툴
![IntelliJ](https://img.shields.io/badge/IntelliJ-gray?logo=IntelliJ-IDEA)
![vscode](https://img.shields.io/badge/VScode-gray?logo=Visual-Studio-Code&logoColor=0066b8)
![sourcetree](https://img.shields.io/badge/Sourcetree-gray?logo=sourcetree&logoColor=0052cc)

### 인프라
![AWS_EC2](https://img.shields.io/badge/AWS_EC2-gray?logo=AmazonAWS)
![Ubuntu](https://img.shields.io/badge/Ubuntu-20.04.6-green?logo=Ubuntu)
![Nginx](https://img.shields.io/badge/Nginx-1.18.0-009639?logo=Nginx&logoColor=009639)
![Jenkins](https://img.shields.io/badge/Jenkins-2.401.3-c93632?logo=Jenkins)
![Docker](https://img.shields.io/badge/Docker-24.0.5-2497ed?logo=Docker)
![Rabbitmq](https://img.shields.io/badge/Rabbitmq-24.0.5-ff6600?logo=rabbitmq)
![OpenVidu-browser](https://img.shields.io/badge/OpenVidu--browser-2.28.0-06d362?logo=WebRTC)

### 백엔드
![Openjdk](https://img.shields.io/badge/Openjdk-11.0.15.9-e66f01?logo=Openjdk&logoColor=black)
![Gradle](https://img.shields.io/badge/Gradle-8.1.1-02303a?logo=Gradle&logoColor=02303a)
![SpringBoot](https://img.shields.io/badge/SpringBoot-2.7.13-6db23f?logo=SpringBoot)
![JPA](https://img.shields.io/badge/JPA-2.7.13-6db23f?logo=JPA)
![MariaDB](https://img.shields.io/badge/MariaDB-10.3.23-003545?logo=MariaDB&logoColor=003545)
![JWT](https://img.shields.io/badge/JWT-0.11.5-000000?logo=json-web-token)
![Swagger2](https://img.shields.io/badge/Swagger2-3.0.0-85ea2d?logo=Swagger)

### 프론트엔드
![Node.js](https://img.shields.io/badge/Node.js-18.16.1-green?logo=Node.js)
![React](https://img.shields.io/badge/React-18.2.0-00d8ff?logo=React)
![Redux](https://img.shields.io/badge/Redux-4.2.1-764abd?logo=Redux&logoColor=764abd)
![Mui-material](https://img.shields.io/badge/Mui--material-5.14.2-green?logo=Mui)
![Styled-Components](https://img.shields.io/badge/Styled--Components-6.0.5-e48981?logo=Styled-Components)
![SockJS](https://img.shields.io/badge/SockJS-1.6.1-black?logo=SockJS)
![Webstomp-client](https://img.shields.io/badge/Webstomp--client-1.2.6-black?logo=Webstomp)
![OpenVidu-browser](https://img.shields.io/badge/OpenVidu--browser-2.28.0-06d362?logo=WebRTC)

<br>
<br>

## 프로젝트 설계
### 아키텍쳐
![architecture](/images/architecture.png){: width="700px"}

<hr>

### ERD

![ERD](/images/ERD.png){: width="700px"}
