const inputNome = document.getElementById('nome');
const inputSenha = document.getElementById('senha');
const btnEntra = document.getElementById('btn');
const blocoTexto = document.getElementById('textarea');
const agreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

function entrar() {
  if (inputNome.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnEntra.addEventListener('click', entrar);

function contaCaracteres() {
  const tamanhoTexto = document.getElementById('textarea').value;
  const textoContador = document.getElementById('counter');
  let tamanhoRestante = 500;
  tamanhoRestante -= tamanhoTexto.length;
  textoContador.innerText = `${tamanhoRestante} caracteres restantes`;
}

blocoTexto.addEventListener('keyup', contaCaracteres);

function enableSubmitButton() {
  agreement.addEventListener('input', () => {
    const btnSubmitForm = document.getElementById('submit-btn');
    const conteudo = document.getElementById('agreement').checked;
    if (conteudo) {
      btnSubmitForm.disabled = false;
    } else {
      btnSubmitForm.disabled = true;
    }
  });
}

enableSubmitButton();

function pegaMarcados() {
  const opcoes = document.getElementsByClassName('subject');
  const armazerador = [];

  for (let i = 0; i < opcoes.length; i += 1) {
    if (opcoes[i].checked === true) {
      armazerador.push(` ${opcoes[i].value}`);
    }
  }
  return armazerador;
}

function sendButton(evt) {
  evt.preventDefault();
  const form = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name=family]:checked').value;
  const subject = pegaMarcados();
  const rate = document.querySelector('input[name=rate]:checked').value;
  const observation = document.getElementById('textarea').value;
  form.innerHTML = `<p>Nome: ${name} ${lastname}</p>
  <p>Email: ${email}</p>
  <p>Casa: ${house}</p>
  <p>Família: ${family} </p>
  <p>Matérias: ${subject}</p>  
  <p>Avaliação: ${rate}</p>
  <p>Observações: ${observation}</p>`;
}

btnSubmit.addEventListener('click', sendButton);
