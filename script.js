const caixaPrincipal = document.querySelector(".Caixa-principal");
const caixaPerguntas = document.querySelector(".Caixa-perguntas");
const caixaAlternativas = document.querySelector(".Caixa-alternativas");
const caixaResultado = document.querySelector(".Caixa-Resultado");
const textoResultado = document.querySelector(".Texto-resultado");

const perguntas = [
    {
        enunciado: "A alguns anos foi criado competições de jogos eletrônicos que ganha prêmios e até dinheiro e reconhecimento. só que muita gente fala que jogos eletrônicos são esportes ",
        alternativas: [
            {
                texto: "Não é um esporte.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Sim é um espote.",
                afirmacao: "afirmacao"
            }
           
        ]
    },
    {
        enunciado: "Temos algumas competição bem famosas de jogos como: FPS que e pra jogos de tiro em primeira pessoas e em grupo como call of duty, MOBA que são pra jogos que e pra estrtagias e ação o jogo mais conhcido e o league of legends ou LOL.",
        alternativas: [
            {
                texto:  "Você já tinha ouvido falar ou já vio uma campeonato desses jogos eletrônicos.",
                afitmacao: "afirmacao"
            },
            {
                texto:"Ou você só tinha conhcido os jogos e não sabia sobre o campeonatos desses jogos.",
                afirmacao: "afirmacao"
            }
            
          
            
        ]
    },
    {
        enunciado: "Nesses compeonatos de jogos eletrônicos tem os jogadores eles são conhecido como strimes que geralmente faz live jogando alguns jogos os mais conhcidos são: Alanzoka, Corringa, cellbet ",
        alternativas: [
            {
                texto: "Esses strimres são bem famoso entre adolecentes e os publico que ama jogos eletrônicos e fazem lives na twich ou no youtube ",
                afirmacao: "afirmacao"
            },
            {
                texto: "Mas tem alguns strimes famos que não faz conteudo de jogos mas de outros como podcast.",
                afirmacao: "afirmacao"
            }
            
           
           
        ]
    },
    {
        enunciado: "Pergunta 1Tem alguns jogos populares entre os adolecetes e os mais venhos que passa soa 18 anos como: call of duty, league of legends(LOL), minecreft, pokémon pvp, GTA, the legend of zelda.",
        alternativas: [
            {
                texto:"Você conhece esses jogos famosos. ",
                afirmacao: "afirmacao"
            },
            {
                texto: "Ou não vc é mais pro lado de ver tik tok.",
                afirmacao: "afirmacao"
            }
            
            
           
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "Pela comfederação brasileira de espotes e jogos comsidera uma esportes, sobre as competições são feitas por empresas do mundo dos jogos, grandes strimers ganharam fama por fazer lives jogoamdo algubs jogos deis de jogos famosos ate jogos desconhecidos.";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)) 
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes +" ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "jogos ou games são esportivos?"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();