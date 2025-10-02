import { DashboardHeader } from "./DashboardHeader";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Components/Layout/DashboardHeader",
  component: DashboardHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **DashboardHeader** is used on the Profile page together with the ProgressSection.  
Its gradient background is inspired by the ripening mango, a fruit native to Congo, symbolizing **growth, learning, and cultural roots**.  
This design choice reinforces both accessibility and storytelling within the app.
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
      description: "Full name of the user (used for initials if no image)",
    },
    greeting: {
      control: "text",
      description: "Main greeting message",
    },
    subtitle: {
      control: "text",
      description: "Sub-text under greeting",
    },
    avatarSrc: {
      control: "text",
      description: "Avatar image URL (falls back to initials if empty)",
    },
    points: {
      control: { type: "number", min: 0 },
      description: "Number of user points displayed in header",
    },
    onBellClick: { action: "bell clicked" },
    onSettingsClick: { action: "settings clicked" },
  },
};

export const Default = {
  args: {
    name: "Maria K.",
    greeting: "Mbote, Maria! 👋",
    subtitle: "Ready to learn Lingala today?",
    avatarSrc:
      "https://images.unsplash.com/photo-1756136836795-dafd21b9c62d?ixlib=rb-4.1.0&q=80&w=200",
    points: 1240,
  },
};

export const WithInitials = {
  args: {
    name: "John Doe",
    avatarSrc: "",
    points: 450,
  },
};

export const HighScore = {
  args: {
    name: "Champion User",
    points: 9999,
  },
};

export const Interactive = {
  args: {
    name: "Maria",
    points: 500,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const bell = await canvas.getByLabelText("Notifications");
    await userEvent.click(bell);
  },
};
