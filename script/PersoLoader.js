ButtonGen.addEventListener('click', ConfirmarDadosGen)
function ConfirmarDadosGen(){  

    
    if(SelecGen.value == GenNone.value){
        window.alert("Selecione um Genêro")
        console.log("1")
    }else if(SelecGen.value == GenMasc.value){
        console.log("2")
        Gen = "Masculino"        
        Genero = "Masculino"        
        DadoConfirmadoGen()
    }else if(SelecGen.value == GenFem.value){
        console.log("3")
        Gen = "Feminino"        
        Genero = "Feminino"        
        DadoConfirmadoGen()
    }else if(SelecGen.value == GenOther.value){
        console.log("4")
        Gen = "Outro"        
        Genero = "Outro"        
        DadoConfirmadoGen()
    }
    localStorage.setItem("Gen", `${Genero}`)
    return Gen
}
function DadoConfirmadoGen(){
    window.alert(`Genêro validado como ${Gen}`)
    PersoSelectGen.classList.add("Confirmado")
    PersoSelectPerso.classList.remove("NaoConfirmado")
    Star1.classList.add("StarActive")
    Star2.classList.remove("StarActive")
    Star3.classList.remove("StarActive")
    if(Gen == "Masculino"){
        PersoSelectGroupMasc.classList.remove("NaoConfirmado")
        PersoSelectGroupMasc.classList.remove("Confirmado")
    }else if(Gen == "Feminino"){
        PersoSelectGroupFem.classList.remove("NaoConfirmado")
        PersoSelectGroupFem.classList.remove("Confirmado")
    }else if(Gen = "Outro" ){
        PersoSelectGroupFem.classList.remove("NaoConfirmado")
        PersoSelectGroupFem.classList.remove("Confirmado")
        PersoSelectGroupMasc.classList.remove("NaoConfirmado")
        PersoSelectGroupMasc.classList.remove("Confirmado")
    }else{
        window.alert("Error DADOCONFIRMARGEN ")
    }
}

ButtonPerso.addEventListener('click', ConfirmarDadosPerso)
function ConfirmarDadosPerso(){
    PersoName = document.querySelector('#PersoName').value
    NameLoader = document.querySelector('#PersoName').value
    localStorage.setItem("PersoName", `${NameLoader}`)
    if(PersoName.length == 0 || PersoName == ""){
        window.alert("Insira um Nome de Usuario Valido")
    }else{        
        DadoConfirmadoPerso()
    }
    return PersoName
}

function DadoConfirmadoPerso(){
    PersoSelectPerso.classList.add("Confirmado")
    Star1.classList.add("StarActive")
    Star2.classList.add("StarActive")
    Star3.classList.remove("StarActive")
    window.alert(`Nome do personagem validado como ${PersoName}`)
    PersoSelectSelect.classList.remove("NaoConfirmado")
    ButtonPersoSelect.classList.remove("NaoConfirmado")
    document.querySelector('#NewButtonSelect').classList.remove("NaoConfirmado")
    PersoSelectSelect.classList.remove("NaoConfirmado")
    if(Gen == "Masculino"){
        PersoSelectGroupMasc.classList.remove("NaoConfirmado")
    }else if(Gen == "Feminino"){
        PersoSelectGroupFem.classList.remove("NaoConfirmado")
    }else if(Gen == "Outro"){
        console.log("Linha 72")
    }
}


// SLECIONAR PERSONAGEM (MASC)

PersoMasc01.addEventListener('click', AtivarPersoMasc1)
PersoMasc02.addEventListener('click', AtivarPersoMasc2)
PersoMasc03.addEventListener('click', AtivarPersoMasc3)
PersoMasc04.addEventListener('click', AtivarPersoMasc4)

function AtivarPersoMasc1(){
    PersoMasc01.classList.add('PersonagemSelecionado')
    PersoMasc02.classList.remove('PersonagemSelecionado')
    PersoMasc03.classList.remove('PersonagemSelecionado')
    PersoMasc04.classList.remove('PersonagemSelecionado')
}
function AtivarPersoMasc2(){
    PersoMasc01.classList.remove('PersonagemSelecionado')
    PersoMasc02.classList.add('PersonagemSelecionado')
    PersoMasc03.classList.remove('PersonagemSelecionado')
    PersoMasc04.classList.remove('PersonagemSelecionado')
}
function AtivarPersoMasc3(){
    PersoMasc01.classList.remove('PersonagemSelecionado')
    PersoMasc02.classList.remove('PersonagemSelecionado')
    PersoMasc03.classList.add('PersonagemSelecionado')
    PersoMasc04.classList.remove('PersonagemSelecionado')
}
function AtivarPersoMasc4(){
    PersoMasc01.classList.remove('PersonagemSelecionado')
    PersoMasc02.classList.remove('PersonagemSelecionado')
    PersoMasc03.classList.remove('PersonagemSelecionado')
    PersoMasc04.classList.add('PersonagemSelecionado')
}

