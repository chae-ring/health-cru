import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupForm from './SignupForm';
import CompleteSignUp from './CompleteSignUp';
import Login from './login';  // 로그인 컴포넌트
import Home from './pages/Home';  // 홈 컴포넌트
import Forum from './pages/Forum'; // 게시판 컴포넌트
import { Mobile, PC } from './mobilePC';




function App() {
  // 로그인/회원가입 화면 토글 상태 관리
  const [isLogin, setIsLogin] = useState(true);

  // 로그인/회원가입 화면을 전환하는 함수
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* Routes로 경로 설정 */}
        <Routes>
          {/* 조건부로 로그인 혹은 회원가입 화면 렌더링 */}
          <Route path="/" element={isLogin ? <Login toggleForm={toggleForm} /> : <SignupForm />} />
          {/* 홈 화면 렌더링*/}
          <Route path="/home" element={<Home />} />
          {/* 게시판 화면 렌더링 */}
          <Route path="/forum" element={<Forum />} />
          {/* 회원가입 완료 페이지 경로 추가 */}
          <Route path="/complte-signup" element={<CompleteSignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;