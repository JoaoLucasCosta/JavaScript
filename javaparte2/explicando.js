    //if: Executa um bloco de código se a condição for verdadeira.
    //else: Executa outro bloco de código se a condição for falsa.
    let numero = prompt("Digite um número:");

    //> e <: Usados para verificar maior ou menor.
    if (numero > 0) {
        alert("O número é positivo!");
    } else {
        alert("O número é negativo ou zero!");
    }

    //>= e <=: Usados para verificar maior ou igual, menor ou igual.
    let idade = prompt("Digite sua idade:");

    if (idade >= 18) {
        alert("Você é maior de idade!");
    } else {
        alert("Você é menor de idade!");
    }


    //%: resto da divisão, ===: Compara os valores e os tipos.
    let numero1 = prompt("Digite um número:");

    if (numero1 % 2 === 0) {
        alert("O número é par!");
    } else {
        alert("O número é ímpar!");
    }

    //==: Compara apenas os valores, ignorando o tipo
    let numeroSecreto = 5;
    let chute = prompt("Adivinhe o número (entre 1 e 10):");

    if (chute == numeroSecreto) {
        alert("Você acertou!");
    } else {
        alert("Você errou! O número era " + numeroSecreto);
    }
