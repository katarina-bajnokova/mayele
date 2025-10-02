import { QuickActions } from "./QuickActions";

export default {
  title: "Components/Layout/QuickActions",
  component: QuickActions,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **QuickActions** component is part of the **Profile page** and is displayed together with the **DashboardHeader** and **ProgressSection**.  

It provides learners with fast access to key features such as:  
- 📘 Daily Lesson  
- 🎧 Listen & Repeat  
- 📝 Vocabulary  
- 🎮 Fun Games  
- 👥 Study Group  
- 🏅 Achievements  

Each card uses an icon inside a **gradient-colored circle**, styled with design tokens and Congolese-inspired aesthetics.  
        `,
      },
    },
  },
  argTypes: {
    heading: {
      control: "text",
      description: "Heading text shown above the actions",
      defaultValue: "Quick Actions",
    },
    actions: {
      control: "object",
      description:
        "Array of actions with { icon, title, description, gradient }",
    },
  },
};

// ✅ Template
const Template = (args) => <QuickActions {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Quick Actions",
};

export const CustomActions = Template.bind({});
CustomActions.args = {
  heading: "Try These Out",
  actions: [
    {
      icon: () => (
        <span role="img" aria-label="book">
          📖
        </span>
      ),
      title: "Reading Practice",
      description: "Improve comprehension",
      gradient: "bluePurple",
    },
    {
      icon: () => (
        <span role="img" aria-label="chat">
          💬
        </span>
      ),
      title: "Conversation",
      description: "Chat with peers",
      gradient: "greenTeal",
    },
  ],
};

// ✅ Isolated card story
export const SingleAction = Template.bind({});
SingleAction.args = {
  heading: "Single Action Demo",
  actions: [
    {
      icon: () => (
        <span role="img" aria-label="game">
          🎮
        </span>
      ),
      title: "Fun Games",
      description: "Learn through play",
      gradient: "pinkRose",
    },
  ],
};
