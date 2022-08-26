export interface UserProps {
  id: string;
  name: string;
  nickname: string;
  email: string;
  profileImage: string;
  introduction: string;
  createDate: number;
  crewIds: Array<string>;
  recruitmentIds: Array<string>;
}

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