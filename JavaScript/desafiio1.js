
        let nomeProduto = prompt("Qual o produto desejado?");
        let quantidade = prompt("Qual quantidade?");
        let valorUni = prompt("Valor unitário?")
        let resultado = Number(quantidade) * Number(valorUni);
        let multiplicação = quantidade * valorUni
        alert(`Você comprou ` + quantidade + ` unidades de `+ nomeProduto + ` por R$ ` + valorUni + ` cada. Totalizando ` + multiplicação);
        console.log(`O valor da compra é R$: ${multiplicação}`);
  
