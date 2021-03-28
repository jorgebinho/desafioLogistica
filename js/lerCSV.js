const path = require('path');
const csv = require('csvtojson');

var cidades = [
"ARACAJU", 
"BELEM", 
"BELOHORIZONTE", 
"BRASILIA", 
"CAMPOGRANDE", 
"CUIABA", 
"CURITIBA", 
"FLORIANOPOLIS", 
"FORTALEZA", 
"GOIANIA", 
"JOAOPESSOA", 
"MACEIO", 
"MANAUS", 
"NATAL", 
"PORTOALEGRE", 
"PORTOVELHO", 
"RECIFE", 
"RIOBRANCO", 
"RIODEJANEIRO", 
"SALVADOR", 
"SAOLUIS", 
"SAOPAULO", 
"TERESINA", 
"VITORIA"
];

const busca = (chegada, destino) => {
    console.log(`CHEGADA ${chegada} /\ DESTINO ${destino}`);
};
        
const csvPath = path.resolve("assets/csv/DNIT-Distancias.csv")
const cityPosChegada = "FORTALEZA"
csv({delimiter: ";"})
    .fromFile(csvPath)
    .then((jsonObj)=>{
        console.log(jsonObj[cidades.indexOf("VITORIA")][cityPosChegada]);
    })