import styles from "./BookCover.module.css";

export default function BookCover() {
  return (
    <div className={styles.bookContainer}>
      <div>
        <img src="/images/heroBookImage.png" alt="Author Photo" />
      </div>
    </div>
  );
}