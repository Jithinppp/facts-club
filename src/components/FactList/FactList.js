import Fact from "../Fact/Fact";
import CATEGORIES from "../../CATEGORIES";

const FactList = ({ facts, setFacts }) => {
  return (
    <section className="facts__container">
      <ul className="fact_list_container">
        {facts?.length === 0 ? (
          <li>No facts yet</li>
        ) : (
          facts.map((fact) => {
            const color = CATEGORIES.find(
              (item) => item.name === fact.category
            ).color;
            return (
              <Fact
                factData={fact}
                key={fact.id}
                color={color}
                setFacts={setFacts}
              />
            );
          })
        )}
      </ul>
    </section>
  );
};
export default FactList;
