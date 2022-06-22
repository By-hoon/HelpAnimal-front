import { Link } from "react-router-dom";
import { CrewProps } from "../shared/Props";

const CrewCard = (crew: CrewProps) => {
  return (
    <div className="card__container">
      <Link to={`/crew/detail`} state={{ crewId: crew.id }} className="link--perspective">
        <div className="card__container--forward">
          <div className="logo__container">
            <img src={crew.logo} alt="crew-logo" className="logo__image" />
          </div>
          <div className="text__container--forward">
            <div className="span--top">
              <span className="name__span">{crew.name}</span>
            </div>
            <div className="span--bottom">
              <span className="amount__span">{crew.amount}</span>
            </div>
          </div>
        </div>
        <div className="card__container--backward">
          <div className="text__container--backward">
            <p>{crew.introduction}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CrewCard;
