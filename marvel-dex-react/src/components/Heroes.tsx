// import { useState } from "react";
import type { Character } from "../typescripts/types";
// import { Link } from "react-router-dom";
// import { formatCharacterNames } from "../functions";
// import { SearchBar } from "./SearchBar";
import { RenderCharacterLinks } from "./RenderCharacterLinks";

type HeroesProps = {
  characters: Character[];
  handleClick: (character: Character) => void;
};

export const Heroes: React.FC<HeroesProps> = ({ characters, handleClick }) => {
  // const [searchValue, setSearchValue] = useState<string>("");

  return (
    <main className="bg-black w-screen color-white flex flex-col items-center mt-5">
      <RenderCharacterLinks characters={characters} alignment={"good"} handleClick={handleClick} />
    </main>
  );
};
