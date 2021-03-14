import React from "react";
import styles from "./Navbar.module.css";
import Scroll from "react-scroll";



function Navbar({ sticky }) {
  const Link = Scroll.Link;
  return (
    <nav className={sticky ? styles.navbarSticky : styles.navbar}>
      <ul className={styles.navbarLink}>
        <li className={styles.navbarLinkItem}>
          <Link
            to="home"
            activeClass={styles.active}
            spy={true}
            smooth={true}
          >
            HOME
          </Link>
        </li>
        <li className={styles.navbarLinkItem} >
        <Link
            to="about"
            activeClass={styles.active}
            spy={true}
            smooth={true}
          >
            ABOUT
          </Link>
        </li>
        <li className={styles.navbarLinkItem} >
        <Link
            to="experience"
            activeClass={styles.active}
            spy={true}
            smooth={true}
          >
            EXPERIENCE
          </Link>
        </li>
        <li className={styles.navbarLinkItem} >
        <Link
            activeClass={styles.active}
            to="projects"
            spy={true}
            smooth={true}
          >
            PROJECTS
          </Link>
        </li>
        <li className={styles.navbarLinkItem}>
        <Link
            to="achievements"
            activeClass={styles.active}
            spy={true}
            smooth={true}
          >
            ACHIEVEMENTS
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
