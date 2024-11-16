// App.js
import React, { useState } from 'react';
import SignupForm from './SignupForm';
import Login from './login';
import { Mobile, PC } from './mobilePC';

function App() {
  // 로그인/회원가입 화면 토글 상태 관리
  const [isLogin, setIsLogin] = useState(true);

  // 로그인/회원가입 화면을 전환하는 함수
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      {/* 로그인 화면 또는 회원가입 화면을 조건부로 렌더링 */}
      {isLogin ? (
        <Login toggleForm={toggleForm} />  // 로그인 컴포넌트에 toggleForm 전달
      ) : (
        <SignupForm />  // 회원가입 컴포넌트를 렌더링
      )}
    </div>
  );
}

export default App;
