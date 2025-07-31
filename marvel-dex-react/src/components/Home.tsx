// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Character } from "../typescripts/types";
import { formatCharacterNames, randomIndex } from "../typescripts/functions";

type HomeProps = {
  characters: Character[];
  handleClick: (character: Character) => void;
};
export const Home: React.FC<HomeProps> = ({ characters, handleClick }) => {
  const randomIndexPoints: number[] = randomIndex(characters.length);
  return (
    <main className="bg-black color-white flex flex-col items-center w-screen">
      <h2 className="w-full text-center text-2xl md:text-3xl p-2 font-orbitron font-bold"> Enter the Realm of Power </h2>
      <p className="text-lg text-center p-1 mb-2 w-[95%] md:w-[60vw] md:text-2xl md:p-2 font-orbitron">
        Unleash your senses. Witness the eternal struggle between justice and vengeance. This is MARVEL-DEX, where legends rise and destinies are
        rewritten
      </p>
      {/* CUSTOM RENDERING OF CHARACTERS */}
      <p className="text-2xl mb-2">Quick start</p>
      <section className="flex flex-wrap justify-evenly w-[95%] md:w-[90%]">
        {characters.slice(randomIndexPoints[0], randomIndexPoints[1]).map((character: Character, index: number) => (
          // USE TRANSFORM FOR CUSTOM CAROUSEL
          <Link
            key={index}
            to={`/character/${formatCharacterNames(character.name)}`}
            onClick={() => handleClick(character)}
            className="w-[40vw] shrink mb-4 border border-[#E62429] md:w-[10%] md:mb-0"
          >
            <img src={character.image.url} className="w-full md:aspect-[1/2] md:object-cover" />
            <p className="text-lg w-full color-white md:w-full md:text-lg">{character.name}</p>
          </Link>
        ))}
      </section>
    </main>
  );
};
