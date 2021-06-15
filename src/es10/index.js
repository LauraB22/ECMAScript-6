let array = [1, 2, 3, [1, 2,3, [1, 2, 3]]];

console.log(array.flat(2));//Recibe como argumento la profundidad

let array = [1, 2,3, 4, 5];
console.log(array.flatMap(value =>[value, value*2]));

//Eliminar los espacios en blanco de un string
let hello = `      hello World`;
console.log(hello);
console.log(hello.trimStart());

let hello = `hello world    `;
console.log(hello);
console.log(hello.trimEnd());

//pasar de forma opcional el error
try{

}catch{
    error
}

let entries = [["name", "Laura"], ["age", 19]];
console.log(Object.fromEntries(entries));

//Permite acceder a una descripcion

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);