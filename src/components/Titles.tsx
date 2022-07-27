import { Link } from "react-router-dom";

export const CrewListTitle = () => {
  return (
    <div className="title__container">
      <span className="title__span">크루 목록</span>
      <Link className="create__link" to="/crew/create">
        크루 생성
      </Link>
    </div>
  );
};

export const CrewCreateTitle = () => {
  return (
    <div className="title__container">
      <span className="title__span">크루 생성</span>
    </div>
  );
};

export const CrewEditTitle = () => {
  return (
    <div className="title__container">
      <span className="title__span">크루 수정</span>
    </div>
  );
};

export const RecruitmentListTitle = () => {
  return (
    <div className="title__container">
      <span className="title__span">공고 목록</span>
      <Link className="create__link" to="/recruit/create">
        공고 생성
      </Link>
    </div>
  );
};

export const RecruitmentCreateTitle = () => {
  return (
    <div className="title__container">
      <span className="title__span">공고 생성</span>
    </div>
  );
};

export const RecruitmentEditTitle = () => {
  return (
    <div className="title__container">
      <span className="title__span">공고 수정</span>
    </div>
  );
};
