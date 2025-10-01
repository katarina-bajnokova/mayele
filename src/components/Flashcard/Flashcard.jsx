import { useState } from "react";
import styles from "./Flashcard.module.scss";

const Flashcard = ({
  word,
  category = "fruits",
  size = "md",
  effect = "click",
  variant = "primary",
}) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    if (effect === "click") setFlipped(!flipped);
  };

  return (
    <div
      className={`${styles.flashcard} ${styles[size]} ${styles[variant]} ${
        styles[word]
      } ${flipped ? styles.flipped : ""}`}
      onClick={toggleFlip}
      onMouseEnter={effect === "hover" ? () => setFlipped(true) : undefined}
      onMouseLeave={effect === "hover" ? () => setFlipped(false) : undefined}
    >
      <div className={styles.inner}>
        <div className={styles.front}>{word}</div>
        <div className={styles.back}>
          <img
            src={`/images/${category}/${word}.webp`}
            alt={word}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
