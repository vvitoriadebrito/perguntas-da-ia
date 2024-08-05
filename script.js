const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a importância da preservação da natureza para a socieade?",
        alternativas: [
            "Preservar o meio ambiente é fundamental .",
            "É nele oonde estão os recursos naturais necessários para nossa sobrevivência,como água, alimentos e matérias primas, sem esses recursos todas as formas de vida do planeta poderão acabar ."
        ]
    },
    {
        enunciado: "Qual a importância da preservação da natureza para a sociedade ?",
        alternativas: [
            " O desequilíbrio ambiental,pode desencadear diferentes consequễncias. ",
            "A redução da biodiversidade, diminuição da qualidade da água e do ar, intensificação de eventos climaticos, aumento dos casos de doenças."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();

