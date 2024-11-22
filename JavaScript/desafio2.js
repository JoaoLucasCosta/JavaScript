
        let disciplina = prompt("Qual o nome da disciplina?");
        let nota1 = prompt("Nota da primeira atividade:");
        let nota2 = prompt("Nota da segunda atividade:");
        let nota3 = prompt("Nota da terceira atividade:");
        let soma = (Number(nota1) + Number(nota2) + Number(nota3))/3
        alert(`Na disciplina ` + disciplina+ `, você obteve as notas: ` +nota1+ ` ,` +nota2+ ` ,` +nota3+ `. E sua média foi: ` +soma)

