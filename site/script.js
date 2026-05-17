const titulo = document.getElementById("inicio");
const texto = "Com o Melhor Ingrediente";

let i = 0;

function digitar() {

  if (i < texto.length) {

    titulo.textContent += texto.charAt(i);
    i++;

    setTimeout(digitar, 100);

  } else {

    setTimeout(() => {

      titulo.textContent = "";
      i = 0;

      digitar();

    }, 2000); 

  }

}

document.getElementById('whatsappBtn').addEventListener('click', function (event) {

  event.preventDefault();

  const nomeColocado = document.getElementById('name').value;
  const emailColocado = document.getElementById('email').value;
  const mensagemColocada = document.getElementById('mensage').value;

  let message = `Olá, gostaria de mais informações! Meu nome é ${nomeColocado}. Meu email: ${emailColocado}`;

  if (mensagemColocada !== '') {
    
    message += `. Mensagem: ${mensagemColocada}`;

  }

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/5547996567129?text=${encodedMessage}`;

  window.open(url, '_blank');

});