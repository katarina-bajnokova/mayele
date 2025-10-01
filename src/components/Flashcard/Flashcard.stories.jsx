import Flashcard from "./Flashcard";

export default {
  title: "Mayele/Flashcard",
  component: Flashcard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Flashcards are interactive educational cards that flip to reveal content.
They are ideal for language learning, vocabulary practice, and memory games.

- Front: shows the word (e.g. fruit name).
- Back: shows the matching image with fruit-specific background colors.
- Cards can flip on hover or click, depending on props.
        `,
      },
    },
  },
  argTypes: {
    word: { control: "text", description: "Word displayed on the front" },
    category: {
      control: "text",
      description: "Image folder inside /public/images (default: fruits)",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
      description: "Card size",
    },
    effect: {
      options: ["click", "hover"],
      control: { type: "radio" },
      description: "How the card flips",
    },
    variant: {
      options: ["primary", "secondary", "accent"],
      control: { type: "radio" },
      description: "Fallback color style for the back side",
    },
  },
};

export const Etabe = {
  args: {
    word: "etabe",
    category: "fruits",
    size: "md",
    effect: "hover",
    variant: "primary",
  },
};

export const Bitabe = {
  args: {
    word: "bitabe",
    category: "fruits",
    size: "md",
    effect: "hover",
    variant: "secondary",
  },
};

export const Kokoti = {
  args: {
    word: "kokoti",
    category: "fruits",
    size: "md",
    effect: "hover",
    variant: "accent",
  },
};

export const Koko = {
  args: {
    word: "koko",
    category: "fruits",
    size: "md",
    effect: "hover",
    variant: "primary",
  },
};
