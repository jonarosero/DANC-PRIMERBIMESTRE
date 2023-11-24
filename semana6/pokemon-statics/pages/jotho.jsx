import DefaultLayout from "@/layouts/default";
import { CardAllPokemons } from "../components/pokemon";
export default function JohtoRegion ({pokemonList}) {
  return (
    <DefaultLayout>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 justify-center">
          {pokemonList.map((pokemon)=>{
            const id = pokemon.url.split("/")[6];
            
            return(
              
              <div key={id}>
                <CardAllPokemons pokemon={pokemon.name} id={id}></CardAllPokemons>
                
              </div>
            )
          })}
        </div>
    </DefaultLayout>
  )
}

export const getStaticProps = async ()=>{
  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151');
    const data = await response.json()

    const pokemonList = data.results;

    return {
      props: {
        pokemonList
      }
    }
  }catch(error){
    console.error('Error al obtener datos de la PokeAPI: ', error.message);

    return{
      props:{
        pokemonList:[]
      }
    }
  }
  
}