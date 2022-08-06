import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { RecruitmentProps } from "../shared/Props";

interface RecruitmentCardProps {
  recruitment: RecruitmentProps;
  setLastRecruitment: Dispatch<SetStateAction<HTMLAnchorElement | null | undefined>>;
}

const RecruitmentCard = ({ recruitment, setLastRecruitment }: RecruitmentCardProps) => {
  return (
    <div className="recruitment-card__container">
      <Link to={`/recruit/detail`} state={{ recruitmentId: recruitment.id }} ref={setLastRecruitment}>
        <div className="recruitment__container">
          <div className="recruitment-image__container">
            <img src={recruitment.imageUrl[0]} alt="recruitment-main" className="recruitment__image" />
            <img
              src={recruitment.imageUrl[0]}
              alt="recruitment-main"
              className="recruitment__image--background"
            />
          </div>
          <div className="recruitment-content__container">
            <div className="recruitment-name">{recruitment.name}</div>
            <div className="recruitment-author">{recruitment.author}</div>
            <div className="recruitment-participant">{recruitment.participant}</div>
            <div className="recruitment-animal-type">{recruitment.animalType}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecruitmentCard;
