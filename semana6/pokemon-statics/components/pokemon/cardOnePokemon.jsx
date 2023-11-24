'use client'
import { Card, Image } from "@nextui-org/react";
import { getTypePokemon } from "./type";

export const CardOnePokemon = ({id, type}) =>{
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

    const primaryType = getTypePokemon(type);

    return (
        <Card
          radius="lg"
          className={`border-none ${primaryType.color} flex items-center justify-center`}
        >
          <Image
            alt={id}
           
            src={imageUrl}
            width="100%"
          />
        </Card>
      );
}