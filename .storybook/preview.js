/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    viewport: {
      viewports: {
        mobile1: {
          name: "Mobile (320px)",
          styles: {
            width: "320px",
            height: "640px",
          },
        },
        tablet: {
          name: "Tablet (768px)",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop (1440px)",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
      },
      defaultViewport: "responsive",
    },
  },
};

export default preview;
