//CUSTOM FUNCTIONS FOR STRING HANDLING ARE HERE

// import type { Character } from "./types";

// formatCharacterNames RETURNS THE CHARACTER'S NAMES IN "mister-fantastic" FORMAT
export const formatCharacterNames = (name: string): string => {
  if (name.includes(" ")) {
    const separatedName: string[] = name.split(" ");
    return separatedName.join("-").toLowerCase();
  }
  return name.toLowerCase();
};
// console.log(formatCharacterNames("Mister Fantastic"));

// FUNCTION FOR REVERSING THE RESULT OF formatCharacterNames
export const reverseFormattedName = (formattedName: string): string => {
  if (formattedName.includes("-")) {
    const separatedName: string[] = formattedName.split("-");
    return separatedName.map((namePart: string) => namePart[0].toUpperCase).join(" ");
  }
  return formattedName[0].toUpperCase + formattedName.slice(1);
};

// FUNCTION FOR GENERATING A RANDOM INDEX FOR HOME PAGE
export const randomIndex = (maxLength: number): number[] => {
  const min: number = Math.ceil(0);
  const max: number = Math.floor(maxLength - 8);
  const randomStart = Math.floor(Math.random() * (max - min + 1)) + min;
  return [randomStart, randomStart + 8];
};

export const handleNull = (info: string): string => {
  return info == "null" || info == "-" ? "UNKNOWN" : info;
};

export const determineBackgroundColor = (stat: number | null): string => {
  if (stat == null) {
    return "#FF4A4A";
  } else if (stat >= 80) {
    return "#129003";
  } else if (stat >= 65 && Number(stat) <= 79) {
    return "#B0D033";
  } else if (stat >= 35 && Number(stat) <= 64) {
    return "#E3D402";
  } else if (stat >= 25 && Number(stat) <= 34) {
    return "#E99001";
  } else {
    return "#FF4A4A";
  }
};
