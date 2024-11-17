// payload 는 jwt에서 사용자가 원하는 정보를 넣는 부분으로 타입을 정의하는 코드

export type Payload = {
    email: string;
    sub: string;
  };