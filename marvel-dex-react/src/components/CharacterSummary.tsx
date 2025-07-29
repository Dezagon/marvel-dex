// import { useParams } from "react-router-dom";
import type { Character } from "../types";
import { PowerStats } from "./PowerStats";

type CharacterSummaryProps = {
  // characters: Character[];
  character?: Character;
};

export const CharacterSummary: React.FC<CharacterSummaryProps> = ({ character }) => {
  // const powerStatLabels: string[] = ["INTELLIGENCE", "DURABILITY", "COMBAT", "POWER", "SPEED", "STRENGTH"];
  return (
    <main className="bg-black">
      {character ? (
        <main className="flex w-screen">
          {/* Character Image */}
          <img src={character.image.url} className="h-screen object-cover" />

          {/* Section to right of image */}
          <div className="flex flex-col ml-2">
            {/* Character Name */}
            <section>
              <h1 className="text-6xl">{character.name.toUpperCase()}</h1>
            </section>
            {/* Character Biography */}
            <section className="flex bg-[#2A2A2A]">
              <div className="w-[30vw]">
                <div>
                  <span className="text-[#FF4A4A]">FULL NAME:</span> {character.biography["full-name"]}
                </div>
                <div>
                  <span className="text-[#FF4A4A]">ALTER-EGO:</span> {character.biography["alter-egos"]}
                </div>
                <p>
                  <span className="text-[#FF4A4A]">ALIASES:</span> {character.biography.aliases.join(", ")}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">PLACE-OF-BIRTH:</span> {character.biography["place-of-birth"]}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">FIRST-APPEARANCE:</span> {character.biography["first-appearance"]}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">PUBLISHER:</span> {character.biography.publisher}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">ALIGNMENT:</span> {character.biography.alignment}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">GENDER:</span> {character.appearance.gender}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">CLASSIFICATION:</span> {character.appearance.race}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">HEIGHT:</span> {character.appearance.height.join(", ")}
                </p>
                <p>
                  <span className="text-[#FF4A4A]">WEIGHT:</span> {character.appearance.weight.join(", ")}
                </p>
              </div>
              {/* Affiliations and Connections */}
              <div className="w-[30vw]">
                <p>
                  <span className="text-[#FF4A4A]">GROUP-AFFILIATIONS:</span> {character.connections["group-affiliation"]}
                </p>
                <p>
                  {" "}
                  <span className="text-[#FF4A4A]">RELATIVES:</span> {character.connections.relatives}
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
