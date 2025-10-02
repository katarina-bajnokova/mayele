import { Play, Headphones, FileText, Gamepad2, Medal } from "lucide-react";
import ActionCard from "./ActionCard";

export default {
  title: "Components/Cards/ActionCard",
  component: ActionCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **ActionCard** is a reusable component used throughout the app for quick navigation and calls-to-action.  

It supports dynamic tones, alignment, and icons from **Lucide React**.  

### Props
- \`title\` (string) → main card heading  
- \`description\` (string, optional) → supporting text  
- \`icon\` (ReactNode) → pass a Lucide icon (live control enabled)  
- \`tone\` (indigo | teal | orange | rose | cyan | amber | blue)  
- \`align\` (left | center)  
- \`showIcon\` (boolean) → toggle icon visibility  
- \`href\` (string, optional) → renders as link  
- \`disabled\` (boolean) → disables click + animations  
        `,
      },
    },
  },
  argTypes: {
    title: { control: "text", description: "Main heading of the card" },
    description: {
      control: "text",
      description: "Short explanation under the title",
    },
    icon: {
      control: { type: "select" },
      options: ["Play", "Headphones", "FileText", "Gamepad2", "Medal"],
      mapping: {
        Play: <Play />,
        Headphones: <Headphones />,
        FileText: <FileText />,
        Gamepad2: <Gamepad2 />,
        Medal: <Medal />,
      },
      description: "Choose a Lucide icon",
    },
    showIcon: {
      control: "boolean",
      description: "Show or hide the icon",
    },
    tone: {
      control: "select",
      options: ["indigo", "teal", "orange", "rose", "cyan", "amber", "blue"],
      description: "Card tone (color theme)",
    },
    align: {
      control: "inline-radio",
      options: ["left", "center"],
      description: "Text alignment inside the card",
    },
    href: { control: "text", description: "Optional link" },
    disabled: {
      control: "boolean",
      description: "Disables click + animations",
    },
    onClick: { action: "clicked" },
  },
};

export const DailyLesson = {
  args: {
    title: "Daily Lesson",
    description: "Continue your learning",
    icon: <Play />,
    tone: "indigo",
    align: "center",
    showIcon: true,
  },
};

export const ListenRepeat = {
  args: {
    title: "Listen & Repeat",
    description: "Practice pronunciation",
    icon: <Headphones />,
    tone: "teal",
    showIcon: true,
  },
};

export const Vocabulary = {
  args: {
    title: "Vocabulary",
    description: "Review new words",
    icon: <FileText />,
    tone: "orange",
    showIcon: true,
  },
};

export const FunGames = {
  args: {
    title: "Fun Games",
    description: "Learn through play",
    icon: <Gamepad2 />,
    tone: "rose",
    showIcon: true,
  },
};

export const Achievements = {
  args: {
    title: "Achievements",
    description: "View your progress",
    icon: <Medal />,
    tone: "amber",
    showIcon: true,
  },
};

export const AllVariants = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 20,
      maxWidth: 1200,
    }}
  >
    <ActionCard {...DailyLesson.args} />
    <ActionCard {...ListenRepeat.args} />
    <ActionCard {...Vocabulary.args} />
    <ActionCard {...FunGames.args} />
    <ActionCard {...Achievements.args} />
  </div>
);

AllVariants.parameters = {
  docs: {
    description: {
      story:
        "A showcase of all tone + icon combinations for quick visual reference.",
    },
  },
};