// SLECIONAR PERSONAGEM (FEM)

PersoFem01.addEventListener('click', AtivarPersoFem1)
PersoFem02.addEventListener('click', AtivarPersoFem2)
PersoFem03.addEventListener('click', AtivarPersoFem3)
PersoFem04.addEventListener('click', AtivarPersoFem4)

function AtivarPersoFem1(){
    PersoFem01.classList.add('PersonagemSelecionado')
    PersoFem02.classList.remove('PersonagemSelecionado')
    PersoFem03.classList.remove('PersonagemSelecionado')
    PersoFem04.classList.remove('PersonagemSelecionado')
}
function AtivarPersoFem2(){
    PersoFem01.classList.remove('PersonagemSelecionado')
    PersoFem02.classList.add('PersonagemSelecionado')
    PersoFem03.classList.remove('PersonagemSelecionado')
    PersoFem04.classList.remove('PersonagemSelecionado')
}
function AtivarPersoFem3(){
    PersoFem01.classList.remove('PersonagemSelecionado')
    PersoFem02.classList.remove('PersonagemSelecionado')
    PersoFem03.classList.add('PersonagemSelecionado')
    PersoFem04.classList.remove('PersonagemSelecionado')
}
function AtivarPersoFem4(){
    PersoFem01.classList.remove('PersonagemSelecionado')
    PersoFem02.classList.remove('PersonagemSelecionado')
    PersoFem03.classList.remove('PersonagemSelecionado')
    PersoFem04.classList.add('PersonagemSelecionado')
}

ButtonPersoSelect.addEventListener('click', ValidarPersoSelect)

function ValidarPersoSelect(){
    if(!document.querySelector('.PersonagemSelecionado')){
        window.alert("Selecione seu personagem")
    }else{ //CASO TENHA SELECIONADO UM PERSONAGEM
        PersoSelectPerso.classList.add("Confirmado")        
        if(PersoMasc01.classList.contains("PersonagemSelecionado")){
            console.log("O personagem selecionado é o Brook")
            PersoTipe = "Brook"
            PersonagemSelect = "Brook"
        }else if(PersoMasc02.classList.contains("PersonagemSelecionado")){
            console.log("O personagem selecionado é o Ash")
            PersoTipe = "Ash"
            PersonagemSelect = "Ash"
        }else if(PersoMasc03.classList.contains("PersonagemSelecionado")){
            console.log("O personagem selecionado é o Clemont")
            PersoTipe = "Clemont"
            PersonagemSelect = "Clemont"
        }else if(PersoMasc04.classList.contains("PersonagemSelecionado")){
            console.log("O personagem selecionado é o Garry")
            PersoTipe = "Garry"
            PersonagemSelect = "Garry"
        }else if(PersoFem01.classList.contains("PersonagemSelecionado")){
            console.log("O personagem selecionado é a Misty")
            PersoTipe = "Misty"
            PersonagemSelect = "Misty"
        }else if(PersoFem02.classList.contains("PersonagemSelecionado")){
            console.log("O personagem selecionado é a Serena")
            PersoTipe = "Senere"
            PersonagemSelect = "Senere"
        }else if(PersoFem03.classList.contains("PersonagemSelecionado")){
            console.log("O personagem selecionado é a May")
            PersoTipe = "May"
            PersonagemSelect = "May"
        }else if(PersoFem04.classList.contains("PersonagemSelecionado")){
            console.log("O personagem selecionado é a Iris")
            PersoTipe = "Iris"
            PersonagemSelect = "Iris"
        }

        
        
        else{
            window.alert("Surgiu um erro inesperado")
        }
        Star1.classList.add("StarActive")
        Star2.classList.add("StarActive")
        Star3.classList.add("StarActive")
        setTimeout(function(){
            PersoSelectSelect.classList.add("Confirmado")
            document.location.href = "./Fase/Fase01.html"
            localStorage.setItem("PersoTipe", `${PersonagemSelect}`)
        }, 2000)  
    }
    return PersoTipe
}



// SISTEMA DE BACK

