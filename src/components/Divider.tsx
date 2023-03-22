export default function Divider() {
  return (
    <div
      className="outline"
      style={{
        width: "100%",
        height: "1px",
        background: "linear-gradient(90deg, var(--primary-color), transparent)",
      }}
    />
  );
}
