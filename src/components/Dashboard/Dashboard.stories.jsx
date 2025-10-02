import Dashboard from "./Dashboard";

export default {
  title: "Components/Layout/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The **Dashboard** is the main entry point for learners after login.  
It combines multiple reusable components into a single view:

- **DashboardHeader** → greeting, points, notifications, settings  
- **ProgressSection** → streak, levels, lessons, weekly goals  
- **ActionCard** grid → quick actions  
        `,
      },
    },
  },
};

export const Default = {
  args: {},
};
