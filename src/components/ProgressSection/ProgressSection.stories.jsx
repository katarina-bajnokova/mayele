import { ProgressSection } from "./ProgressSection";
import { Flame, Trophy, BookOpen, Target } from "lucide-react";
import styles from "./ProgressSection.module.scss";

export default {
  title: "Components/Layout/ProgressSection",
  component: ProgressSection,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **ProgressSection** is part of the Profile page and is always used together with the **DashboardHeader**.  

It provides a quick overview of the learner’s journey by showing four key progress indicators:
- 🔥 **Daily Streak** – how many consecutive days the learner has been active.  
- 🏆 **Level Progress** – the learner’s current level and progress toward the next one.  
- 📖 **Lessons Completed** – how many lessons have been finished.  
- 🎯 **Weekly Goal** – how many days of the weekly target have been achieved.  

Each card has a unique gradient and icon, inspired by Congolese color aesthetics, making progress both **motivating and visually engaging**.  
        `,
      },
    },
  },
  argTypes: {
    streakValue: {
      control: "text",
      description: "Value shown in Daily Streak card",
      defaultValue: "7 days",
    },
    levelProgress: {
      control: { type: "number", min: 0, max: 100 },
      description: "Progress percentage for Level card",
      defaultValue: 65,
    },
    lessonsValue: {
      control: "text",
      description: "Lessons completed value",
      defaultValue: "24/36",
    },
    weeklyGoalProgress: {
      control: { type: "number", min: 0, max: 100 },
      description: "Progress percentage for Weekly Goal card",
      defaultValue: 80,
    },
  },
};

const Template = (args) => {
  const cards = [
    {
      title: "Daily Streak",
      icon: <Flame aria-hidden="true" />,
      value: args.streakValue,
      desc: "Keep it up!",
      gradient: styles.orangeRed,
    },
    {
      title: "Level 3",
      icon: <Trophy aria-hidden="true" />,
      value: `${args.levelProgress}% to Level 4`,
      progress: args.levelProgress,
      gradient: styles.greenBlue,
    },
    {
      title: "Lessons",
      icon: <BookOpen aria-hidden="true" />,
      value: args.lessonsValue,
      desc: "Completed",
      gradient: styles.purplePink,
    },
    {
      title: "Weekly Goal",
      icon: <Target aria-hidden="true" />,
      value: `4/5 days`,
      progress: args.weeklyGoalProgress,
      gradient: styles.yellowOrange,
    },
  ];

  return <ProgressSection cards={cards} />;
};

export const Default = Template.bind({});
Default.args = {
  streakValue: "7 days",
  levelProgress: 65,
  lessonsValue: "24/36",
  weeklyGoalProgress: 80,
};

export const CustomScenario = Template.bind({});
CustomScenario.args = {
  streakValue: "15 days",
  levelProgress: 90,
  lessonsValue: "30/36",
  weeklyGoalProgress: 100,
};

export const StreakCard = {
  render: () => (
    <ProgressSection
      cards={[
        {
          title: "Daily Streak",
          icon: <Flame aria-hidden="true" />,
          value: "10 days",
          desc: "Great job!",
          gradient: styles.orangeRed,
        },
      ]}
    />
  ),
};

export const LevelCard = {
  render: () => (
    <ProgressSection
      cards={[
        {
          title: "Level 5",
          icon: <Trophy aria-hidden="true" />,
          value: "90% to Level 6",
          progress: 90,
          gradient: styles.greenBlue,
        },
      ]}
    />
  ),
};

export const LessonsCard = {
  render: () => (
    <ProgressSection
      cards={[
        {
          title: "Lessons",
          icon: <BookOpen aria-hidden="true" />,
          value: "32/40",
          desc: "Almost there!",
          gradient: styles.purplePink,
        },
      ]}
    />
  ),
};

export const WeeklyGoalCard = {
  render: () => (
    <ProgressSection
      cards={[
        {
          title: "Weekly Goal",
          icon: <Target aria-hidden="true" />,
          value: "5/5 days",
          progress: 100,
          gradient: styles.yellowOrange,
        },
      ]}
    />
  ),
};
