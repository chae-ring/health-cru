import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css'; // 스타일 파일
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 상태 관리
  const navigate = useNavigate();

  // 드롭다운 열기
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  // 드롭다운 닫기
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // 메뉴 클릭 시 드롭다운 닫기
  };

  return (
    <nav className="nav-bar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* 메뉴 아이콘에 마우스를 올리면 드롭다운 열기 */}
      <div className="menu-icon">
        <IoMdMenu />
      </div>

      {/* 드롭다운 메뉴 */}
      {isDropdownOpen && (
        <ul
          className="dropdown-menu"
          onMouseEnter={handleMouseEnter} // 드롭다운 내부에 마우스가 들어오면 드롭다운 유지
          onMouseLeave={handleMouseLeave} // 드롭다운 내부에서 마우스가 나가면 드롭다운 닫기
        >
          <li onClick={() => handleMenuClick('/Home')}>홈</li>
          <li onClick={() => handleMenuClick('/Forum')}>게시판</li>
          <li onClick={() => handleMenuClick('/Chat')}>채팅</li>
          <li onClick={() => handleMenuClick('/Profile')}>내 정보</li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;



