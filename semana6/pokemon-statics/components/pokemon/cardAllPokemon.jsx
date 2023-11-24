import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getTypePokemon } from "./type";
import { useRouter } from 'next/router';

export const CardAllPokemons = ({pokemon, id}) =>{
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    const logoURl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
    const router = useRouter();


    const [detail, setDetail] = useState(null);

    useEffect(()=>{
        const fetchPokemonDetail = async ()=>{
            const detailPokemon = await getPokemon(id);
            setDetail(detailPokemon);
        };

        fetchPokemonDetail();
    }, [id]);

    const primaryType = getTypePokemon(detail);
  
    

    return (
        <Card isFooterBlurred className={`w-full h-[300px] col-span-12 sm:col-span-7 bg-gradient-to-br ${primaryType.backgroundGradient}`}>
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Atrápalos a todos</p>
          <h4 className={`${primaryType.text} font-bold font-sm capitalize`}>Tipo: {primaryType.name}</h4>
        </CardHeader>
        <div className="flex items-center justify-center h-[300px] ">
        <Image
          removeWrapper
          isZoomed
          alt={pokemon}
          width="50%"
          height="50%"
          className="z-0 object-cover"
          src={imageUrl}
        /></div>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="pokeball"
              className="rounded-full w-7 h-7"
              src={logoURl}
            />
            <div className="flex flex-col">
              <p className="text-xl font-bold text-white capitalize">{pokemon}</p>
            </div>
          </div>
          <Button color="warning" radius="full" size="xs" className="text-white" onClick={() =>  router.push(`/pokemon/${id}`)}>Ver más</Button>
        </CardFooter>
      </Card>
    )
}

const getPokemon = async (id) =>{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json();
        
        const primaryType = data.types[0].type.name;


        return  primaryType
            
           
    }catch(error){
        console.error('Error al obtener al Pokemon: ',id, error.message);
        return null;
    }
}