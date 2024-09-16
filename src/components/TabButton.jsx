export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      {/* Children lo que hace es mostrar lo que se ponga entre los tags del componente */}
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
