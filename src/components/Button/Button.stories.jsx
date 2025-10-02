import Button from "./Button";

export default {
  title: "Components/UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Button text (label)",
      defaultValue: "Click me",
    },
    variant: {
      options: ["primary", "secondary", "accent"],
      control: { type: "radio" },
      description: "Button style variant",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    backgroundColor: {
      control: { type: "color" },
      description: "Custom background color (overrides variant)",
    },
    onClick: { action: "clicked" },
  },
  parameters: {
    controls: {
      expanded: true,
      sort: "alpha",
      presetColors: [
        { color: "#ffd700", title: "Golden Baobab" },
        { color: "#00adef", title: "Congo Blue" },
        { color: "#e63946", title: "Sunset Red" },
        { color: "#2e7d32", title: "Forest Green" },
        { color: "#ff9800", title: "Earthy Orange" },
      ],
    },
    docs: {
      description: {
        component: `
The **Button** component is one of the most essential interactive elements in the Mayele design system.  
It enables users to take **actions** across the platform — from starting games, submitting forms, to navigating between lessons.  

Buttons are designed with **clear hierarchy** and **brand-aligned colors**, ensuring they are **accessible, consistent, and purposeful**.

### Variants
- **Primary** → The main call-to-action (CTA). Use it for the most important action on a page, such as starting a game or submitting progress. Should appear only once per screen to avoid confusion.  
- **Secondary** → Supportive actions. Use when you want to give users a choice without distracting from the primary action (e.g., “Learn more”, “Back”).  
- **Accent** → Urgent or destructive actions. Use sparingly, reserved for critical operations like “Delete”, “Stop”, or high-attention alerts.  
- **Custom Color** → Useful for campaign-specific cases or brand testing, allowing designers to experiment with Mayele’s color tokens.  
- **Disabled** → Communicates that an action is temporarily unavailable (e.g., while loading, or if prerequisites are not met).  

### Sizes
- **Small (sm)** → Compact buttons for tight layouts (e.g., badges, toolbars).  
- **Medium (md)** → Default and most commonly used size across the platform.  
- **Large (lg)** → Emphasized buttons for hero sections or key CTAs that need stronger visual prominence.  
        `,
      },
    },
  },
};

export const Primary = {
  args: {
    label: "Primary Button",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Primary Button** is the main call-to-action. Use it for the most important action on a page (e.g., 'Commencer' or 'Submit'). Should appear once per screen.",
      },
    },
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    size: "md",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Secondary Button** is for supportive actions (e.g., 'Learn more'). Use it when the action is relevant, but not the primary focus.",
      },
    },
  },
};

export const Accent = {
  args: {
    label: "Accent Button",
    variant: "accent",
    size: "md",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Accent Button** is for urgent or destructive actions (e.g., 'Delete', 'Stop'). Use sparingly to attract attention.",
      },
    },
  },
};

export const CustomColor = {
  args: {
    label: "Custom Color",
    variant: "primary",
    size: "md",
    disabled: false,
    backgroundColor: "#ffd700",
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Custom Color Button** is for testing Mayele’s palette or for special campaigns. Lets designers/devs experiment quickly.",
      },
    },
  },
};

export const Disabled = {
  args: {
    label: "Disabled Button",
    variant: "primary",
    size: "md",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Disabled Button** indicates an action is unavailable (e.g., loading state or blocked interaction). Prevents accidental clicks.",
      },
    },
  },
};