Star1.addEventListener('click', LiberarEstrela1)
Star2.addEventListener('click', LiberarEstrela2)
Star3.addEventListener('click', LiberarEstrela3)
function LiberarEstrela1(){
    Star1.classList.remove("StarActive")
    Star2.classList.remove("StarActive")
    Star3.classList.remove("StarActive")
    Gen = ""
    PersoName = ""
    PersoTipe = ""
    document.querySelector('#PersoName').value = ""
    PersoMasc01.classList.remove('PersonagemSelecionado')
    PersoMasc02.classList.remove('PersonagemSelecionado')
    PersoMasc03.classList.remove('PersonagemSelecionado')
    PersoMasc04.classList.remove('PersonagemSelecionado')
    PersoSelectGen.classList.remove("Confirmado")
    PersoSelectPerso.classList.remove("Confirmado")
    PersoSelectSelect.classList.remove("Confirmado")
    PersoSelectGroupMasc.classList.remove("Confirmado")
    PersoSelectGroupFem.classList.remove("Confirmado")
    PersoSelectGen.classList.remove("NaoConfirmado")
    PersoSelectPerso.classList.add("NaoConfirmado")
    PersoSelectGroupMasc.classList.add("NaoConfirmado")
    PersoSelectSelect.classList.add("NaoConfirmado")
    PersoSelectGroupFem.classList.add("NaoConfirmado")
    document.querySelector('#NewButtonSelect').classList.add("NaoConfirmado")
    SelecGen.value = GenNone.value
}


function LiberarEstrela2(){
    if(Gen != ""){
        Star1.classList.add("StarActive")
        Star2.classList.remove("StarActive")
        Star3.classList.remove("StarActive")
        PersoName = ""
        PersoTipe = ""
        document.querySelector('#PersoName').value = ""
        PersoMasc01.classList.remove('PersonagemSelecionado')
        PersoMasc02.classList.remove('PersonagemSelecionado')
        PersoMasc03.classList.remove('PersonagemSelecionado')
        PersoMasc04.classList.remove('PersonagemSelecionado')
        PersoSelectGen.classList.add("Confirmado")
        PersoSelectGen.classList.add("NaoConfirmado")
        PersoSelectPerso.classList.remove("NaoConfirmado")
        PersoSelectPerso.classList.remove("Confirmado")
        PersoSelectSelect.classList.add("NaoConfirmado")
        PersoSelectSelect.classList.remove("Confirmado")
        PersoSelectGroupMasc.classList.add("NaoConfirmado")
        PersoSelectGroupMasc.classList.remove("Confirmado")
        PersoSelectGroupFem.classList.add("NaoConfirmado")
        PersoSelectGroupFem.classList.remove("Confirmado")
        document.querySelector('#NewButtonSelect').classList.add("NaoConfirmado")
        SelecGen.value = GenNone.value
    }else{
        window.alert("Para ir para a segunda estrela, informe o Genêro")
    }
}

function LiberarEstrela3(){
    if(PersoName != ""){
        Star1.classList.add("StarActive")
        Star2.classList.add("StarActive")
        Star3.classList.remove("StarActive")        
        PersoTipe = ""
        document.querySelector('#PersoName').value = ""
        PersoMasc01.classList.remove('PersonagemSelecionado')
        PersoMasc02.classList.remove('PersonagemSelecionado')
        PersoMasc03.classList.remove('PersonagemSelecionado')
        PersoMasc04.classList.remove('PersonagemSelecionado')
        PersoSelectGen.classList.add("Confirmado")
        PersoSelectPerso.classList.add("Confirmado")
        PersoSelectSelect.classList.remove("Confirmado")
        PersoSelectGen.classList.add("NaoConfirmado")
        PersoSelectPerso.classList.add("NaoConfirmado")
        if(Gen == "Masculino"){
            PersoSelectGroupMasc.classList.remove("Confirmado")
            PersoSelectGroupMasc.classList.remove("NaoConfirmado")
            PersoSelectSelect.classList.remove("NaoConfirmado")
            document.querySelector('#NewButtonSelect').classList.remove("NaoConfirmado")
        }else if(Gen == "Feminino"){
            PersoSelectGroupFem.classList.remove("Confirmado")
            PersoSelectGroupMasc.classList.add("Confirmado")
            PersoSelectGroupFem.classList.remove("NaoConfirmado")
            PersoSelectGroupMasc.classList.add("NaoConfirmado")
            PersoSelectSelect.classList.remove("NaoConfirmado")
            document.querySelector('#NewButtonSelect').classList.remove("NaoConfirmado")
        }else{
            PersoSelectGroupFem.classList.add("Confirmado")
            PersoSelectGroupFem.classList.add("NaoConfirmado")
            PersoSelectSelect.classList.add("NaoConfirmado")
            console.log("Erro localizado na regiao 'LIBERARESTRELA3()'")
            document.querySelector('#NewButtonSelect').classList.add("NaoConfirmado")
        }               
        
    }else{
        window.alert("Para ir para a terceira Estralha, informe o Nome")
    }
}
