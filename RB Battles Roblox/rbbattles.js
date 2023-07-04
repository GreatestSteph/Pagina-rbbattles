//animação e funcionamento da barra de navegação
const navbarLinks = document.querySelectorAll('.navbar ul li a');
const cadastroLink = document.querySelector('.cadastrobotao a'); 
const contentSections = document.querySelectorAll('.content');

navbarLinks.forEach(link => {
  link.addEventListener('click', handleNavLinkClick);
});

cadastroLink.addEventListener('click', handleNavLinkClick);

function handleNavLinkClick(e) {
  e.preventDefault();
  navbarLinks.forEach(navLink => navLink.parentElement.classList.remove('active'));
  this.parentElement.classList.add('active');
  const targetSectionId = this.getAttribute('href');
  contentSections.forEach(section => {
    section.classList.remove('show');
  });
  document.querySelector(targetSectionId).classList.add('show');
}





// animação abaixo da pagina inicial
let animationId;
document.querySelector('.left-arrow').addEventListener('mouseenter', function() {
  animateScroll(-1);
});
document.querySelector('.right-arrow').addEventListener('mouseenter', function() {
  animateScroll(1);
});
document.querySelector('.left-arrow').addEventListener('mouseleave', stopScrolling);
document.querySelector('.right-arrow').addEventListener('mouseleave', stopScrolling);

function animateScroll(direction) {
  const container = document.querySelector('.images-container');
  const scrollAmount = direction * (container.offsetWidth / 2);
  const targetScrollLeft = container.scrollLeft + scrollAmount;
  const duration = 1500;
  const startTime = performance.now();
  const startX = container.scrollLeft;

  function scroll(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeOutCubic(progress);
    container.scrollLeft = startX + (scrollAmount * easeProgress);
    if (progress < 1) {
      animationId = requestAnimationFrame(scroll);
    }
  }
  animationId = requestAnimationFrame(scroll);
}

function stopScrolling() {
  cancelAnimationFrame(animationId);
}
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}


//validações


const botaoenviar = document.getElementById('botao');


//validação nome do time
document.getElementById('nomedotime').addEventListener('input', validanometime);
function validanometime() {
  var input = document.getElementById('nomedotime');
  var alertMessages = document.getElementsByClassName('alertanomedotime');
  var name = input.value.trim();
  var uniqueLetters = new Set(name.toLowerCase().match(/[a-z]/g));

  if (uniqueLetters.size >= 3) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}



// validação nome do lider
document.getElementById('nomedolider').addEventListener('input', validanome);
function validanome() {
  var input = document.getElementById('nomedolider');
  var alertMessages = document.getElementsByClassName('alertanomedolider');
  var name = input.value.trim();
  var isValid = /^(?!.*[^a-zA-Z\sçãôõñ]).*(\p{L})(?!(\1+))(?=.*\p{L})(?=.*\s)[\p{L}\sçãôõñ]{1,}\s[\p{L}\sçãôõñ]{11,}$/u.test(name);
  // aqui é necessario - alerta
  // ter mais de 11 caracteres
  // ter espaços
  // usar pelo menos 5 letras diferentes, ou seja, não pode enviar "aaaaa aaaaaaa aaaaa"
  // não é permitido usar números ou símbolos, !@$%¨&**123456789{[()]}ªº;.'' - alerta
  // letras com acentos, ç, chápeu podem ser usados se voce quiser
  if (isValid) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}




//nome contato, a mesma coisa do de cima
document.getElementById('nomecontato').addEventListener('input', validacontato);
function validacontato() {
  var input = document.getElementById('nomecontato');
  var alertMessages = document.getElementsByClassName('alertanomecontato');
  var name = input.value.trim();
  var isValid = /^(?!.*[^a-zA-Z\sçãôõñ]).*(\p{L})(?!(\1+))(?=.*\p{L})(?=.*\s)[\p{L}\sçãôõñ]{1,}\s[\p{L}\sçãôõñ]{11,}$/u.test(name);

  if (isValid) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}


//valida usuario roblox
document.getElementById('usuarioliderroblox').addEventListener('input', validausuario);
function validausuario() {
  var input = document.getElementById('usuarioliderroblox');
  var alertMessages = document.getElementsByClassName('alertaliderroblox');
  var username = input.value.trim();
  var isValid = /^(?=.{3,20}$)[a-zA-Z][a-zA-Z0-9]*(?:_[a-zA-Z0-9]+[a-zA-Z0-9]*)?$/.test(username);
  // Pode digitar letras ou números
  // Simbolos ou espaços não são permitidos
  // Underscore "_" não pode aparecer no começo ou final
  // Underscore "_" pode aparecer apenas uma vez, entre as letras ou números
  // O username deve ter de 3 a 20 caracteres
  if (isValid) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}


