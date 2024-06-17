function saudacao(nome: string): string {
    return "Olá " + nome;
}

const nomeUsuario = "Pedro";
const mensagemSaudacao = saudacao(nomeUsuario);
console.log(mensagemSaudacao);
