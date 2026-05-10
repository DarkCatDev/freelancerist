import styles from "./CardGrid.module.css";

interface LinkButton {
  label: string;
  href: string;
}

interface PortfolioCard {
  title: string;
  icon: string;
  links: LinkButton[];
}

interface CardGridProps {
  items?: PortfolioCard[];
  columns?: 2 | 3 | 4;
}

const defaultItems: PortfolioCard[] = [
  {
    title: "Website Samples",
    icon: "🌐",
    links: [
      { label: "Link-Hub", href: "https://tap-link-hub.vercel.app/" },
      { label: "Miki-Prints Site", href: "https://your-link.com" },
      { label: "Chaos-Records Wiki", href: "https://chaos-record.vercel.app/" },
    ],
  },
  {
    title: "Email Drafts",
    icon: "✉️",
    links: [
      { label: "Welcome Email", href: "https://docs.google.com/document/d/12kSYJcUzi7t71hN56Y5jlRCdR3pTlGGsonkNpMMDGw8/edit?usp=sharing" },
      { label: "Follow-up Email", href: "https://docs.google.com/document/d/1Dvr5NBmoGZ6vng7jqeh8K_iYu-Pb4_8eZIYNZ5FC6TU/edit?usp=sharing" },
      { label: "Meeting Request", href: "https://docs.google.com/document/d/1_ypULlLF9aOvMGovUo92FTUvEmgcDiogLWXf0G_25zo/edit?usp=sharing" },
    ],
  },
  {
    title: "Data Entry Spreadsheets",
    icon: "🗂️",
    links: [
      { label: "Inventory Tracker", href: "https://docs.google.com/spreadsheets/d/1mEMo2wB6ifxWrWgFS8ilLFBo19EkGJCR23ZGSAbJuDQ/edit?usp=sharing" },
      { label: "Purchase Orders", href: "https://docs.google.com/spreadsheets/d/1GWLOMnxanCpTag__UeLQcBSi8ydAs8XgQ2ROHV1TX5Y/edit?usp=sharing" },
      { label: "Contact Database", href: "https://docs.google.com/spreadsheets/d/14nV2cWYo7urWC-O992aDMsKe60wqMERN_cnF3Llk8Qg/edit?usp=sharing" },
    ],
  },
  /*
  {
    title: "Research Reports",
    icon: "📑",
    links: [
      { label: "Market Analysis Report", href: "https://docs.google.com" },
      { label: "Competitor Research", href: "https://docs.google.com" },
      { label: "Industry Overview", href: "https://docs.google.com" },
    ],
  },*/
  {
    title: "Canva Designs",
    icon: "🎨",
    links: [
      { label: "Sample old package", href: "https://canva.link/lcqqfuv97tf3ixl" },
      { label: "Mobile Menu Mockup", href: "https://canva.link/lak29divjpmdw7r" },
    ],
  },
/*  {
    title: "Calendar / Schedule Management",
    icon: "📅",
    links: [
      { label: "VA sample Calendar", href: "https://calendar.google.com/calendar/u/0?cid=NjhjZWEzMDZmZDNiMzgyMzlkMzU0MWY2MjI2MDUyYTc0NTA1ODMzYTdlMWIyMzNlZjc5ODQ2OTViMWZiMzgzOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t" },
      
    ],
  },*/
  {
    title: "Project Management",
    icon: "📋",
    links: [
      { label: "Trello Kanban Board", href: "https://trello.com/invite/b/69f936363d921c57333336df/ATTI8ca2750b28953969babacf63546eadf6E1E94CA1/va-sample-kanban-board" },
      { label: "Notion Workspace Sample", href: "https://absorbed-elbow-c1f.notion.site/Freelancerist-HQ-Sample-3573b4e7a24980f8bef6ffb28c0564bf?source=copy_link" },
    ],
  },
];

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9" />
    <path d="M10 2h4v4" />
    <line x1="14" y1="2" x2="7" y2="9" />
  </svg>
);

export default function CardGrid({ items = defaultItems, columns = 3 }: CardGridProps) {
  return (
    <div className={`${styles.grid} ${styles[`cols${columns}`]}`}>
      {items.map((item, i) => (
        <article key={i} className={styles.card}>
          <div className={styles.header}>
            <span className={styles.icon}>{item.icon}</span>
            <h3 className={styles.title}>{item.title}</h3>
          </div>
          <hr className={styles.divider} />
          <div className={styles.buttons}>
            {item.links.map((link, j) => (
              <a
                key={j}
                href={link.href}
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.buttonLabel}>{link.label}</span>
                <ExternalIcon />
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}