//valida opção 1
function validacaixas1() {
  var selectElement = document.getElementById("contaidade");
  var alertElements = document.querySelectorAll(".naoselecionadoalerta");

  if (selectElement.value === "nenhum1") {
    alertElements.forEach(function(element) {
      element.style.display = "block";
      botaoenviar.disabled = true;
    });
  } else {
    alertElements.forEach(function(element) {
      element.style.display = "none";
      botaoenviar.disabled = false;
    });
  }
}


//valida opção 2
function validacaixas2() {
  var selectElement = document.getElementById("pessoastime");
  var alertElements = document.querySelectorAll(".naoselecionadoalerta2");

  if (selectElement.value === "nenhum2") {
    alertElements.forEach(function(element) {
      element.style.display = "block";
      botaoenviar.disabled = true;
    });
  } else {
    alertElements.forEach(function(element) {
      element.style.display = "none";
      botaoenviar.disabled = false;
    });
  }
}


//valida opção 3
function validacaixas3() {
  var selectElement = document.getElementById("idade");
  var alertElements = document.querySelectorAll(".naoselecionadoalerta3");

  if (selectElement.value === "nenhum3") {
    alertElements.forEach(function(element) {
      element.style.display = "block";
      botaoenviar.disabled = true;
    });
  } else {
    alertElements.forEach(function(element) {
      element.style.display = "none";
      botaoenviar.disabled = false;
    });
  }
}


//valida opção 4
function validacaixas4() {
  var selectElement = document.getElementById("famacanal");
  var alertElements = document.querySelectorAll(".naoselecionadoalerta4");

  if (selectElement.value === "nenhum4") {
    alertElements.forEach(function(element) {
      element.style.display = "block";
      botaoenviar.disabled = true;
    });
  } else {
    alertElements.forEach(function(element) {
      element.style.display = "none";
      botaoenviar.disabled = false;
    });
  }
}


//valida opção 5
function validacaixas5() {
  var selectElement = document.getElementById("plataformadejogo");
  var alertElements = document.querySelectorAll(".naoselecionadoalerta5");

  if (selectElement.value === "nenhum5") {
    alertElements.forEach(function(element) {
      element.style.display = "block";
      botaoenviar.disabled = true;
    });
  } else {
    alertElements.forEach(function(element) {
      element.style.display = "none";
      botaoenviar.disabled = false;
    });
  }
}

// valida canal youtube
document.getElementById('usuarioyoutube').addEventListener('input', validayoutube);
function validayoutube() {
  var input = document.getElementById('usuarioyoutube');
  var alertMessages = document.getElementsByClassName('alertayoutube');
  var channelLink = input.value.trim();
  var regexPatternChannel = /^https?:\/\/(www\.)?youtube\.com\/channel\/[\w-]{24}$/i;
  var regexPatternUsername = /^https?:\/\/(www\.)?youtube\.com\/@[\w-]+$/i;
  var regexPatternUsernameaa = /^(www\.)?youtube\.com\/@[\w-]+$/i;
  var regexPatternUsernagfddf = /^(www\.)?youtube\.com\/channel\/[\w-]{24}$/i;

  if (regexPatternChannel.test(channelLink) || regexPatternUsername.test(channelLink) || regexPatternUsernameaa.test(channelLink) || regexPatternUsernagfddf.test(channelLink)){
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}

// digita o link automaticamente ao clicar
function mascarayoutube() {
  var input = document.getElementById('usuarioyoutube');
  var channelLink = input.value.trim();
  if (channelLink === "") {
    input.value = "https://www.youtube.com/";
  }
}
document.getElementById('usuarioyoutube').addEventListener('click', mascarayoutube);
document.getElementById('usuarioyoutube').addEventListener('input', validayoutube);




// valida o email
document.getElementById('email').addEventListener('input', validaemail);

function validaemail() {
  var input = document.getElementById('email');
  var alertMessages = document.getElementsByClassName('alertaemail');
  var username = input.value.trim();
  var isValid = /^[a-zA-Z0-9_-][\w.-]*@[a-zA-Z_-]+?\.[a-zA-Z]{2,}$/.test(username);

  if (isValid) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}

// valida o discord
document.getElementById('discord').addEventListener('input', validadiscord);

function validadiscord() {
  var input = document.getElementById('discord');
  var alertMessages = document.getElementsByClassName('alertadiscord');
  var username = input.value.trim();
  var isValid = /^[^\n\r\s]{2,32}#[0-9]{4}$/.test(username);

  if (isValid) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}

// valida o horario
document.getElementById('hora').addEventListener('input', validarelogio);

function validarelogio() {
  var input = document.getElementById('hora');
  var alertMessages = document.getElementsByClassName('alertarelogio');

  if (input.value === "") {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  }
}


// Stephanie Thawane Cavalcante Madia

