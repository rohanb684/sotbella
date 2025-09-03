import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Menubar from "../menubar/Menubar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className={styles.container}>
      <div
        className={
          isOpen ? `${styles.wrapper} ${styles.oWrapper}` : `${styles.wrapper}`
        }
      >
        <div className={styles.left}>
          <div
            className={`${styles.hamWrapper} ${isOpen ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <span className={`${styles.hamLine} ${styles.topHam}`}></span>
            <span className={`${styles.hamLine} ${styles.botHam}`}></span>
          </div>

          <p className={styles.link}>NEW IN</p>
          <p className={styles.link}>All Collection</p>
          <p className={styles.link}>Best Seller</p>
        </div>
        <div className={styles.right}>
          <div className={styles.icon}>
            <CiSearch />
          </div>
          <div className={styles.icon}>
            <CiUser />
          </div>
          <div className={styles.icon}>
            <CiHeart />
          </div>
          <div className={styles.icon}>
            <HiOutlineShoppingBag />
          </div>
        </div>

        <div className={styles.logoWrapper}>
          <img src="/images/logo.svg" className={styles.logo} alt="" />
        </div>
      </div>
      <Menubar />
    </nav>
  );
};

export default Navbar;
