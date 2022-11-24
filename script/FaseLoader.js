'use strict'
// Função para carregar o Loading
PersoName = localStorage.getItem("PersoName")
let ContainerLoader = document.querySelector('#InfoHeader')
let items = document.querySelectorAll('.InfoHeaderP')  


// CARREGAR TEXTO
const LoadTestos = (Testos, ContainerLoader)=>{
    Testos.forEach( Testo =>{
        ContainerLoader.innerHTML += `<div class="InfoHeaderP" id="IHP${Testo.IHP}"><h3 class="FaseNumeroPag">${Testo.IHP}</h3> ${Testo.p01}${Testo.p02}${Testo.p03}${Testo.p04}${Testo.p05} </div>`
    });
}
LoadTestos(Testos, ContainerLoader)
LiberarTextoOrdem()
function LiberarTextoOrdem(){
    document.querySelector("#IHP01").classList.remove("Wait")
    let Index = 1
    let IndexTexto = Testos.length
    let i = Index + 1
    for(i; i<=IndexTexto; i++){
        console.log(`#IHP0${i}`)
        document.querySelector(`#IHP0${i}`).classList.add("Wait")         
    }
}
let i = 2
let pass = 0
// BOTÂO NEXT
const LiberarNext = ()=>{  
    if(i<=Testos.length) {
        let Index = i+1
        for(i; i<Index; i++){                    
            document.querySelector(`#IHP0${i}`).classList.remove("Wait")              
            document.querySelector(`#IHP0${i-1}`).classList.add("Wait")    
            if(i==4){
                if(pass != 1){
                    setTimeout(function(){
                        pass = 1
                        alert("O simbolo de ' * ', quer dizer que a escolha levará para uma missão que siga a Historia.")    
                        return pass = 1                
                    }, 450)
                }
            }      
        }
        return i, pass
    }else{
        console.log("Limite atingido")
        alert("Limite atingido")
    }
}
// BOTAO PREVIOUS
const LiberarPrevious = ()=>{    
    let j = i
    let Index = i-1
    if(Index>1){           
        for(Index/*1*/ ; Index<i; Index++){        
            document.querySelector(`#IHP0${Index}`).classList.add("Wait")              
            document.querySelector(`#IHP0${Index-1}`).classList.remove("Wait")  
            j++
        }
    }else{
        console.log("Não dá pra voltar mais")
        alert("Limite atingido")

    } 
    if(i>=3){
        return i--
    }
}

// NEXT E PREVIOUS USANDO TECLADO
document.body.addEventListener('keydown', function(event) {
    let tecla = event.keyCode
    // alert(tecla)
    if((tecla == KetSetaD) || (tecla == KeyD)){
        LiberarNext()
    }else if((tecla == KetSetaS) || (tecla == KeyA)){
        LiberarPrevious()
    } 
});
