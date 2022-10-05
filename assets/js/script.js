/** Ações necessárias <header>
 * Vou precisar fazer uma função para pegar todos os compromissos e salvar no localstorage e atribuir ao botão Salvar localStorage
 * Vou precisar fazer uma função para apagar os dados do localstorage e atribuir ao botão Excluir localStorage.
 * Vou precisar pegar os dados de data e hora do computador e linkar ao exemplo de data e hora que está no header.
 */



    // função para pegar o horario da maquina 

    //     Função para formatar 1 em 01
    function zeroFill(n) {
    return ('0' + n).slice(-2);
}
    // Cria intervalo
    const interval = setInterval(() => {
        // Pega o horário atual
        const now = new Date();

        // Formata a data conforme dd/mm/aaaa hh:ii:ss
        const dataHora =  zeroFill(now.getHours())        + ':' + zeroFill(now.getMinutes());

        // Exibe na tela usando a div#data-hora
        document.getElementById('time').innerHTML = dataHora;
    }, 1000);
    
    
    // função para pegar a data da máquina
    // Função para formatar 1 em 01
    function zeroFill(n) {
    return ('0' + n).slice(-2);
    }
    
    // Cria intervalo
    const intervalo = setInterval(() => {
        // Pega o horário atual
        let now = new Date();
        monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    
        // Formata a data conforme dd/mm/aaaa hh:ii:ss
        const data = zeroFill(now.getUTCDate()) + 'de' + monName[now.getMonth()] +  de  + now.getFullYear();

        // Exibe na tela usando a div#clock
        document.getElementById('data').innerHTML = data;
    }, 1000);
















