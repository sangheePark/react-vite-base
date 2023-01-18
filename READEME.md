1. vite

   - 설정 번역

     - https://vitejs-kr.github.io/config/shared-options.html

   - plugin

     - vite-plugin-html: \*.html 에서 환경 변수를 사용할때 사용.
       - https://velog.io/@oimne/index.html%EC%97%90%EC%84%9C-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-Vite-%ED%99%98%EA%B2%BD
     - rollup-plugin-visualizer: 모듈 레포트
       - https://velog.io/@aiden-goo/lodash-%EB%B2%88%EB%93%A4%EC%82%AC%EC%9D%B4%EC%A6%88-%EA%B2%BD%EB%9F%89%ED%99%94-%EA%B7%B8%EB%A6%AC%EA%B3%A0-rollup-plugin-visualizer

2. react

   - 변경점

     - https://medium.com/naver-place-dev/react-18%EC%9D%84-%EC%A4%80%EB%B9%84%ED%95%98%EC%84%B8%EC%9A%94-8603c36ddb25

   - react-router

     - layout 구성
       - https://velog.io/@chldmswnl/React-router-Outlet-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0

   - component

     - atomic pattern
       - 참고: https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/
     - compound
       - 참고: https://kentcdodds.com/blog/compound-components-with-react-hooks

3. 상태 관리

   - zustand

     - 공식: https://github.com/pmndrs/zustand
     - 번역: https://itchallenger.tistory.com/606

   - react Query(별도 요구사항이 필요시..)

4. lib

   - rx.js

     - collection 및 observe 코딩
     - 공식: https://rxjs.dev/guide/overview

   - vconsole

     - 부라우져 디버깅이 힘들경우 사용.(디버깅 제공)
     - 공식: https://github.com/Tencent/vConsole
     - 예제: http://wechatfe.github.io/vconsole/demo.html

   - postcss

     - css 전처리기 (prefix, 공용 변수)
     - 공식: https://github.com/postcss/postcss#options
     - 소개: https://medium.com/jung-han/postcss-%ED%86%A0%EC%8A%A4%ED%8A%B8%ED%8C%8C%EC%9D%BC-%EC%A0%81%EC%9A%A9%EA%B8%B0-86cd33ba6aa9
     - plugin: https://github.com/postcss/postcss/blob/main/docs/plugins.md
     - package.json 에 browserslist 설정해야함.
       - 공식: https://www.npmjs.com/package/browserslist
       - 예제: https://byul91oh.tistory.com/450

   - classnames

     - class 유틸 함수
     - 공식: https://www.npmjs.com/package/classnames

5. 프로젝트

   - husky: git-hook을 이용한 코딩스타일, 테스트코드, 커밋 규격 정책

     - 공식: https://typicode.github.io/husky/#/?id=automatic-recommended
     - 예제:
       - https://cresumerjang.github.io/2022/05/03/eslint-prettier-3/
       - https://naamukim.tistory.com/18
       - https://library.gabia.com/contents/8492/
