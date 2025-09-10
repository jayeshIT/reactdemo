import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import bird_header from "../assets/images/bird_header.png"
export const Header = () => {

    return (<>
        <header className={styles.mainheader}>
            <div className={styles.precontainer} >
                <div className={styles.container}>
                    <a className={styles.anchorclass}>
                        <img src={bird_header} alt="Logo"></img>
                        <div className={styles.sitename}>
                            <span>The Real</span>
                            <span>Code Bird</span>
                        </div>
                    </a>
                    <nav className={styles.jQaQN}>
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
                </div>
            </div>
        </header>
    </>)
}