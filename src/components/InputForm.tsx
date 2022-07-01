import { useCallback, useEffect, useState } from "react";
import { crewEditData } from "../test/data";
import { useLocation } from "react-router-dom";

interface StateProps {
  crewId: string;
}

export const CrewCreateForm = () => {
  const [logoSrc, setLogoSrc] = useState("");
  const [logoName, setLogoName] = useState("파일 선택");
  const [crewName, setCrewName] = useState("");
  const [introduction, setIntroduction] = useState("");

  const onCrewNameChange = useCallback((e) => {
    setCrewName(e.target.value);
  }, []);

  const onIntroductionChange = useCallback((e) => {
    setIntroduction(e.target.value);
  }, []);

  const onSubmit = () => {
    alert(`${crewName}크루 생성이 완료되었습니다.`);
    //crew 생성 api 호출
  };

  const encodeFileToBase64 = (fileBlob: Blob, fileName: string) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setLogoSrc(reader.result as string);
        setLogoName(fileName);
        resolve();
      };
    });
  };

  return (
    <div className="form__container">
      <form onSubmit={onSubmit}>
        <div className="logo-preview__container">
          {logoSrc && <img src={logoSrc} alt="logo-preview" className="logo-preview__image" />}
          <div className="preview-span__container">
            <span>미리 보기</span>
          </div>
        </div>
        <div className="logo-file__container">
          <label className="logo-file__input" htmlFor="input-file">
            <div>
              <span className="file-input__span">{logoName}</span>
            </div>
          </label>
          <input
            type="file"
            id="input-file"
            onChange={(e) => {
              if (e.currentTarget.files !== null) {
                const fileBlob = e.currentTarget.files[0];
                const fileName = e.currentTarget.files[0].name;
                encodeFileToBase64(fileBlob, fileName);
              }
            }}
            className="display-none"
          />
        </div>
        <div className="name-input__container">
          <input
            value={crewName}
            onChange={onCrewNameChange}
            type="text"
            placeholder="크루 이름 2~8자"
            minLength={2}
            maxLength={8}
            className="name__input"
          />
        </div>
        <div className="description-textarea__container">
          <textarea
            className="description__textarea"
            placeholder="크루 소개"
            value={introduction}
            onChange={onIntroductionChange}
            maxLength={150}
          />
        </div>
        <div className="submit__container">
          <input type="submit" value="크루 생성" />
        </div>
      </form>
    </div>
  );
};

export const CrewEditForm = () => {
  const { crewId } = (useLocation().state as StateProps) || "tempCrewId";

  const [logoSrc, setLogoSrc] = useState(crewEditData.logo);
  const [logoName, setLogoName] = useState("새로운 파일 선택");
  const [crewName, setCrewName] = useState(crewEditData.name);
  const [introduction, setIntroduction] = useState(crewEditData.introduction);

  useEffect(() => {
    //crewId를 활용한 api 호출
    //setLogoSrc();
    //setCrewName();
    //setIntroduction();
  }, [crewId]);

  const onCrewNameChange = useCallback((e) => {
    setCrewName(e.target.value);
  }, []);

  const onIntroductionChange = useCallback((e) => {
    setIntroduction(e.target.value);
  }, []);

  const onSubmit = () => {
    alert(`정보 수정이 완료되었습니다.`);
    //crew 정보 수정 api 호출
  };

  const encodeFileToBase64 = (fileBlob: Blob, fileName: string) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setLogoSrc(reader.result as string);
        setLogoName(fileName);
        resolve();
      };
    });
  };

  return (
    <div className="form__container">
      <form onSubmit={onSubmit}>
        <div className="logo-preview__container">
          {logoSrc && <img src={logoSrc} alt="logo-preview" className="logo-preview__image" />}
          <div className="preview-span__container">
            <span>미리 보기</span>
          </div>
        </div>
        <div className="logo-file__container">
          <label className="logo-file__input" htmlFor="input-file">
            <div>
              <span className="file-input__span">{logoName}</span>
            </div>
          </label>
          <input
            type="file"
            id="input-file"
            onChange={(e) => {
              if (e.currentTarget.files !== null) {
                const fileBlob = e.currentTarget.files[0];
                const fileName = e.currentTarget.files[0].name;
                encodeFileToBase64(fileBlob, fileName);
              }
            }}
            className="display-none"
          />
        </div>
        <div className="name-input__container">
          <input
            value={crewName}
            onChange={onCrewNameChange}
            type="text"
            placeholder="크루 이름 2~8자"
            minLength={2}
            maxLength={8}
            className="name__input"
          />
        </div>
        <div className="description-textarea__container">
          <textarea
            className="description__textarea"
            placeholder="크루 소개"
            value={introduction}
            onChange={onIntroductionChange}
            maxLength={150}
          />
        </div>
        <div className="submit__container">
          <input type="submit" value="정보 수정" />
        </div>
      </form>
    </div>
  );
};

/*------------------------------------------------------------------------------------------------*/

export const RecruitmentCreateForm = () => {
  const [images, setImages] = useState<Array<string>>([]);
  const [name, setName] = useState("");
  const [recruitType, setRecruitType] = useState("crew");
  const [content, setContent] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [participantAmount, setParticipantAmount] = useState(2);
  const [recruitMethod, setRecruitMethod] = useState("choice");

  const onNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onAnimalTypeChange = useCallback((e) => {
    setAnimalType(e.target.value);
  }, []);

  const onContentChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onParticipantAmount = useCallback((e) => {
    if (e.target.value <= 1) {
      alert("인원수는 2명 이상이어야 합니다.");
    } else {
      setParticipantAmount(e.target.value);
    }
  }, []);

  const onChangeRecruitType = useCallback((e) => {
    setRecruitType(e.target.value);
  }, []);

  const onChangeRecruitMethod = useCallback((e) => {
    setRecruitMethod(e.target.value);
  }, []);

  const onSubmit = () => {
    images.map((file) => URL.revokeObjectURL(file));
    //공고 생성 api 호출
  };

  const encodeFileToBase64 = (fileBlobs: FileList) => {
    const filesArray = Array.from(fileBlobs).map((file) => URL.createObjectURL(file));

    setImages((prevImages) => prevImages.concat(filesArray));
  };

  return (
    <div className="form__container">
      <form onSubmit={onSubmit}>
        <div className="logo-preview__container">
          {images.length > 0 && <img src={images[0]} alt="logo-preview" className="logo-preview__image" />}
          <div className="preview-span__container">
            <span>미리 보기</span>
          </div>
        </div>
        <div className="logo-file__container">
          <label className="logo-file__input" htmlFor="input-file">
            <div>
              <span className="recruitment-images-input__span">파일 선택</span>
            </div>
          </label>
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
        <div className="animal-type__container">
          <input
            value={animalType}
            onChange={onAnimalTypeChange}
            type="text"
            placeholder="동물 종류"
            className="animal-type__input"
          />
        </div>
        <div className="participant-amount__container">
          <input
            value={participantAmount}
            onChange={onParticipantAmount}
            type="number"
            placeholder="인원수 입력"
            className="animal-type__input"
          />
        </div>
        <div className="recruit-method__container">
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
        </div>
        <div className="description-textarea__container">
          <textarea
            className="description__textarea"
            placeholder="공고 설명"
            value={content}
            onChange={onContentChange}
            maxLength={150}
          />
        </div>
        <div className="submit__container">
          <input type="submit" value="공고 생성" />
        </div>
      </form>
    </div>
  );
};
