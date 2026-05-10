import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  siteName?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Our Team", href: "#Team" },
  { label: "Contact", href: "#ContactID" },
];

export default function Navbar({
  logo,
  siteName = "TheFreelancerist",
  links = defaultLinks,
  ctaLabel = "Message Us",
  ctaHref = "#ContactID",
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.brand}>
          {logo ? (
            <img src={logo} alt={siteName} className={styles.logo} />
          ) : (
            <span className={styles.siteName}>{siteName}</span>
          )}
        </a>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          {ctaLabel && (
            <li className={styles.ctaMobile}>
              <a href={ctaHref} className={styles.ctaBtn}>
                {ctaLabel}
              </a>
            </li>
          )}
        </ul>

        <div className={styles.actions}>
          {ctaLabel && (
            <a href={ctaHref} className={styles.ctaBtn}>
              {ctaLabel}
            </a>
          )}
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
