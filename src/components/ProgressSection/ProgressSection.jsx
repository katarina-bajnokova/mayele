import React from "react";
import styles from "./ProgressSection.module.scss";
import { Flame, Trophy, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";

export function ProgressSection() {
  const cards = [
    {
      title: "Daily Streak",
      icon: <Flame />,
      value: "7 days",
      desc: "Keep it up!",
      gradient: styles.orangeRed,
    },
    {
      title: "Level 3",
      icon: <Trophy />,
      value: "65% to Level 4",
      progress: 65,
      gradient: styles.greenBlue,
    },
    {
      title: "Lessons",
      icon: <BookOpen />,
      value: "24/36",
      desc: "Completed",
      gradient: styles.purplePink,
    },
    {
      title: "Weekly Goal",
      icon: <Target />,
      value: "4/5 days",
      progress: 80,
      gradient: styles.yellowOrange,
    },
  ];

  return (
    <div className={styles.progressGrid}>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={`${styles.card} ${card.gradient}`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className={styles.cardHeader}>
            {card.icon}
            <span>{card.title}</span>
          </div>
          <div className={styles.cardBody}>
            <h2>{card.value}</h2>
            {card.desc && <p>{card.desc}</p>}
            {card.progress && (
              <div className={styles.progressBar}>
                <div style={{ width: `${card.progress}%` }} />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
