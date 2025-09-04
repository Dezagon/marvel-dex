// import { useParams } from "react-router-dom";
import type { Character } from "../typescripts/types";
import { PowerStats } from "./PowerStats";
import { handleNull } from "../typescripts/functions";

type CharacterSummaryProps = {
  // characters: Character[];
  character?: Character;
};

export const CharacterSummary: React.FC<CharacterSummaryProps> = ({ character }) => {
  // const powerStatLabels: string[] = ["INTELLIGENCE", "DURABILITY", "COMBAT", "POWER", "SPEED", "STRENGTH"];
  return (
    <main className="bg-black w-screen">
      {character ? (
        <main className="flex flex-col w-full md:flex-row">
          {/* Character Image */}
          <img src={character.image.url} className="w-screen md:w-auto md:h-screen md:object-cover" />

          {/* Section to right of image */}
          <div className="flex flex-col w-screen md:ml-2 md:mr-2 md:grow">
            {/* Character Name */}
            <section>
              <h1 className="text-5xl md:text-6xl">{handleNull(character.name.toUpperCase())}</h1>
            </section>
            {/* Character Biography */}
            <section className="flex flex-col grow md:flex-row md:shrink bg-[#2A2A2A]">
              <div className="w-full md:w-[30vw]">
                <div>
                  <span className="text-[#FF4A4A]">FULL NAME:</span> {handleNull(character.biography["full-name"])}
                </div>
                <div>
                  <span className="text-[#FF4A4A]">ALTER-EGO:</span> {handleNull(character.biography["alter-egos"])}
                </div>
                <p>
                  <span className="text-[#FF4A4A]">ALIASES:</span> {handleNull(character.biography.aliases.join(", "))}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">PLACE-OF-BIRTH:</span> {handleNull(character.biography["place-of-birth"])}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">FIRST-APPEARANCE:</span> {handleNull(character.biography["first-appearance"])}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">ALIGNMENT:</span> {handleNull(character.biography.alignment)}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">GENDER:</span> {handleNull(character.appearance.gender)}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">CLASSIFICATION:</span> {handleNull(character.appearance.race)}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">HEIGHT:</span> {handleNull(character.appearance.height)}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">WEIGHT:</span> {handleNull(character.appearance.weight)}
                </p>
              </div>
              {/* Affiliations and Connections */}
              <div className="w-screen md:w-[30vw]">
                <p>
                  <span className="text-[#FF4A4A]">GROUP-AFFILIATIONS:</span> {handleNull(character.connections["group-affiliation"].join(", "))}
                </p>
                <p>
                  {" "}
                  <span className="text-[#FF4A4A]">RELATIVES:</span> {handleNull(character.connections.relatives.join(", "))}
                </p>
              </div>
            </section>
            {/* POWER STATS SECTION */}
            <PowerStats character={character} />
          </div>
        </main>
      ) : (
        <div className="flex justify-center w-screen text-center m-5">
          <p className="text-3xl">No character information found</p>
        </div>
      )}
    </main>
  );
};
