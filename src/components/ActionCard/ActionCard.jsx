import React from "react";
import { motion } from "framer-motion";
import styles from "./ActionCard.module.scss";

const cx = (...parts) => parts.filter(Boolean).join(" ");
const hoverTransition = { type: "spring", stiffness: 300, damping: 22 };

function ActionCard({
  title,
  description,
  icon,
  tone = "indigo",
  align = "center",
  href,
  disabled = false,
  showIcon = true,
  className,
  onClick,
  ...rest
}) {
  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      type={href ? undefined : "button"}
      href={href}
      onClick={disabled ? undefined : onClick}
      className={cx(
        styles.card,
        styles[`align-${align}`],
        styles[`tone-${tone}`],
        disabled && styles.disabled,
        className
      )}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={hoverTransition}
      aria-disabled={disabled || undefined}
      disabled={href ? undefined : disabled}
      {...rest}
    >
      {showIcon && (
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
      )}

      <div className={styles.text}>
        <h4 className={styles.title}>{title}</h4>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </Comp>
  );
}

ActionCard.displayName = "ActionCard";

export { ActionCard };
export default ActionCard;
