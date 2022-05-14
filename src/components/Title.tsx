import { Link } from "react-router-dom";

export const CrewListTitle = () => {
  return (
    <div className="title__container">
      <span className="title__span">크루 목록</span>
      <Link className="create-crew__link" to="/crew/create">
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
