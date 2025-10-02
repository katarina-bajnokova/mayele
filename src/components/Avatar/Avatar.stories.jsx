import Avatar from "./Avatar";

export default {
  title: "Components/UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source URL. If not provided, initials are shown.",
    },
    name: {
      control: "text",
      description: "User full name (used for initials if no image).",
      defaultValue: "John Doe",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Avatar** component displays a user profile picture or, if no image is available, shows initials based on the user’s name.

### When to use
- In the navbar for user profile.
- In leaderboards, progress cards, or comments.
- As part of the settings/profile page.


        `,
      },
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "John Doe",
  size: "md",
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: "https://i.pravatar.cc/150?img=3",
  name: "Jane Smith",
  size: "md",
};

export const LargeInitials = Template.bind({});
LargeInitials.args = {
  name: "Katarina Bajnokova",
  size: "lg",
};
