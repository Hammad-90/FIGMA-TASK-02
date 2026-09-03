export default function Avatar({ name, size = 28 }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className="avatar"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.38,
      }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
