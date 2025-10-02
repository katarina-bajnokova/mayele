import { QuickActions } from "./QuickActions";
import {
  Play,
  Headphones,
  FileText,
  Gamepad2,
  Users,
  Award,
} from "lucide-react";
import styles from "./QuickActions.module.scss";

export default {
  title: "Components/Layout/QuickActions",
  component: QuickActions,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **QuickActions** component is shown on the **Profile page** with the **DashboardHeader** and **ProgressSection**.  

It gives learners quick access to core features like lessons, vocabulary, games, and achievements.  
Each card is an icon inside a gradient circle with title + description, styled using your SCSS tokens.  
        `,
      },
    },
  },
  argTypes: {
    heading: {
      control: "text",
      description: "Section heading",
      defaultValue: "Quick Actions",
    },
    actions: {
      table: { disable: true }, // 👈 Hides it from Controls
    },
  },
};

const defaultActions = [
  {
    icon: <Play />,
    title: "Daily Lesson",
    description: "Continue your learning",
    gradient: styles.bluePurple,
  },
  {
    icon: <Headphones />,
    title: "Listen & Repeat",
    description: "Practice pronunciation",
    gradient: styles.greenTeal,
  },
  {
    icon: <FileText />,
    title: "Vocabulary",
    description: "Review new words",
    gradient: styles.orangeRed,
  },
  {
    icon: <Gamepad2 />,
    title: "Fun Games",
    description: "Learn through play",
    gradient: styles.pinkRose,
  },
  {
    icon: <Users />,
    title: "Study Group",
    description: "Learn with friends",
    gradient: styles.indigoBlue,
  },
  {
    icon: <Award />,
    title: "Achievements",
    description: "View your progress",
    gradient: styles.yellowOrange,
  },
];

const Template = (args) => <QuickActions {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Quick Actions",
  actions: defaultActions,
};

export const CustomSet = Template.bind({});
CustomSet.args = {
  heading: "Try These",
  actions: [
    {
      icon: <Play />,
      title: "Practice Mode",
      description: "Sharpen your skills",
      gradient: styles.greenTeal,
    },
    {
      icon: <Award />,
      title: "Milestones",
      description: "Celebrate progress",
      gradient: styles.yellowOrange,
    },
  ],
};

export const SingleCard = Template.bind({});
SingleCard.args = {
  heading: "One Card Demo",
  actions: [
    {
      icon: <Gamepad2 />,
      title: "Fun Games",
      description: "Play to learn",
      gradient: styles.pinkRose,
    },
  ],
};
