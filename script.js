const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Marketing é o processo de criar, comunicar e entregar ofertas que têm valor para clientes e consumidores. Envolve a identificação das necessidades do públuco, além de promover e vender produtos ou serviços usando estratégias de publicidade, promoção e distribuição  para alcançar em mercado-alvo eficazmente",
        alternativas: [
            {
                texto: "Como o marketing pode influenciar as pessoas a comprarem mais?",
                afirmacao: "O marketing ajuda a entender como atrair clientes e como convence-los a comprar. "
            },
            {
                texto: "Nem sempre o marketing é eficaz, pois não consegue alcançar todos os públicos",
                afirmacao: "Públicos com menos conhecimento, não são alcançados pelo poder no marketing."
            }
        ]
    },
    {
        enunciado: "A relação de boa comunicação com o cliente permite que a empresa construa relções mais saudáveis e duradouras com os seus clientes e, com isso, consiga fidelizá-los ainda mais. E os tornando as pessoas que farão o seu negócio dar certo, pois um cliente satisfeito, indicará o seu serviço e produto para outras pessoas, fazendo com que a sua empresa seja mais popular e desejada.",
        alternativas: [
            {
                texto: "Como manter uma boa comunicação com seu cliente?",
                afirmacao: "Sempre tentando ser o mais claro e comunicativo possível. Pois o cliente confia no seu produto através do que você fala/oferece"
            },
            {
                texto: "Boa comunicação não é um dos príncipais fatores para o marketing funcionar. Essa é uma questão verdadeira ou falsa?",
                afirmacao: "Essa afirmação é falsa, pois todas as estraégias de venda tem que ter uma boa comunucação. "
            }
        ]
    },
    {
        enunciado: "No marketing você tem a sua própria identidade de marca e isso um dos elementos mais importantes para aumentar a visibilidade do seu negócio. Afinal é a forma que sua marca se mostrará para o mundo. Existem diversas marcas que se posicionam muito bem no mercado e nós conseguimos identificá-las somente por um símbolo ou uma palavra, por isso é de suma importancia que você tenha uma logo exclusiva do seu próprio negócio.",
        alternativas: [
            {
                texto: "A identidade de marca é uma coisa sem finalidade e que não irá mudar nada em sua empresa. Essa é uma questão verdadeira ou falsa?",
                afirmacao: "A afirmação é falsa, pois, sem a identificação da sua própria marca você não terá autonomia e exclusividade. "
            },
            {
                texto: "Possuir sua logo e cores exclusivas montando um conjunto único, é muito importante para os seus negócios. Por que?",
                afirmacao: "Tendo a sua própria logo de identificação, vai fazer com que o seu negócio seja exclusio e com que sua logo seja conhecida em qualquer lugar. Pois, essa vai ser a identidade da sua corporação, por tanto escolha bem e faça o seu melhor neste designer."
            }
        ]
    },
  
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Observamos que..";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
