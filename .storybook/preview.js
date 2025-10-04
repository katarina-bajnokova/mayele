/** @type {import('@storybook/react-vite').Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "error",
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile (320px)",
          styles: { width: "320px", height: "640px" },
        },
        tablet: {
          name: "Tablet (768px)",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop (1440px)",
          styles: { width: "1440px", height: "900px" },
        },
      },
      defaultViewport: "responsive",
    },
    layout: "centered",
    docs: {
      source: { type: "code" },
    },
  },
};

export default preview;
