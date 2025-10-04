import { useEffect } from "react";
import { motion } from "framer-motion";
import { MdInfo, MdCheckCircle, MdWarning, MdError } from "react-icons/md";
import styles from "./Notification.module.scss";

export default function Notification({
  type = "info",
  message,
  onClose,
  duration = 5000,
}) {
  const icons = {
    info: <MdInfo className={styles.icon} />,
    success: <MdCheckCircle className={styles.icon} />,
    warning: <MdWarning className={styles.icon} />,
    error: <MdError className={styles.icon} />,
  };

  useEffect(() => {
    if (!onClose) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <motion.div
      className={`${styles.notification} ${styles[type]}`}
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {icons[type]}
      <span className={styles.message}>{message}</span>
    </motion.div>
  );
}
