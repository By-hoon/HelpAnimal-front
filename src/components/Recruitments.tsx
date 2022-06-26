import { useState } from "react";
import { RecruitmentProps } from "../shared/Props";
import { recruitmentsData } from "../test/data";
import RecruitmentCard from "./RecruitmentCard";

const Recruitments = () => {
  const [recruitments, setRecruitments] = useState(recruitmentsData[0]);

  return (
    <div className="recruiment__container">
      <div className="recruiment-list__container">
        {recruitments.map((recruitment: RecruitmentProps) => (
          <RecruitmentCard key={recruitment.id} recruitment={recruitment} />
        ))}
      </div>
    </div>
  );
};
export default Recruitments;
