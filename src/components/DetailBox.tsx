import { useState } from "react";

export const CrewDetailBox = () => {
  const [menu, setMenu] = useState("introduction");
  return (
    <div className="detail-box__container">
      <div className="detail-info__container--image">
        <img src="" alt="detail" className="detail-info__image" />
      </div>
      <div className="detail-info__container--basic">
        <div>
          <span className="detail-info__span--main"></span>
        </div>
        <div>
          <span className="detail-info__span--amount"></span>
        </div>
        <div>
          <span className="detail-info__span--flexible"></span>
        </div>
      </div>
      <div className="detail-info__container--deep">
        <div className="detail-menu__container">
          <div>
            <span>소개</span>
          </div>
          <div>
            <span>메뉴2</span>
          </div>
          <div>
            <span>메뉴3</span>
          </div>
        </div>
        <div className="detail-content__container">
          {menu === "introduction" ? <p>introduction</p> : <span>other</span>}
        </div>
      </div>
    </div>
  );
};
