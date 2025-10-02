import { FaBrain, FaBookOpen } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import InfoCard from "./InfoCard";

export default {
  title: "Components/Cards/InfoCard",
  component: InfoCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **InfoCard** component is displayed on the **homepage** of Mayele.  
Its purpose is to give new or returning users a **clear, instant overview** of what they can do on the platform.  

- **Mini-Games** → Learn Lingala in a fun, interactive, and engaging way.  
- **Word Book** → Explore, revise, and build your personal vocabulary collection.  
- **Track Progress** → Monitor learning achievements and milestones step by step.  

InfoCards are designed to be **short, direct, and visually engaging** so that visitors immediately understand the website’s value proposition.  
They function as **entry points** into the main features of the platform and set expectations for the user journey.  
        `,
      },
    },
  },
  argTypes: {
    title: { control: "text", description: "Card title" },
    description: {
      control: "text",
      description: "One-sentence explanation of feature",
    },
    variant: { options: ["primary", "secondary", "accent"], control: "radio" },
    icon: { control: false },
  },
};

export const PlayGames = {
  args: {
    icon: <FaBrain />,
    title: "Mini-Games",
    description: "Learn Lingala through fun and interactive games.",
    variant: "primary",
  },
};

export const WordBook = {
  args: {
    icon: <FaBookOpen />,
    title: "Word Book",
    description: "Explore and revise the words you’ve unlocked.",
    variant: "secondary",
  },
};

export const Progress = {
  args: {
    icon: <FiTrendingUp />,
    title: "Track Progress",
    description: "Follow your learning journey step by step.",
    variant: "accent",
  },
};
