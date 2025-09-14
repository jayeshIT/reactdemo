import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import bird_header from "../assets/images/bird_header.png"
export const HeaderResponsive = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    }
    return (<>
        <header>
            <div className="container2">
                <div className="grid navbar-grid">
                    <a className='anchorclass'>
                        <img src={bird_header} alt="Logo"></img>
                        <div className="sitename">
                            <span>The Real</span>
                            <span>Code Bird</span>
                        </div>
                    </a>
                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                            <NavLink to="/posts">FullStack</NavLink>
                            <NavLink to="/todo">Todo</NavLink>
                            <NavLink to="/profile">Profile</NavLink>
                            <NavLink to="/apilogic">AXIOS</NavLink>
                            <NavLink to="/useref">UseRef</NavLink>
                            <NavLink to="/useid">UseId</NavLink>
                            <NavLink to="/reducer">Reducer</NavLink>
                            <NavLink to="/memo">Memo</NavLink>
                            {/* <NavLink to="/parallax">Parallax</NavLink> */}
                            <NavLink to="/Usememo">Usememo</NavLink>
                            <NavLink to="/ui/list">UI</NavLink>
                            <NavLink to="/props">Props</NavLink>
                        </ul>
                    </nav>
                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </>)
}