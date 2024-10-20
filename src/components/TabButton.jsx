export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      {/* Children lo que hace es mostrar lo que se ponga entre los tags del componente */}
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
