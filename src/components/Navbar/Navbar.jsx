import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1><Link className={styles.logo} to='/'>Logo</Link></h1>
            <ul className={styles.navMenu}>
                <li><Link className={styles.link} to='/dashboard'>Dashboard</Link></li>
                <li><Link className={styles.link} to='/settings'>Settings</Link></li>
            </ul>
        </nav>
    )
}