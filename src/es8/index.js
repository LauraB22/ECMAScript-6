 const data = {
     Frontend: `Laura`,
     Backend: `Cesar`,
     Design: `Martin`,
}

const entries = Object.entries(data); //nos permite devolver la clave y valores de una matriz
console.log(entries);
console.log(entries.length); //nos permite saber cuantos elementos hay en el arreglo

const data = {
    Frontend: `Laura`,
    Backend: `Cesar`,
    Design: `Martin`,
}
const values = Object.values(data);//nos devuelve los valores de un objeto a un arreglo
console.log(values);
console.log(values.length);

const string = `hello`;
console.log(string.padStart(7, `hi`));//agregar una cadena o elementos en el string
console.log(string.padEnd(12, `------`));//agrega elementos al final 

const obj = {
    name: `Laura`, //no pasa nada si hay comas, aun asi se va a ejecutar para no crear problemas 
}

//Async y await 

const helloWorld = ()=>{ //Con esto se trabaja async y await 
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve(`Hello World`), 3000)
        : reject (new error(`Test Error`));
    })
};

const HelloAsync = async() => {
    const hello = await helloWorld(); //Va a hacer el llamado va a esperar a que suceda y despues se imprime en consola
    console.log(hello);
}

HelloAsync ();

const anotherfunction = async() => {
    try{ //nos permite que trate ejecutar 
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anotherfunction();