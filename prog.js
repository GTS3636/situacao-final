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
