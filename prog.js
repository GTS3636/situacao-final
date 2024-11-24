let divisao = document.querySelector(".inDiv")
let br = document.createElement("br")
divisao.appendChild(br)
let res = document.createElement("div")
res.setAttribute("id", "res")
let visu = document.createElement("div")
visu.setAttribute("id", "visu")
divisao.appendChild(visu)
divisao.appendChild(res)
let ordenar = document.getElementById("ordenar")

ordenar.addEventListener("click", ()=>{
    let array = []
                let valor_atual = 0

    for(let i = 0; i < 6; i++){
                    array[i] = gerarNum(10,1)
    }

    function gerarNum(max, min){
        let valor = Math.floor(Math.random() * (max - min + 1) + min)
        return valor
    }

    visu.textContent = `Antes de ser ordenado: [${array}]`

    for(j = array.length - 1; j > 0; j--){
        for(i=0; i < array.length - 1; i++){
            if(array[i] > array[i+1]){
                valor_atual = array[i]
                array[i] = array[i+1]
                array[i+1] = valor_atual
            }
        }
    }
    console.log(array)
    res.textContent = `Após ser ordenado: [${array}]`
})

//<==================================================> 
//<==================================================> 
//<==================================================> 

let divisao2 = document.querySelector(".inDiv2");
let br2 = document.createElement("br");
divisao2.appendChild(br2); 
let res2 = document.createElement("div");
res2.setAttribute("id", "res2"); 
let visu2 = document.createElement("div");
visu2.setAttribute("id", "visu2");
divisao2.appendChild(visu2);
divisao2.appendChild(res2);
let ordenar2 = document.getElementById("ordenar2");

ordenar2.addEventListener("click", () => {
    let array = [];
    let valor_atual = 0;

    for (let i = 0; i < 6; i++) {
        array[i] = gerarNum(10, 1);
    }

    function gerarNum(max, min) {
        let valor = Math.floor(Math.random() * (max - min + 1) + min);
        return valor;
    }

    visu2.textContent = `Antes de ser ordenado: [${array}]`;

    
    for (j = array.length - 1; j > 0; j--) {
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) {
                valor_atual = array[i];
                array[i] = array[i + 1];
                array[i + 1] = valor_atual;
            }
        }
    }
    console.log(array);
    res2.textContent = `Após ser ordenado: [${array}]`; 
});

//<==================================================> 
//<==================================================> 
//<==================================================> 

let divisao3 = document.querySelector(".inDiv3")
let br3 = document.createElement("br")
divisao3.appendChild(br3)
let res3a = document.createElement("div")
res3a.setAttribute("class", "res")
divisao3.appendChild(res3a)
let br3b = document.createElement("br")
divisao3.appendChild(br3b)
let res3b = document.createElement("div")
res3b.setAttribute("class", "res")
divisao3.appendChild(res3b)
let button3 = document.getElementById("for")

button3.addEventListener("click", ()=>{
    let pilha = []

function addMatriz(){
    for(let i=0; i<5; i++){ 
        pilha.push(i+1)
        console.table(pilha)
    }
    res3a.textContent = `Pilha criada: ${pilha}`
    somaMatriz()
}

function somaMatriz(){
    for(let i=0; i<4; i++){ 
        pilha.pop()
        console.table(pilha)
    }
}

addMatriz()
    res3b.textContent = `Pilha terminada: ${pilha}`
})

//<==================================================> 
//<==================================================> 
//<==================================================> 

let divisao4 = document.querySelector(".inDiv4")
let br4 = document.createElement("br")
divisao4.appendChild(br4)

let res4 = document.createElement("div")
res4.setAttribute("class", "res")
divisao4.appendChild(res4)

let buttonInit = document.getElementById("iniciar")
                            

buttonInit.addEventListener("click", ()=>{
    let num = Number(document.getElementById("num").value)
    if(num % 2 == 0){
        res4.textContent = `O número ${num} é par`
    } else{
        res4.textContent = `O número ${num} é impar`
    }
})

//<==================================================> 
//<==================================================> 
//<==================================================> 

let divisao5 = document.querySelector(".inDiv5")
let button = document.getElementById("calculoMedia")
let res5 = document.createElement("div")
res5.setAttribute("class", "res5")
divisao5.appendChild(res5)                         
                                
button.addEventListener("click", ()=>{
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)

    let media = (num1 + num2 + num3) / 3
                                    
    if(media < 5){
        res5.textContent = `A média é ${media} e o aluno está reprovado!`
    } else if(media >= 5 && media < 7){
        res5.textContent = `A média é ${media} e o aluno está em exame!`
    } else if(media >= 7){
        res5.textContent = `A média é ${media} e o aluno está aprovado!`
    }
})

//<==================================================> 
//<==================================================> 
//<==================================================> 

