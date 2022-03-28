const botaoEnviar = document.getElementById('btn-enviar');

function interrompeEnvio(event) {
    event.preventDefault();
}

botaoEnviar.addEventListener('click', interrompeEnvio);

