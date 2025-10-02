import styles from "./Dashboard.module.scss";
import { DashboardHeader } from "../DashboardHeader/DashboardHeader";
import { ProgressSection } from "../ProgressSection/ProgressSection";
import { ActionCard } from "../ActionCard/ActionCard";
import { Play, Headphones, FileText, Gamepad2, Medal } from "lucide-react";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <DashboardHeader
        name="Maria K."
        greeting="Mbote, Maria! 👋"
        subtitle="Ready to learn Lingala today?"
        points={1240}
        onBellClick={() => alert("Notifications clicked")}
        onSettingsClick={() => alert("Settings clicked")}
      />

      <section className={styles.progressSection}>
        <ProgressSection />
      </section>

      <section className={styles.actionsSection}>
        <div className={styles.actionsGrid}>
          <ActionCard
            title="Daily Lesson"
            description="Continue your learning"
            icon={<Play />}
            tone="indigo"
          />
          <ActionCard
            title="Listen & Repeat"
            description="Practice pronunciation"
            icon={<Headphones />}
            tone="teal"
          />
          <ActionCard
            title="Vocabulary"
            description="Review new words"
            icon={<FileText />}
            tone="orange"
          />
          <ActionCard
            title="Fun Games"
            description="Learn through play"
            icon={<Gamepad2 />}
            tone="rose"
          />
          <ActionCard
            title="Achievements"
            description="View your progress"
            icon={<Medal />}
            tone="amber"
          />
        </div>
      </section>
    </div>
  );
}
