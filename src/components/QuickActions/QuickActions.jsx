import styles from "./QuickActions.module.scss";
import { ActionCard } from "../ActionCard/ActionCard";

export function QuickActions({ heading = "Quick Actions", actions = [] }) {
  return (
    <section className={styles.quickActions}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.grid}>
        {actions.map((action, i) => (
          <ActionCard
            key={i}
            icon={action.icon}
            title={action.title}
            description={action.description}
            gradient={action.gradient}
          />
        ))}
      </div>
    </section>
  );
}
