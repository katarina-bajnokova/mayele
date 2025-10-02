import StatsCard from "./StatsCard";

export default {
  title: "Components/Cards/StatsCard",
  component: StatsCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **StatsCard** component is used in *Mayele* to display a learner’s overall progress.

### When to use
- On the **Dashboard/Profile Page** → as a summary of progress.
- After completing **games or lessons** → to show updated statistics.
- Optionally on the **Home Screen** → as a motivational widget under the mascot.

### Purpose
The card is **informational only** (not clickable).  
It motivates learners by showing:
- Words learned
- Daily streak
- XP points
- Current level

### When *not* to use
- As a navigation element.
- For displaying temporary in-game progress (use game-specific UI instead).

### Usage Example
\`\`\`jsx
<StatsCard
  words={{ current: 80, total: 200 }}
  streak={{ current: 10, total: 30 }}
  xp={{ current: 1200, total: 3000 }}
  level="Intermediate"
/>
\`\`\`
        `,
      },
    },
  },
};

const Template = (args) => <StatsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  words: { current: 0, total: 200 },
  streak: { current: 0, total: 30 },
  xp: { current: 0, total: 3000 },
  level: "Beginner",
};

export const Progressing = Template.bind({});
Progressing.args = {
  words: { current: 80, total: 200 },
  streak: { current: 10, total: 30 },
  xp: { current: 1200, total: 3000 },
  level: "Intermediate",
};

export const Advanced = Template.bind({});
Advanced.args = {
  words: { current: 200, total: 200 },
  streak: { current: 30, total: 30 },
  xp: { current: 3000, total: 3000 },
  level: "Advanced",
};
