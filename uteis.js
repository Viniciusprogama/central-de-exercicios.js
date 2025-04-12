function exemplofilter() {

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // Filtrar números maiores que 2
    let numerosfiltrados = numeros.filter(numero => numero > 5);
    alert("numeros filtrados" + numerosfiltrados);

}


function exemplofilterbasico1() {

    let numeros = [5, 8, 12, 15, 3, 20, 7];
    let maioresQueDez = numeros.filter(numero => numero > 10);
    alert(maioresQueDez);


}

function exemplofilterbasico2() {

    let nomes = ["ana", "joao", "amanda", "carlos", "arthur", "beatriz"];
    let nomesComA = nomes.filter(nome => nome.startsWith("a"));
    alert(nomesComA)

}


function exemplofilterintermediario1() {

    let produtos = [
    
    { nome: "teclado", preco: 120 },
    { nome: "mouse", preco: 40 },
    { nome: "fone de ouvido", preco: 80 },
    { nome: "caderno", preco: 30 },

    ];

let produtosFiltrados = produtos.filter(produto => produto.preco < 50)
    alert(JSON.stringify(produtosFiltrados));
}


function exemplofilterintermediario2() {

    let pessoas = [
    { nome: "carlos", idade: 17},
    { nome: "mariana", idade: 22},
    { nome: "joão", idade: 15},
    {nome: "fernanda", idade: 30},


    ]

}

function exemplofind1(){

    let produtos = [

    { id: 1, nome: "teclado", preco: 100},
    { id: 2, nome: "mouse", preco: 50},
    { id: 3, nome: "monitor", preco: 700},

    ];

    let ProdutoCaro = produtos.find(produto => produto.preco == 700);

    alert(JSON.stringify(ProdutoCaro));

}

function exemplofind2(){
let nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
let amanda = nomes.find(nome => nome == "Amanda");
alert(JSON.stringify(amanda)); // Deve retornar "Amanda"
}

function exemplofind3(){

    let listaDeUsuarios = [
        { id: 1, nome: "Alice" },
        { id: 2, nome: "Bruno" },
        { id: 3, nome: "Carla" }
      ];
      
      let usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
      
      alert(JSON.stringify(usuarioEncontrado)); 
      
    
}


function exemplomap1(){

let numeros = [1,2,3,4];

let NumerosDobrados = numeros.map(numero => numero * 2);

alert(JSON.stringify(NumerosDobrados))

} 

function exemplomap2(){

    let palavras = ["ola", "mundo", "javascript"];

    let enfatizadas = palavras.map(palavra => palavra + "!")

    alert(JSON.stringify(enfatizadas))


}

function  exemplomap3(){

let nomes = ["ana", "bruno", "carla"];
let nomesMaiusculos = nomes.map(nome => nome + colaboradora) // Colocar o código aqui
console.log(nomesMaiusculos); 

}