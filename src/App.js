import "./App.css";
import FactList from "./components/FactList/FactList";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import FactForm from "./components/FactForm/FactForm";
import { supabase } from "./utils/supabase.utils";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [formActive, setFormActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(false);
  const [filterText, setFilterText] = useState("all");

  const activeForm = () => {
    setFormActive((prev) => !prev);
  };

  useEffect(() => {
    const fetchFacts = async () => {
      setLoading(true);
      let query = supabase.from("facts").select("*");

      if (filterText !== "all") query = query.eq("category", filterText);

      let { data, error } = await query.order("created_at", {
        ascending: false,
      });
      if (error) setError(error);
      setFacts(data);
      setLoading(false);
    };
    fetchFacts();
  }, [filterText]);

  return (
    <div className="container">
      <Header activeForm={activeForm} formActive={formActive} />
      {formActive && (
        <FactForm setFormActive={setFormActive} setFacts={setFacts} />
      )}
      <main className="main__container">
        <Sidebar setFilterText={setFilterText} />
        {loading ? <Spinner /> : <FactList facts={facts} setFacts={setFacts} />}
        <p>{error}</p>
      </main>
    </div>
  );
}

export default App;
