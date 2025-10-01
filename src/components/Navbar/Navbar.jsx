import { useState } from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.brand}>
        <img
          src="/images/logo/mayele.webp"
          alt="Mayele logo"
          className={styles.logo}
        />
      </div>

      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="img"
          aria-hidden="true"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>

      <ul className={`${styles.navLinks} ${open ? styles.active : ""}`}>
        <li>
          <a href="#play">Play</a>
        </li>
        <li>
          <a href="#learn">Learn</a>
        </li>
        <li>
          <a href="#login" className={styles.cta}>
            Login
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
