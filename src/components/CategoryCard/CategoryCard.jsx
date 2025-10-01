import { motion } from "framer-motion";
import styles from "./CategoryCard.module.scss";

export default function CategoryCard({
  iconSrc,
  label,
  variant = "default",
  onClick,
}) {
  return (
    <motion.div
      className={`${styles.card} ${styles[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.icon}>
        <img src={iconSrc} alt={`${label} icon`} />
      </div>
      <h3 className={styles.label}>{label}</h3>
    </motion.div>
  );
}
