const Sidebar = () => {
  return (
    <aside className="sidebar__container">
      <ul className="sidebar">
        <li>
          <button className="cta__button btn__all">All</button>
        </li>
        <li>
          <button
            className="cta__button btn_secondary"
            style={{ backgroundColor: "#16a34a" }}
          >
            Technology
          </button>
        </li>
        <li>
          <button
            className="cta__button btn_secondary"
            style={{ backgroundColor: "#3b82f6" }}
          >
            Science
          </button>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
