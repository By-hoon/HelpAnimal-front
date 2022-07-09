import { useEffect, useState } from "react";
import { RecruitmentProps } from "../shared/Props";
import { recruitmentsData } from "../test/data";
import RecruitmentCard from "./RecruitmentCard";

const Recruitments = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [recruitments, setRecruitments] = useState([]);
  const [lastRecruitment, setLastRecruitment] = useState<HTMLAnchorElement | null>();

  const onIntersect: IntersectionObserverCallback = (recruitments, observer) => {
    recruitments.forEach((recruitment) => {
      if (recruitment.isIntersecting) {
        if (recruitmentsData[pageIndex + 1]) {
          setPageIndex(pageIndex + 1);
        }
        observer.unobserve(recruitment.target);
      }
    });
  };

  useEffect(() => {
    setRecruitments(recruitments.concat(recruitmentsData[pageIndex]));
  }, [pageIndex]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastRecruitment) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastRecruitment);
    }
    return () => observer && observer.disconnect();
  }, [lastRecruitment]);

  return (
    <div className="recruiment__container">
      <div className="recruiment-list__container">
        {recruitments.map((recruitment: RecruitmentProps) => (
          <RecruitmentCard
            key={recruitment.id}
            recruitment={recruitment}
            setLastRecruitment={setLastRecruitment}
          />
        ))}
      </div>
    </div>
  );
};
export default Recruitments;
