let timer;

//Função para o botão começar
function start(){
//Essa linha de código cria um timer que vai executar
//essa função a cada 1 segundo
    timer = setInterval(showTime, 1000);
}
//Função para o botão parar
function stop(){
    clearInterval(timer);
}

//Função responsável para exibir a hora atual na tela
function showTime() { 
    let d = new Date(); //Pega a data/hora atual
    let h = d.getHours(); //Pega as horas
    let m = d.getMinutes(); //Pega os minutos
    let s = d.getSeconds(); //Pega os segundos
    let txt = h+':'+m+':'+s; //Cria um texto com os dados acima
//Pega a classe no html e coloca o texto criado
    document.querySelector('.clock').innerHTML = txt;
}
