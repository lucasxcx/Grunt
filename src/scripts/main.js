document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('calculo').addEventListener('submit',function (evento){
        evento.preventDefault();
        let numero = document.getElementById('primeiro-numero').value;
        numero = parseInt(numero);

        let resultado = Math.sqrt(numero);
        resultado = Math.round(resultado);
        document.getElementById('resultado-final').innerText = resultado;
        document.querySelector('.resultado').style.display = 'block'; 
    })
})