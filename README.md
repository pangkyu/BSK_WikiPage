# 1. 설치 & 시작

## 설치

```terminal
git clone https://github.com/pangkyu/BSK_WikiPage.git
yarn install
```

## 서버 시작

```terminal
node server.js
```

## 클라이언트 시작

```terminal
yarn start
```

# 2. 폴더 구조 및 디펜던시

```
BSK_WikiPage
├─ .git
├─ .gitignore
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ data
│  │  └─ data.json
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ server.js
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ doubleNextArrow.svg
│  │  ├─ doublePrevArrow.svg
│  │  ├─ nextArrow.svg
│  │  └─ prevArrow.svg
│  ├─ components
│  │  ├─ ContentBox.tsx
│  │  ├─ ContentNavigation.tsx
│  │  ├─ Editor.tsx
│  │  ├─ Header.tsx
│  │  └─ Pagination.tsx
│  ├─ hooks
│  │  └─ useInput.ts
│  ├─ index.css
│  ├─ index.tsx
│  ├─ interfaces
│  │  └─ lecture.ts
│  ├─ pages
│  │  ├─ Detail.tsx
│  │  ├─ Edit.tsx
│  │  ├─ Home.tsx
│  │  └─ Modify.tsx
│  └─ react-app-env.d.ts
├─ tailwind.config.js
├─ tsconfig.json
└─ yarn.lock
```

```json
  "dependencies": {
    "@types/node": "^16.7.13",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "axios": "^1.6.5",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-quill": "^2.0.0",
    "react-router-dom": "^6.21.3",
    "react-scripts": "5.0.1",
    "typescript": "^4.4.2",
  },
```

# 3. 데모

## 글 조회

![](https://velog.velcdn.com/images/pangkyu/post/2d565b03-e073-4fbf-b004-4ddfa3d46306/image.gif)

- 기본 출력 값은 5개씩 나오도록 설정했습니다.
- 아래 리스트 값에 따라 출력 개수도 변경됩니다.
- 내부 인풋 값에 숫자를 넣어도 페이징이 적용됩니다.

![](https://velog.velcdn.com/images/pangkyu/post/d7aeef0b-4311-452a-9607-6b0c74b30585/image.gif)

- 제목 클릭 시 상세 페이지로 라우팅됩니다.

## 글 등록

![](https://velog.velcdn.com/images/pangkyu/post/f853946c-3211-4505-a28b-47e222e390fe/image.gif)

- 제목과 내용을 입력하면 글이 등록됩니다.
- `useInput`훅을 사용하여 input 데이터를 관리했습니다.

## 글 수정

![](https://velog.velcdn.com/images/pangkyu/post/52b46032-8aa4-4ecd-96ae-0363e3fe61c3/image.gif)

- 제목과 내용을 수정할 수 있습니다.
- `useInput`훅을 사용하여 input 데이터를 관리했습니다.

## 글 삭제

![](https://velog.velcdn.com/images/pangkyu/post/c6424009-3fe0-4367-a4f3-b63bd9c6212e/image.gif)

- 체크 버튼을 클릭한 뒤 삭제 버튼을 누르면 삭제됩니다.

# 4. 그 외 구현

- `express`를 사용하여 mock data 서버를 만들어 API를 구현했습니다.
- 중복으로 사용되는 화면을 컴포넌트로 분리하고자 노력했습니다.
-
