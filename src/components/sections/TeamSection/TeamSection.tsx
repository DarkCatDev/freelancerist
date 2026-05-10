import { FiTwitter, FiLinkedin, FiGlobe } from "react-icons/fi";
import styles from "./TeamSection.module.css";

import { SiUpwork } from "react-icons/si";

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  imageSrc?: string;
  socials?: { twitter?: string; linkedin?: string; website?: string; upwork: string,};
}

interface TeamSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  { name: "Arjay Pielago", role: "Vite/Frontend Developer | Data Entry VA", bio: "A Computer Science graduate that has experience in frontend development and ample knowledge of project management tools, office tools, and graphic design.", socials: {linkedin: "https://www.linkedin.com/in/arpie-darkcatdev/", website: "https://tap-link-hub.vercel.app/", upwork: "https://www.upwork.com/freelancers/~015174e4250111b7d2"}},
  { name: "Ma. Kyra Valencia", role: "3D Artist", bio: "A Computer Science graduate that specialized in 3D modeling and game development. Has basic knowledge of project management and office work." },

];

export default function TeamSection({
  eyebrow = "Our team",
  title = "The people behind the work",
  subtitle = "Meet the dedicated individuals who make everything possible.",
  members = defaultMembers,
}: TeamSectionProps) {
  return (
    <section className={styles.section} id="Team">
      <div className={styles.container}>
        <div className={styles.header}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.grid}>
          {members.map((m, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.avatar}>
                {m.imageSrc ? (
                  <img src={m.imageSrc} alt={m.name} className={styles.avatarImg} />
                ) : (
                  <span className={styles.avatarInitial}>{m.name.charAt(0)}</span>
                )}
              </div>
              <h3 className={styles.memberName}>{m.name}</h3>
              <span className={styles.memberRole}>{m.role}</span>
              {m.bio && <p className={styles.memberBio}>{m.bio}</p>}
              {m.socials && (
                <div className={styles.socials}>
                  {m.socials.twitter && <a href={m.socials.twitter} aria-label="Twitter"><FiTwitter /></a>}
                  {m.socials.linkedin && <a href={m.socials.linkedin} aria-label="LinkedIn"><FiLinkedin /></a>}
                  {m.socials.website && <a href={m.socials.website} aria-label="Website"><FiGlobe /></a>}
                  {m.socials.upwork && <a href={m.socials.upwork} aria-label="Website"><SiUpwork /></a>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
