function alerta(texto) {
  alert = document.getElementById("alerta");
  alert.innerHTML = texto;
  alert.style = "";
}

function calc_delta(a, b, c) {
  return (b * b) - 4 * a * c;
}

function valida_divisao(n) {
  n = +n;
  if (!n) {
    alerta('Houve um erro ao realizar o cálculo');
    throw new Error('Houve um erro ao realizar o cálculo');
  }
  return n;
}

function raizes(a, b, raizdelta) {
  var raiz1 = (((b * -1) + raizdelta) / valida_divisao(2 * a));
  var raiz2 = (((b * -1) - raizdelta) / valida_divisao(2 * a));
  return {
    x1: raiz1,
    x2: raiz2
  };
}

function limpa(id) {
  elemento = document.getElementById(id);
  while (elemento.hasChildNodes()) {
    elemento.removeChild(elemento.lastChild);
  }
  return 1;
}

function cria(componente, texto, pai) { // Nome Componente; Texto ; Elemento Pai
  elemento = document.createElement(componente);
  txt = document.createTextNode(texto);
  elemento.appendChild(txt);
  pai.appendChild(elemento);
  return elemento;
}

function classe(elemento, classtxt) {

  elemento.classList.add(classtxt);
}

function paragrafo(texto) {
  let pai = document.getElementById("container");
  classe(cria("p", texto, pai), "text-white");
}