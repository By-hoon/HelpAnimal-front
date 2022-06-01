import { CrewEditForm } from "../components/InputForm";
import { crewDetails } from "../test/data";

const CrewEdit = () => {
  return <CrewEditForm crewDetails={crewDetails} />;
};

export default CrewEdit;
