import { motion } from "framer-motion";
import styles from "./InfoCard.module.scss";

export default function InfoCard({
  icon,
  title,
  description,
  variant = "primary",
}) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <motion.div
        className={styles.icon}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {icon}
      </motion.div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
