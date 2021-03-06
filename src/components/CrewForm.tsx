import { useCallback, useEffect, useState } from "react";
import { crewEditData } from "../test/data";
import { useLocation } from "react-router-dom";
import QuillEditor from "./QuillEditor";
import InputTitles from "./InputTitles";

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
        <InputTitles title={"크루 로고"} />
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
        <InputTitles title={"크루 이름"} />
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
        <InputTitles title={"크루 소개"} />
        <div className="text-editor__container">
          <QuillEditor setContent={setIntroduction} />
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
  const [introduction, setIntroduction] = useState("");

  useEffect(() => {
    //crewId를 활용한 api 호출
    //setLogoSrc();
    //setCrewName();
    //setIntroduction();
  }, [crewId]);

  const onCrewNameChange = useCallback((e) => {
    setCrewName(e.target.value);
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
        <InputTitles title={"크루 로고"} />
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
        <InputTitles title={"크루 이름"} />
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
        <InputTitles title={"크루 소개"} />
        <div className="text-editor__container">
          <QuillEditor initialValue={crewEditData.introduction} setContent={setIntroduction} />
        </div>
        <div className="submit__container">
          <input type="submit" value="정보 수정" />
        </div>
      </form>
    </div>
  );
};
