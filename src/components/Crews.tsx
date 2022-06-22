import { crews } from "../test/data";
import CrewCard from "./CrewCard";
import { CrewListTitle } from "./Title";

const Crews = () => {
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

export default Crews;
