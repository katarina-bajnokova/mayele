import styles from "./CategoryBadge.module.scss";

export default function CategoryBadge({
  label,
  size = "md",
  variant = "primary",
}) {
  return (
    <span className={`${styles.badge} ${styles[size]} ${styles[variant]}`}>
      {label}
    </span>
  );
}
