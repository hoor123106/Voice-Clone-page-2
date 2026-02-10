import Image from "next/image";
import styles from "./TestimonialCard.module.css";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export default function TestimonialCard({ quote, name, role, image }: TestimonialProps) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} className={styles.star} viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <p className={styles.quote}>{quote}</p>
      <div className={styles.author}>
        <div className={styles.avatarWrapper}>
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className={styles.avatar}
            unoptimized // External links ke liye temporarily use karein agar domain configure nahi hai
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </div>
  );
}