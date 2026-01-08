let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let p = document.querySelector("p");
let a = document.querySelector("a");
let botao = document.querySelector("#botao");
let botao2 = document.querySelector("#botao2");
let botao3 = document.querySelector("#botao3");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

function msg(e){
    console.log("Clicou no botão!");
    e.stopPropagation();
}

// btn1.addEventListener("click", msg);

// btn2.addEventListener("click", function() {
//     btn1.removeEventListener("click", msg);
// });

// obrigatório ter uma função externa

// function msg(e){
//     console.log(e);
// }

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function() {
    btn1.removeEventListener("click", msg);
});

btn3.addEventListener("click", msg);

p.addEventListener("click", function() {
    console.log("Clicou no parágrafo!");
});

a.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Clicou no link!");
});

window.addEventListener("keydown", function(e){
    if(e.key == 'L'){
        console.log("Pressionou a letra L!");
    }
    else if(e.key == 'Enter'){
        console.log("Pressionou a tecla Enter!");
    }
});

window.addEventListener("keyup", function(e){
    if(e.key == 'L'){
        console.log("Soltou a letra L!");
    }
    else if(e.key == 'Enter'){
        console.log("Soltou a tecla Enter!");
    }           
});

botao.addEventListener("mousedown", function(e){
    console.log("Pressionou o botão do mouse!");
});

botao.addEventListener("mouseup", function(e){
    console.log("Soltou o botão do mouse!");
});

botao2.addEventListener("dblclick", function(e){
    console.log("Deu um duplo clique!");
});

botao3.addEventListener("contextmenu", function(e){
    e.preventDefault();
    console.log("Clicou com o botão direito!");
});

let timeout;
window.addEventListener("mousemove", function(e){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        console.log("X: " + e.x);
        console.log("Y: " + e.y);
    }, 500);
});

window.addEventListener("scroll", function(e){
    if(window.pageYOffset > 100){
        console.log("Ativou");
    }
});

input1.addEventListener("focus", function(e){
    console.log("Clicou no input!");
}); 

input2.addEventListener("blur", function(e){
    console.log("Saiu do input!");
});

window.addEventListener("load", function(e){
    alert("Bem-vindo ao site!");
});

window.addEventListener("beforeunload", function(e){
    event.returnValue = null;
});