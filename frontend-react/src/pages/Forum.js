import React, { useState } from 'react'; // useState 훅 임포트
import { Mobile, PC } from '../mobilePC'; // 반응형 컴포넌트
import MenuBar from '../components/MenuBar'; // 하단 네비게이션
import NavBar from '../components/NavBar'; // PC 상단 NavBar 컴포넌트
import './Forum.css';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";

const Forum = () => {
  const navigate = useNavigate();
  
  // 검색어 상태 추가
  const [searchQuery, setSearchQuery] = useState('');

  const crewList = [1, 2, 3, 4, 5, 6, 7, 8]; // 추천 크루 카드 리스트
  const popularList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // 인기 크루 카드 리스트

  // 검색어 입력 처리 함수
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // 검색 버튼 클릭 시 처리 함수
  const handleSearch = () => {
    console.log("검색어:", searchQuery);
    // 검색 기능을 이곳에서 처리하거나 다른 페이지로 이동할 수 있습니다.
    // 예: navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className="forum-container">
      {/* 모바일 화면 */}
      <Mobile>
        <div className="forum-form-mobile">
          {/* 헤더 */}
          <header className="mobile-header">
            <h1
              className="fontLogo"
              onClick={() => navigate('/home')} // 로고 누르면 홈으로 되돌아 오기
            >
              HOBBYCREW
            </h1>
            <button className="post-button">
              <MdNavigateNext className="post-icon"/>
              <span className="post-text">모집글 등록</span>
            </button>
          </header>

          {/* 검색 */}
          <section className="form-group">
            <div className="search-bar">
              <button className="search-button" onClick={handleSearch}>
                <IoIosSearch className="search-icon" />
              </button>
              <input
                type="text"
                className="search-input"
                placeholder="검색"
                value={searchQuery}
                onChange={handleSearchInputChange} // 입력값 업데이트
              />
            </div>
          </section>

          {/* 추천 크루 */}
          <section className="form-group">
            <h2>
              <span className="highlight-text">홍길동</span>님께 추천하는 크루
            </h2>
            <div className="crew-list">
              {crewList.map((_, index) => (
                <div key={index} className="crew-card"></div>
              ))}
            </div>
          </section>

          {/* 현재 인기 크루 */}
          <section className="form-group">
            <h2>현재 인기 크루</h2>
            <div className="popular-list">
              {popularList.map((_, index) => (
                <div key={index} className="popular-card">
                </div>
              ))}
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
      <div className="forum-form-pc">
          {/* 헤더 */}
          <header className="pc-header">
            <h1
              className="fontLogo"
              onClick={() => navigate('/home')} // 로고 누르면 홈으로 되돌아 오기
            >
              HOBBYCREW
            </h1>
            <NavBar />
          </header>

          {/* 검색 */}
          <section className="form-group">
            <div className="search-bar">
              <button className="search-button" onClick={handleSearch}>
                <IoIosSearch className="search-icon" />
              </button>
              <input
                type="text"
                className="search-input"
                placeholder="검색"
                value={searchQuery}
                onChange={handleSearchInputChange} // 입력값 업데이트
              />
            </div>
          </section>

          {/* 추천 크루 */}
          <section className="form-group">
            <h2>
              <span className="highlight-text">홍길동</span>님께 추천하는 크루
            </h2>
            <div className="crew-list">
              {crewList.map((_, index) => (
                <div key={index} className="crew-card"></div>
              ))}
            </div>
          </section>

          {/* 현재 인기 크루 */}
          <section className="form-group">
            <h2>현재 인기 크루</h2>
            <div className="popular-list">
              {popularList.map((_, index) => (
                <div key={index} className="popular-card">
                </div>
              ))}
            </div>
          </section>
        </div>
      </PC>
    </div>
  );
};

export default Forum;




