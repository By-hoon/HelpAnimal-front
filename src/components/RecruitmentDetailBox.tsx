import FloatingMenu from "./FloatingMenu";
import { recruitmentDetailData } from "../test/data";
import { useState } from "react";
import { Icon } from "@iconify/react";

const RecruitmentDetailBox = () => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <>
      <div className="recruitment-detail__container">
        <div className="recruitment-detail-images__container">
          <img
            src={recruitmentDetailData.imageUrl[currentImage]}
            alt="recruitment-images"
            className="recruitment-detail__image"
          />
          <div className="recruitment-detail-image-buttons__container">
            <div className="recruitment-detail-image-button__container pointer">
              <Icon icon="ant-design:left-outlined" />
            </div>
            <div className="recruitment-detail-image-button__container pointer">
              <Icon icon="ant-design:right-outlined" />
            </div>
          </div>
        </div>
        <div className="recruitment-detail-header__container">
          <div className="recruitment-detail-title__container">
            <p className="recruitment-detail-name__p">{recruitmentDetailData.name}</p>
            <div className="recruitment-detail-subs__container">
              <span className="recruitment-detail-author__span">{recruitmentDetailData.author}</span>
              <span className="recruitment-detail-type__span">[{recruitmentDetailData.recruitmentType}]</span>
              <span className="recruitment-detail-participant__span">
                | {recruitmentDetailData.participant}
              </span>
              <span className="recruitment-detail-method__span">
                {recruitmentDetailData.recruitmentMethod}
              </span>
            </div>
          </div>
          <div className="recruitment-detail-animal__container">
            <span className="recruitment-detail-animal__span">{recruitmentDetailData.animalType}</span>
          </div>
        </div>
        <div className="recruitment-detail-content__container">
          <div dangerouslySetInnerHTML={{ __html: recruitmentDetailData.content }} />
        </div>
      </div>
      <FloatingMenu />
    </>
  );
};

export default RecruitmentDetailBox;
