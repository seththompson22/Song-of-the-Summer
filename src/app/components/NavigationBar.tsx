"use client";
import { useState } from "react";
import styles from "./NavigationBar.module.css";

export function NavigationBar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isSideNavOpen, setIsSideNavOpen] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//     setIsSideNavOpen(!isSideNavOpen);
//   };

  return (
    <div className="nav">
      <ul className={styles.navbar} id="navbar">
        <div className={styles.leftlinks}>
          <li className={styles.link}>
            <a className={styles["icontext navitem"]} href="/">
              Home Page
            </a>
          </li>
          <li className={styles.link}>
            <a className={styles["icontext navitem"]} href="/dashboard">
              Dashboard
            </a>
          </li>
        </div>
        {/* <div className={styles[`rightlinks ${showMenu ? "showmenu" : ""}`]}> */}
        <div className={styles["rightlinks showmenu"]}>
          <li className={styles.link}>
            <a className={`${styles.invertedbtn} ${styles.navitem}`} href="/">
              Sign Up
            </a>
          </li>
          <li className={styles.link}>
            <a className={`${styles.normalbtn} ${styles.navitem}`} href="/">
              Login
            </a>
          </li>
        </div>
        { /*
        <li className={styles["menubutton"]} onClick={toggleMenu}>
          <div className={styles[`hamburgericon ${isSideNavOpen ? "open" : ""}`]}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </li> */}
      </ul> 
      {/* <div className={styles[`sidenavigation ${showMenu ? "show" : ""}`]}>
        <ul className={styles["sidebarcontent"]}>
          <li>
            <a className="" href="/">
              Sign Up
            </a>
          </li>
          <li>
            <a className="" href="/">
              Login
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default NavigationBar;