let divisao6 = document.querySelector(".inDiv6")
let button2 = document.getElementById("ordenacaoBubble")
let res6 = document.createElement("div")
res6.setAttribute("class", "res6")
divisao6.appendChild(res6)

button2.addEventListener("click", ()=>{
    let num_array = [8, 3, 7, 1, 3, 8, 6, 6, 9]
    let valor_atual = 0
    let contador = 0
    for(j=num_array.length-1;j>0;j--){
        for(i=0;i<num_array.length-1;i++){
            if(num_array[i]>num_array[i+1]){
            valor_atual = num_array[i]
            num_array[i]=num_array[i+1]
            num_array[i+1]=valor_atual
            }
            contador++
        }
    }

    res6.textContent = `O array ordenado em Bubble Sort é: ${num_array}; ` 
    res6.textContent += ` O número de interações realizadas foi de: ${contador}`
})

let divisao7 = document.querySelector(".inDiv7")
let button4 = document.getElementById("ordenacaoInserction")
let res7 = document.createElement("div")
res7.setAttribute("class", "res7")
divisao7.appendChild(res7)

button4.addEventListener("click", ()=>{
    let valor_atual = 0
    let num_array = [9, 4, 7, 1, 3, 8, 2, 6, 5]
    let contador = 0

    for(i=1;i<num_array.length;i++){
        let j = i - 1
        valor_atual = num_array[i]
        while(j>=0 && valor_atual < num_array[j]){
        num_array[j+1]=num_array[j]
        j--
        contador ++
        }
        contador ++
        num_array[j+1]=valor_atual
        }

        res7.textContent = `O array ordenado em Insertion Sort é: ${num_array}; `
        res7.textContent += ` O número de interações realizadas foi de: ${contador}`
})

let divisao8 = document.querySelector(".inDiv8")
let button5 = document.getElementById("ordenacaoSelection")
let res8 = document.createElement("div")
res8.setAttribute("class", "res8")
divisao8.appendChild(res8)

button5.addEventListener("click", ()=>{
    let num_array = [2, 4, 8, 1, 3, 8, 5, 6, 10]
    let valor_atual = 0
    let contador = 0

    for(i=0;i<num_array.length;i++){
        menor = i
        for(j=i+1;j<num_array.length;j++){
            if(num_array[j]<num_array[menor]){
                menor = j
            }
            contador ++
        }
            if(i != menor){
                valor_atual = num_array[i]
                num_array[i]=num_array[menor]
                num_array[menor]=valor_atual
            }
    }
    res8.textContent = `O array ordenado em Selection Sort é: ${num_array}; `
    res8.textContent += ` O número de interações realizadas foi de: ${contador}`
})

//<==================================================> 
//<==================================================> 
//<==================================================> 

let divisao9 = document.querySelector(".inDiv9")
let resSa = document.createElement("div")
resSa.setAttribute("class", "resSa")
divisao9.appendChild(resSa)
let aument = document.getElementById("aumentoSalario")

aument.addEventListener("click", ()=>{
    let salario = 1000
    while(salario < 5000){
        salario = salario + 500
        resSa.textContent += ` Salário atual: R$ ${salario}`
    }
})

//<==================================================> 
//<==================================================> 
//<==================================================> 

let divisao10 = document.querySelector(".inDiv10")
let ordenacaoCre = document.getElementById("ordenacaoCrescente")
let ordenacaoDecre = document.getElementById("ordenacaoDecrescente")
let resOrdnDecre = document.createElement("div")
resOrdnDecre.setAttribute("class", "decrescente")
divisao10.appendChild(resOrdnDecre)
let resOrdnCre = document.getElementById("crescente")

ordenacaoCre.addEventListener("click", ()=>{
    let lista = []
    let aux = 0
    gerar()
    function gerarAleatorio2455(max, min){
        for(let i = 0; i < 10; i++){
            let valor = (Math.floor(Math.random() * (max - min + 1) + min))
            return valor
        }
    }
    function gerar(){
        for(let i = 0; i < 10; i++){
            lista.push(gerarAleatorio2455(10, 0))
        }
    }
        for(let i = 0; i < lista.length; i++){
            for(let j = 0; j < lista.length - 1; j++){
                if(lista[j] > lista[j + 1]){
                    let aux = lista[j]
                    lista[j] = lista[j + 1]
                    lista[j + 1] = aux
                }
            }
        }
    resOrdnCre.textContent = `Lista ordenada em ordem crescente: ${lista}`
})

