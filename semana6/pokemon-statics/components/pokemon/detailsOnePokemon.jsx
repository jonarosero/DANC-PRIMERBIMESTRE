import { getTypePokemon } from "./type";
import { Button } from "@nextui-org/react";

export const DetailsOnePokemon = ({ pokemon }) => {
  const primaryType = getTypePokemon(pokemon.types[0]);

  return (
    <div className="lg:pt-0">
      <h1 className="font-bold  uppercase ">
        <span
          className="lg:text-4xl text-2xl"
          style={{
            background: "linear-gradient(45deg, #00b0ff -20%, #a4508b 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          N°{pokemon.number}
        </span>{" "}
        <span
          className="text-6xl"
          style={{
            background: `linear-gradient(45deg, #ffea00 -20%, #ff4444 100%)`,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {pokemon.name}
        </span>
      </h1>

      <p className="mt-8"><span className="text-xl font-bold">Altura:</span> <span className="text-lg">{pokemon.height/10} m</span></p>
      <p ><span className="text-xl font-bold">Peso:</span> <span className="text-lg">{pokemon.weight/10} kg</span></p>
      <p className="mt-4" ><span className="text-xl font-bold">Tipos:</span></p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        
        {
            pokemon.types.map((type)=>{
                const typePokemon = getTypePokemon(type)
                return(<Button className={`bg-gradient-to-br ${typePokemon.backgroundGradient} ${typePokemon.text} font-bold`}>{typePokemon.name}</Button>)
            })
        }

      </div>
      <p className="mt-8" ><span className="text-xl font-bold">Habilidades:</span></p>
      <p ><span className="text-lg capitalize ml-4">{pokemon.abilities.join(", ")}</span></p>

      <p className="mt-4" ><span className="text-xl font-bold">Estadísticas Iniciales:</span></p>
      <div className="grid grid-cols-3  gap-4 mt-4">
        {
            pokemon.stats.map((stat)=>{
                return(<p className="capitalize ml-4">{stat.stat.name}: {stat.base_stat}</p>)
            })
        }
      </div>

    </div>
  );
};
