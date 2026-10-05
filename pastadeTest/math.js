async function soma(num1, num2){ /* async ignora se foi ou não completada */ 
    try{ 
       let sun = (num1 + num2);
        return sun;
    } catch (erro){
        console.log(erro)
    }
    
}

function subtração(num1, num2){
    return (num1 - num2);
}
export {
    soma,
    subtração
}