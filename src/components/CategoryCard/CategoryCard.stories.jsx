import CategoryCard from "./CategoryCard";

export default {
  title: "Mayele/CategoryCard",
  component: CategoryCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **CategoryCard** is used to let learners choose a category of vocabulary they want to practice 
inside the **Mini-Games**.  

- If the player wants to practice **Fruits**, they select the *Fruits* card.  
- If the player wants to practice **Animals**, they select the *Animals* card.  
- If the player wants to practice **Vegetables**, they select the *Vegetables* card.  
- If the player wants to practice **Numbers**, they select the *Numbers* card.  

These cards are purely for **category selection** and help guide the learner into specific themed 
mini-games (e.g., Fruits in Lingala, Animals in Lingala).  
        `,
      },
    },
  },
  argTypes: {
    label: { control: "text", description: "Category label" },
    iconSrc: { control: false },
    variant: {
      control: "select",
      options: ["vegetables", "fruits", "animals", "numbers"],
      description: "Category variant that sets border & background color",
    },
    onClick: { action: "clicked" },
  },
};

export const Fruits = {
  args: {
    iconSrc: "/images/categories/fruits.svg",
    label: "Fruits",
    variant: "fruits",
  },
};

export const Animals = {
  args: {
    iconSrc: "/images/categories/animals.svg",
    label: "Animals",
    variant: "animals",
  },
};

export const Numbers = {
  args: {
    iconSrc: "/images/categories/number.svg",
    label: "Numbers",
    variant: "numbers",
  },
};

export const Vegetables = {
  args: {
    iconSrc: "/images/categories/vegetables.svg",
    label: "Vegetables",
    variant: "vegetables",
  },
};
