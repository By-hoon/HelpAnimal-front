import { useState } from "react";
import { RecruitmentProps } from "../shared/Props";
import { recruitmentsData } from "../test/data";
import RecruitmentCard from "./RecruitmentCard";

const Recruitments = () => {
  const [recruitments, setRecruitments] = useState(recruitmentsData[0]);

  return (
    <div className="crew__container">
      <div className="recruiments__container">
        {recruitments.map((recruitment: RecruitmentProps) => (
          <RecruitmentCard key={recruitment.id} recruitment={recruitment} />
        ))}
      </div>
    </div>
  );
};
export default Recruitments;
