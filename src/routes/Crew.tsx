import { Link } from "react-router-dom";
import CrewCard from "../components/CrewCard";
import { crews } from "../test/data";

const Crew = () => {
  return (
    <div className="crew__container">
      <div className="title__container">
        <span className="title__span">크루 목록</span>
        <Link className="create-crew__link" to="/crew/create">
          크루 생성
        </Link>
      </div>
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
