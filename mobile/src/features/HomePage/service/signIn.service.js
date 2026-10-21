async function SignIn({email, password}) {
    const resposta = await fetch("https://application-x-mal.onrender.com/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await resposta.json();

    if (!resposta.ok) {
        throw new Error(data.message || "Erro ao executar o Login");
    }
    return data;
}

export default SignIn;