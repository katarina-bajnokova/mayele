import styles from "./DashboardHeader.module.scss";
import { Bell, Settings, Star } from "lucide-react";
import { motion } from "framer-motion";
import Avatar from "../Avatar/Avatar";

export function DashboardHeader({
  name = "Maria K.",
  greeting = "Mbote, Maria! 👋",
  subtitle = "Ready to learn Lingala today?",
  avatarSrc = "https://images.unsplash.com/photo-1756136836795-dafd21b9c62d?ixlib=rb-4.1.0&q=80&w=200",
  points = 1240,
  onBellClick,
  onSettingsClick,
}) {
  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        <Avatar src={avatarSrc} name={name} size="md" />
        <div className={styles.textBlock}>
          <h1>{greeting}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.points}>
          <Star className={styles.star} aria-hidden="true" />
          <span>{points.toLocaleString()} points</span>
        </div>

        <motion.button
          className={styles.iconBtn}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={onBellClick}
          aria-label="Notifications"
        >
          <Bell aria-hidden="true" />
        </motion.button>

        <motion.button
          className={styles.iconBtn}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={onSettingsClick}
          aria-label="Settings"
        >
          <Settings aria-hidden="true" />
        </motion.button>
      </div>
    </header>
  );
}
