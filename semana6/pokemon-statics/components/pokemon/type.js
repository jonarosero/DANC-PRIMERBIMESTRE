export const getTypePokemon = (type) => {
    switch (type) {
      case 'normal':
        return { name: 'Normal', color: 'bg-zinc-700', text: 'text-white', backgroundGradient: 'from-zinc-700 to-zinc-600' };
      case 'fighting':
        return { name: 'Pelea', color: 'bg-yellow-600', text: 'text-white', backgroundGradient: 'from-yellow-600 to-black' };
      case 'flying':
        return { name: 'Volador', color: 'bg-cyan-900', text: 'text-white', backgroundGradient: 'from-cyan-900 to-black' };
      case 'grass':
        return { name: 'Planta', color: 'bg-lime-600', text: 'text-white', backgroundGradient: 'from-lime-600 to-lime-300' };
      case 'poison':
        return { name: 'Veneno', color: 'bg-purple-950', text: 'text-white', backgroundGradient: 'from-purple-950 to-purple-400' };
      case 'ground':
        return { name: 'Tierra', color: 'bg-amber-700', text: 'text-white', backgroundGradient: 'from-amber-700 to-yellow-400' };
      case 'rock':
        return { name: 'Roca', color: 'bg-amber-950', text: 'text-white', backgroundGradient: 'from-amber-950 to-yellow-800' };
      case 'bug':
        return { name: 'Bicho', color: 'bg-green-800', text: 'text-white', backgroundGradient: 'from-green-800 to-black' };
      case 'ghost':
        return { name: 'Fantasma', color: 'bg-gray-950', text: 'text-white', backgroundGradient: 'from-gray-950 to-gray-500' };
      case 'steel':
        return { name: 'Acero', color: 'bg-gray-800', text: 'text-white', backgroundGradient: 'from-gray-800 to-black' };
      case 'fire':
        return { name: 'Fuego', color: 'bg-red-900', text: 'text-white', backgroundGradient: 'from-red-900 to-red-500' };
      case 'water':
        return { name: 'Agua', color: 'bg-blue-800', text: 'text-white', backgroundGradient: 'from-blue-800 to-blue-400' };
      case 'electric':
        return { name: 'Electrico', color: 'bg-yellow-500', text: 'text-black', backgroundGradient: 'from-yellow-500 to-yellow-200' };
      case 'psychic':
        return { name: 'Psiquíco', color: 'bg-pink-500', text: 'text-black', backgroundGradient: 'from-pink-500 to-pink-200' };
      case 'ice':
        return { name: 'Hielo', color: 'bg-indigo-400', text: 'text-black', backgroundGradient: 'from-indigo-400 to-indigo-100' };
      case 'dragon':
        return { name: 'Dragón', color: 'bg-violet-600', text: 'text-white', backgroundGradient: 'from-violet-600 to-violet-200' };
      case 'fairy':
        return { name: 'Hada', color: 'bg-pink-800', text: 'text-white', backgroundGradient: 'from-pink-800 to-black' };
      case 'dark':
        return { name: 'Siniestro', color: 'bg-stone-900', text: 'text-white', backgroundGradient: 'from-stone-900 to-black' };
      case 'shadow':
        return { name: 'Sombra', color: 'bg-neutral-800', text: 'text-white', backgroundGradient: 'from-neutral-800 to-neutral-500' };
      default:
        return { name: 'Desconocido', color: 'bg-neutral-800', text: 'text-white', backgroundGradient: 'from-neutral-800 to-neutral-500' };
    }
  };
  