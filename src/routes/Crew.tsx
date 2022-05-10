import CrewCard from "../components/CrewCard";
import { CrewListTitle } from "../components/Title";
import { crews } from "../test/data";

const Crew = () => {
  return (
    <div className="crew__container">
      <CrewListTitle />
      <div className="crew-list__container">
        {crews.map((crew) => (
          <CrewCard
            key={crew.id}
            id={crew.id}
            logo={crew.logo}
            name={crew.name}
            introduction={crew.introduction}
            amount={crew.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default Crew;
