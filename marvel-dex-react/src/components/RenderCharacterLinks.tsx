import { Link } from "react-router-dom";
import { formatCharacterNames } from "../typescripts/functions";
import type { Character } from "../typescripts/types";

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
          <Link
            key={index}
            to={`/character/${formatCharacterNames(character.name)}`}
            onClick={() => handleClick(character)}
            className="w-[40vw] shrink border border-[#E62429] mb-6 md:w-[15%]"
          >
            <img src={character.image.url} className="w-full aspect-[1/2] object-cover" />
            <p className="color-white text-2xl">{character.name}</p>
          </Link>
        ))}
    </section>
  );
};
