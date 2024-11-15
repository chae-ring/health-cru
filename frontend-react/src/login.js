// Login.js
import React, { useState } from 'react';
import { Mobile, PC } from './mobilePC';  // 반응형 컴포넌트 import
import './login.css';  // 로그인 페이지에 대한 스타일

function Login() {
  const [username, setUsername] = useState('');  // 아이디 상태
  const [password, setPassword] = useState('');  // 비밀번호 상태
  const [error, setError] = useState('');  // 에러 메시지 상태

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    console.log('아이디:', username);
    console.log('비밀번호:', password);
    setError('');
    alert('로그인 성공!');
  };

  return (
    <div className="login-container">
      {/* 모바일 화면용 로그인 폼 */}
      <Mobile>
        <div className="login-form-mobile">
          <h2>모바일 로그인</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">아이디</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="아이디를 입력하세요"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="login-button">로그인</button>
          </form>
        </div>
      </Mobile>

      {/* PC 화면용 로그인 폼 */}
      <PC>
        <div className="login-form-pc">
          <h2>PC 로그인</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">아이디</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="아이디를 입력하세요"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="login-button">로그인</button>
          </form>
        </div>
      </PC>
    </div>
  );
}

export default Login;
