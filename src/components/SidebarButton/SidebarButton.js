const SidebarButton = ({ category, color, setFilterText }) => {
  return (
    <li>
      <button
        className="cta__button btn_secondary"
        style={{ backgroundColor: color }}
        onClick={() => setFilterText(category)}
      >
        {category}
      </button>
    </li>
  );
};
export default SidebarButton;
