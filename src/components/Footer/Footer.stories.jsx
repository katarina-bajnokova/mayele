import Footer from "./Footer";

export default {
  title: "Mayele/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The **Footer** provides structured secondary navigation.  

Sections included:  
- **Explore** → Play, Learn, Features, Pricing  
- **Company** → About Us, Careers, Press, Collaborations  
- **Support** → Contact, FAQ, Privacy, Terms  
- **Follow Us** → Social media links (Facebook, Twitter, Instagram, LinkedIn)  

Responsive:  
- **Desktop** → columns aligned left.  
- **Mobile** → stacked vertically with spacing.  
        `,
      },
    },
  },
};

export const Default = {};
