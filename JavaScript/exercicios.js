
 // Pergunta o nome do usuário e exibe uma mensagem de boas-vindas.//

 let nome = prompt("Qual é o seu nome?");
alert(`Olá, ${nome}! Bem-vindo ao mundo do JavaScript!`);

 // 2. Calculadora Simples
 // Solicita dois números ao usuário, soma-os e mostra o resultado.//

 let numero1 = prompt("Digite o primeiro número:");
 let numero2 = prompt("Digite o segundo número:");
 let soma = Number(numero1) + Number(numero2);
alert(`A soma dos números é: ${soma}`);

// 3. Descubra sua Idade
// Pergunta o ano atual e o ano de nascimento do usuário, calcula a idade e exibe o resultado.

 let anoAtual = prompt("Digite o ano atual:");
 let anoNascimento = prompt("Digite o ano em que você nasceu:");
 let idade = Number(anoAtual) - Number(anoNascimento);
alert(`Você tem ${idade} anos.`);

 // 4. Loja de Sorvetes
 // Pergunta a quantidade de sorvetes e o preço unitário, calcula o total e mostra o valor.

let quantidade = prompt("Quantos sorvetes você quer comprar?");
 let preco = prompt("Qual é o preço de cada sorvete?");
 let total = Number(quantidade) * Number(preco);1
 alert(`O total da compra é: R$${total.toFixed(2)}`);

 // 5. Jogo de Adivinhação
 // Define um número secreto fixo, pede ao usuário um chute e exibe o número secreto e o chute.

 let numeroSecreto = 7;
 let chute1 = prompt("Adivinhe o número secreto (entre 1 e 10):");
 alert(`O número secreto era ${numeroSecreto}. Você chutou ${chute1}.`);

// Jogo de Adivinhação
// Gera um número secreto aleatório e pede ao usuário um chute, exibindo o número secreto e o chute.

 let numerSecreto = Math.floor(Math.random() * 10) + 1; // Gera um número aleatório entre 1 e 10
 let chute2 = prompt("Adivinhe o número secreto (entre 1 e 10):");
 alert(`O número secreto era ${numerSecreto}. Você chutou ${chute2}.`);



 // 6. Exibição de Números
 // Solicita dois números ao usuário e exibe os dois números informados.

 let numero1Exibicao = prompt("Digite o primeiro número:");
 let numero2Exibicao = prompt("Digite o segundo número:");
 alert(`Você digitou os números ${numero1Exibicao} e ${numero2Exibicao}.`);

 // 7. Conta de Restaurante
 // Pergunta o valor da conta e a porcentagem de gorjeta, calcula os valores e exibe os resultados.

 let valorConta = prompt("Digite o valor da conta:");
 let porcentagemGorjeta = prompt("Digite a porcentagem de gorjeta:");
 let valorGorjeta = (Number(valorConta) * Number(porcentagemGorjeta)) / 100;
 let totalConta = Number(valorConta) + valorGorjeta;
 alert(`O valor da gorjeta é R$${valorGorjeta.toFixed(2)}. O total a pagar é R$${totalConta.toFixed(2)}.`);

 // 8. Hora da Multiplicação
 // Solicita dois números ao usuário, calcula a multiplicação e exibe o resultado no console.

 let numero1Multiplicacao = prompt("Digite o primeiro número:");
 let numero2Multiplicacao = prompt("Digite o segundo número:");
 let resultado = Number(numero1Multiplicacao) * Number(numero2Multiplicacao);
 console.log(`O resultado da multiplicação é: ${resultado}`);

 // 9. Previsão do Futuro
 // Pergunta o nome, o ano atual e quantos anos adicionar, calcula o ano futuro e exibe uma mensagem.

 let nomeFuturo = prompt("Qual é o seu nome?");
 let anoAtualFuturo = prompt("Digite o ano atual:");
 let anosFuturo = prompt("Quantos anos você quer adicionar?");
 let anoFuturo = Number(anoAtualFuturo) + Number(anosFuturo);
 alert(`Olá, ${nomeFuturo}! Daqui a ${anosFuturo} anos estaremos no ano ${anoFuturo}.`);

 // 10. Exibição de Nota
 // Solicita uma nota ao usuário e exibe a nota informada.

 let nota = prompt("Digite a nota do aluno:");
 alert(`A nota digitada foi: ${nota}.`);

