import styles from "./DashboardLayout.module.scss";
import Navbar from "../Navbar/Navbar"; // optional top bar
import Avatar from "../Avatar/Avatar";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src="/images/logo.svg" alt="Mayele Logo" />
        </div>
        <nav className={styles.nav}>
          <a href="/dashboard">Dashboard</a>
          <a href="/games">Games</a>
          <a href="/progress">Progress</a>
          <a href="/settings">Settings</a>
        </nav>
        <div className={styles.profile}>
          <Avatar name="John Doe" size="sm" />
          <span>John Doe</span>
        </div>
      </aside>

      <main className={styles.content}>
        {/* optional top bar */}
        <Navbar />
        <div className={styles.pageContent}>{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
