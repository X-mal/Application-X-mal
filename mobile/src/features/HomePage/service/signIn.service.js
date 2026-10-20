async function SignIn() {
    const resposta = await fetch("http://localhost:8081/signin", {
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