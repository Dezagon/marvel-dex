export type startEndForCharIDs = {
  start: number;
  end: number;
};
export type Character = {
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
};

export type Powerstats = {
  intelligence: number | null;
  strength: number | null;
  speed: number | null;
  durability: number | null;
  power: number | null;
  combat: number | null;
};

export type Biography = {
  ["full-name"]: string;
  ["alter-egos"]: string;
  aliases: string[];
  ["place-of-birth"]: string;
  ["first-appearance"]: string;
  alignment: string;
};

export type Appearance = {
  gender: string;
  race: string;
  height: string;
  weight: string;
};

export type Work = {
  occupation: string[];
  base: string;
};

export type Connections = {
  ["group-affiliation"]: string[];
  relatives: string[];
};

export type Image = {
  url: string;
};

// TYPES FOR FORMS
export type SignUpFormType = {
  username: string;
  fullName: string;
  password: string;
};

export type LoginFormType = {
  username: string;
  password: string;
};

export type Token = {
  token: string;
  bearer: string;
};
