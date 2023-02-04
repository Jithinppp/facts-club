import { useState } from "react";
import CATEGORIES from "../../CATEGORIES";
import { supabase } from "../../utils/supabase.utils";

const FactForm = ({ setFormActive, setFacts }) => {
  const [factText, setFactText] = useState("");
  const [factSourceText, setFactSourceText] = useState("");
  const [categoryText, setCategoryText] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const factTextLength = factText.length;

  function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  const factSubmitHandler = async (e) => {
    setIsUploading(true);
    e.preventDefault();
    // 1 check fact details are valid
    if (factText && isValidHttpUrl(factSourceText) && categoryText) {
      //  if valid create a obj
      let newFact = {
        text: factText,
        source: factSourceText,
        category: categoryText,
        votesLikes: 0,
        votesDislikes: 0,
        votesConfused: 0,
        created_at: new Date(),
      };

      try {
        //  uploading to database
        const { data, error } = await supabase
          .from("facts")
          .insert([newFact])
          .select();
        console.log(data, error);
        // setting button disabled and upload to our local state
        setIsUploading(false);
        if (!error) setFacts((prev) => [...prev, data[0]]);
      } catch (error) {
        alert(error);
      }

      // 4 reset the form and values
      setCategoryText("");
      setFactText("");
      setFactSourceText("");
      setFormActive(false);
    } else {
      // 2 if not valid alert
      alert("enter a valid text");
    }
  };

  return (
    <form className="fact-form " onSubmit={factSubmitHandler}>
      <input
        required
        placeholder="share a fact with world..."
        type="text"
        value={factText}
        onChange={(e) => {
          if (e.target.value.length > 200) return;
          setFactText(e.target.value);
        }}
      />
      <span className="limit_text">{200 - factTextLength}</span>
      <input
        required
        placeholder="source...eg http://example.com"
        type="text"
        value={factSourceText}
        onChange={(e) => setFactSourceText(e.target.value)}
      />
      <select
        required
        onChange={(e) => setCategoryText(e.target.value)}
        value={categoryText}
      >
        <option>select category</option>
        {CATEGORIES.map((cat, idx) => (
          <option value={cat.name} key={idx}>
            {cat.name[0].toUpperCase() + cat.name.slice(1)}
          </option>
        ))}
      </select>
      <button className="cta__button" type="submit" disabled={isUploading}>
        Post
      </button>
    </form>
  );
};
export default FactForm;
