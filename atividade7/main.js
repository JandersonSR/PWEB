function press(){
    var numberA = parseFloat(document.getElementById("numA").value);
    var numberB = parseFloat(document.getElementById("numB").value);
    var numberC = parseFloat(document.getElementById("numC").value);

    var bigger = Math.max(numberA, numberB, numberC);
    
    if((numberA == numberB)  && (numberB == numberC) && (numberA == numberC)){
        document.getElementById("result").innerHTML = "Os 3 numeros são iguais = " + numberA ;
    }
    else if(bigger){
        document.getElementById("result").innerHTML = "O número maior é: " + bigger ;
    } 
    else{
        document.getElementById("result").innerHTML = "Preencha todos os campos com número";
    } 
}
