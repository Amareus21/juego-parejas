
export default function Row({ color, handleClick, children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "25%",
        width: "100%",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      {children}
    </div>
  );
}
