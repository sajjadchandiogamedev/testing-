let number1 = prompt("Enter your number here");
let sign = prompt("Enter your sign here");
let number2 = prompt("Enter your number here");
let result;


if(sign == "+"){
    result = number1 + number2;
}else if(sign == "-"){
    result = number1 - number2;
}else if(sign == "*"){
    result = number1 * number2;
}


document.writeln(result);