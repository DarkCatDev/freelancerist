import ImagePlaceholder from "../base/ImagePlaceholder";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  layout?: "split" | "centered" | "fullwidth";
}

export default function HeroSection({
  eyebrow = "Welcome to our platform",
  headline = "We've got your hassle covered.",
  subheadline = "From Virtual Assistance to Web Development, we lift the weight off your shoulders.",
  primaryCta = { label: "Get Started", href: "#" },
  secondaryCta = { label: "Learn More", href: "#" },
  imageSrc,
  imageAlt = "Hero image showcasing the product or service",
  layout = "split",
}: HeroSectionProps) {
  if (layout === "centered") {
    return (
      <section className={`${styles.hero} ${styles.centered}`}>
        <div className={styles.container}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h1 className={styles.headlineCentered}>{headline}</h1>
          <p className={styles.subCentered}>{subheadline}</p>
          <div className={styles.actions}>
            <a href={primaryCta.href} className={styles.primaryBtn}>{primaryCta.label}</a>
            {secondaryCta && (
              <a href={secondaryCta.href} className={styles.secondaryBtn}>{secondaryCta.label}</a>
            )}
          </div>
          <div className={styles.heroImageWrap}>
            <ImagePlaceholder src={imageSrc} alt={imageAlt} aspectRatio="16/9" rounded label="Hero image (e.g. product screenshot, illustration)" />
          </div>
        </div>
      </section>
    );
  }

  if (layout === "fullwidth") {
    return (
      <section className={`${styles.hero} ${styles.fullwidth}`}>
        <ImagePlaceholder src={imageSrc} alt={imageAlt} aspectRatio="21/9" label="Full-width background hero image" />
        <div className={styles.overlay}>
          <div className={styles.container}>
            {eyebrow && <span className={styles.eyebrowLight}>{eyebrow}</span>}
            <h1 className={styles.headlineLight}>{headline}</h1>
            <p className={styles.subLight}>{subheadline}</p>
            <div className={styles.actions}>
              <a href={primaryCta.href} className={styles.primaryBtnLight}>{primaryCta.label}</a>
              {secondaryCta && (
                <a href={secondaryCta.href} className={styles.secondaryBtnLight}>{secondaryCta.label}</a>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default: split layout
  return (
    <section className={`${styles.hero} ${styles.split}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.sub}>{subheadline}</p>
          <div className={styles.actions}>
            <a href={primaryCta.href} className={styles.primaryBtn}>{primaryCta.label}</a>
            {secondaryCta && (
              <a href={secondaryCta.href} className={styles.secondaryBtn}>{secondaryCta.label}</a>
            )}
          </div>
        </div>
        <div className={styles.media}>
          <ImagePlaceholder src={imageSrc} alt={imageAlt} aspectRatio="4/3" rounded label="Hero image (e.g. product screenshot, team photo, illustration)" />
        </div>
      </div>
    </section>
  );
}
