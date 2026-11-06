/* import SignIn from "../service/signIn.service.js";

function useSignIn() {
    const handleSignIn = async({email, password}) => {
        try{
            const result = await SignIn({email, password})
            console.log("Usuario Logado", result)
        } catch (issue) {
            console.log("Falha ao Logar", issue.message)
        }
        }
        return{ handleSignIn }
    };
    export default useSignIn */

import { useState } from "react";
import SignIn from "../service/signIn.service";

function useSignIn(loading) {
    const handleSignIn = async (user) => {
        loading(true)
        try {
            const result = await SignIn(user)
            return result
        } finally {
            loading(false)
        }
    }
    return handleSignIn
}

export default useSignIn