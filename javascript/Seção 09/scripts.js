console.log(document);
console.log(document.body);

console.log(document.body.childNodes[1].childNodes);

console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('p'));

console.log(document.getElementById('titulo-principal'));

console.log(document.getElementsByClassName('teste'));

console.log(document.querySelector('#container-principal h1'));

let novoELemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoELemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoELemento, elementoAlvo);

let novoELemento2 = document.createElement("p");
let texto2 = document.createTextNode("Algum texto 2");

novoELemento2.appendChild(texto2);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;

pai.appendChild(novoELemento2);

let novoELemento3 = document.createElement("p");
let texto3 = document.createTextNode("Algum texto 3");

novoELemento.appendChild(texto3);

let heading = document.querySelector("#titulo-principal");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoELemento3, heading);

let pSemTexto = document.getElementById("sem-text");
let texto4 = document.createTextNode("Agora tem texto!");

pSemTexto.appendChild(texto4);

let lista = document.createElement("ul");

for (let i = 0; i < 5; i++) {
    let item1 = document.createElement("li");
    let texto5 = document.createTextNode("Texto lista " + i);
    item1.appendChild(texto5);
    lista.appendChild(item1);
}

let conteiner = document.getElementById("container-lista");
conteiner.appendChild(lista);   

let a = document.querySelector("footer a");
console.log(a.getAttribute("href"));
let link = 'https://google.com';
a.setAttribute("href", link);
console.log(a.getAttribute("href"));

let elemento = document.querySelector("#paragrafo-principal");
// considera as bordas
console.log('Largura: ' + elemento.offsetWidth); 
console.log('Altura: ' + elemento.offsetHeight);
// não considera as bordas
console.log('Largura: ' + elemento.clientWidth); 
console.log('Altura: ' +  elemento.clientHeight);

console.log(elemento.getBoundingClientRect());

let elemento1 = document.querySelector("#paragrafo-principal");
elemento1.style.color = 'red';

let todosP = document.querySelectorAll(".teste");
todosP[2].style.color = 'blue';
console.log(todosP[2].style.color);
console.log(todosP);