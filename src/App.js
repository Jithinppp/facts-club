import "./App.css";
import FactList from "./components/FactList/FactList";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import FactForm from "./components/FactForm/FactForm";

function App() {
  const [formActive, setFormActive] = useState(false);
  const [facts, setFacts] = useState([]);
  const activeForm = () => {
    setFormActive((prev) => !prev);
  };
  useEffect(() => {
    const fetchFacts = async () => {
      const res = await fetch(
        "https://iqfzidutygopxleytiap.supabase.co/rest/v1/facts",
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxZnppZHV0eWdvcHhsZXl0aWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU0MjA0NDcsImV4cCI6MTk5MDk5NjQ0N30.w303xua4c5GBEg88GpkykGzqKhY_K6QTxHO2fDqRv_I",
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxZnppZHV0eWdvcHhsZXl0aWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU0MjA0NDcsImV4cCI6MTk5MDk5NjQ0N30.w303xua4c5GBEg88GpkykGzqKhY_K6QTxHO2fDqRv_I",
          },
        }
      );
      const data = await res.json();
      setFacts(data);
      console.log(data);
    };
    fetchFacts();
  }, []);

  return (
    <div className="container">
      <Header activeForm={activeForm} />
      {formActive && <FactForm />}
      <main className="main__container">
        <Sidebar />
        <FactList facts={facts} />
      </main>
    </div>
  );
}

export default App;
