import React from 'react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {


    return (
        <nav>
            <h3>bbc news</h3>
            <ul className={styles.navlinks}>
                <Link to='/services'>
                    <li className={styles.listStyles}>World</li>
                </Link>
                <Link to='/home'>
                    <li className={styles.listStyles}>Tech</li>
                </Link>
                <Link to='/about'>
                    <li className={styles.listStyles}>Bitcoin</li>
                </Link>
            </ul>
        </nav>

    )
}

export default Nav;