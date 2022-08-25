interface CrewDetailContentProps {
  menu: string;
  introduction: string;
}

export const CrewDetailContent = ({ menu, introduction }: CrewDetailContentProps) => {
  const Render = () => {
    switch (menu) {
      case "introduction": {
        return <p>{introduction}</p>;
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

export const UserDetailContent = ({ menu, introduction }: CrewDetailContentProps) => {
  const Render = () => {
    switch (menu) {
      case "introduction": {
        return <p>{introduction}</p>;
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
