import styles from "./BookCover.module.css";

export default function BookCover() {
  return (
    <div className={styles.bookContainer}>
      <img
        src="/images/heroBookImage.png"
        alt="Voice Control Book Cover"
        loading="eager"
      />
    </div>
  );
}