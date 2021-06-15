const hello = ()=>{
    return `hello`
}

export default hello; //Esta exportando este modulo

import {hello} from `./module`; //de esta forma se manda a llamar el modulop 

hello(); //Asi se puede separar 