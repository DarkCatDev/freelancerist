import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import styles from "./Footer.module.css";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

interface FooterProps {
  siteName?: string;
  tagline?: string;
  columns?: FooterColumn[];
  showSocials?: boolean;
  copyrightName?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    heading: "Studio/Company",
    links: [
      { label: "About", href: "#" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Virtual Assistance", href: "#" },
      { label: "Web Development", href: "#" },
      { label: "3D Asset Creation", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer({
  siteName = "Freelancerist Studio",
  tagline = "We've got your hassle covered.",
  columns = defaultColumns,
  showSocials = true,
  copyrightName = "The Arpie Project",
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.siteName}>{siteName}</span>
            <p className={styles.tagline}>{tagline}</p>
            {showSocials && (
              <div className={styles.socials}>
                <a href="#" aria-label="Facebook"><FiFacebook /></a>
                <a href="#" aria-label="Instagram"><FiInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
              </div>
            )}
          </div>

          <div className={styles.columns}>
            {columns.map((col) => (
              <div key={col.heading} className={styles.column}>
                <h4 className={styles.columnHeading}>{col.heading}</h4>
                <ul className={styles.columnLinks}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.columnLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} {copyrightName}. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
