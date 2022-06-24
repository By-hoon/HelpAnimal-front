import { Link } from "react-router-dom";
import { RecruitmentProps } from "../shared/Props";

interface RecruitmentCardProps {
  recruitment: RecruitmentProps;
}

const RecruitmentCard = ({ recruitment }: RecruitmentCardProps) => {
  return (
    <div className="recruitment-card__container">
      <Link to={`/recruit/detail`} state={{ recruitmentId: recruitment.id }}>
        <div className="recruitment__container">
          <div className="recruitment-image__container">
            <img src={recruitment.imageUrl} alt="recruitment-main" className="recruitment__image" />
          </div>
          <div className="recruitment-name">{recruitment.name}</div>
          <div className="recruitment-author">{recruitment.author}</div>
          <div className="recruitment-participant">{recruitment.participant}</div>
          <div className="recruitment-animal-type">{recruitment.animalType}</div>
        </div>
      </Link>
    </div>
  );
};

export default RecruitmentCard;
