export interface CrewProps {
  id: string;
  name: string;
  logo: string;
  introduction: string;
  amount: number;
}

export interface CrewDetailProps {
  crewDetails: Record<string, any>;
}
