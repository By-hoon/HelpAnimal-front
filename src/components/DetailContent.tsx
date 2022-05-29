interface CrewDetailContentProps {
  menu: string;
  crewDetails: Record<string, any>;
}

export const CrewDetailContent = ({
  menu,
  crewDetails,
}: CrewDetailContentProps) => {
  const Render = () => {
    switch (menu) {
      case "introduction": {
        return <p>{crewDetails.introduction}</p>;
      }
      case "menu2": {
        return <p>menu2</p>;
      }
      case "menu3": {
        return <p>menu3</p>;
      }
    }
    return null;
  };
  return Render();
};
