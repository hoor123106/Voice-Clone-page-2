import styles from "./WhoIsFor.module.css";

interface FeatureCardProps {
  image: string;
  label: string;
}

export default function FeatureCard({ image, label }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={label} className={styles.cardIcon} />
      <p className={styles.cardLabel}>{label}</p>
    </div>
  );
}