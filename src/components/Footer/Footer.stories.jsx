import Footer from "./Footer";

export default {
  title: "Mayele/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    showExplore: { control: "boolean", description: "Toggle Explore section" },
    showCompany: { control: "boolean", description: "Toggle Company section" },
    showSupport: { control: "boolean", description: "Toggle Support section" },
    showSocial: { control: "boolean", description: "Toggle Social section" },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    showExplore: true,
    showCompany: true,
    showSupport: true,
    showSocial: true,
  },
};

export const Minimal = {
  args: {
    showExplore: false,
    showCompany: false,
    showSupport: false,
    showSocial: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal footer with only the social section enabled.",
      },
    },
  },
};

export const CompanyOnly = {
  args: {
    showExplore: false,
    showCompany: true,
    showSupport: false,
    showSocial: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows only the Company section of the footer.",
      },
    },
  },
};
