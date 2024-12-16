let input = document.getElementById('textin');

let botao = document.getElementById('btn');



botao.addEventListener('click', function(e){
  e.preventDefault();
const lista = document.querySelector(".lista")

const valor = input.value.trim();



if(valor != ''){
const filho = document.createElement('li');
filho.textContent = valor;
lista.appendChild(filho);



}




})




