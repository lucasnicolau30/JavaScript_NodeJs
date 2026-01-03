function imprimirConsole(){
    console.log("Lucas");
}

imprimirConsole();

const numeroAleatorio = function(){
    console.log(Math.random());    
}

numeroAleatorio();
numeroAleatorio();

function multiplica(x, y, z){
    return x * y * z;
}

console.log(multiplica(2, 3, 4));

const mult = multiplica(10, 9, 8);

console.log(`O valor de mult eh: ${mult}`);

let x = 10;

if(true){
    let x = 20;
    console.log(x);
}

console.log(x);

let y = 5;

const multiplicacao = function(n){
    let y = n * 2;
    console.log(y);

    if(y == 10){
        let y = 55;
        console.log(y);
    }
}

multiplicacao(y);
console.log(y);

const parOuImpar = (n) => {
    return n % 2;
};

console.log(parOuImpar(10));
console.log(parOuImpar(5));

const quadrado = (n) => n * n;

console.log(quadrado(2));

function nomeIdade(nome , idade){
    if(idade == undefined){
        console.log(`Seu nome eh ${nome}`);
    }
    else{
        console.log(`Seu nome eh ${nome} e você tem ${idade} anos`);
    }
}

nomeIdade("Lucas");
nomeIdade("Lucas" , 20);

function repete(frase , n = 2){
    for(let x = 1 ; x <= n ; x ++){
        console.log(`${frase} ${x}`);
    }
}

repete("Testando" , 5);
repete("Testando só duas vezes");

function potenciacao(base , exp = 2){
    return Math.pow(base , exp);
}

console.log(potenciacao(2));
console.log(potenciacao(2, 2));
console.log(potenciacao(2, 3));

function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}

let soma1 = lembrarSoma(2);
console.log(soma1(1));

function retonarPar(n){
    if(n % 2 == 0){
        console.log(`n agora eh par ${n}`);
    }
    else{
        return retonarPar(n - 1);
    }
}

retonarPar(5);