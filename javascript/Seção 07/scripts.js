console.log(/testando/.test("tttttestandooo"));
console.log(/testando/.test("odnatset"));

const reg1 = new RegExp('@');
console.log(reg1.test("nicolau.lucas04@gmail.com"));

const reg2 = /bola/;
console.log(reg2.test("bola de futebol"));

const reg3 = /[12345]/;
console.log(reg3.test("2"));
console.log(reg3.test("6"));
console.log(reg3.test("26"));

// verifica se tem número na frase com a regex
const reg4 = /[0-9]/;
console.log(reg4.test("2"));
console.log(reg4.test("10"));
console.log(reg4.test("26"));

const pontoRegex = /./
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asd"));

const dRegex = /\d/; //[0-9]
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

const DRegex = /\D/; //[^0-9]
console.log(DRegex.test("asd"));
console.log(DRegex.test(" "));
console.log(DRegex.test("123"));
console.log(DRegex.test("123asd"));

const sRegex = /\d/; 
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));

const wRegex = /\d/; 
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));

const ano = /\d\d\d\d/;
console.log(ano.test("05"));
console.log(ano.test("2004"));
console.log(ano.test("oi"));

const palavrasTresLetras = /\w\w\w/;
console.log(palavrasTresLetras.test("oi"));
console.log(palavrasTresLetras.test("ano"));
console.log(palavrasTresLetras.test("teste") && "teste".length == 3);

const muitosOuPoucosNumeros = /\d+/;
console.log(muitosOuPoucosNumeros.test("25072022"));
console.log(muitosOuPoucosNumeros.test(""));
console.log(muitosOuPoucosNumeros.test("ola"));
console.log(muitosOuPoucosNumeros.test("1"));

const opcional = /prova\s?\d?/;
console.log(opcional.test("prova"));
console.log(opcional.test("prova 1"));

const telefone = /\d{4,5}-\d{4}/;
console.log(telefone.test("98278-1030"));
console.log(telefone.test("97810"));

const dig = /\d+/;
console.log(dig.exec("Tem 100 aqui"));
console.log(dig.exec("Tem aaa aqui"));

const frase2 = "Tem 100 aqui".match(/\d+/);
console.log(frase2);

const name = /\w+: (Lucas|Nicolau|Nicolle)/;
console.log(name.test("Nome: Lucas"));
console.log(name.test("Nome: Nicolle"));
console.log(name.test("Nome: João"));