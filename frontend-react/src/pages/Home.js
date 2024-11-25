import React from 'react';
import { Mobile, PC } from '../mobilePC'; // 반응형 컴포넌트
import MenuBar from '../components/MenuBar'; // 하단 네비게이션
import './Home.css';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* 모바일 화면 */}
      <Mobile>
        <div className="home-form-mobile">
          {/* 로고 */}
          <header>
          <h1 className="fontLogo"
          onClick={() => navigate('/Home')} // 로고 누르면 홈으로 되돌아 오기
          style={{ cursor: 'pointer' }}
          >HOBBYCREW</h1>
          </header>

          {/* 오늘의 운동 */}
          <section className="form-group">
            <div className="today-exercise">
              <h2>오늘의 운동</h2>
              <div className="exercise-content">
                <p className="exercise-title">맥켄지 운동</p>
                <button className="exercise-play">▶</button>
              </div>
            </div>
          </section>

          {/* 오늘의 크루 */}
          <section className="form-group">
            <h2>오늘의 크루</h2>
            <div className="crew-list">
              <div className="crew-card"></div>
              <div className="crew-card"></div>
              <div className="crew-card"></div>
              <div className="crew-card"></div>
              <div className="crew-card"></div>
              <div className="crew-card"></div>
              <div className="crew-card"></div>
            </div>
          </section>

          {/* 오늘의 관심사 */}
          <section className="form-group">
            <h2>오늘의 관심사</h2>
            <div className="interest-list">
              <div className="interest-card"></div>
              <div className="interest-card"></div>
              <div className="interest-card"></div>
              <div className="interest-card"></div>
            </div>
          </section>
        </div>

        {/* 하단 네비게이션 */}
        <footer className="menu-bar-footer">
          <MenuBar />
        </footer>
      </Mobile>

      {/* PC 화면 */}
      <PC>
        <div className="forgot-form-pc">
          {/* 로고 */}
          <header>
          <h1 className="fontLogo"
          onClick={() => navigate('/Home')} // 로고 누르면 홈으로 되돌아 오기
          style={{ cursor: 'pointer' }}
          >HOBBYCREW</h1>
          </header>
        </div>
      </PC>
    </div>
  );
};

export default Home;


