function newFunction (name, age, country){
    var name = name || 'Laura';
    var age = age || 19;
    var country = country || 'MX';
    console.log (name, age, country);

}

//En ECMA script se establecio desde una asignacion de los parametros

function newFunction2(name = 'Laura', age = 19, country = 'MX'){

    console.log(name, age, country);
};

newFunction2(); //valores por defecto
newFunction2('Cesar', '19', 'Mexico'); //valores que se estan estableciendo

//concatenacion antes de ECMA script
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log (epicPhrase);
//concatenacion con ECMA script
let epicPhrase2 = `${hello } ${world}`;
console.log(epicPhrase2);


//Para multilineas antes de ECMA script
let lorem = "Una frase chida para saber como separar. wiiii \n"
+ "Otra frase chida que necesitamos."

//Con ecma solo se debe dar un salto y usar las comillas 
let lorem2 = `Otra frase epica que necesitamos
Ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);


//Deestructuracion 
//Sin ECMA
let person = {
    'name' : 'Laura',
    'age' : 19,
    'pais' : 'MX'

}
console.log (person.name, person.age);

//Con ECMA
let {name, age} = person; //De esta forma se puede extraer los elementos que necesito de el objeto 
console.log(name, age);

//Operador de propagacion 
let team1 = ['Laura', 'Cesar', 'Maria'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

//Diferencia entre let y var
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet); //No se puede acceder a esta variable porque no es global cuando se usa let
}

console.log(globalVar);

//Const
const a = 'b';
a = 'a';
console.log(a);

//Para establecer objetos antes de ECMA
let name = 'Laura';
let age = 19;
obj = {name: name, age:age};

//Establecer objetos con ECMA
obj2 = {name, age};
console.log(obj2);

//Funciones Arrow
const names = [
    {name : 'Laura', age : 19},
    {name : 'Cesar', age : 19}
    
]
let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name)); //De esta forma vamos a establecer que es una funcion anonima y que va a devolver algo
const listOfNames3 = (name, age, country) => {
    ...
}

//Cuando se va a pasar solo un parametro
const listOfNames4 = name => {
    ...
}

const square = num => num*num;

//Promesas

const helloPromise = () =>{
    return new Promise((resolve, reject) =>{ //va a establecer una validacion
        if(false){
            resolve ('Hey!')
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(Response => console.log(Response))
    .catch(error => console.log(error));


class calculator {
    //Inicializar el constructor
    constructor(){//Aqui vamos a inicializar las variables que van a estar en un scope global
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){ //Este es el metodo
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator(); //LLamamos a la clase 
console.log(calc.sum(2,2));

//Modulos
import {hello} from `./module`; //de esta forma se manda a llamar el modulop 

hello(); //Asi se puede separar

function* helloWorld(){
    if(true){
        yield `Hello, `; //Permite retornar el yield y guarda este estado de forma interna

    }
    if(true){
        yield `World`; //de esta forma va a ser llamado cuando sea ejecutado el segundo valor
    }
};

const generatorHello = helloWorld();
//Va a permitir ejecutar la primera y cuando se vuelva a ejecutar va a ser la segunda y asi hasta que cumpla todas
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);//Al final manda undefined porque ya no hay otra condicion 