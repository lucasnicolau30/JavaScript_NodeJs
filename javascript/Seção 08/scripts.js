console.log("1");

setTimeout(function(){
    console.log("5");
}, 5000);

console.log("2");

let p = Promise.resolve(5);

console.log("Teste");

console.log(p);

p.then((value) => {console.log(`O valor eh ${value}`)});

let p2 = Promise.resolve(new Error("Não deu certo"));

console.log("Testee");

p2.then(value => console.log(value))
    .catch(reason => console.log("Falhou: " + reason));

function verificarNum(num){
    return new Promise((resolve, reject) => {
        if(num == 2){
            resolve(console.log(`O num eh igual a ${num}`));
        }
        else{
            reject(new Error("Falhou"))
        }
    });
}

verificarNum(2);
verificarNum(3);

const pr1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(9);
    }, 5000);
});

const pr2 = Promise.resolve(10);

const pr3 = new Promise((resolve, reject) => {
    resolve(11);
});

Promise.all([pr1, pr2, pr3]).then((values) => console.log(values));

async function somar(a, b){
    return a + b;
}

somar(3,3).then(value => console.log(value));

function somaComDelay(a, b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a + b);
        }, 4000);
    });
}

async function resolveSoma(a, b, c) {
    let x = somaComDelay(a, b);
    let y = c;

    return await x + y;
}

resolveSoma(1, 2, 3).then(value => console.log(value));

function* criadorId(){
    let id = 0;
    while(true){
        yield id++;
    }
}

let criaId = criadorId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);