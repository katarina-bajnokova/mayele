import { FaBrain, FaBookOpen } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import InfoCard from "./InfoCard";

export default {
  title: "Mayele/InfoCard",
  component: InfoCard,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
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
