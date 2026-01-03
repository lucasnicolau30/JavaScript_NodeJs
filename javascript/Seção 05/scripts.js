const cachorro = {
    uivar: function(){
        console.log("Auuuuuuuuu");
    },
    rosnar: function(){
        console.log("Grrrrrr");
    }
}

cachorro.uivar();
cachorro.rosnar();

let pessoa = {
    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }
}

pessoa.setNome("Lucas");
console.log(pessoa.getNome());

let persona = {
    maos: 2
}

console.log(Object.getPrototypeOf(persona));

let personaNova = Object.create(persona);
console.log(personaNova.maos);
console.log(Object.getPrototypeOf(personaNova) == persona);

let dog = {
    raca: 'Srd',
    uivar: function(){
        console.log("Auuuuuuuuu");
    }
}

let pastorAlemao = Object.create(dog);
pastorAlemao.uivar();
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao.raca);
console.log(pastorAlemao);

// criar objeto com construtor , mais usado!

function criarCachorro(raca , patas , cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criarCachorro('Doberman' , 4 , 'preta');
console.log(doberman);

