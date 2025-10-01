import styles from "./Button.module.scss";

export default function Button({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  backgroundColor,
  onClick,
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      style={backgroundColor ? { backgroundColor } : undefined}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
