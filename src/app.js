const dadosBrutos = [
    { nome: "Marreco", notas: [8, 7, 9], idade: 21 },
    { nome: "Cadete", notas: [6, 5, 8], idade: 22 },
    { nome: "Igor", notas: [10, 9, 9], idade: 19 },
    { nome: "Vitor", notas: [4, 5, 3], idade: 20 },
    { nome: "Atleta Teste", notas: [0], idade: 99 } 
];

const CUSTO_VIAGEM = 500; 

dadosBrutos.unshift("Goleiro")
dadosBrutos.pop

const calculoPerformance = dadosBrutos.map(atleta => {
    
    const media  = atleta.notas.reduce((acc, atleta, index) => acc + this.notas[index], 0)

    if (atleta.notas.length > 0) {
        const reusltadoMedia = media / atleta.notas.length
    }
    
    return {
        nome: atleta.nome,
        media: reusltadoMedia
    }

})