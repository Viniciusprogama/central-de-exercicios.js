function exercios01() {

    let idade = prompt("digite sua idade")

    if (idade >= 18) {
        alert("voce e maior de idade")
    } else {
        alert("voce e menor de idade")

    }

}



function exercios02() {


    let numero = prompt("digite um numero")

    if (numero >= 0) {
        alert("o numero e positivo")
    } else {
        alert("o numero e negativo")



    }



}


function exercios03() {

    let nota = prompt("digite sua nota")

    if (nota >= 60) {
        alert("voce foi aprovado")
    } else {
        alert("voce foi reprovado")


    }


}

function exercios04() {



    let numero = prompt("digite um numero")


    if (numero > 0) {
        
        alert("o numero e postivo")

        

    }

    else{
        if (numero < 0) {
            alert("o numero e negativo")
        } else {
            alert("o numero e neutro")
        }

    }

}


function exercios05(){

    let numero = prompt("digite um numero")


    if (numero %  2 == 0){
        alert("esse numero e divisivel")
    }else{
        alert("esse numero nao e divisivel")


    }





}

function exercios06(){

    

    let idade = prompt("digite sua idade")

    if(idade <=13){
        alert("crianca") 
    }

    else{
        if( idade <=17)
         alert("adolescente")   
    }

    
    
        

    
    
    
}


function exercios07(){
    let numero1 = prompt("digite um numero")
    let numero2 = prompt("digite outro numero")
    let numero3 = prompt("digite uma operacao")
  
    if(numero3 == "+"){
        soma = parseInt(numero1) + parseInt(numero2)}
    alert("a soma e "+ soma);
  
  
  }
  

  function exercios08(){



    let numero1 = prompt("digite um numero")
    let numero2 = prompt("digite o segundo numero")
    let numero3 = prompt("digite o terceiro numero")


    if(numero1 > numero2  && numero1>numero3)
        alert("o primeiro e o maior valor")
    if(numero2 > numero3 && numero2>numero1)
        alert("o segundo e o maior valor")
    if(numero3 > numero1 && numero3>numero2) 
        alert("o terceiro e o maior valor")   


  }
  
  

  
  
  