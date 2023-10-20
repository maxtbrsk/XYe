function botao()
{
    fetch("https://api.kanye.rest").then(
        (data)=>{
            data.json().then(
                (res)=>{
                    document.getElementById('quote').innerHTML=res["quote"];
                }
            )
        }
    )
    criarData();
}

function criarData(){
    var horas = Math.floor(Math.random() * 24); // Gera um número aleatório entre 0 e 23 para representar as horas
var minutos = Math.floor(Math.random() * 60); // Gera um número aleatório entre 0 e 59 para representar os minutos

horas = horas < 10 ? '0' + horas : horas;
minutos = minutos < 10 ? '0' + minutos : minutos;// Formata as horas, minutos e segundos para terem sempre dois dígitos
let hora = horas + ':' + minutos;// Cria uma string no formato HH:MM:SS representando o horário aleatório
console.log("Horário Aleatório: " + hora);


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Função para gerar um número aleatório entre dois valores
}
const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]; // Lista de meses em português

const ano = getRandomInt(2012, 2023); // Gerando um ano aleatório entre 2012 e 2023

const mesIndex = getRandomInt(0, 11); // Gerando um mês aleatório entre 0 e 11 (representando os meses de janeiro a dezembro)
const mes = meses[mesIndex];

const dia = getRandomInt(1, 28); // Gerando um dia aleatório entre 1 e 28

const data = `${dia} de ${mes} de ${ano}`; // Formatando a data no formato desejado

console.log(data); // Mostra a data gerada no console

let calendario = document.getElementById("calendario");
calendario.innerText = `${hora} • ${data} • 2 vizualizações`;
}



let fotosRepub = document.getElementById("fotosRepub");

let fotosInfo = document.getElementById("fotosInfo");

let fotosHeart = document.getElementById("fotosHeart");

function trocarImagemUm() {
    var fotosHeart = document.getElementById('fotosHeart');
    // Verifica o src atual da imagem
    if (fotosHeart.src.match("heart.svg")) {
        // Se o src atual é "imagem1.jpg", troca para "imagem2.jpg"
        fotosHeart.src = "heartred.svg";
    } else {
        // Se o src atual não é "imagem1.jpg", troca de volta para "imagem1.jpg"
        fotosHeart.src = "heart.svg";
    }
}

function trocarImagemDois() {
    var fotosRepub = document.getElementById('fotosRepub');
    // Verifica o src atual da imagem
    if (fotosRepub.src.match("arrows-clockwise.svg")) {
        // Se o src atual é "imagem1.jpg", troca para "imagem2.jpg"
        fotosRepub.src = "repubgreen.svg";
    } else {
        // Se o src atual não é "imagem1.jpg", troca de volta para "imagem1.jpg"
        fotosRepub.src = "arrows-clockwise.svg";
    }
}

function trocarImagemTres() {
    var fotosInfo = document.getElementById('fotosInfo');
    // Verifica o src atual da imagem
    if (fotosInfo.src.match("bookmark-simple.svg")) {
        // Se o src atual é "imagem1.jpg", troca para "imagem2.jpg"
        fotosInfo.src = "bookmarkblue.svg";
    } else {
        // Se o src atual não é "imagem1.jpg", troca de volta para "imagem1.jpg"
        fotosInfo.src = "bookmark-simple.svg";
    }
}

function trocarSeguir() {
    var seguir = document.getElementById('seguir');
 
    if (seguir.innerText.match("Seguir")) {
      
        seguir.innerText = "Seguindo";
        seguir.style.color = "#FFFFFF";
        seguir.style.backgroundColor = "#000000";
        seguir.style.border = "2px solid #FFFFFF";
    } else {
        seguir.innerText = "Seguir";
        seguir.style.color = "#000000";
        seguir.style.backgroundColor = "#FFFFFF";
    }
}