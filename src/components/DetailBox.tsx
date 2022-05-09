import { useState } from "react";

const DetailBox = () => {
  const [menu, setMenu] = useState("introduction");
  return (
    <div className="detail-box__container">
      <div className="detail-info__container--image">
        <img src="" alt="detail-image" className="detail-info__image" />
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
        {menu === "introduction" ? <p>introduction</p> : <span>other</span>}
      </div>
    </div>
  );
};

export default DetailBox;
