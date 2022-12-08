function swi() {
    return prompt("Digite uma operação");
}

function isOperation(caracter) {
    switch (caracter) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":

            return true;
        default:
            return false;
    }
}

var operacao = swi();
if (isOperation(operacao)) alert("Você fez uma operação!");
else alert("Opção inválida, tente novamente");