import Fact from "../Fact/Fact";

const FactList = ({ facts }) => {
  return (
    <section className="facts__container">
      <ul className="fact_list_container">
        {facts.map((fact) => (
          <Fact factData={fact} key={fact.id} />
        ))}
      </ul>
    </section>
  );
};
export default FactList;