ordenacaoDecre.addEventListener("click", ()=>{
    let lista = []
    let aux = 0
    gerar()
    function gerarAleatorio2455(max, min){
        for(let i = 0; i < 10; i++){
            let valor = (Math.floor(Math.random() * (max - min + 1) + min))
            return valor
        }
    }
    function gerar(){
        for(let i = 0; i < 10; i++){
            lista.push(gerarAleatorio2455(10, 0))
        }
    }
        for(let i = 0; i < lista.length; i++){
            for(let j = 0; j < lista.length - 1; j++){
                if(lista[j] < lista[j + 1]){
                    let aux = lista[j]
                    lista[j] = lista[j + 1]
                    lista[j + 1] = aux
                }
            }
        }
        resOrdnDecre.textContent = `Lista ordenada em ordem decrescente: ${lista}`
})

//<==================================================> 
//<==================================================> 
//<==================================================> 

let divisao11 = document.querySelector(".inDiv11")
let showMatris = document.createElement("div")
showMatris.setAttribute("class", "showMatriz")
divisao11.appendChild(showMatris)
let buttonMatrizPar = document.getElementById("gerarMatrizParImpar")

buttonMatrizPar.addEventListener("click", ()=>{
    let matriz = [[0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0]]
    gerarMatriz()
    function gerarMatriz(){
        for(let i = 0; i < matriz.length; i++){
            for(let j = 0; j < matriz[i].length; j++){
                matriz[i][j] = gerarAleatorioMatriz(10, 0)
            }
        }
        showMatris.textContent += `${matriz}`
        somaPares()
    }
    function gerarAleatorioMatriz(max, min){
        let valor = Math.floor(Math.random() * (max - min + 1) + min)
        return valor
    }
    function somaPares(){
        let soma = 0
        for(let i = 0; i < matriz.length; i++){
            for(let j = 0; j < matriz[i].length; j++){
                if(matriz[i][j] % 2 === 0){
                    soma += matriz[i][j]
                }
            }
        }
        showMatris.textContent += `Soma dos pares: ${soma}`
        somaImpares()
    }
    function somaImpares(){
        let soma = 0
        for(let i = 0; i < matriz.length; i++){
            for(let j = 0; j < matriz[i].length; j++){
                if(matriz[i][j] % 2 !== 0){
                    soma += matriz[i][j]
               }
            }
        }
        showMatris.textContent += `Soma dos impares: ${soma}`
    }
})

//<==================================================> 
//<==================================================> 
//<==================================================> 

let divisao12 = document.querySelector(".inDiv12")
let showMatrizSoma = document.createElement("div")
showMatrizSoma.setAttribute("class", "showMatrizSoma")
divisao12.appendChild(showMatrizSoma)
let buttonSomaMatriz = document.getElementById("somarMatrizes")

buttonSomaMatriz.addEventListener("click", ()=>{
    let matriz1 = [[0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0]]

    let matriz2 = [[0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0]]

    let matriz3 = [[0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0]]

                gerarMatrizes()

    function gerarMatrizes(){
        for(let i = 0; i < matriz1.length; i++){
            for(let j = 0; j < matriz1.length; j++){
                matriz1[i][j] = gerarMatrizesalatorio(10, 0)
                matriz2[i][j] = gerarMatrizesalatorio(10, 0)
            }
        }
        somarMatrizes()
    }
    function gerarMatrizesalatorio(max, min){
        let valor = Math.floor(Math.random() * (max - min + 1) + min)
        return valor
    }
    function somarMatrizes(){
        for(let i = 0; i < matriz1.length; i++){
            for(let j = 0; j < matriz1.length; j++){
                matriz3[i][j] = matriz1[i][j] + matriz2[i][j]
            }
        }
        showMatrizSoma.textContent = `A soma das matrizes é: ${matriz3}`
    }
})

//<==================================================> 
//<==================================================> 
//<==================================================>

let divisao13 = document.querySelector(".inDiv13")
let showMatrizDivi = document.createElement("div")
showMatrizDivi.setAttribute("class", "showMatrizDivi")
divisao13.appendChild(showMatrizDivi)
let showResu = document.createElement("div")
showResu.setAttribute("class", "showResu")
divisao13.appendChild(showResu)
let buttonGerarVerificar = document.getElementById("gerarVerif")

buttonGerarVerificar.addEventListener("click", ()=>{
    let matriz = [[0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0]]
                  gerarMatriz()
    function gerarMatriz(){
        for(let i = 0; i < matriz.length; i++){
            for(let j = 0; j < matriz.length; j++){
                matriz[i][j] = gerarMatrizesalatorio(10, 0)
            }
        }
        showMatrizDivi.textContent += `${matriz}`
        verificar()
    }
    function gerarMatrizesalatorio(max, min){
        let valor = Math.floor(Math.random() * (max - min + 1) + min)
        return valor
    }
    function verificar(){
        let soma = 0
        for(let i = 0; i < matriz.length; i++){
            for(let j = 0; j < matriz.length; j++){
                if(matriz[i][j] % 3 == 0){
                    soma += matriz[i][j]
                }
            }
        }
        showResu.textContent += `A soma dos números divisíveis por 3 foi de: ${soma}`
    }
})