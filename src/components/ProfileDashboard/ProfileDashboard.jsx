import styles from "./ProfileDashboard.module.scss";
import Avatar from "../Avatar/Avatar";
import StatsCard from "../StatsCard/StatsCard";
import CategoryBadge from "../Badge/CategoryBadge";
import { FaTrophy, FaMedal, FaCrown } from "react-icons/fa";

const ProfileDashboard = ({ user }) => {
  return (
    <div className={styles.dashboardGrid}>
      <div className={styles.profileCard}>
        <Avatar src={user.avatar} name={user.name} size="lg" />
        <div>
          <h2 className={styles.fullName}>{user.name}</h2>
          {user.nickname && <p className={styles.nickname}>@{user.nickname}</p>}
        </div>
      </div>

      <div className={styles.statsCard}>
        <StatsCard
          words={user.stats.words}
          streak={user.stats.streak}
          xp={user.stats.xp}
          level={user.stats.level}
        />
      </div>

      <div className={styles.categoriesCard}>
        <h3>Practiced Categories</h3>
        <div className={styles.badges}>
          {user.categories.map((cat, idx) => (
            <CategoryBadge
              key={idx}
              label={cat.label}
              size="md"
              variant={cat.variant}
            />
          ))}
        </div>
      </div>

      <div className={styles.achievementsCard}>
        <h3>Achievements</h3>
        <div className={styles.achievements}>
          <div className={styles.trophy}>
            <FaTrophy className={styles.iconGold} />
            <span>10-Day Streak</span>
          </div>
          <div className={styles.trophy}>
            <FaMedal className={styles.iconSilver} />
            <span>100 Words Learned</span>
          </div>
          <div className={styles.trophy}>
            <FaCrown className={styles.iconBronze} />
            <span>Level Up to Intermediate</span>
          </div>
        </div>
      </div>

      <div className={styles.activityCard}>
        <h3>Recent Activity</h3>
        <ul className={styles.activityList}>
          <li>📖 Learned 5 new words today</li>
          <li>🔥 Maintained 10-day streak</li>
          <li>🎮 Completed “Animals” mini-game</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDashboard;
