import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import bird_header from "../assets/images/bird_header.png"
export const Header = () => {

    return (<>
        <header className={styles.lcZLeN}>
            <div className={styles.krpsTW} >
                <div className={styles.container}>
                    <a className={styles.eEfckR}>
                        <img src={bird_header} alt="Logo"></img>

                        <div className={styles.sitename}>
                            <span>Technical</span>
                            <span>Bird</span>
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
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </>)
}