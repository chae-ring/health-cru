import React, { useState } from "react";
import { Mobile, PC } from "../mobilePC"; // 반응형 컴포넌트
import MenuBar from "../components/MenuBar"; // 하단 네비게이션
import NavBar from "../components/NavBar"; // PC 상단 NavBar 컴포넌트
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [exercise] = useState({ });

  const handlePlayClick = () => {
    if (exercise.url) {
      window.open(exercise.url, "_blank"); // 새 탭에서 URL 열기
    } else {
      alert("URL이 존재하지 않습니다!");
    }
  };

  return (
    <div className="home-container">
      {/* 모바일 화면 */}
      <Mobile>
        <div className="home-form-mobile">
          {/* 로고 */}
          <header className="mobile-header">
            <h1
              className="fontLogo"
              onClick={() => navigate("/home")} // 로고 누르면 홈으로 되돌아오기
              style={{ cursor: "pointer" }}
            >
              HOBBYCREW
            </h1>
          <div className="button-group">
            <button className="auth-button" onClick={() => navigate("/login")}>
              로그인
            </button>
            <button className="auth-button" onClick={() => navigate("/signup")}>
              회원가입
            </button>
          </div>
          </header>

          {/* 오늘의 운동 */}
          <section className="form-group">
            <div className="today-exercise">
              <h2>오늘의 퀴즈</h2>
              <div className="exercise-content">
                <p className="exercise-title">{exercise.title || "하이"}</p>
              </div>
            </div>
          </section>

          {/* 오늘의 크루 */}
          <section className="form-group">
            <h3>오늘의 크루</h3>
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
            <h3>오늘의 관심사</h3>
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
        <div className="home-form-pc">
          {/* 헤더 */}
          <header className="pc-header">
            <h1
              className="fontLogo"
              onClick={() => navigate("/home")} // 로고 누르면 홈으로 되돌아오기
            >
              HOBBYCREW
            </h1>
            <NavBar />
          </header>

          {/* 메인 컨텐츠 */}
          <main>
            <section className="form-group">
              <div className="today-exercise">
                <h2>오늘의 운동</h2>
                <div className="exercise-content">
                  <p className="exercise-title">
                    {exercise.title || "운동 없음"}
                  </p>
                  <button className="exercise-play" onClick={handlePlayClick}>
                    ▶
                  </button>
                </div>
              </div>
            </section>

            {/* 오늘의 크루 */}
            <section className="form-group">
              <h3>오늘의 크루</h3>
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
              <h3>오늘의 관심사</h3>
              <div className="interest-list">
                <div className="interest-card"></div>
                <div className="interest-card"></div>
                <div className="interest-card"></div>
                <div className="interest-card"></div>
              </div>
            </section>
          </main>
        </div>
      </PC>
    </div>
  );
};

export default Home;





