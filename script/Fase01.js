setTimeout(function(){
    if(pass == 1){        
        document.querySelector('button.btn').classList.remove('Wait') 
    }
}, 4000)

document.querySelector('#BodyFase01 button.btn').addEventListener('click', function(){
    document.location.href = "./Fase01-Inicio.html"
})