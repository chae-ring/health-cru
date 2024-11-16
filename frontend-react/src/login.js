// Login.js
import React, { useState } from 'react';
import { Mobile, PC } from './mobilePC';  // 반응형 컴포넌트 import
import './login.css';  // 로그인 페이지에 대한 스타일
import kakaoLogo from './img/kakaoLogo.png';

function Login({ toggleForm }) {  // toggleForm을 props로 받기
  const [username, setUsername] = useState('');  // 아이디 상태
  const [password, setPassword] = useState('');  // 비밀번호 상태
  const [error, setError] = useState('');  // 에러 메시지 상태

  const styles = {
    container: {
      display: "flex", // 가로 정렬
      justifyContent: "center", // 버튼을 중앙에 정렬
      alignItems: "center", // 수직으로 중앙 정렬
      gap: "80px", // 버튼 사이 간격
      padding: "10px",
    },
    button: {
      padding: "1px 3px",
      backgroundColor: "white",
      color: "black",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
    },
  };

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('아이디/비밀번호를 입력해주세요.');
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
          <h1 className="fontLogo">HOBBYCREW</h1>
          <h2>당신 근처의 이웃과 함께!</h2>
          <h3>다양한 취미를 함께할 사람들을 모아보세요</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ID"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
              />
            </div>

            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="login-button">이메일로 로그인</button>

            <div>
              <img src={kakaoLogo} alt="kakao login icon" className='kakao-button'/>
            </div>

            <div style={styles.container}>
              <button style={{ ...styles.button, fontSize: "11px" }}>아이디/비밀번호 찾기</button>
              <button 
                style={{ ...styles.button, fontSize: "12px" }}
                onClick={toggleForm}  // 회원가입 화면으로 전환
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </Mobile>

      {/* PC 화면용 로그인 폼 */}
      <PC>
        <div className="login-form-pc">
          <h1 className="fontLogo">HOBBYCREW</h1>
          <h2>당신 근처의 이웃과 함께!</h2>
          <h3>다양한 취미를 함께할 사람들을 모아보세요</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ID"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="login-button">이메일로 로그인</button>

            <div>
              <img src={kakaoLogo} alt="kakao login icon" className='kakao-button'/>
            </div>

            <div style={styles.container}>
              <button style={{ ...styles.button, fontSize: "11px" }}>아이디/비밀번호 찾기</button>
              <button 
                style={{ ...styles.button, fontSize: "12px" }}
                onClick={toggleForm}  // 회원가입 화면으로 전환
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </PC>
    </div>
  );
}

export default Login;

