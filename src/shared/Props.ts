import { NodeArray } from "typescript";

export interface CrewProps {
  id: string;
  name: string;
  logo: string;
  introduction: string;
  amount: number;
}

export interface CrewDetailProps {
  id: string;
  name: string;
  logo: string;
  introduction: string;
  amount: number;
}

export interface RecruitmentProps {
  id: string;
  name: string;
  recruitmentType: string;
  author: string;
  content: string;
  animalType: string;
  participant: number;
  imageUrl: string;
  recruitmentMethod: string;
}
