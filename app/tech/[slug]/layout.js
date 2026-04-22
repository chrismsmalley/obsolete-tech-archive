export default function TechSlugLayout({ children }) {
  return (
    <div
      style={{
        paddingTop: "clamp(4.75rem, 9vw, 5.5rem)",
      }}
    >
      {children}
    </div>
  );
}
