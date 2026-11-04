            
async function SignUp({ra, username, email, pass, curso, instituto, turno}) {
    const resposta = await fetch("https://application-x-mal.onrender.com/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ra,
            username,
            email,
            pass,
            curso,
            instituto,
            turno
        })
    });

    const data = await resposta.json();

    if (!resposta.ok) {
        throw new Error(data.message || "Erro ao executar o Cadastrar");
    }
    return data;
}

export default SignUp;