const arr = [1, 2, 3, 4, 5];

console.log('Original array:', arr);

const maioresNum = arr.filter((n) => {
    if(n >= 3){
        return n;
    }
});

console.log('Números maiores ou iguais a 3:', maioresNum);

const users = [
    {name: 'Ana', available: true},
    {name: 'Bia', available: false},
    {name: 'Carlos', available: true},
    {name: 'Daniel', available: false},
];

const notAvailableUsers = users.filter((user) => { 
    return !user.available; 
});
const availableUsers = users.filter((user) => user.available);

console.log('Array de usuários:', users);
console.log('Usuários disponíveis:', availableUsers);
console.log('Usuários indisponíveis:', notAvailableUsers);

const produtos = [
    {name: 'Notebook', price: 2500, category: 'Eletrônicos'},
    {name: 'Mouse', price: 50, category: 'Eletrônicos'},        
    {name: 'Caderno', price: 20, category: 'Papelaria'},
    {name: 'Caneta', price: 5, category: 'Papelaria'},
];

produtos.map((produto) => {
    if(produto.category === 'Eletrônicos'){
        produto.onSale = true;
    }
});

console.log(produtos);

const frutas = ['Banana', 'Maçã', 'Pera'];

const [fruta1, fruta2, fruta3] = frutas;

console.log('Fruta 1:', fruta1);
console.log('Fruta 2:', fruta2);
console.log('Fruta 3:', fruta3);
console.log('Array original de frutas:', frutas);

const obj = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};  

const { nome: nomePessoa, idade, cidade } = obj;

console.log('Nome:', nomePessoa);
console.log('Idade:', idade);
console.log('Cidade:', cidade);
console.log('Objeto original:', obj);

const numeros1 = [10, 20, 30, 40, 50];
const letras = ['A', 'B', 'C', 'D', 'E'];

const combinado = [...numeros1, ...letras];

console.log('Array de números:', numeros1);
console.log('Array de letras:', letras);
console.log('Array combinado:', combinado);

const numeros2 = [0, ...numeros1, 60];

console.log('Array com números adicionais:', numeros2);

const carroMarca = { marca: 'Toyota' };
const carroModelo = { modelo: 'Corolla' };
const carroAno = { ano: 2020 };

const carro = { ...carroMarca, ...carroModelo, ...carroAno, cor: 'Prata' };

console.log('Objeto marca:', carroMarca);
console.log('Objeto modelo:', carroModelo);
console.log('Objeto ano:', carroAno);
console.log('Objeto carro:', carro);

class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    produtoDesconto(desconto){
        return this.preco * ((100 - desconto) / 100);
    }
}

const camisa = new Produto('Camisa Polo', 100);
console.log('Produto:', camisa);
console.log('Nome do produto:', camisa.nome);
console.log('Preço original:', camisa.preco);
console.log('Preço com desconto de 20%:', camisa.produtoDesconto(20));

const tenis = new Produto('Tênis Esportivo', 200);
console.log('Produto:', tenis);
console.log('Nome do produto:', tenis.nome);
console.log('Preço original:', tenis.preco);
console.log('Preço com desconto de 15%:', tenis.produtoDesconto(15));

class ProdutosComClasses extends Produto{
    constructor(nome, preco, cor){
        super(nome, preco);
        this.cor = cor;
    }

    mostrarCor(){
        console.log(`As cores do produto ${this.nome} são: `);
        this.cor.forEach((cor) => {
            console.log(cor);
        });
    }
};

const chapeu = new ProdutosComClasses('Chapéu', 80, ['Preto', 'Marrom', 'Bege']);
console.log('Produto:', chapeu);
console.log('Nome do produto:', chapeu.nome);
console.log('Preço original:', chapeu.preco);
console.log('Preço com desconto de 10%:', chapeu.produtoDesconto(10));
chapeu.mostrarCor();