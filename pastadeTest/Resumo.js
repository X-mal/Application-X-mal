import { soma, subtração } from "./math.js"
import { User } from "./user.js"

/* //Auto inicializavel */
( async function (){
    let user = new User ("Jjbf", "124senha", "01")
    const sum = await soma(2,9);
    console.log(sum);
    console.log("subtração de automatica "+ subtração(11,5) + "\n");
    console.log("função com POO(orientada a objeto)\n");
    console.log(user.username);
    console.log(user.password);
    console.log(user.id);

})(); /* Esse ultimo () é a chamada da função generica  */
