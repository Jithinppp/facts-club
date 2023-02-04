const FactForm = () => {
  return (
    <form className="fact-form ">
      <input placeholder="share a fact with world..." type="text" />
      <span className="limit_text">200</span>
      <input placeholder="trust worthy source..." type="text" />
      <select>
        <option value="">Choose category</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
        <option value="finance">Finance</option>
      </select>
      <button className="cta__button" type="submit">
        Post
      </button>
    </form>
  );
};
export default FactForm;
