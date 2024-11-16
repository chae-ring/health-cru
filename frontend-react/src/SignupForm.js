import React, { useState } from 'react';
import { Mobile, PC } from './mobilePC';  // 반응형 컴포넌트 import
import './SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email_ID: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('폼 제출:', formData);
  };

  return (
    <div className="signup-container">
      {/* 모바일 화면용 회원가입 폼 */}
      <Mobile>
        <div className="signup-form signup-form-mobile">
          <h2>회원가입</h2>
          <h1><span className="fontLogo">HOBBYCREW</span> 에 오신것을 환영합니다!</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">닉네임</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email_ID}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="signup-button">회원가입</button>
          </form>
        </div>
      </Mobile>

      {/* PC 화면용 회원가입 폼 */}
      <PC>
        <div className="signup-form signup-form-pc">
          <h2>회원가입</h2>
          <h1><span className="fontLogo">HOBBYCREW</span> 에 오신것을 환영합니다!</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">닉네임</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email_ID}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="signup-button">회원가입</button>
          </form>
        </div>
      </PC>
    </div>
  );
};

export default SignupForm;

