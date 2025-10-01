import DashboardLayout from "./DashboardLayout";
import StatsCard from "../StatsCard/StatsCard";

export default {
  title: "Mayele/Layout/Dashboard",
  component: DashboardLayout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **DashboardLayout** provides the structural frame for authenticated users in *Mayele*.

### 📍 When to use
- As the main wrapper for all pages once the user is logged in.
- It ensures consistency with a sidebar navigation and a content area.
- Common pages inside the dashboard: *Home, Progress, Games, Settings*.

### 🛠 Usage Example
\`\`\`jsx
<DashboardLayout>
  <StatsCard />
</DashboardLayout>
\`\`\`

⚡ The layout itself does not contain business logic. It simply defines a **frame** (sidebar + content area) and renders children inside.
        `,
      },
    },
  },
};

const Template = (args) => (
  <DashboardLayout {...args}>
    <div style={{ padding: "2rem" }}>
      <StatsCard />
    </div>
  </DashboardLayout>
);

export const Default = Template.bind({});
Default.args = {};
