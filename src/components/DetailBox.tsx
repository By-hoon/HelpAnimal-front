import classNames from "classnames";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CrewDetailProps } from "../shared/Props";
import { crewDetailData } from "../test/data";
import { CrewDetailContent } from "./DetailContent";

interface StateProps {
  crewId: string;
}

export const CrewDetailBox = () => {
  const { crewId } = useLocation().state as StateProps;

  const [crewDetail, setCrewDetail] = useState<CrewDetailProps>(crewDetailData);
  const [menu, setMenu] = useState("introduction");

  useEffect(() => {
    //crewId를 활용한 api 호출
    //setCrewDetail();
  }, [crewId]);

  const setMenuIntroduction = () => {
    setMenu("introduction");
  };
  // TODO: 추후 결정되는 메뉴 종류에 따라 Renaming
  const setMenu2 = () => {
    setMenu("menu2");
  };
  const setMenu3 = () => {
    setMenu("menu3");
  };

  return (
    <div className="detail-box__container">
      <div className="detail-info__container--image">
        <img src={crewDetail.logo} alt="detail" className="detail-info__image" />
      </div>
      <div className="detail-info__container--basic">
        <div>
          <span className="detail-info__span--main">{crewDetail.name}</span>
        </div>
        <div>
          <span className="detail-info__span--amount">{crewDetail.amount}명</span>
        </div>
        <div>
          <span className="detail-info__span--flexible">임시</span>
        </div>
      </div>
      <div className="detail-info__container--deep">
        <div className="detail-menu__container">
          <div>
            <span onClick={setMenuIntroduction} className={classNames({ isShow: menu === "introduction" })}>
              소개
            </span>
          </div>
          <div>
            <span onClick={setMenu2} className={classNames({ isShow: menu === "menu2" })}>
              메뉴2
            </span>
          </div>
          <div>
            <span onClick={setMenu3} className={classNames({ isShow: menu === "menu3" })}>
              메뉴3
            </span>
          </div>
        </div>
        <div className="detail-content__container">
          <CrewDetailContent menu={menu} crewIntroduction={crewDetail.introduction} />
        </div>
      </div>
    </div>
  );
};
