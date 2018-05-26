function alerta(texto) {
  alert = document.getElementById("alerta");
  alert.innerHTML = texto;
  alert.style = "";
}

function exemplo() {
  document.getElementById("a")
    .value = "2";
  document.getElementById("b")
    .value = "-1";
  document.getElementById("c")
    .value = "8";
}

function calc_delta(a, b, c) {
  return (b * b) - 4 * a * c;
}

function raizes(a, b, raizdelta) {
  var raiz1 = (((b * -1) + raizdelta) / 2 * a);
  var raiz2 = (((b * -1) - raizdelta) / 2 * a);
  return {
    x1: raiz1,
    x2: raiz2
  };
}

function exec() {

  var a = document.getElementById("a")
    .value;
  var b = document.getElementById("b")
    .value;
  var c = document.getElementById("c")
    .value;

  var delta = calc_delta(a, b, c);
  var raizdelta = Math.sqrt(delta);
  var x1 = raizes(a, b, raizdelta)
    .x1;
  var x2 = raizes(a, b, raizdelta)
    .x2;
  var abretexto = '<font color="white" face="overpass">';
  var fechatexto = '</font>'

  if (a == null || a == "", b == null || b == "", c == null || c == "") {
    alerta("Por favor preencha todos os campos corretamente (Em caso de vazio preencha o coeficiente como 0)")
  } else {
    if (isNaN(raizdelta)) {
      document.write(abretexto + 'Calculadora de Equação do Segundo Grau <br><br></font>');
      document.write(abretexto + 'Delta é menor que zero, logo não há raizes reais</font>');

      document.write(abretexto + '<br><br><br><br><b>Essa aplicação foi feita por Rafael Faustini e ainda está em fase de testes</b></font>');
      document.write(abretexto + '<br><b>Caso algum problema tenha sido encontrado, favor contatar: contato@rafaelfaustini.com.br</b></font>');
      document.body.style.backgroundColor = "#1E8BC3";
    } else {

      document.write(abretexto + 'Calculadora de Equação do Segundo Grau <br><br></font>');
      document.write(abretexto1 + ': Checando os coeficientes a=' + a + ' b=' + b + ' c=' + c + '<br><br></font>');
      document.write(abretexto2 + ': Na fórmula de Bhaskara: Δ = b² - 4*a*c logo Substituindo os Coeficientes:<br></font>');
      document.write(abretexto + 'Δ =' + b + '² - 4*' + a + '*' + c + '<br></font>');
      document.write(abretexto + 'Δ = ' + b * b + '-4*' + a * c + '<br></font>');
      document.write(abretexto + 'Δ = ' + delta + '<br><br></font>');
      document.write(abretexto3 + ': Sendo x= -b ± √Δ/ 2*a | Substituindo Termos: <br></font>');
      document.write(abretexto + x + '= ' + b * -1 + ' ± ' + raizdelta + '/ ' + 2 * a + '<br></font>');
      document.write(abretexto + 'x1 = ' + x1 + ' < br > < /font>');
      document.write(abretexto + 'x2 = ' + x2 + ' < br > < br > < /font>');
      document.body.style.backgroundColor = "#1E8BC3";

      if (a > 0) {
        document.write('abretextoO coeficiente <b>a</b> é maior que 0, logo a função é <b>crescente</b>');
      }
      if (a < 0) {
        document.write('abretextoO coeficiente <b>a</b> é menor que 0, logo a função é <b>decrescente</b>');
      }
      document.write('abretexto<br><br><br><br><b>Essa aplicação foi feita por Rafael Faustini e ainda está em fase de testes</b>');
      document.write('abretexto<br><b>Caso algum problema tenha sido encontrado, favor contatar: contato@rafaelfaustini.com.br</b>');
      document.body.style.backgroundColor = "#1E8BC3";
    }
  }
}