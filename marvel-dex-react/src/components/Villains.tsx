// import { useState, useEffect } from "react";
import type { Character } from "../typescripts/types";
// import { Link } from "react-router-dom";
import { RenderCharacterLinks } from "./RenderCharacterLinks";
// import { formatCharacterNames } from "../functions";

type VillainsProps = {
  characters: Character[];
  handleClick: (character: Character) => void;
};

export const Villains: React.FC<VillainsProps> = ({ characters, handleClick }) => {
  return (
    <main className="bg-black w-screen color-white flex flex-col items-center mt-5">
      <RenderCharacterLinks characters={characters} alignment={"bad"} handleClick={handleClick} />
    </main>
  );
};
