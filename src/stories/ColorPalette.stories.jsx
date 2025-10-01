export default {
  title: "Design System/Colors",
};

const colors = {
  Primary: {
    50: "#e0f7fc",
    100: "#b3ecf9",
    200: "#80e1f5",
    300: "#4dd6f2",
    400: "#26cbee",
    500: "#00adef",
    600: "#008dbf",
    700: "#006c8f",
    800: "#004c60",
    900: "#002c30",
  },
  Secondary: {
    50: "#fff9e0",
    100: "#fff1b3",
    200: "#ffe680",
    300: "#ffda4d",
    400: "#ffce26",
    500: "#ffd700",
    600: "#ccac00",
    700: "#997f00",
    800: "#665300",
    900: "#332900",
  },
  Accent: {
    50: "#fde8ea",
    100: "#f9c2c7",
    200: "#f4999f",
    300: "#ef7077",
    400: "#ea4d55",
    500: "#e63946",
    600: "#ba2e38",
    700: "#8c232a",
    800: "#5e171c",
    900: "#300c0e",
  },
  Semantic: {
    Success: "#2e7d32",
    Warning: "#ff9800",
    "Gray 50": "#fafafa",
    "Gray 900": "#212121",
  },
};

export const Palette = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
    {Object.entries(colors).map(([groupName, group]) => (
      <div key={groupName}>
        <h3 style={{ marginBottom: "0.5rem" }}>{groupName}</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "1rem",
          }}
        >
          {Object.entries(group).map(([shade, value]) => (
            <div
              key={shade}
              style={{
                border: "1px solid #eee",
                borderRadius: "8px",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <div style={{ background: value, height: "60px" }} />
              <div style={{ padding: "0.5rem", fontSize: "0.75rem" }}>
                <div style={{ fontWeight: "600" }}>
                  {groupName} {shade}
                </div>
                <div style={{ color: "#666" }}>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
