const { countLetterA } = require('./countLetterA');
const { isFibonacci } = require('./isFibonacci');
const readline = require('readline');

const terminalScreen = readline.createInterface({    
    input: process.stdin,       
    output: process.stdout              
}); 


function showMenu() {
    console.log("\nEscolha uma opção:");
    console.log("1 - Checar se um número pertence à sequência de Fibonacci");
    console.log("2 - Contar a quantidade de letras 'a' em uma string");
    console.log("0 - Sair");
}

function handleUserInput(option) {
    switch (option) {
        case '1':
            terminalScreen.question("Digite um número: ", (num) => {
                const result = isFibonacci(Number(num));
                console.log(`Resultado ------> ${result}`);
                showMenu();
                terminalScreen.question("Escolha uma opção: ", handleUserInput);
            });
            break;
        case '2':
            terminalScreen.question("Digite uma string para contar as letras 'a': ", (str) => {
                const result = countLetterA(str)
                console.log(`Resultado ------> ${result}`)
                ;
                showMenu();
                terminalScreen.question("Escolha uma opção: ", handleUserInput);
            });
            break;
        case '0':
            console.log("Encerrando...");
            terminalScreen.close();
            break;
        default:
            console.log("Está opção não é válida.");
            showMenu();
            terminalScreen.question("Escolha uma opção: ", handleUserInput);
            break;
    }
}

showMenu();
terminalScreen.question("Escolha uma opção: ", handleUserInput);