function quest1(){
    let vetor = [1,2,3,4,5]
    let vetMath = []

    for(let i=0;i<5;i++){
        vetMath[i] = vetor[i] * 3
    }
    console.table(vetMath)

    let res1 = document.getElementById('res1')
    res1.innerHTML = `${vetMath}`
}
function quest2(){
    let vet = Number(document.getElementById('vet').value)
    let vetor = [1,2,3,4,5]
    let vetMath = []

    for(let i=0;i<5;i++){
        vetMath[i] = vetor[i] * vet
    }
    console.table(vetMath)

    let res2 = document.getElementById('res2')
    res2.innerHTML = `${vetMath}`
}
function quest3(){
    let vetor = [1,2,3,4,5]
    let vetMath = []

    for(let i=0;i<5;i++){
        vetMath[i] = vetor[i] + 7
    }
    console.table(vetMath)

    let res3 = document.getElementById('res3')
    res3.innerHTML = `${vetMath}`
}
function quest4(){
    let vet2 = Number(document.getElementById('vet2').value)
    let vetor = [1,2,3,4,5]
    let vetMath = []

    for(let i=0;i<5;i++){
        vetMath[i] = vetor[i] + vet2
    }
    console.table(vetMath)

    let res4 = document.getElementById('res4')
    res4.innerHTML = `${vetMath}`
}

let vetrum = []
let vetrois = []

function gravarpsume(){
    let vetor1 = Number(document.getElementById('vetor1').value)
    let vetor2 = Number(document.getElementById('vetor2').value)
    
    vetrum.push(vetor1)
    vetrois.push(vetor2)
    
    console.log(vetrum)
    console.log(vetrois)
}
function quest5(){
    let somaVet = []

    for(let i=0;i<5;i++){
        somaVet[i] = vetrum[i] + vetrois[i]
    }
    console.log(somaVet)

    res5.innerHTML = `${somaVet}`
}

let vetum = []
let vetdois = []

function gravarpsub(){
    let veto1 = Number(document.getElementById('veto1').value)
    let veto2 = Number(document.getElementById('veto2').value)
    
    vetum.push(veto1)
    vetdois.push(veto2)
    
    console.log(vetum)
    console.log(vetdois)
}
function quest6(){
    let subVet = []

    for(let i=0;i<5;i++){
        subVet[i] = vetum[i] - vetdois[i]
    }
    console.log(subVet)

    res6.innerHTML = `${subVet}`
}

let vetsete = []

function gravarsete(){
    let vetx = Number(document.getElementById('vetx').value)
    
    vetsete.push(vetx)
    
    console.log(vetsete)
}
function quest7(){
    let seteVet = 0

    for(let i=0;i<vetsete.length;i++){
        seteVet += vetsete[i]
    }
    console.log(seteVet)

    res7.innerHTML = `${seteVet}`
}

let veteoito = []
function gravaroito(){
    let vety = Number(document.getElementById('vety').value)
    
    veteoito.push(vety)
    
    console.log(veteoito)
}
function quest8(){
    veteoito.reverse()

    console.log(veteoito)

    res8.innerHTML = `${veteoito}`
}