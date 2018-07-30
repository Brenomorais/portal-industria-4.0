function Tempo() {

    var data = new Date();
    var semana = data.getDay();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    if (segundo < 10) {
        segundo = "0" + segundo;
    }

    if (minuto < 10) {
        minuto = "0" + minuto;
    }

    mes2 = new Array();

    mes2[0] = "Janeiro";
    mes2[1] = "Fevereiro";
    mes2[2] = "Março";
    mes2[3] = "Abril";
    mes2[4] = "Maio";
    mes2[5] = "Junho";
    mes2[6] = "Julho";
    mes2[7] = "Agosto";
    mes2[8] = "Setembro";
    mes2[9] = "Outubro";
    mes2[10] = "Novembro";
    mes2[11] = "Dezembro";

    dia2 = new Array();

    dia2[0] = "Domingo";
    dia2[1] = "Segunda";
    dia2[2] = "Terça-Feira";
    dia2[3] = "Quarta-Feira";
    dia2[4] = "Quinta-Feira";
    dia2[5] = "Sexta-Feira";
    dia2[6] = "Sábado";

    document.getElementById('hora').innerText = (dia2[semana] + ", " + dia + " de " + mes2[mes] +
        " de " + ano + ". Agora são: " + hora + ":" + minuto + ":" + segundo);

    setTimeout("Tempo()", "1000");

}

function fraseDia() {

    message = new Array();

    message[1] = "Ciência é uma equação diferencial. Religião é a condição de contorno. Alan Turing";
    message[2] = "A imaginação é mais importante que o conhecimento. Albert Einsein";
    message[3] = "Não Importa quem disse, mas o que foi dito. Thomas Kempis";
    message[4] = "Trocava toda minha tecnologia por uma tarde com Sácratés. Steve Jobs";
    message[5] = "Seus clientes mais insatisfeitos são sua melhor fonte de aprendizado. Bill Gates";
    message[6] = "A simplicidade é o último grau  de sofisticação. Leonardo da Vinci";
    message[7] = "A humidade é a única base sólida de todas as virtudes. Confúcio";
    message[16] = "Se o navio está afundando não espere a água bater em sua bunda para fazer alguma coisa. Desconhecido";
    message[30] = "Se a unica ferramenta que voce tem é um martelo, pra voce tudo começa a se parecer com um prego. _Maslow";

    data = new Date();
    dia = data.getDate();

    document.getElementById('message').innerHTML = message[dia];
}