// Calculadora

function inserir(num){
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
  document.getElementById('resultado').innerHTML = "";
}

function apagar(){
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
  var resultado = document.getElementById('resultado').innerHTML;
  if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
  }
  else{
    document.getElementById('resultado').innerHTML = "";
  }
}

function r3(){
  window.location = "r3.html";
}

function r3c(){
  window.location = "r3c.html";
}

// Regra de 3

function calcularr3(){
  var x = parseInt(document.getElementById('x').value);
  var y = parseInt(document.getElementById('y').value);
  var z = parseInt(document.getElementById('z').value);

  var resultado2 = (y * z) / x;

  document.getElementById('resultado2').innerHTML = 'X = ' + resultado2;
}

// Regra de 3 Composta