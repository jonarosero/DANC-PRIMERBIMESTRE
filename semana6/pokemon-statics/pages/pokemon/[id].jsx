import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CardOnePokemon } from "../../components/pokemon";
import { DetailsOnePokemon } from "../../components/pokemon/detailsOnePokemon";

const PokemonDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      if (id) {
        const info = await getPokemonInfo(id);
        setPokemonInfo(info);
      }
    };

    fetchPokemonInfo();
  }, [id]);

  
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 justify-center" key={id}>
      {pokemonInfo ? (
          <CardOnePokemon id={id} type={pokemonInfo.types[0]}></CardOnePokemon>
        ) : (
          <p>Cargando...</p>
        )}
      {pokemonInfo ? (
          <DetailsOnePokemon pokemon={pokemonInfo}></DetailsOnePokemon>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
        
    </DefaultLayout>
  ) 
}

export default PokemonDetail

const getPokemonInfo = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const pokemonInfo = {
      number: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map((type) => type.type.name),
      abilities: data.abilities.map((ability) => ability.ability.name),
      stats: data.stats
    };

    return pokemonInfo;
  } catch (error) {
    console.error('Error al obtener datos del Pokémon: ', id, error.message);
    return null;
  }
};