// import { useState } from "react";
import type { Character } from "../types";
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
      {" "}
      <div className="w-full flex justify-evenly">
        <div className="w-[20%]">
          {/* Search by name */}
          {/* <SearchBar placeholder={"Search by name..."} handleClick={setSearchValue} value={searchValue} /> */}
        </div>
        <div>{/* Search by comic */}</div>
      </div>
      {/* Characters */}
      {/* <section className="w-[90vw] flex flex-wrap justify-evenly">
        {characters
          .filter((character: Character) => character.biography.alignment == "good")
          .map((character: Character, index: number) => (
            <Link key={index} to={`/character/${formatCharacterNames(character.name)}`} onClick={() => handleClick(character)} className="w-[15%]">
              <img src={character.image.url} className="w-full m-2" />
              <p className="color-white text-2xl">{character.name}</p>
            </Link>
          ))}
      </section> */}
      <RenderCharacterLinks characters={characters} alignment={"good"} handleClick={handleClick} />
    </main>
  );
};
