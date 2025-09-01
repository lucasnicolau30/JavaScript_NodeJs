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
