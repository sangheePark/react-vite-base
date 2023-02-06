- Mock-server extension

  - 공식: https://marketplace.visualstudio.com/items?itemName=Thinker.mock-server
  - 참고: https://r35007.github.io/Mock-Server/
  - db.json: API URL 설정

        - 주 사용 필드:
            - _config?: 해당하는 값이 false 일 경우 단순 mock data로 인식, 추가적인 props을 사용 할 경우 true
            - statusCode?: Http status 코드 지정
            - headers?: headers 정보 사용시
            - delay?: API 호출 지연 시간 지정
            - fetch?: 데이터의 파일(json) 경로 또는 url
            - mock?: 단순 모의 데이터, fetch 가 설정되어 있을 경우 fetch 우선.(되도록이면 json 파일로 fetch 또는 injectors에 설정해서 사용.)
            - middlewares?: 응답 시 데이터의 가공이 필요할 때 사용되는 편의 기능들( 쿼리스트링 검색, 순차 응답, 커스텀 ...)

  - injectors.json: API 에 DATA 주입, 아스키를 통한 주입도 가능

        - 예제:
                "routes": ["/users/:id?"], // 해당하는 url에 대해서
                "override": true, //injectors 설정 데이터가 우선
                "fetch": ".mock/data/users.json" //사용하고자하는 json 데이터 경로

  - rewriters.json: URL을 리다이렉트 시켜줌.

        - 예제: "/users/:id": "/users?id=:id"
