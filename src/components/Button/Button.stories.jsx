import Button from "./Button";

export default {
  title: "Mayele/Button",
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
          "**Primary Button** is the main call-to-action. Use it for the most important action on a page (e.g., “Commencer” or “Submit”). Should appear once per screen to avoid confusion.",
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
          "**Secondary Button** is for supportive actions (e.g., “En savoir plus”). Use it when the action is important, but not the primary focus.",
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
          "**Accent Button** is for highlighting urgent or destructive actions (e.g., “Delete”, “Stop”). Use sparingly to draw attention.",
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
          "**Custom Color Button** is for testing Mayele’s brand palette or for special cases in campaigns. Designers/devs can quickly try out Golden Baobab, Congo Blue, Sunset Red, etc.",
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
          "**Disabled Button** is inactive and cannot be interacted with. Use it to indicate actions that are temporarily unavailable (e.g., 'Loading...', 'Feature not ready').",
      },
    },
  },
};
