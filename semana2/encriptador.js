// Definimos dos arrays: uno con el alfabeto normal y otro con el alfabeto al revés
const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alfabetoReverso = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

// Función para encriptar una palabra
function encriptar(palabra) {
    var palabraEncriptada = '';
    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        if (letra >= 'a' && letra <= 'z') {
            for (let j = 0; j < alfabeto.length; j++) {
                if (alfabeto[j] === letra) {
                    palabraEncriptada += alfabetoReverso[j]; // Cambiamos la letra por su equivalente en el alfabeto reverso
                    break; // Salimos del bucle una vez que encontramos la letra correspondiente
                }
            }
        } else {
            palabraEncriptada += letra; // Conservamos caracteres no alfabéticos sin cambios
        }
    }
    return palabraEncriptada;
}

// Función para desencriptar una palabra (convertida en función de flecha)
const desencriptar = palabraEncriptada => {
    var palabraDesencriptada = '';
    for (let i = 0; i < palabraEncriptada.length; i++) {
        let letra = palabraEncriptada[i];
        if (letra >= 'a' && letra <= 'z') {
            for (let j = 0; j < alfabetoReverso.length; j++) {
                if (alfabetoReverso[j] === letra) {
                    palabraDesencriptada += alfabeto[j]; // Cambiamos la letra encriptada por su equivalente en el alfabeto original
                    break; // Salimos del bucle una vez que encontramos la letra correspondiente
                }
            }
        } else {
            palabraDesencriptada += letra; // Conservamos caracteres no alfabéticos sin cambios
        }
    }
    return palabraDesencriptada;
}

// Ejemplo de uso:
const palabraOriginal = 'davinci';
const palabraEncriptada = encriptar(palabraOriginal);
const palabraDesencriptada = desencriptar(palabraEncriptada);

console.log('Palabra Original:', palabraOriginal);
console.log('Palabra Encriptada:', palabraEncriptada);
console.log('Palabra Desencriptada:', palabraDesencriptada);
