const form = document.getElementById('formContato');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');
const msgErro = document.getElementById('msgErro');

const btnWhatsapp = document.getElementById('btnWhatsapp');
const btnEmail = document.getElementById('btnEmail');

function validarCampos() {
  if (!nome.value || !email.value || !mensagem.value) {
    msgErro.textContent = "Por favor, preencha todos os campos.";
    msgErro.style.color = "red";
    return false;
  }

  if (!email.value.includes('@')) {
    msgErro.textContent = "Por favor, insira um email válido.";
    msgErro.style.color = "red";
    return false;
  }

  msgErro.textContent = "";
  return true;
}

btnWhatsapp.addEventListener('click', () => {
  if (!validarCampos()) return;

  const telefone = "5511981035615";
  const texto = `Olá, meu nome é ${nome.value}.
Meu e-mail é: ${email.value}.
Mensagem: ${mensagem.value}`;

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
  form.reset();
});

btnEmail.addEventListener('click', () => {
  if (!validarCampos()) return;

  msgErro.textContent = "Enviando...";
  msgErro.style.color = "blue";

  emailjs.init("tHArcRaXc2OD5e6TV");

  emailjs.sendForm('service_wxgzbzc', 'template_wygyhjq', form)
    .then(() => {
      msgErro.textContent = "Mensagem enviada com sucesso!";
      msgErro.style.color = "green";
      form.reset();
    }, (error) => {
      msgErro.textContent = "Erro ao enviar: " + error.text;
      msgErro.style.color = "red";
    });
});
