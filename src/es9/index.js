//Operador de reposo para separar los elementos
const obj = {
    name: `Laura`, 
    age: `19`,
    country: `Mexico`,
};

let {country, ...all} = obj;
console.log(all);

//Poder unir un objeto a otros objetos

const obj = {
    name: `Laura`,
    age: 19

}
const obj1 ={
    ...obj,
    country: `Mexico`
}
console.log(obj1);


//Saber cuando a terminado el llamado y poder ejecutar la logica
const helloWorld = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve(`Hello World`), 3000)
        : reject (new Error(`test Error`))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error)) //Para capturar errores
    .finally(()=> console.log(`Finalizo`)) //llamar lo que termino, va a permitir ejecutar un bloque de codigo

//como podemos agrupar bloques de regex y poder acceder a ellos

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20'); //Deben ser comillas simples porque si no lo toma como string
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);