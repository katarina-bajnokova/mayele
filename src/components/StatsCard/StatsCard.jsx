import styles from "./StatsCard.module.scss";
import { FaBullseye, FaCalendarAlt, FaBolt, FaStar } from "react-icons/fa";

const StatsCard = ({
  words = { current: 0, total: 200 },
  streak = { current: 0, total: 30 },
  xp = { current: 0, total: 3000 },
  level = "Beginner",
}) => {
  const calcPercent = (current, total) =>
    total > 0 ? (current / total) * 100 : 0;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        <FaBullseye className={styles.icon} /> Statistics
      </h3>

      <div className={styles.statRow}>
        <span className={styles.label}>
          <FaBullseye /> Words Learned
        </span>
        <span className={styles.value}>
          {words.current} / {words.total}
        </span>
      </div>
      <div className={styles.progress}>
        <div
          className={styles.bar}
          style={{
            width: `${calcPercent(words.current, words.total)}%`,
            backgroundColor: "#3b82f6", // blue
          }}
        />
      </div>

      <div className={styles.statRow}>
        <span className={styles.label}>
          <FaCalendarAlt /> Daily Streak
        </span>
        <span className={styles.value}>
          {streak.current} / {streak.total}
        </span>
      </div>
      <div className={styles.progress}>
        <div
          className={styles.bar}
          style={{
            width: `${calcPercent(streak.current, streak.total)}%`,
            backgroundColor: "#22c55e", // green
          }}
        />
      </div>

      <div className={styles.statRow}>
        <span className={styles.label}>
          <FaBolt /> XP Points
        </span>
        <span className={styles.value}>
          {xp.current.toLocaleString()} / {xp.total.toLocaleString()}
        </span>
      </div>
      <div className={styles.progress}>
        <div
          className={styles.bar}
          style={{
            width: `${calcPercent(xp.current, xp.total)}%`,
            backgroundColor: "#a855f7", // purple
          }}
        />
      </div>

      <div className={styles.levelBox}>
        <span>Current Level</span>
        <strong className={styles.level}>{level}</strong>
        <FaStar className={styles.star} />
      </div>
    </div>
  );
};

export default StatsCard;
