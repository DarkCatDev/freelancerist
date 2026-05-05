import styles from "./StatsSection.module.css";

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  eyebrow?: string;
  title?: string;
  stats?: Stat[];
  variant?: "light" | "dark";
}

const defaultStats: Stat[] = [
  { value: "1", label: "Clients Served", description: "Customers using the platform" },
  { value: "98%", label: "Satisfaction rate", description: "Based on user surveys" },
  { value: "1", label: "Countries served", description: "Global reach" },
  { value: "4.9★", label: "Average rating", description: "Across all review platforms" },
];

export default function StatsSection({
  eyebrow = "By the numbers",
  title = "Results that speak for themselves",
  stats = defaultStats,
  variant = "light",
}: StatsSectionProps) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <div className={styles.container}>
        {(eyebrow || title) && (
          <div className={styles.header}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
          </div>
        )}
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
              {stat.description && <span className={styles.desc}>{stat.description}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
