const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você chegou no colégio em mais um dia normal, mas não estava com intenções de estudar, você olha na grade de aulas e vê de as seis aulas do dia serão com o íconico prifessor Guilherme Beraldi, com a intenção de fugir da aula voce decide...",
        alternativas: [
            {
                texto: "Fingir estar estudando para o Beraldi não perceber suas intenções.",
                afirmacao: "A aula começou como um dia qualquer, Beraldi deu sua primeira aula sobre funções de uma forma que se percebe que ele adora sua matéria.",
                proximaPergunta: 1
            },
            {
                texto: "Implicar com uma coisa que ele disse sobre raiz quadrada, como assim numero negativo não tem raiz?? .",
                afirmacao: "O professor começou o dia com uma sala agitada, e você foi mandado para a diretoria.",
                proximaPergunta: 2
            }
        ]
    },
    {
        enunciado: "Você fingiu prestar atenção. O professor começou a aula animado. O que você faz?",
        alternativas: [
            {
                texto: "Continua fingindo.",
                afirmacao: "Você conseguiu enganar o professor e se manteve em silêncio.",
                proximaPergunta: 3
            },
            {
                texto: "Desiste e sai da aula.",
                afirmacao: "Você decidiu que era melhor ir para o pátio.",
                proximaPergunta: 4
            }
        ]
    },
    {
        enunciado: "O professor te mandou para a diretoria. O que você faz agora?",
        alternativas: [
            {
                texto: "Fica bravo e tenta escapar.",
                afirmacao: "Você tentou sair pela janela, mas foi pego.",
                proximaPergunta: 5
            },
            {
                texto: "Conversa com a diretora.",
                afirmacao: "Você explicou a situação e pediu desculpas.",
                proximaPergunta: 6
            }
        ]
    },
    // Adicione mais perguntas seguindo a mesma estrutura
    {
        enunciado: "Você consegue se explicar e a diretora te libera. Como você se sente?",
        alternativas: [
            {
                texto: "Aliviado por não ter levado uma punição.",
                afirmacao: "Você promete se comportar melhor.",
                proximaPergunta: null // Finaliza o jogo
            },
            {
                texto: "Agradecido pela compreensão.",
                afirmacao: "Decide ajudar seus colegas a se comportarem também.",
                proximaPergunta: null // Finaliza o jogo
            }
        ]
    },
    {
        enunciado: "Você é pego tentando escapar! O que acontece?",
        alternativas: [
            {
                texto: "Você é punido e não pode participar do próximo evento da escola.",
                afirmacao: "Aprendeu a importância de ser honesto.",
                proximaPergunta: null // Finaliza o jogo
            },
            {
                texto: "A diretora decide ser compreensiva e te dá uma segunda chance.",
                afirmacao: "Você agradece e promete não repetir o erro.",
                proximaPergunta: null // Finaliza o jogo
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual < 0 || atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao || "";
    historiaFinal += afirmacao + " ";
    atual = opcaoSelecionada.proximaPergunta; // Muda para a próxima pergunta
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado da sua jornada:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
