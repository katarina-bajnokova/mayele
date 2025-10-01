import CategoryBadge from "./CategoryBadge";

export default {
  title: "Mayele/Badge",
  component: CategoryBadge,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Category label (e.g., Fruits, Animals, Numbers)",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    variant: {
      options: ["primary", "secondary", "accent", "success"],
      control: { type: "radio" },
      description: "Color style for category",
    },
  },
};

export const Fruits = {
  args: {
    label: "Mbuma (Fruits)",
    size: "md",
    variant: "secondary",
  },
};

export const Animals = {
  args: {
    label: "Banyama (Animals)",
    size: "md",
    variant: "success",
  },
};

export const Numbers = {
  args: {
    label: "Mitángo (Numbers)",
    size: "md",
    variant: "primary",
  },
};

export const Custom = {
  args: {
    label: "Your Category",
    size: "md",
    variant: "accent",
  },
};
