"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../../style/header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.rightSection} ref={dropdownRef}>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={35}
          height={35}
          className={styles.avatar}
          onClick={() => setOpen(!open)}
        />
        {open && (
          <div className={styles.dropdown}>
            <div className={styles.menuItem}>Đăng xuất</div>
            <div className={styles.menuItem}>Về trang chủ</div>
          </div>
        )}
      </div>
    </div>
  );
}
