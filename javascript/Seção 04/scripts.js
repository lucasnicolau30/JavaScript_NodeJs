// let numeros = [1, 2, 3, 4, 5];
let info = ["Lucas", 20, true, "Nicolau"];

// console.log(numeros[0]);
console.log(info[3]);
// console.log(numeros[numeros.length - 1]);
// console.log(numeros.length);

let marca = "Nike";

console.log(typeof marca.toUpperCase());
console.log(marca.toUpperCase());

let pessoa = {
    nome: "Lucas",
    idade: 20,
    saudacao: function(){
        console.log("Olá");
    }
}

console.log(pessoa.nome);
pessoa.saudacao();

let carro = {
    marca: "Audi",
    portas: 4,
    eletrico: false,
    motor: 2.0
}

console.log(carro.portas);
delete carro.portas;
console.log(carro.portas);
carro.tetoSolar = true;
console.log(carro.tetoSolar);
console.log(carro);

let yaris = {
    marca: "Toyota",
    portas: 4
}

let adicionais = {
    tetoSolar: false,
    ar: true
}

console.log(yaris);
Object.assign(yaris , adicionais);
console.log(yaris);

let obj = {
    'chave1': 1,
    'chave2': 2,
    'chave3': 3
}

console.log(obj);

console.log(Object.keys(obj));

let objA = {
    pontos: 10
}

objB = objA;

let objC = {
    pontos: 10
}

console.log(objA == objB);
console.log(objA == objC);

let persona = {
    nome: "Lucas"
}

let persona2 = persona;

console.log(persona == persona2);

persona2.nome = "Nicolau";

console.log(persona.nome);

let numeros = [1, 5, 10, 15, 20, 25,];

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

// pop  e push são no final do array 

let people = ["Lucas", "João" , "Ricardo"];

let peopleRemovida = people.pop();

console.log(people);
console.log(peopleRemovida);

people.push("Nicolau");

console.log(people);

// shift e unshift são no início do array

let frutas = ["Maçã" , "Uva" , "Banana"];

let frutasRemovidas = frutas.shift();

console.log(frutas);
console.log(frutasRemovidas);

frutas.unshift("Melão");

console.log(frutas);

let num = [0, 1, 2, 1, 0, 7, 8, 9];

console.log(num.indexOf(1));
console.log(num.lastIndexOf(1));

console.log(num.slice(2, 3));
console.log(num.slice(2, 5));
console.log(num.slice(2));
console.log(num.slice(-2));
console.log(num.slice(3, -2));

let nomes = ["Lucas" , "Nicolau" , "Nicolle" , "Neves"];

nomes.forEach(nome => {
    console.log("O nome eh: " + nome);
});

let cars = ["Yaris" , "BMW" , "Civic"];

console.log(cars.includes("Fiat"));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.reverse());

let txt = '   \n teste \n ';

console.log(txt.trim());

let sku = "34";

console.log(sku.padStart(6 , "0"));

let sku2 = "7689";

console.log(sku2.padStart(6 , "0"));

let frase = "O rato roeu a roupa do rei de Roma";

let palavras = frase.split(" ");

console.log(frase);
console.log(palavras);

let produtos = "Banana;Maçã;Pêra;Uva";

let produtosOrganizados = produtos.split(";");

console.log(produtos);
console.log(produtosOrganizados);

let novaFrase = palavras.join(" ");

console.log(novaFrase);

console.log('teste '.repeat(5));

// só imprime os números, nao de 0 até ele, pois os parâmetros viram um array

let num1 = 1;
let num2 = 5;
let num3 = 10;
let num4 = 5;

function imprimirNumeros(... args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num1, num2, num3);
console.log("pausa");
imprimirNumeros(num1, num3, num4);
console.log("pausa");
imprimirNumeros(2, 3, 4, 5, 6, 7, 8, 9, 10);

// desestrutura o objeto ou array em variáveis

const person = {
    name: "Lucas",
    lastname: "Nicolau"
}

const {name: fname , lastname: lname} = person;

console.log(fname);
console.log(lname);

let arrayy = ["Lucas" , "Nicolau" , "Ferreira"];

let [nome , sobrenome , ultimoSobrenome] = arrayy;

console.log(nome);
console.log(sobrenome);
console.log(ultimoSobrenome);

// JSON

let eu = {
    "nome": "Lucas",
    "idade": 20
}

console.log(eu);
console.log(eu.nome);
console.log(eu.idade);

let euTexto = JSON.stringify(eu);

console.log(euTexto);

console.log(euTexto.nome);

euJSON = JSON.parse(euTexto);

console.log(euJSON);

console.log(euJSON.nome);