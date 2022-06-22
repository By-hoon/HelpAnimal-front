interface CrewDetailContentProps {
  menu: string;
  crewIntroduction: string;
}

export const CrewDetailContent = ({ menu, crewIntroduction }: CrewDetailContentProps) => {
  const Render = () => {
    switch (menu) {
      case "introduction": {
        return <p>{crewIntroduction}</p>;
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
