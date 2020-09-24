var number = "";
var result = undefined;
var displayBuffer = "";
var terms = [undefined, undefined, undefined];


function pressNum(num){
   number = number.concat(num.innerHTML);
   showDisplay(num.innerHTML);
   
}

function showDisplay(conteudo){
    displayBuffer = displayBuffer.concat(conteudo);
    let screen = document.getElementById("display");
    screen.value = displayBuffer;
}

function clearAll(){
    clearDisplay();
    clearMemory();
}

function clearDisplay(){
    displayBuffer = "";
    let displayScreen = document.getElementById("display");
    displayScreen.value = displayBuffer;
}

function clearMemory(){
    number = "";
    terms = [undefined, undefined, undefined];
    result = undefined;
}

function chang(){
    number = number * (-1);
    terms[0] = number;
    clearDisplay();
    showDisplay(number);
}

function fraction(){
    number = number / 100;
    terms[0] = number;
    clearDisplay();
    showDisplay(number);
}

function pressOperat(op){  
    if(terms[1] == undefined){
        terms[0] = number;
        terms[1] = op.innerHTML;
        showDisplay(op.innerHTML);
        number = "";
    }   
}

function pressEqual(){
    if(terms[0] != undefined && terms[1] != undefined && number != ""){

        terms[2] = number;
        let keepResult;
            switch(terms[1]){
                case '+':
                    result = Number(terms[0]) + Number(terms[2]);
                    break;
                case '-':
                    result = Number(terms[0]) - Number(terms[2]);
                    break;
                case '*':
                    result = Number(terms[0]) * Number(terms[2]);
                    break;
                case '/':
                    if(terms[2] != 0){
                        result = Number(terms[0]) / Number(terms[2]);
                    }
                   else{
                       result = 0;
                   }
                    break;
            }
            keepResult = result;
            clearDisplay();
            showDisplay(result);
            clearMemory();
            number = keepResult;
    }
} 