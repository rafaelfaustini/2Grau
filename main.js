function exemplo() {
  document.getElementById("a")
    .value = "2";
  document.getElementById("b")
    .value = "-1";
  document.getElementById("c")
    .value = "8";
}

function exec() {

  var a = document.getElementById("a")
    .value;
  var b = document.getElementById("b")
    .value;
  var c = document.getElementById("c")
    .value;
  if (valida_divisao(a), valida_divisao(b), valida_divisao(c)) {} else {
    var delta = calc_delta(a, b, c);
    var raizdelta = Math.sqrt(delta);
    var x1 = raizes(a, b, raizdelta)
      .x1;
    var x2 = raizes(a, b, raizdelta)
      .x2;
    try {
      limpa("container");
      paragrafo("Calculadora de Equação do Segundo Grau");
      if (isNaN(raizdelta)) {
        paragrafo("Delta é menor que zero, logo não há raizes reais");
        paragrafo("Caso algum problema tenha sido encontrado, favor contatar: contato@rafaelfaustini.com.br");
      } else {
        paragrafo('Checando os coeficientes a=' + a + ' b=' + b + ' c=' + c);
        paragrafo('Na fórmula de Bhaskara: Δ = b² - 4*a*c logo Substituindo os Coeficientes:');
        paragrafo('Δ =' + b + '² - 4*' + a + '*' + c);
        paragrafo('Δ = ' + b * b + '-4*' + a * c);
        paragrafo('Δ = ' + delta);
        paragrafo('Sendo x= -b ± √Δ/ 2*a | Substituindo Termos:');
        paragrafo(x + '= ' + b * -1 + ' ± ' + raizdelta + '/ ' + 2 * a + delta);
        paragrafo('x1 = ' + x1);
        paragrafo('x2 = ' + x2);
        if (a > 0) {
          paragrafo('O coeficiente <b>a</b> é maior que 0, logo a função é <b>crescente</b>');
        }
        if (a < 0) {
          paragrafo('O coeficiente <b>a</b> é menor que 0, logo a função é <b>decrescente</b>');

        }
        paragrafo('<b>Essa aplicação foi feita por Rafael Faustini e ainda está em fase de testes</b>');
        paragrafo('<br><b>Caso algum problema tenha sido encontrado, favor contatar: contato@rafaelfaustini.com.br</b>');
      }
    } catch (error) {
      alerta(error);
    }
  }
}