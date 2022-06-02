const botaoEnviar = document.getElementById('btn-enviar');

function interrompeEnvio(event) {
    event.preventDefault();
}

botaoEnviar.addEventListener('click', interrompeEnvio);
botaoEnviar.addEventListener('click', validaInput);

const inputTexto = document.getElementById('input-nome');
const inputEmail = document.getElementById('input-email');

function validaInput(event) {
    if (inputTexto.value < 10 || inputEmail < 10) {
        alert('Dados inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');    
    }
}
