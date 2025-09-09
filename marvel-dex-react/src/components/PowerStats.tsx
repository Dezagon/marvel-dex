import type { Character } from "../typescripts/types";
import { determineBackgroundColor } from "../typescripts/functions";

type PowerStatsProps = {
  character: Character;
};

type Stat = {
  label: string;
  bgColor: string;
  stat: number | null;
};

export const PowerStats: React.FC<PowerStatsProps> = ({ character }) => {
  const characterStats: Stat[] = [
    {
      label: "INTELLIGENCE",
      bgColor: determineBackgroundColor(character.powerstats.intelligence),
      stat: character.powerstats.intelligence,
    },
    {
      label: "DURABILITY",
      bgColor: determineBackgroundColor(character.powerstats.durability),
      stat: character.powerstats.durability,
    },
    {
      label: "COMBAT",
      bgColor: determineBackgroundColor(character.powerstats.combat),
      stat: character.powerstats.combat,
    },
    {
      label: "POWER",
      bgColor: determineBackgroundColor(character.powerstats.power),
      stat: character.powerstats.power,
    },
    {
      label: "SPEED",
      bgColor: determineBackgroundColor(character.powerstats.speed),
      stat: character.powerstats.speed,
    },
    {
      label: "STRENGTH",
      bgColor: determineBackgroundColor(character.powerstats.strength),
      stat: character.powerstats.strength,
    },
  ];
  return (
    <div className="flex flex-col w-screen md:w-[60vw] mt-5">
      {/* // <div className="flex flex-col w-screen md:w-[60vw] md:grow mt-5"> */}
      {characterStats.map((stat: Stat) => (
        <div className="flex mb-1">
          <div className="text-2xl md:text-3xl md:bg-[url('/powerstatsSVG.png')] md:shrink md:w-[50%] md:object-cover md:self-start md:bg-no-repeat md:pl-2 absolute md:z-[5]">
            {stat.label}
          </div>
          <div className="flex h-10 pl-60 md:pl-82 md:w-full text-2xl" style={{ width: `${stat.stat}%`, backgroundColor: `${stat.bgColor}` }}>
            {stat.stat == null ? "UNKNOWN" : stat.stat}
          </div>
        </div>
      ))}
    </div>
  );
};
