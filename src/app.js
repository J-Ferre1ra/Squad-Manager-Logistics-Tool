const dadosBrutos = [
    { nome: "Marreco", notas: [8, 7, 9], idade: 21 },
    { nome: "Cadete", notas: [6, 5, 8], idade: 22 },
    { nome: "Igor", notas: [10, 9, 9], idade: 19 },
    { nome: "Vitor", notas: [4, 5, 3], idade: 20 },
    { nome: "Atleta Teste", notas: [0], idade: 99 } 
];

const CUSTO_VIAGEM = 500; 

dadosBrutos.unshift({nome: "Goleiro", notas: [], idade: 30})
dadosBrutos.pop()

const calculoPerformance = dadosBrutos.map(atleta => {
    let reusltadoMedia =0
    const soma = atleta.notas.reduce((acc, nota) => acc + nota, 0)

    if (atleta.notas.length > 0) {
         reusltadoMedia = soma / atleta.notas.length
    }
    
    return {
        nome: atleta.nome,
        media: reusltadoMedia
    }

})

const filtragemTitulares = calculoPerformance.filter((atleta) => atleta.media >=7)

const calculoRateio = CUSTO_VIAGEM / filtragemTitulares.length

console.log("== Relatório de Viagem Intercampi ==");
for (const jogador of filtragemTitulares) {
    console.log(`Atleta: ${jogador.nome} | Média: ${jogador.media.toFixed(1)}`);
}
console.log("---------------------------");
console.log(`Custo por titular: ${calculoRateio.toFixed(2)}`);
