/* import SignUp from "../service/signUp.service.js";

function useSignUp() {
    const handleSignUp = async({ra, username, email, pass, curso, instituto, turno}) => {
        try{
            const result = await SignUp({ra, username, email, pass, curso, instituto, turno})
            console.log("Usuario Cadastrado", result)
        } catch (issue) {
            console.log("Falha ao Cadastrar", issue.message)
        }
        }
        return{ handleSignUp}
    };
    export default useSignUp */

    import { useState } from "react";
import SignUp from "../service/signUp.service";

function useSignUp(loading) {
    const handleSignUp = async (user) => {
        loading(true)
        try {
            const result = await SignUp(user)
            return result
        } finally {
            loading(false)
        }
    }
    return handleSignUp
}

export default useSignUp