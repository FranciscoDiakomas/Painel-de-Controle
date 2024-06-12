window.onload = function () {

    //botões de navegação
    
    const sidebarBTNS = document.querySelectorAll(".links")
    function selectLink() {
        sidebarBTNS.forEach((btn)=>{
            btn.classList.remove("active")
        })
        this.classList.add("active")
    }
    sidebarBTNS.forEach((iten)=>{
    iten.addEventListener("click",selectLink)
    })
    const btnsPagameto = document.querySelectorAll(".navigator button")
    function PagamentoBTN() {
        btnsPagameto.forEach((btn)=>{
            btn.classList.remove("active1")
        })
        this.classList.add("active1")
    }
    btnsPagameto.forEach((iten)=>{
        iten.addEventListener("click",PagamentoBTN)
    })


     //tema do site

     let tema = document.getElementsByClassName("theme")[0]
    tema.addEventListener("click",()=>{
        document.body.classList.toggle("dark")
        document.getElementsByTagName("header")[0].classList.toggle("dark")
        document.getElementsByClassName("bolha")[0].classList.toggle("dark")
        tema.classList.toggle("dark")
        document.querySelector("main nav").classList.toggle("dark")
        document.querySelector("main article").classList.toggle("dark")
        let inputs = document.querySelectorAll("input")
        inputs.forEach((input)=>{
            input.classList.toggle("dark")
        })
        let selects = document.querySelectorAll("select")
        selects.forEach((select)=>{
            select.classList.toggle("dark")
        })
        document.querySelector("main h3").classList.toggle("dark")
        
    })

    //tela do gerenciamento dos cursos

    const btnCadastrarCurso = document.getElementById("cadastrarCurso")
    const btnLitarCuros= document.getElementById("listarCurso")
    const btnBuscarCurso= document.getElementById("buscarCurso")
    const btnDeletarCurso = document.getElementById("deletarCurso")
    const btnalterarCurso = document.getElementById("alterarCurso")

    const screenCadastrarCurso = document.getElementsByClassName("cadastrar")[0]
    const screenListarCurso = document.getElementsByClassName("listar")[0]
    const screenBuscarCurso = document.getElementsByClassName("Buscar")[0]
    const screenDeletarCurso = document.getElementsByClassName("deletar")[0]
    const screenAlterarCurso = document.getElementsByClassName("alterar")[0]

    btnCadastrarCurso.addEventListener("click",()=>{
        screenCadastrarCurso.classList.remove("hiden")
        screenCadastrarCurso.classList.add("show")
        
        screenBuscarCurso.classList.remove("show")
        screenBuscarCurso.classList.add("hiden")

        screenDeletarCurso.classList.remove("show")
        screenDeletarCurso.classList.add("hiden")

        screenListarCurso.classList.remove("show")
        screenListarCurso.classList.add("hiden")

        screenAlterarCurso.classList.remove("show")
        screenAlterarCurso.classList.add("hiden")
    })

    btnBuscarCurso.addEventListener("click",()=>{

        screenBuscarCurso.classList.remove("hiden")
        screenBuscarCurso.classList.add("show")
        
        screenCadastrarCurso.classList.remove("show")
        screenCadastrarCurso.classList.add("hiden")

        screenDeletarCurso.classList.remove("show")
        screenDeletarCurso.classList.add("hiden")

        screenListarCurso.classList.remove("show")
        screenListarCurso.classList.add("hiden")

        screenAlterarCurso.classList.remove("show")
        screenAlterarCurso.classList.add("hiden")

    })

    btnLitarCuros.addEventListener("click",()=>{

        screenListarCurso.classList.remove("hiden")
        screenListarCurso.classList.add("show")
        screenListarCurso.style.flexDirection = "column"
        screenListarCurso.style.gap = "10px"
        
        screenCadastrarCurso.classList.remove("show")
        screenCadastrarCurso.classList.add("hiden")

        screenDeletarCurso.classList.remove("show")
        screenDeletarCurso.classList.add("hiden")

        screenBuscarCurso.classList.remove("show")
        screenBuscarCurso.classList.add("hiden")

        screenAlterarCurso.classList.remove("show")
        screenAlterarCurso.classList.add("hiden")

    })

    btnDeletarCurso.addEventListener("click",()=>{

        screenDeletarCurso.classList.remove("hiden")
        screenDeletarCurso.classList.add("show")
        
        screenCadastrarCurso.classList.remove("show")
        screenCadastrarCurso.classList.add("hiden")

        screenBuscarCurso.classList.remove("show")
        screenBuscarCurso.classList.add("hiden")

        screenListarCurso.classList.remove("show")
        screenListarCurso.classList.add("hiden")

        screenAlterarCurso.classList.remove("show")
        screenAlterarCurso.classList.add("hiden")

    })

    btnalterarCurso.addEventListener("click",()=>{

        screenAlterarCurso.classList.remove("hiden")
        screenAlterarCurso.classList.add("show")
        
        screenCadastrarCurso.classList.remove("show")
        screenCadastrarCurso.classList.add("hiden")

        screenBuscarCurso.classList.remove("show")
        screenBuscarCurso.classList.add("hiden")

        screenListarCurso.classList.remove("show")
        screenListarCurso.classList.add("hiden")

        screenDeletarCurso.classList.remove("show")
        screenDeletarCurso.classList.add("hiden")

    })



  //tela do gerenciamento dos Formadores

    const btncadastrarFormador = document.getElementById("cadastrarFormador")
    const btnlistarFormador= document.getElementById("listarFormador")
    const btnbuscarFormador= document.getElementById("buscarFormador")
    const btndeletarFormador = document.getElementById("deletarFormador")
    const btnalterarFormador = document.getElementById("alterarFormador")

    const screencadastrarFormador = document.getElementsByClassName("cadastrarFormador")[0]
    const screenlistarFormador = document.getElementsByClassName("listarFormador")[0]
    const screenBuscarFormador = document.getElementsByClassName("BuscarFormador")[0]
    const screendeletarFormador = document.getElementsByClassName("deletarFormador")[0]
    const screenalterarFormador = document.getElementsByClassName("alterarFormador")[0]

    btncadastrarFormador.addEventListener("click",()=>{
        screencadastrarFormador.classList.remove("hiden")
        screencadastrarFormador.classList.add("show")
        
        screenBuscarFormador.classList.remove("show")
        screenBuscarFormador.classList.add("hiden")

        screendeletarFormador.classList.remove("show")
        screendeletarFormador.classList.add("hiden")

        screenlistarFormador.classList.remove("show")
        screenlistarFormador.classList.add("hiden")

        screenalterarFormador.classList.remove("show")
        screenalterarFormador.classList.add("hiden")
    })

    btnbuscarFormador.addEventListener("click",()=>{

        screenBuscarFormador.classList.remove("hiden")
        screenBuscarFormador.classList.add("show")
        
        screencadastrarFormador.classList.remove("show")
        screencadastrarFormador.classList.add("hiden")

        screendeletarFormador.classList.remove("show")
        screendeletarFormador.classList.add("hiden")

        screenlistarFormador.classList.remove("show")
        screenlistarFormador.classList.add("hiden")

        screenalterarFormador.classList.remove("show")
        screenalterarFormador.classList.add("hiden")

    })

    btnlistarFormador.addEventListener("click",()=>{

        screenlistarFormador.classList.remove("hiden")
        screenlistarFormador.classList.add("show")
        
        screencadastrarFormador.classList.remove("show")
        screencadastrarFormador.classList.add("hiden")

        screendeletarFormador.classList.remove("show")
        screendeletarFormador.classList.add("hiden")

        screenBuscarFormador.classList.remove("show")
        screenBuscarFormador.classList.add("hiden")

        screenalterarFormador.classList.remove("show")
        screenalterarFormador.classList.add("hiden")

    })

    btndeletarFormador.addEventListener("click",()=>{

        screendeletarFormador.classList.remove("hiden")
        screendeletarFormador.classList.add("show")
        
        screencadastrarFormador.classList.remove("show")
        screencadastrarFormador.classList.add("hiden")

        screenlistarFormador.classList.remove("show")
        screenlistarFormador.classList.add("hiden")

        screenBuscarFormador.classList.remove("show")
        screenBuscarFormador.classList.add("hiden")

        screenalterarFormador.classList.remove("show")
        screenalterarFormador.classList.add("hiden")

    })

    btnalterarFormador.addEventListener("click",()=>{

        screenalterarFormador.classList.remove("hiden")
        screenalterarFormador.classList.add("show")
        
        screencadastrarFormador.classList.remove("show")
        screencadastrarFormador.classList.add("hiden")

        screenlistarFormador.classList.remove("show")
        screenlistarFormador.classList.add("hiden")

        screenBuscarFormador.classList.remove("show")
        screenBuscarFormador.classList.add("hiden")

        screendeletarFormador.classList.remove("show")
        screendeletarFormador.classList.add("hiden")

    })


    //tela do pagamento

    const screenverf = document.getElementsByClassName("verf")[0]
    const Pagametoverificar = document.getElementById("verificar")
    const paybtn = document.getElementById("pagar")
    const screenpay = document.getElementById("pay")
    const salariobtn = document.getElementById("salario")
    const screenSalario = document.getElementById("salarial")
    const pagamentoTitle = document.getElementById("pagamentoTitle")
    paybtn.addEventListener("click",()=>{
        screenverf.style.display = "none"
        screenSalario.style.display = "none"
        screenpay.style.display = "flex"
        screenpay.style.flexDirection = "column"
        pagamentoTitle.textContent = "Pagamento de Propina"
    }) 
    Pagametoverificar.addEventListener("click",()=>{
            screenverf.style.display = "flex"
            screenpay.style.display = "none"
            screenSalario.style.display = "none"
            screenverf.style.flexDirection ="column"
            pagamentoTitle.textContent = "Verificação"
        
    })
    salariobtn.addEventListener("click",()=>{
            screenSalario.style.display = "flex"
            screenverf.style.display = "none"
            screenpay.style.display = "none"
            screenverf.style.flexDirection ="column"
            pagamentoTitle.textContent = "Salário do Formador"
        
    })
    
}