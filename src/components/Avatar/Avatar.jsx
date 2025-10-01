import styles from "./Avatar.module.scss";

const Avatar = ({ src, alt = "User avatar", name = "User", size = "md" }) => {
  const getInitials = (fullName) => {
    const parts = fullName.trim().split(" ");
    if (parts.length === 1) return parts[0][0];
    return parts[0][0] + parts[parts.length - 1][0];
  };

  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <span className={styles.initials}>{getInitials(name)}</span>
      )}
    </div>
  );
};

export default Avatar;
