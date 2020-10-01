var slider = document.getElementById("myRange");
var output = document.getElementById("value");

//-------Quantidade de pessoas que responderam o questionário
var numPessoas = 2;

//-----------------
var i = 0 ;
var pessimo = 0, regular = 0, bom = 0, otimo = 0;
var maior = 0, menor = 200, qtdM = 0, qtdF = 0;
var media, totalAg=0, porct;

output.innerHTML = slider.value;

slider.oninput = () => {
    output.innerHTML = slider.value;
}

function res() {
do{

    var idade = document.getElementById('age').value;
    alert(idade);
    var sexo = parseFloat(document.getElementsByClassName('sexo').value);
    alert(sexo);

    if (idade.value > maior) {
        maior = idade.value;
    }
    if (idade.value < menor) {
        menor = idade.value;
    }

    if(sexo == 1){
        qtdM ++;
    }else{
        qtdF ++;
    }

    if (slider.value == 1) {
        pessimo++;
    } else if (slider.value == 2) {
        regular++;
    } else if (slider.value == 3) {
        bom++;
    } else{
        otimo++;
    }


    totalAg += idade;

i++;

} while( i < numPessoas);
    
    porct = parseFloat((parseFloat(bom) + parseFloat(otimo))/numPessoas);

    media = parseFloat((parseFloat (totalAg))/numPessoas) ;
    alert("Media das idades: " + media);
    alert("Idade da pessoa mais velha: " + maior);
    alert("Idade da pessoa mais nova: " + menor);
    alert("Quantidade de pessoas que colocaram pessimo: " + pessimo);
    alert("Porcetagem de pessoas que responderam Otimo e Bom: " + porct)
    alert("Número de Mulheres que responderam o questionário: " + qtdF);
    alert("Número de Homens que responderam o questionário: " + qtdM);
    
    alert("Muito Obrigado!!! ");
}