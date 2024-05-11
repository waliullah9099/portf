export type TService = {
  _id?: string;
  path: string;
  title: string;
  description: string;
};
export type TSkills = {
  _id?: string;
  name: string;
  image: string;
};

export type Inputs = {
  _id?: string;
  name: string;
  email: string;
  subject?: string;
  description: string;
};

export type TEducations = {
  _id?: string;
  name: string;
  icon: string;
  title: string;
  session: string;
};

export type TProject = {
  _id?: string;
  name: string;
  project_type: string;
  image: string;
  live_link: string;
  client_side: string;
  server_side?: string;
  technologies: string;
  description?: string;
};
