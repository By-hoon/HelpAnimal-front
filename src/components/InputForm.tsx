import { useCallback, useState } from "react";

export const CrewCreateForm = () => {
  const [logoSrc, setLogoSrc] = useState("");
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
  };

  const encodeFileToBase64 = (fileBlob: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setLogoSrc(reader.result as string);
        resolve();
      };
    });
  };

  return (
    <div className="form__container">
      <form onSubmit={onSubmit}>
        <div className="logo-preview__container">
          {logoSrc && (
            <img
              src={logoSrc}
              alt="logo-preview"
              className="logo-preview__image"
            />
          )}
        </div>
        <div>
          <input
            type="file"
            onChange={(e) => {
              if (e.currentTarget.files !== null) {
                encodeFileToBase64(e.currentTarget.files[0]);
              }
            }}
            className="logo-file__input"
          />
        </div>
        <div>
          <input
            value={crewName}
            onChange={onCrewNameChange}
            type="text"
            placeholder="크루 이름 2~8자"
            minLength={2}
            maxLength={8}
            className="crew-name__input"
          />
        </div>
        <div>
          <textarea
            className="description__textarea"
            placeholder="크루 소개"
            value={introduction}
            onChange={onIntroductionChange}
            maxLength={150}
          />
        </div>
        <div>
          <input type="submit" value="크루 생성" />
        </div>
      </form>
    </div>
  );
};
