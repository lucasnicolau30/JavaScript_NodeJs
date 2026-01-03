let laranjas = 5;
console.log(laranjas);
console.log(laranjas * laranjas);
console.log(`Tem ${laranjas} laranjas na cesta`);
laranjas ++;
console.log(`Tem ${laranjas} laranjas na cesta`);

const sobrenome = "Nicolau";
console.log(sobrenome);

let idade = prompt('Qual sua idade?');
console.log(idade);

alert("Veja esta mensagem");

let maiorNumero = Math.max(1, 5, 3, 12);
console.log(maiorNumero);
let arredondar = Math.round(5.2);
console.log(arredondar);
let arredondarCima = Math.ceil(5.2);
console.log(arredondarCima);

let ano = 2010;

if(ano == 2010){
    console.log("'2010'");
}
else if(ano == 2011){
    console.log("'2011'")
}
else{
    console.log("'2012'");
}

for(let i = 0 ; i < 10 ; i ++){
    console.log(i);
}

let i = 0;
while(true){
    if(i == 9){
        break;
    }
    console.log(i);
    i ++;
}

let x = 0;
while(true){
    if(x == 5){
        x ++;
        continue;
    }
    if(x == 8){
        break;
    }
    console.log(x);
    x ++;
}

let eu = "Lucas";

switch(eu){
    case "João":
        console.log("João");
        break;
    case "Lucas":
        console.log("Lucas");
        break;
    default:
        console.log("Não achamos o nome");        
}

