import Navbar from "./Navbar";

export default {
  title: "Mayele/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The **Navbar** is Mayele's top-level navigation, styled with the project's tokens and mixins.

- **Play** → Start interactive games  
- **Learn** → Access educational resources  
- **Login** → Primary call-to-action (yellow pill on desktop, inline link on mobile)  
- **Contact** → Reach out for support or feedback  

**Responsive behavior**
- On **desktop**, links display inline and Login is styled as a yellow pill.  
- On **mobile**, the menu collapses into a hamburger toggle, and Login behaves like the other links.  

To preview the **mobile menu**, drag the Storybook preview window below **768px**.  
For the most accurate look and feel, view the component in **isolation mode** (it depends on the viewport).  
        `,
      },
    },
  },
};

export const Default = {
  args: {},
};

export const MobileView = {
  args: {},
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story: `

For the best experience, open the component in **isolation mode**.`,
      },
    },
  },
};
