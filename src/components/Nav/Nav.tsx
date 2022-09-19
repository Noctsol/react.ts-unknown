import React from 'react';
import styles from './Nav.module.css';
const Nav: React.FC<{}> = () => {
    return (
        // <div>NavBar</div>
        <nav className={styles.navbar} id="navbar">
            <div className={styles.logo_container}>
                <span>Logo</span>
            </div>
        </nav>
    )
}

export default Nav;