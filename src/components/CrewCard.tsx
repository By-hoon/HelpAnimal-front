import { Link } from "react-router-dom";
import { CrewProps } from "../shared/Props";

const CrewCard = (crewObject: CrewProps) => {
  return (
    <div className="card__container">
      <Link to={`/crew/${crewObject.id}`} className="link">
        <div className="card__container--forward">
          <div className="logo__container">
            <img
              src={crewObject.logo}
              alt="crew-logo"
              className="logo__image"
            />
          </div>
          <div className="text__container--forward">
            <div className="span--top">
              <span className="name__span">{crewObject.name}</span>
            </div>
            <div className="span--bottom">
              <span className="amount__span">{crewObject.amount}</span>
            </div>
          </div>
        </div>
        <div className="card__container--backward">
          <div className="text__container--backward">
            <p>{crewObject.introduction}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CrewCard;
