import LandingPage from "./LandingPage";

export default {
  title: "Mayele/LandingPage",
  component: LandingPage,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Landing Page is the entry point of the Mayele app.  
It contains:

- A sticky **navbar** with navigation links  
- A **hero section** with title, subtitle, and a call-to-action button  
- A **learning section** showcasing fruit flashcards  
- An **info section** explaining why flashcards are effective  
- A **footer** with copyright  

This one-pager demonstrates how Mayele components can be combined into a full landing experience.
        `,
      },
    },
  },
};

export const Default = {};
