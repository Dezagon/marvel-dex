import type { Character } from "../typescripts/types";

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
    <div className="flex flex-col w-screen md:w-[60vw] mt-5">
      {characterStats.map((stat: Stat) => (
        <div className="flex mb-1">
          <div className="text-2xl md:text-3xl md:bg-[url('/powerstatsSVG.png')] md:w-[50%] md:bg-no-repeat md:pl-2 absolute md:z-[5]">
            {stat.label}
          </div>
          <div className="flex self-center h-10 pl-60 md:pl-82 text-2xl" style={{ width: `${stat.stat}%`, backgroundColor: `${stat.bgColor}` }}>
            {stat.stat}
          </div>
        </div>
      ))}
    </div>
  );
};
