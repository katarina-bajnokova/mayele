import Footer from "./Footer";

export default {
  title: "Components/Layout/Footer",
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
    docs: {
      description: {
        component: `
The **Footer** component provides navigation and support links at the bottom of the Mayele website.  
It helps users **explore content, learn more about the company, get help, or connect on social platforms**.  
A footer is a standard web convention for **secondary navigation**, ensuring learners can always find essential resources without cluttering the main interface.

**Sections**  
- **Explore** → Links to learning resources, lessons, and games.  
- **Company** → Information about Mayele, collaborations, and careers.  
- **Support** → Help center, FAQs, contact options.  
- **Social** → Links to social media channels to build community and engagement.  

**When and Why**  
- Always present on main pages (homepage, lessons, games).  
- Provides a **trusted anchor point** for non-primary but important content.  
- Helps reinforce **brand credibility** and accessibility of resources.  

### Variants
- **Default** → All sections visible. Best for the full website experience where users may need multiple entry points.  
- **Minimal** → Only the Social section is visible. Best for landing pages, campaign pages, or contexts where the primary goal is community engagement.  
- **CompanyOnly** → Only the Company section is visible. Best for corporate/legal pages (About, Terms of Service, Privacy Policy) where the focus is on brand and compliance.  
        `,
      },
    },
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
        story:
          "Minimal footer with only the Social section enabled. Useful for lightweight landing or marketing pages.",
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
        story:
          "Shows only the Company section of the footer. Useful for About pages, careers, or legal pages.",
      },
    },
  },
};
