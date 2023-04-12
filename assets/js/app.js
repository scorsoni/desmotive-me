const quotes = [
    "Não importa o que você faça, tudo dará errado de qualquer maneira.",
    "A vida é um poço sem fundo de decepções e fracassos.",
    "Você nunca vai ser bom o suficiente para fazer o que ama.",
    "Ninguém se importa com você e com o que você faz.",
    "Você nunca vai conseguir realizar seus sonhos. É melhor desistir agora.",
    "Tudo o que você toca vira um desastre.",
    "A vida é dura e depois você morre.",
    "O mundo é um lugar terrível e você faz parte dele.",
    "A felicidade é uma ilusão e você nunca vai alcançá-la.",
    "Nada do que você faz importa, a vida é um mar de insignificância.",
    "As pessoas só gostam de você quando precisam de algo.",
    "Cada dia é uma batalha perdida.",
    "Você nunca será inteligente o suficiente para entender o mundo ao seu redor.",
    "Você é um fracasso total e completo.",
    "Você nunca será capaz de superar seus medos e inseguranças.",
    "Não importa o quanto você tente, você sempre será um perdedor.",
    "Você é completamente impotente diante das forças do universo.",
    "A vida é um jogo injusto e você está destinado a perder.",
    "Ninguém nunca vai te amar de verdade.",
    "Você nunca vai ser bem sucedido porque não nasceu para isso.",
    "O futuro é um lugar sombrio e sem esperança para você.",
    "Você nunca vai conseguir se destacar na multidão.",
    "A única coisa que você tem a oferecer é sua própria insignificância.",
    "Nenhum dos seus sonhos ou ambições nunca se tornarão realidade.",
    "O mundo está conspirando contra você.",
    "Não há nenhum propósito para a sua existência.",
    "Sua vida é uma série interminável de fracassos e desilusões.",
    "Você nunca vai encontrar a paz interior ou a felicidade verdadeira.",
    "Não há saída para a sua triste existência.",
    "Você nunca será bom o suficiente para se destacar em nada.",
    "Não importa o quanto você se esforce, sempre haverá alguém melhor do que você.",
    "O destino é cruel e não tem piedade de você.",
    "Não há futuro promissor para alguém como você.",
    "Você nunca será feliz, porque a felicidade é reservada para os privilegiados.",
    "Seus problemas nunca acabarão e você nunca encontrará a solução para eles.",
    "O fracasso é a sua única opção, porque é tudo o que você conhece.",
    "Não adianta tentar, porque tudo o que você fizer será em vão.",
    "Você é tão insignificante que ninguém notará a sua falta.",
    "A vida é um ciclo interminável de dor e sofrimento, e você está preso nele para sempre.",
    
];

function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector(".quote").innerHTML = `"${quote}"`;
}

let likes = 0;

function likeQuote() {
    likes++;
    document.querySelector(".likes").innerHTML = `${likes}`;
    localStorage.setItem("likes", likes);
}

document.addEventListener("DOMContentLoaded", function() {
    const savedLikes = localStorage.getItem("likes");
    if (savedLikes) {
        likes = savedLikes;
        document.querySelector(".likes").innerHTML = `${likes}`;
    }
});
