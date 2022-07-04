import { useEffect, useState } from "react";
import { CrewProps } from "../shared/Props";
import { CrewsData } from "../test/data";
import CrewCard from "./CrewCard";

const Crews = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [crews, setCrews] = useState([]);
  const [lastCrew, setLastCrew] = useState<HTMLAnchorElement | null>();

  const onIntersect: IntersectionObserverCallback = (playlists, observer) => {
    playlists.forEach((playlist) => {
      if (playlist.isIntersecting) {
        if (CrewsData[pageIndex + 1]) {
          setPageIndex(pageIndex + 1);
        }
        observer.unobserve(playlist.target);
      }
    });
  };

  useEffect(() => {
    setCrews(crews.concat(CrewsData[pageIndex]));
  }, [pageIndex]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastCrew) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastCrew);
    }
    return () => observer && observer.disconnect();
  }, [lastCrew]);

  return (
    <div className="crew__container">
      <div className="crew-list__container">
        {crews.map((crew: CrewProps) => (
          <CrewCard key={crew.id} crew={crew} setLastCrew={setLastCrew} />
        ))}
      </div>
    </div>
  );
};

export default Crews;
