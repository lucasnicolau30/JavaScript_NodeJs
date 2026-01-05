let msg = "Hello World";
console.log(msg);

let {readFile, writeFile} = require('fs');
readFile("arquivo.txt", "utf-8", (err, texto) => {
    if(err){
        throw err;
    }
    else{
        console.log(texto);
    }
});

writeFile("arquivo2.txt", "Conteúdo do arquivo 2", (err) => {
    if(err){
        throw err;
    }
    else{
        console.log("Arquivo escrito com sucesso!");
    }
});