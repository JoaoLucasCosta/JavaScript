
    if (condicao1) {
        // Código executado se condicao1 for verdadeira
        } else if (condicao2) {
        // Código executado se condicao2 for verdadeira
        } else if (condicao3) {
        // Código executado se condicao3 for verdadeira
        } else {
        // Código executado se nenhuma condição for verdadeira
        }
    

    //EXEMPLO 01:
    let nota = Number(prompt("Digite sua nota (0 a 10):"));

    if (nota >= 9) {
        alert("Excelente! Você tirou uma nota A.");
    } else if (nota >= 7) {
        alert("Bom trabalho! Você tirou uma nota B.");
    } else if (nota >= 5) {
        alert("Você tirou uma nota C. Pode melhorar.");
    } else {
        alert("Nota insuficiente. Você tirou uma nota D.");
    }

