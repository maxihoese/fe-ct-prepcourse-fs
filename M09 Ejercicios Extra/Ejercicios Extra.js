/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var parametros = Object.keys(objeto);
   var arregloPadre = [];
   for (i = 0; i < parametros.length; i++) {
      arregloPadre.push([parametros[i], objeto[parametros[i]]]);
   }
   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var stringOrdenado = string.split("").sort();
   var NewObject = {};
   for (i = 0; i < stringOrdenado.length; i++) {
      let propiedad = stringOrdenado[i]
      NewObject[propiedad] = 1;
      }
   for (i = 1; i < stringOrdenado.length; i++) {
      if (stringOrdenado[i] == stringOrdenado[i-1]) {
         let propiedad = stringOrdenado[i];
         NewObject[propiedad] = NewObject[propiedad] + 1;
      }
   }
   return NewObject;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arregloDeString = string.split("")
   var mayus = [];
   var minus = [];
   for (i = 0; i < arregloDeString.length; i++) {
      if (arregloDeString[i] == arregloDeString[i].toUpperCase()) mayus.push(arregloDeString[i]);
      else minus.push(arregloDeString[i]);
   }
   return mayus.join("") + minus.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let invertido = frase.split('').reverse().join('');
   return invertido.split(' ').reverse().join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numInvertido = numero.toString().split('').reverse().join('');
   if (numero == numInvertido) return "Es capicua";
   else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var separado = string.split('');
   for (i = string.length - 1; i >= 0; i--) {
      if (separado[i] == "a" || separado[i] == "b" || separado[i] == "c") separado.splice(i,1);
   }
   return separado.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   // var arregloOrdenado = [arrayOfStrings[0]];
   // for (i = 1; i < arrayOfStrings.length; i++) {
   //    if (arrayOfStrings[i].length >= arregloOrdenado.at(-1).length) {
   //       arregloOrdenado.push(arrayOfStrings[i]);
   //    }
   //    else arregloOrdenado.un(arrayOfStrings[i])
   // }
   var nuevoArreglo = arrayOfStrings.sort((a,b) => a.length - b.length);
   return nuevoArreglo;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array3 = [];
   if (array1.length >= array2.length) {
      for (i = 0; i < array1.length; i++) {
         let elemento = array1[i];
         if (array2.includes(elemento)) array3.push(elemento);
      }
   } else for (i = 0; i < array2.length; i++) {
         let elemento = array2[i];
         if (array1.includes(elemento)) array3.push(elemento);
   }
   return array3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
