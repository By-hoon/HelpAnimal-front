import { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import QuillEditor from "./QuillEditor";
import InputTitles from "./InputTitles";
import { recruitmentEditData } from "../test/data";

export const RecruitmentCreateForm = () => {
  const [images, setImages] = useState<Array<string>>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesParagraph, setImagesParagraph] = useState("");
  const [name, setName] = useState("");
  const [recruitType, setRecruitType] = useState("crew");
  const [content, setContent] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [participantAmount, setParticipantAmount] = useState(2);
  const [recruitMethod, setRecruitMethod] = useState("firstCome");

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

  const deleteCurrentImage = () => {
    const ok = window.confirm("현재 사진을 삭제하시겠습니까?");
    if (ok) {
      images.splice(currentImage, 1);
    }
  };

  const initializeIamges = () => {
    const ok = window.confirm("추가된 이미지를 초기화 하시겠습니까?");
    if (ok) {
      setImages([]);
    }
  };

  const onNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onAnimalTypeChange = useCallback((e) => {
    setAnimalType(e.target.value);
  }, []);

  const onParticipantAmount = useCallback((e) => {
    setParticipantAmount(e.target.value);
  }, []);

  const onChangeRecruitType = useCallback((e) => {
    setRecruitType(e.target.value);
  }, []);

  const onChangeRecruitMethod = useCallback((e) => {
    setRecruitMethod(e.target.value);
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    images.map((file) => URL.revokeObjectURL(file));
    console.log(content);
    //공고 생성 api 호출
  };

  const encodeFileToBase64 = (fileBlobs: FileList) => {
    const filesArray = Array.from(fileBlobs).map((file) => URL.createObjectURL(file));

    setImages((prevImages) => prevImages.concat(filesArray));
  };

  return (
    <div className="form__container">
      <form onSubmit={onSubmit}>
        <InputTitles title={"공고 사진"} />
        <div className="recruitment-images__container">
          {images.length > 0 && (
            <img src={images[currentImage]} alt="recruitment-images" className="recruitment-images__image" />
          )}
          <div className="preview-span__container">
            <span>미리 보기</span>
          </div>
          <div className="image-buttons__container">
            <div className="image-button__container pointer" onClick={showLeftImage}>
              <Icon icon="ant-design:left-outlined" />
            </div>
            <div className="image-button__container pointer" onClick={showRightImage}>
              <Icon icon="ant-design:right-outlined" />
            </div>
          </div>
        </div>
        <div className="recruitment-images-button__container">
          <div>
            <p className="recruitment-images-input__p">{imagesParagraph}</p>
            <label className="recruitment-images__input" htmlFor="input-file">
              {images.length > 0 ? (
                <span className="recruitment-images-input__span pointer">추가 선택</span>
              ) : (
                <span className="recruitment-images-input__span pointer">사진 선택</span>
              )}
            </label>
            <span
              className="recruitment-images-input__span pointer"
              onClick={deleteCurrentImage}
              onMouseOver={() => setImagesParagraph("현재 이미지를 삭제합니다.")}
              onMouseLeave={() => setImagesParagraph("")}
            >
              삭제
            </span>
            <span
              className="recruitment-images-input__span pointer"
              onClick={initializeIamges}
              onMouseOver={() => setImagesParagraph("추가된 이미지를 초기화합니다.")}
              onMouseLeave={() => setImagesParagraph("")}
            >
              초기화
            </span>
          </div>

          <input
            type="file"
            id="input-file"
            multiple
            onChange={(e) => {
              e.preventDefault();
              if (e.currentTarget.files !== null) {
                const fileBlobs = e.currentTarget.files;
                encodeFileToBase64(fileBlobs);
              }
            }}
            className="display-none"
          />
        </div>
        <InputTitles title={"공고 이름"} />
        <div className="name-input__container">
          <input
            value={name}
            onChange={onNameChange}
            type="text"
            placeholder="공고 이름"
            minLength={2}
            className="name__input"
          />
        </div>
        <InputTitles title={"공고 유형"} />
        <div className="recruit-type__container">
          <div>
            <input
              type="radio"
              name="recruit-type"
              value="crew"
              id="crew"
              checked={recruitType === "crew"}
              onChange={onChangeRecruitType}
            />
            <label htmlFor="crew">크루</label>
          </div>
          <div>
            <input
              type="radio"
              name="recruit-type"
              value="personal"
              id="personal"
              checked={recruitType === "personal"}
              onChange={onChangeRecruitType}
            />
            <label htmlFor="personal">개인</label>
          </div>
        </div>
        <InputTitles title={"동물 종류"} />
        <div className="animal-type__container">
          <input
            value={animalType}
            onChange={onAnimalTypeChange}
            type="text"
            placeholder="동물 종류"
            className="animal-type__input"
          />
        </div>
        <InputTitles title={"모집 인원"} />
        <div className="participant-amount__container">
          <input
            value={participantAmount}
            onChange={onParticipantAmount}
            type="number"
            placeholder="인원수 입력"
            className="participant-amount__input"
            min="2"
            max="399"
          />
        </div>
        <InputTitles title={"선발 방식"} />
        <div className="recruit-method__container">
          <div>
            <input
              type="radio"
              name="recruit-method"
              value="firstCome"
              id="firstCome"
              checked={recruitMethod === "firstCome"}
              onChange={onChangeRecruitMethod}
            />
            <label htmlFor="firstCome">선착순</label>
          </div>
          <div>
            <input
              type="radio"
              name="recruit-method"
              value="choice"
              id="choice"
              checked={recruitMethod === "choice"}
              onChange={onChangeRecruitMethod}
            />
            <label htmlFor="choice">추첨</label>
          </div>
        </div>
        <InputTitles title={"공고 내용"} />
        <div className="text-editor__container">
          <QuillEditor setContent={setContent} />
        </div>
        <div className="submit__container">
          <input type="submit" value="공고 생성" />
        </div>
      </form>
    </div>
  );
};

export const RecruitmentEditForm = () => {
  const [images, setImages] = useState<Array<string>>(recruitmentEditData.imageUrl);
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesParagraph, setImagesParagraph] = useState("");
  const [name, setName] = useState(recruitmentEditData.name);
  const [recruitType, setRecruitType] = useState(recruitmentEditData.recruitmentType);
  const [content, setContent] = useState("");
  const [animalType, setAnimalType] = useState(recruitmentEditData.animalType);
  const [participantAmount, setParticipantAmount] = useState(recruitmentEditData.participant);
  const [recruitMethod, setRecruitMethod] = useState(recruitmentEditData.recruitmentMethod);

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

  const deleteCurrentImage = () => {
    const ok = window.confirm("현재 사진을 삭제하시겠습니까?");
    if (ok) {
      images.splice(currentImage, 1);
    }
  };

  const initializeIamges = () => {
    const ok = window.confirm("추가된 이미지를 초기화 하시겠습니까?");
    if (ok) {
      setImages([]);
    }
  };

  const onNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onAnimalTypeChange = useCallback((e) => {
    setAnimalType(e.target.value);
  }, []);

  const onParticipantAmount = useCallback((e) => {
    setParticipantAmount(e.target.value);
  }, []);

  const onChangeRecruitType = useCallback((e) => {
    setRecruitType(e.target.value);
  }, []);

  const onChangeRecruitMethod = useCallback((e) => {
    setRecruitMethod(e.target.value);
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    images.map((file) => URL.revokeObjectURL(file));
    console.log(content);
    //공고 생성 api 호출
  };

  const encodeFileToBase64 = (fileBlobs: FileList) => {
    const filesArray = Array.from(fileBlobs).map((file) => URL.createObjectURL(file));

    setImages((prevImages) => prevImages.concat(filesArray));
  };

  return (
    <div className="form__container">
      <form onSubmit={onSubmit}>
        <InputTitles title={"공고 사진"} />
        <div className="recruitment-images__container">
          {images.length > 0 && (
            <img src={images[currentImage]} alt="recruitment-images" className="recruitment-images__image" />
          )}
          <div className="preview-span__container">
            <span>미리 보기</span>
          </div>
          <div className="image-buttons__container">
            <div className="image-button__container pointer" onClick={showLeftImage}>
              <Icon icon="ant-design:left-outlined" />
            </div>
            <div className="image-button__container pointer" onClick={showRightImage}>
              <Icon icon="ant-design:right-outlined" />
            </div>
          </div>
        </div>
        <div className="recruitment-images-button__container">
          <div>
            <p className="recruitment-images-input__p">{imagesParagraph}</p>
            <label className="recruitment-images__input" htmlFor="input-file">
              {images.length > 0 ? (
                <span className="recruitment-images-input__span pointer">추가 선택</span>
              ) : (
                <span className="recruitment-images-input__span pointer">사진 선택</span>
              )}
            </label>
            <span
              className="recruitment-images-input__span pointer"
              onClick={deleteCurrentImage}
              onMouseOver={() => setImagesParagraph("현재 이미지를 삭제합니다.")}
              onMouseLeave={() => setImagesParagraph("")}
            >
              삭제
            </span>
            <span
              className="recruitment-images-input__span pointer"
              onClick={initializeIamges}
              onMouseOver={() => setImagesParagraph("추가된 이미지를 초기화합니다.")}
              onMouseLeave={() => setImagesParagraph("")}
            >
              초기화
            </span>
          </div>

          <input
            type="file"
            id="input-file"
            multiple
            onChange={(e) => {
              e.preventDefault();
              if (e.currentTarget.files !== null) {
                const fileBlobs = e.currentTarget.files;
                encodeFileToBase64(fileBlobs);
              }
            }}
            className="display-none"
          />
        </div>
        <InputTitles title={"공고 이름"} />
        <div className="name-input__container">
          <input
            value={name}
            onChange={onNameChange}
            type="text"
            placeholder="공고 이름"
            minLength={2}
            className="name__input"
          />
        </div>
        <InputTitles title={"모집 인원"} />
        <div className="participant-amount__container">
          <input
            value={participantAmount}
            onChange={onParticipantAmount}
            type="number"
            placeholder="인원수 입력"
            className="participant-amount__input"
            min="2"
            max="399"
          />
        </div>
        <InputTitles title={"공고 내용"} />
        <div className="text-editor__container">
          <QuillEditor initialValue={recruitmentEditData.content} setContent={setContent} />
        </div>
        <div className="submit__container">
          <input type="submit" value="공고 수정" />
        </div>
      </form>
    </div>
  );
};
