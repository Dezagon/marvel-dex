import type { Character } from "../types";

type PowerStatsProps = {
  character: Character;
};

type Stat = {
  label: string;
  bgColor: string;
  stat: string;
};

export const PowerStats: React.FC<PowerStatsProps> = ({ character }) => {
  const characterStats: Stat[] = [
    {
      label: "INTELLIGENCE",
      bgColor: "#129003",
      stat: character.powerstats.intelligence,
    },
    {
      label: "DURABILITY",
      bgColor: "#B0D033",
      stat: character.powerstats.durability,
    },
    {
      label: "COMBAT",
      bgColor: "#E3D402",
      stat: character.powerstats.combat,
    },
    {
      label: "POWER",
      bgColor: "#E99001",
      stat: character.powerstats.power,
    },
    {
      label: "SPEED",
      bgColor: "#FF4A4A",
      stat: character.powerstats.speed,
    },
    {
      label: "STRENGTH",
      bgColor: "#FF4A4A",
      stat: character.powerstats.strength,
    },
  ];
  return (
    <div className="flex flex-col w-[60vw] mt-5">
      {characterStats.map((stat: Stat) => (
        <div className="flex mb-1">
          <div className="text-3xl bg-[url('/powerstatsSVG.png')] w-[50%] bg-no-repeat pl-2 absolute z-[5]">{stat.label}</div>
          <div className="h-10 pl-82 text-2xl" style={{ width: `${stat.stat}%`, backgroundColor: `${stat.bgColor}` }}>
            {stat.stat}
          </div>
        </div>
      ))}
    </div>
  );
};
