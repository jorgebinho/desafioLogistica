function um() {
    var custo = 0;
    custo = Math.abs(prompt("Digite o custo da viagem"));
    localStorage.setItem('custo', custo);
}

function retornaCusto(){
    custoh = localStorage.custo
}