     //1. Verificação de múltiplos números:
    //Peça três números ao usuário. Verifique se todos são positivos e exiba uma mensagem confirmando ou negando isso.

        let number1 = prompt("Primeiro número:")
        let number2 = prompt("Segundo número:")
        let number3 = prompt("Terceiro número:")

        if (number1> number2>  number3> 0) {
        alert("Os numeros que você escolheu são positivos."); 
      } else {
        alert("Nem todos os numeros que você escolheu são positivos.");
    }

    //2.Calculadora simples:
    //Pergunte dois números e uma operação matemática (soma, subtração, multiplicação ou divisão). Exiba o resultado apenas se a operação for válida.
        let num1 = prompt("Digite o primeiro numero para a operção matemática:")
        let operacao = prompt("Simbolo da operação matemática:")
        let num2 = prompt("Digite o segundo numero:")

        let soma = (Number(num1) + Number(num2))
        let divisao = (Number(num1) / Number(num2))
        let multi = (Number(num1) * Number(num2))
        let sub = (Number(num1) - Number(num2))


        if (operacao === "+") {
            alert("O resultado da soma é; " + soma)
            } else if (operacao === "/"){
            alert("O resultado da divisão é; " + divisao)
            } else if (operacao === "*"){
            alert("O resultado da multiplicação é; " + multi)
            } else if (operacao === "-"){
            alert("O resultado da subtração é; " + sub)
            }

    //3. Número no intervalo:
    //Peça um número ao usuário e informe se ele está entre 50 e 100, inclusive.

        let numb = prompt ("Digite um numero:")

        if (numb >= 50 && numb <= 100) {
            alert("Seu número está ente 50 e 100.");
            } else {
            alert("Seu número não está ente 50 e 100.");
            }
    
    //4.Desconto em compras:
    //Pergunte o valor total de uma compra. Se o valor for maior que 100 reais, aplique um desconto de 10% e exiba o valor final. 
    //Caso contrário, mostre o valor sem desconto.

        let conta = prompt("Valor da compra:")

        if (conta >=100){
            let valorcomdesconto = conta * 0.9;
            alert(`Valor com desconto R${valorcomdesconto.toFixed(2)}`);
        }

    // 5. Classificação por altura
    // Peça a altura de uma pessoa (em cm) e diga se ela é "Baixa", "Média" ou "Alta".
    let altura = Number(prompt("Digite sua altura em cm:"));

    if (altura < 150) {
    console.log("Baixa");
    } else if (altura <= 180) {
    console.log("Média");
    } else {
    console.log("Alta");
    }

    // 6. Verificação de senha
    // Pergunte a senha ao usuário e compare com uma senha pré-definida (por exemplo, 1234). Exiba "Acesso permitido" se a senha estiver correta, e "Acesso negado" caso contrário.
    let senha = prompt("Digite a senha:");

    if (senha === "1234") {
    console.log("Acesso permitido.");
    } else {
    console.log("Acesso negado.");
    }

    // 7. Par ou ímpar com extra
    // Peça um número ao usuário e informe se ele é par ou ímpar. Se for ímpar e maior que 50, exiba também a mensagem "Número especial".
    let num = Number(prompt("Digite um número:"));

    if (num % 2 === 0) {
    console.log("O número é par.");
    } else {    
    console.log("O número é ímpar.");
    }
    if (num > 50) {
        console.log("Número especial.");
    }

    // 8. Classificação etária completa
    // Pergunte a idade do usuário e diga se ele é criança (até 12 anos), adolescente (13-17 anos), adulto (18-64 anos) ou idoso (65 anos ou mais).
    let idade = Number(prompt("Digite sua idade:"));

    if (idade <= 12) {
    console.log("Criança");
    } else if (idade <= 17) {
    console.log("Adolescente");
    } else if (idade <= 64) {
    console.log("Adulto");
    } else {
    console.log("Idoso");
    }

    // 9. Jogo de adivinhação
    // Pergunte um número entre 1 e 10. Exiba "Parabéns, você acertou!" se o número for igual a um número pré-definido. Caso contrário, mostre "Tente novamente!".
    let numeroEscolhido = 7; // Número pré-definido
    let numeroUsuario = Number(prompt("Adivinhe um número entre 1 e 10:"));

    if (numeroUsuario === numeroEscolhido) {
    console.log("Parabéns, você acertou!");
    } else { 
    console.log("Tente novamente!");
    }

    // 10. Avaliação de desempenho
    // Peça uma nota de 0 a 10 e informe a classificação do desempenho: "Ruim" (0-4), "Bom" (5-7) ou "Excelente" (8-10).
let nota = Number(prompt("Digite sua nota (0 a 10):"));

if (nota >= 0 && nota <= 4) {
    console.log("Ruim");
} else if (nota <= 7) {
    console.log("Bom");
} else if (nota <= 10) {
    console.log("Excelente");
} else {
    console.log("Nota inválida.");
}