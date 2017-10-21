function exec() {

var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;

var delta = (b*b)-4*a*c;
var delta2 = Math.sqrt(delta);
var x1= (((b*-1)+delta2)/2*a);
var x2= (((b*-1)-delta2)/2*a);

if (a==null || a=="",b==null || b=="",c==null || c=="")
{
alert("Por favor preencha todos os campos corretamente (Em caso de vazio preencha o coeficiente como 0)")
}
else
{
if (isNaN(delta2))
{
document.write('<font color="white" face="overpass">Calculadora de Equação do Segundo Grau <br><br></font>');
document.write('<font color="white" face="overpass">Delta é menor que zero, logo não há raizes reais</font>');

document.write('<font color="white" face="overpass"><br><br><br><br><b>Essa aplicação foi feita por Rafael Faustini e ainda está em fase de testes</b></font>');
document.write('<font color="white" face="overpass"><br><b>Caso algum problema tenha sido encontrado, favor contatar: contato@rafaelfaustini.com.br</b></font>');
document.body.style.backgroundColor = "#1E8BC3";
}
else
{

document.write('<font color="white" face="overpass">Calculadora de Equação do Segundo Grau <br><br></font>');
document.write('<font color="white" face="overpass">1: Checando os coeficientes a='+a+' b='+b+' c='+c+'<br><br></font>');
document.write('<font color="white" face="overpass">2: Na fórmula de Bhaskara: Δ = b² - 4*a*c logo Substituindo os Coeficientes:<br></font>');
document.write('<font color="white" face="overpass">Δ = '+b+'² - 4*'+a+'*'+c+'<br></font>');
document.write('<font color="white" face="overpass">Δ = '+b*b+'-4*'+a*c+'<br></font>');
document.write('<font color="white" face="overpass">Δ = '+delta+'<br><br></font>');
document.write('<font color="white" face="overpass">3: Sendo x= -b ± √Δ/ 2*a | Substituindo Termos: <br></font>' );
document.write('<font color="white" face="overpass"><font color="white" face="overpass">x= '+b*-1+' ± '+delta2+'/ '+2*a+'<br></font>');
document.write('<font color="white" face="overpass">x1= '+x1+'<br></font>');
document.write('<font color="white" face="overpass">x2= '+x2+'<br><br></font>');
document.body.style.backgroundColor = "#1E8BC3";

if(a>0)
{
  document.write('<font color="white" face="overpass">O coeficiente <b>a</b> é maior que 0, logo a função é <b>crescente</b>');
}
if(a<0)
{
  document.write('<font color="white" face="overpass">O coeficiente <b>a</b> é menor que 0, logo a função é <b>decrescente</b>');
}
  document.write('<font color="white" face="overpass"><br><br><br><br><b>Essa aplicação foi feita por Rafael Faustini e ainda está em fase de testes</b>');
  document.write('<font color="white" face="overpass"><br><b>Caso algum problema tenha sido encontrado, favor contatar: contato@rafaelfaustini.com.br</b>');
  document.body.style.backgroundColor = "#1E8BC3";
}
}
}