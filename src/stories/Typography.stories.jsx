export default {
  title: "Design System/Typography",
};

const samples = [
  {
    label: "Heading XL",
    style: {
      fontFamily: "Playfair Display, serif",
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
  {
    label: "Heading LG",
    style: {
      fontFamily: "Playfair Display, serif",
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
  {
    label: "Heading MD",
    style: {
      fontFamily: "Playfair Display, serif",
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
  },
  {
    label: "Subheader",
    style: {
      fontFamily: "Playfair Display, serif",
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "#666",
    },
  },
  {
    label: "Body Text",
    style: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  {
    label: "Caption",
    style: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.75,
      color: "#666",
    },
  },
  {
    label: "Accent / Decorative",
    style: {
      fontFamily: "Ga Maamli, cursive",
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "#e63946",
    },
  },
];

export const Showcase = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      padding: "1rem",
    }}
  >
    {samples.map(({ label, style }) => (
      <div
        key={label}
        style={{ borderBottom: "1px solid #eee", paddingBottom: "1rem" }}
      >
        <div
          style={{
            marginBottom: "0.25rem",
            fontSize: "0.75rem",
            color: "#999",
          }}
        >
          {label}
        </div>
        <div style={style}>The quick brown fox jumps over the lazy dog</div>
      </div>
    ))}
  </div>
);
