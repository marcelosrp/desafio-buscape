import React, { useState } from 'react';
import ItensSelectedIndicator from './itensSelectedIndicator';
import MenuCollapse from '../Menu/menuCollapse';

import styles from './header.module.css';
import 'hamburgers/dist/hamburgers.min.css';

import logo from '../../assets/img/logo.png';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.boxLogo}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.menu}>
          <button
            className={
              isActive
                ? 'hamburger hamburger--slider is-active'
                : 'hamburger hamburger--slider'
            }
            type="button"
            onClick={handleClick}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <ItensSelectedIndicator />
        </div>
      </header>
      {isActive && <MenuCollapse />}
    </>
  );
};

export default Header;
