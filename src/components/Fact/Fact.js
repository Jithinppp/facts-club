const Fact = ({ factData }) => {
  return (
    <li className="fact__container">
      <p className="fact">
        {factData.text}
        <a
          href={factData.source}
          target="_blank"
          className="source"
          rel="noreferrer"
        >
          (source)
        </a>
        <span className="category_tag">#{factData.category}</span>
      </p>
      <div className="vote_button_container">
        <button className="vote__button">
          👍<strong>{factData.votesLikes}</strong>
        </button>
        <button className="vote__button">
          😕 <strong>{factData.votesConfused}</strong>
        </button>
        <button className="vote__button">
          👎<strong>{factData.votesDislikes}</strong>
        </button>
      </div>
    </li>
  );
};
export default Fact;
