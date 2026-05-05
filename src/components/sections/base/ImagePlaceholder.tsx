import { FiImage } from "react-icons/fi";
import styles from "./ImagePlaceholder.module.css";

import Img from '../../../assets/Me.png'

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  aspectRatio?: "1/1" | "4/3" | "16/9" | "3/2" | "9/16" | "21/9";
  label?: string;
  rounded?: boolean;
  className?: string;
}

export default function ImagePlaceholder({
  src = Img,
  alt = "Image description here",
  aspectRatio = "16/9",
  label = "Replace with your image",
  rounded = false,
  className = "",
}: ImagePlaceholderProps) {
  const ratioMap: Record<string, string> = {
    "1/1": "100%",
    "4/3": "75%",
    "16/9": "56.25%",
    "3/2": "66.67%",
    "9/16": "177.78%",
    "21/9": "42.86%",
  };

  const paddingTop = ratioMap[aspectRatio] ?? "56.25%";

  if (src) {
    return (
      <div
        className={[styles.wrapper, rounded ? styles.rounded : "", className].filter(Boolean).join(" ")}
        style={{ paddingTop }}
      >
        <img src={src} alt={alt} className={styles.image} />
      </div>
    );
  }

  return (
    <div
      className={[styles.wrapper, styles.placeholder, rounded ? styles.rounded : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{ paddingTop }}
    >
      <div className={styles.inner}>
        <FiImage className={styles.icon} />
        <span className={styles.label}>{label}</span>
        <span className={styles.ratio}>{aspectRatio}</span>
      </div>
    </div>
  );
}
