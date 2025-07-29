// import { useState, useEffect } from "react";
import type { Character } from "../types";
// import { Link } from "react-router-dom";
import { RenderCharacterLinks } from "./RenderCharacterLinks";
// import { formatCharacterNames } from "../functions";

type VillainsProps = {
  characters: Character[];
  handleClick: (character: Character) => void;
};

export const Villains: React.FC<VillainsProps> = ({ characters, handleClick }) => {
  // const [count, setCount] = useState(0);

  return (
    <main className="bg-black w-screen color-white flex flex-col items-center">
      {/* Search Bar */}
      <div>
        <div>{/* Search by name */}</div>
        <div>{/* Search by comic */}</div>
      </div>
      {/* Characters */}
      {/* <section className="w-[90vw] flex flex-wrap justify-evenly">
        {characters
          .filter((character: Character) => character.biography.alignment == "bad")
          .map((character: Character, index: number) => (
            <Link key={index} to={`/character/${formatCharacterNames(character.name)}`} onClick={() => handleClick(character)} className="w-[15%]">
              <img src={character.image.url} className="w-full m-2" />
              <p className="color-white text-2xl">{character.name}</p>
            </Link>
          ))}
      </section> */}

      <RenderCharacterLinks characters={characters} alignment={"bad"} handleClick={handleClick} />
    </main>
  );
};
