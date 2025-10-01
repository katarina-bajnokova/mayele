import Notification from "./Notification";

export default {
  title: "Mayele/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["info", "success", "warning", "error"],
      control: { type: "radio" },
      description: "Notification type",
    },
    message: {
      control: "text",
      description: "Message text inside the bubble",
    },
    duration: {
      control: "number",
      description: "Auto-dismiss duration in ms (default: 5000)",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Notification Bubble** is a playful, thought-bubble styled alert.  
It appears when specific actions happen, such as:

- Unlocking a new lesson  
- Winning a game round  
- Losing a round  
- Running out of time  

These bubbles appear **inline** or in a **corner of the screen** depending on context.  
By default, they **disappear automatically after 5 seconds** to avoid clutter.  
`,
      },
    },
  },
};

export const LessonUnlocked = {
  args: {
    type: "info",
    message: "New lesson unlocked: Mitángo (Numbers)!",
  },
};

export const Win = {
  args: {
    type: "success",
    message: "Well done! You won this round! 🎉",
  },
};

export const Lose = {
  args: {
    type: "error",
    message: "Oops, you lost this round. Try again!",
  },
};

export const Timeout = {
  args: {
    type: "warning",
    message: "Hurry up, only 10 seconds left!",
  },
};
