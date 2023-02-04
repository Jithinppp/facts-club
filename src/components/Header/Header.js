const Header = ({ activeForm }) => {
  return (
    <header className="navigation">
      <div className="logo__container">
        <img src="logo.png" height={50} width={50} alt="phot-description" />
        <h1 className="logo">Facts club😍</h1>
      </div>
      <button
        className="cta__button"
        id="share_fact_btn"
        onClick={() => {
          activeForm();
          console.log("button pressed");
        }}
      >
        Share a fact
      </button>
    </header>
  );
};
export default Header;
