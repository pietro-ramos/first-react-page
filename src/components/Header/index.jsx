import { React } from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <span>pietroRamos.dev</span>
            <nav>
                <a href="#"> Home </a>
                <a href="#"> Projects </a>
                <a href="#"> About </a>
                <a href="#"> Contact </a>
            </nav>
        </header>
    );
};

export default Header;