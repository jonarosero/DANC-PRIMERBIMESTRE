import DefaultLayout from "@/layouts/default";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import Image from "next/image";


export default function IndexPage() {
  const pokemonData = [
    {
      id: 1,
      color: "#1B6F0E",
      name: "Bulbasur",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 4,
      color: "#c22702",
      name: "Charmander",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id: 7,
      color: "#2986cc",
      name: "Squirtle",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
  ];

  const itemData = [
    {
      id: 1,
      name: "Pokeball",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
    },
    {
      id: 2,
      name: "Poción",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    },
    {
      id: 3,
      name: "Antídoto",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png",
    },
    {
      id: 4,
      name: "Antíquemar",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-heal.png",
    },
    {
      id: 5,
      name: "Descongelante",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-heal.png",
    },
    // Agrega más artículos según sea necesario
  ];

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center space-y-8 mt-8">
        <h1 className="text-4xl font-bold text-center">
          ¡Bienvenido a la Pokédex!
        </h1>
        <p className="text-lg text-center">
          Explora información sobre Pokémon y artículos de las diferentes
          regiones.
        </p>

        <h2 className="text-2xl font-bold">Pokémon Iniciales</h2>
        <div className="grid grid-cols-3 gap-4">
          {pokemonData.map((pokemon) => (
			      <Link href={`/pokemon/${pokemon.id}`} >
			
            <Card
              key={pokemon.id}
              isBlurred
              style={{ backgroundColor: pokemon.color }}
            >
              <CardBody>
                <Image
                  src={pokemon.imageUrl}
                  alt={pokemon.name}
                  width={150}
                  height={150}
                />
                <p className="text-center font-bold">{pokemon.name}</p>
              </CardBody>
            </Card>
			</Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold">Artículos Iniciales</h2>
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-5">
          {itemData.map((item) => (
            <Card key={item.id} >
              <CardBody className="flex flex-col items-center justify-center">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={25}
                  height={25}
                  className="rounded-full"
                />
                <p className="text-center">{item.name}</p>
              </CardBody>
            </Card>
          ))}
        </div>
        <Link href="/kanto">
          <Button color="warning" size="lg">
            Comienza tu viaje Pokémon
          </Button>
        </Link>
      </div>
    </DefaultLayout>
  );
}
