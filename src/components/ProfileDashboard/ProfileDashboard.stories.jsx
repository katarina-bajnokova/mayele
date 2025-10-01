import ProfileDashboard from "./ProfileDashboard";

export default {
  title: "Mayele/Dashboard/ProfileDashboard",
  component: ProfileDashboard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **ProfileDashboard** combines user profile details, progress stats, and category badges into a single view.

### 📍 When to use
- As the main personal dashboard for a learner in Mayele.
- Shows profile info (avatar, name, nickname), stats, and practiced categories.

### 🛠 Usage Example
\`\`\`jsx
<ProfileDashboard
  user={{
    name: "Katarina Bajnokova",
    nickname: "katarina24",
    avatar: "https://i.pravatar.cc/150?img=5",
    stats: {
      words: { current: 80, total: 200 },
      streak: { current: 10, total: 30 },
      xp: { current: 1200, total: 3000 },
      level: "Intermediate",
    },
    categories: [
      { label: "Fruits", variant: "secondary" },
      { label: "Animals", variant: "success" },
      { label: "Numbers", variant: "primary" },
    ],
  }}
/>
\`\`\`
        `,
      },
    },
  },
};

const Template = (args) => <ProfileDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    name: "Katarina Bajnokova",
    nickname: "katarina24",
    avatar: "https://i.pravatar.cc/150?img=5",
    stats: {
      words: { current: 80, total: 200 },
      streak: { current: 10, total: 30 },
      xp: { current: 1200, total: 3000 },
      level: "Intermediate",
    },
    categories: [
      { label: "Fruits", variant: "secondary" },
      { label: "Animals", variant: "success" },
      { label: "Numbers", variant: "primary" },
    ],
  },
};
