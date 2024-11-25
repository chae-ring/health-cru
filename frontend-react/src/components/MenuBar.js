import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdHome, MdOutlineSpaceDashboard, MdOutlineChatBubbleOutline } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./MenuBar.css";

const MenuBar = () => {
    const [activeMenu, setActiveMenu] = useState("/"); // 현재 활성화된 메뉴 상태
    const navigate = useNavigate();

    const handleMenuClick = (path, menu) => {
        navigate(path); // 지정된 경로로 이동
        setActiveMenu(menu); // 클릭된 메뉴를 활성화 상태로 설정
    };

    return (
        <div className="Menubar">
            <div className="backgroundMenu">
                <div
                    className={`menu-item ${activeMenu === "home" ? "active" : ""}`}
                    onClick={() => handleMenuClick("/Home", "home")}
                >
                    <MdHome className={`icon ${activeMenu === "home" ? "active" : ""}`} />
                    <span className="menu-text">홈</span>
                </div>
                <div
                    className={`menu-item ${activeMenu === "forum" ? "active" : ""}`}
                    onClick={() => handleMenuClick("/Forum", "forum")}
                >
                    <MdOutlineSpaceDashboard className={`icon ${activeMenu === "forum" ? "active" : ""}`} />
                    <span className="menu-text">게시판</span>
                </div>
                <div
                    className={`menu-item ${activeMenu === "chat" ? "active" : ""}`}
                    onClick={() => handleMenuClick("/chat", "chat")}
                >
                    <MdOutlineChatBubbleOutline className={`icon ${activeMenu === "chat" ? "active" : ""}`} />
                    <span className="menu-text">채팅</span>
                </div>
                <div
                    className={`menu-item ${activeMenu === "info" ? "active" : ""}`}
                    onClick={() => handleMenuClick("/info", "info")}
                >
                    <IoMdInformationCircleOutline className={`icon ${activeMenu === "info" ? "active" : ""}`} />
                    <span className="menu-text">내 정보</span>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;

