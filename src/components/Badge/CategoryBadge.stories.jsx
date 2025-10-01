import CategoryBadge from "./CategoryBadge";

export default {
  title: "Mayele/Badge",
  component: CategoryBadge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **CategoryBadge** component is used to visually tag and label content across the Mayele platform.  
CategoryBadges highlight the **type of lesson or game content** the user is interacting with.  
They provide a quick, scannable way to recognize whether the activity belongs to *Fruits, Animals, Numbers, Vegetables*, or any other language-learning category.  

 **When to use**  
- Inside **lesson previews** to indicate the category (e.g., Fruits lesson).  
 
- Within **progress summaries** to help learners track which areas they’ve practiced.  

Badges are small, unobtrusive, but carry strong visual meaning. They help learners stay **oriented and motivated** while navigating the app.  
        `,
      },
    },
  },
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
    label: "Fruits",
    size: "md",
    variant: "secondary",
  },
};

export const Animals = {
  args: {
    label: "Animals",
    size: "md",
    variant: "success",
  },
};

export const Numbers = {
  args: {
    label: "Numbers",
    size: "md",
    variant: "primary",
  },
};

export const Custom = {
  args: {
    label: "Custom Category",
    size: "md",
    variant: "accent",
  },
};
