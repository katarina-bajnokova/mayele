import styles from "./ProgressSection.module.scss";
import { Flame, Trophy, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";

/**
 * ProgressSection
 * Renders progress cards (streak, level, lessons, goals).
 *
 * @param {Array} cards - Array of card objects
 * Supports { title, icon, value, desc?, progress?, gradient? }
 */
export function ProgressSection({ cards = [] }) {
  const defaultCards = [
    {
      title: "Daily Streak",
      icon: <Flame aria-hidden="true" />,
      value: "7 days",
      desc: "Keep it up!",
      gradient: styles.orangeRed,
    },
    {
      title: "Level 3",
      icon: <Trophy aria-hidden="true" />,
      value: "65% to Level 4",
      progress: 65,
      gradient: styles.greenBlue,
    },
    {
      title: "Lessons",
      icon: <BookOpen aria-hidden="true" />,
      value: "24/36",
      desc: "Completed",
      gradient: styles.purplePink,
    },
    {
      title: "Weekly Goal",
      icon: <Target aria-hidden="true" />,
      value: "4/5 days",
      progress: 80,
      gradient: styles.yellowOrange,
    },
  ];

  const displayCards = cards.length > 0 ? cards : defaultCards;

  return (
    <div className={styles.progressGrid}>
      {displayCards.map((card, i) => {
        const titleId = `progress-card-title-${i}`;

        return (
          <motion.div
            key={i}
            className={`${styles.card} ${card.gradient || ""}`}
            role="region"
            aria-labelledby={titleId}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className={styles.cardHeader}>
              {card.icon}
              <span id={titleId}>{card.title}</span>
            </div>

            <div className={styles.cardBody}>
              <h2>{card.value}</h2>
              {card.desc && <p>{card.desc}</p>}
              {card.progress !== undefined && (
                <div
                  className={styles.progressBar}
                  role="progressbar"
                  aria-labelledby={titleId}
                  aria-valuenow={card.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div style={{ width: `${card.progress}%` }} />
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
