import CATEGORIES from "../../CATEGORIES";
import SidebarButton from "../SidebarButton/SidebarButton";

const Sidebar = ({ setFilterText }) => {
  return (
    <aside className="sidebar__container">
      <ul className="sidebar">
        <li>
          <button
            className="cta__button btn__all"
            onClick={() => setFilterText("all")}
          >
            All
          </button>
        </li>
        {CATEGORIES.map((category, idx) => (
          <SidebarButton
            setFilterText={setFilterText}
            category={category.name}
            color={category.color}
            key={idx}
          />
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;
