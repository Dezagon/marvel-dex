import { Link } from "react-router-dom";
import { formatCharacterNames } from "../functions";
import type { Character } from "../types";

type RenderCharacterLinksProps = {
  characters: Character[];
  alignment: string;
  handleClick: (character: Character) => void;
};

export const RenderCharacterLinks: React.FC<RenderCharacterLinksProps> = ({ characters, alignment, handleClick }) => {
  return (
    <section className="w-[90vw] flex flex-wrap justify-evenly mt-5">
      {characters
        .filter((character: Character) => {
          if (character.biography.alignment == alignment) {
            return character;
          }
        })
        .map((character: Character, index: number) => (
          <Link key={index} to={`/character/${formatCharacterNames(character.name)}`} onClick={() => handleClick(character)} className="w-[15%]">
            {character.image.url ? <img src={character.image.url} className="h-[75%] m-2" /> : <div>image not found in database</div>}
            {/* <img src={character.image.url} onStalled={() => "Portrait not found in database"} className="h-[75%] m-2" /> */}
            <p className="color-white text-2xl">{character.name}</p>
          </Link>
        ))}
    </section>
  );
};
