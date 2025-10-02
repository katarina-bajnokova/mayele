import styles from "./QuickActions.module.scss";
import { motion } from "framer-motion";
import {
  Play,
  Headphones,
  FileText,
  Gamepad2,
  Users,
  Award,
} from "lucide-react";

const actions = [
  {
    icon: Play,
    title: "Daily Lesson",
    description: "Continue your learning",
    gradient: styles.bluePurple,
  },
  {
    icon: Headphones,
    title: "Listen & Repeat",
    description: "Practice pronunciation",
    gradient: styles.greenTeal,
  },
  {
    icon: FileText,
    title: "Vocabulary",
    description: "Review new words",
    gradient: styles.orangeRed,
  },
  {
    icon: Gamepad2,
    title: "Fun Games",
    description: "Learn through play",
    gradient: styles.pinkRose,
  },
  {
    icon: Users,
    title: "Study Group",
    description: "Learn with friends",
    gradient: styles.indigoBlue,
  },
  {
    icon: Award,
    title: "Achievements",
    description: "View your progress",
    gradient: styles.yellowOrange,
  },
];

export function QuickActions() {
  return (
    <section className={styles.quickActions}>
      <h2 className={styles.heading}>Quick Actions</h2>
      <div className={styles.grid}>
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.div
              key={i}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className={`${styles.iconWrapper} ${action.gradient}`}>
                <Icon className={styles.icon} aria-hidden="true" />
              </div>
              <h3 className={styles.title}>{action.title}</h3>
              <p className={styles.description}>{action.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
