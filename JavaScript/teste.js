// Exibindo uma mensagem simples na tela
alert("Bem-vindo ao mundo do JavaScript!");


// Exibindo mensagens no console
console.log("Este é o console do navegador.");
console.log("Você pode ver isso pressionando F12 ou Ctrl+Shift+I.");


// Declarando variáveis
let nome = "Ana";
let idade = 30;

// Exibindo as variáveis
alert("Meu nome é " + nome + " e tenho " + idade + " anos.");
console.log("Nome:", nome);
console.log("Idade:", idade);


// Pedindo o nome do usuário
let nomeUsuario = prompt("Qual é o seu nome?");

// Exibindo uma mensagem personalizada
alert("Olá, " + nomeUsuario + "! Seja bem-vindo ao JavaScript!");
console.log("O usuário digitou o nome:", nomeUsuario);


// Guardando dois números
let numero1 = prompt("Qual é o numero 1?");
let numero2 = prompt("Qual é o numero 2?");

// Convertendo os valores para números
numero1 = Number(numero1);
numero2 = Number(numero2);

// Calculando a soma
let soma = numero1 + numero2;

// Exibindo o resultado
alert("A soma de " + numero1 + " e " + numero2 + " é: " + soma);
console.log("Resultado da soma:", soma);
