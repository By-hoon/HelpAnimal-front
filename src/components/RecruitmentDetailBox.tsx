import FloatingMenu from "./FloatingMenu";
import { recruitmentDetailData } from "../test/data";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const RecruitmentDetailBox = () => {
  const [images, setImages] = useState<Array<string>>(recruitmentDetailData.imageUrl);
  const [currentImage, setCurrentImage] = useState(0);
  const [isCrew, setIsCrew] = useState(true);

  const navigate = useNavigate();

  const showLeftImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  };

  const showRightImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const goAuthorPage = () => {
    // 데이터 email로 받을 수도 있기 때문에 이후 정해지면 맞춰 수정
    if (isCrew) {
      navigate(`/crew/${recruitmentDetailData.author}`);
    } else {
      navigate(`/user/${recruitmentDetailData.author}`);
    }
  };

  return (
    <>
      <div className="recruitment-detail-box__container">
        <div className="recruitment-detail__container">
          <div className="recruitment-detail-images__container">
            <img src={images[currentImage]} alt="recruitment-images" className="recruitment-detail__image" />
            <img
              src={images[currentImage]}
              alt="recruitment-images"
              className="recruitment-detail__image--background"
            />
            <div className="recruitment-detail-image-buttons__container">
              <div className="recruitment-detail-image-button__container pointer" onClick={showLeftImage}>
                <Icon icon="ant-design:left-outlined" />
              </div>
              <div className="recruitment-detail-image-button__container pointer" onClick={showRightImage}>
                <Icon icon="ant-design:right-outlined" />
              </div>
            </div>
          </div>
          <div className="recruitment-detail-header__container">
            <div className="recruitment-detail-title__container">
              <p className="recruitment-detail-name__p">{recruitmentDetailData.name}</p>
            </div>
            <div className="recruitment-detail-subs__container">
              <span className="recruitment-detail-author__span" onClick={goAuthorPage}>
                {recruitmentDetailData.author}
              </span>
              <span className="recruitment-detail-type__span">{recruitmentDetailData.recruitmentType}</span>
              <span className="recruitment-detail-option__span">|</span>
              <span className="recruitment-detail-option__span">{recruitmentDetailData.participant}</span>
              <span className="recruitment-detail-option__span">
                {recruitmentDetailData.recruitmentMethod}
              </span>
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
      </div>
    </>
  );
};

export default RecruitmentDetailBox;
