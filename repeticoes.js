// FOR
function exemplofor(){
for(let contador = 1; contador <= 5; contador++){


    alert(contador);
}


}


function examplowhile(){

 let contador = 1;

 while(contador <= 5)
    contador ++;
    console.log(contador);
    

}


function exemplodowhile(){

    let contador = 1;

    do{


        alert(contador);
        contador++;


    }while (contador <=5)

}


function exemplofor1(){
    for(let contador = 1; contador <= 5; contador++){
    
    
        alert(contador);
    }
}

function exemplofor2(){

let numero = prompt("digite um numero")

for( i = 1; i <= 10; i++)

    
    alert(i * numero);
    

}


function exemplofor3(){

    let n = prompt("digite um numero");

    let soma = 0;

    for(let i = 1; i<= n; i++){
        soma = soma + i;

    }
        alert(soma);
    
}

function exemplofor4(){



    for(let contador = 2; contador <= 50; contador += 2){


        alert(contador);
        
    }


}


function exemplofor5(){


     let numero = Math.floor(Math.random() * 100) + 1;

    let tentativa;

    
    while (tentativa != numero){

    tentativa = prompt("insira o numero");

    if(numero > tentativa){

        alert("o numero e maior");

    }else if(numero < tentativa){

        alert("o numero e menor");
    }else{
        alert("voce acertou")

    }
    
}
    
}



function exemplofor6(){

    let valor = prompt("digite o valor")
    while ( valor >= 0){

        alert(valor)
        valor--

    }
}
