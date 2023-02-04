import { useState } from "react";
import { supabase } from "../../utils/supabase.utils";

const Fact = ({ factData, color, setFacts }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleVote = async (columnName) => {
    setIsUpdating(true);
    try {
      const { data, error } = await supabase
        .from("facts")
        .update({ [columnName]: factData[columnName] + 1 })
        .eq("id", factData.id)
        .select();
      console.log(data);

      if (!error)
        setFacts((prevFacts) =>
          prevFacts.map((f) => (f.id === factData.id ? data[0] : f))
        );

      setIsUpdating(false);
    } catch (error) {
      console.log(error);
    }
  };

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
        <span className="tag" style={{ backgroundColor: color }}>
          #{factData.category}
        </span>
      </p>
      <div className="vote_button_container">
        <button
          className="vote__button"
          onClick={() => handleVote("votesLikes")}
          disabled={isUpdating}
        >
          👍<strong>{factData.votesLikes}</strong>
        </button>
        <button
          className="vote__button"
          onClick={() => handleVote("votesConfused")}
          disabled={isUpdating}
        >
          😕 <strong>{factData.votesConfused}</strong>
        </button>
        <button
          className="vote__button"
          onClick={() => handleVote("votesDislikes")}
          disabled={isUpdating}
        >
          👎<strong>{factData.votesDislikes}</strong>
        </button>
      </div>
    </li>
  );
};
export default Fact;
