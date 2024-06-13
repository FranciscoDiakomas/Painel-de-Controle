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
    const btnsPagameto1 = document.querySelectorAll(".navigator1 button")
    function PagamentoBTN1() {
        btnsPagameto1.forEach((btn)=>{
            btn.classList.remove("active1")
        })
        this.classList.add("active1")
    }
    btnsPagameto1.forEach((iten)=>{
        iten.addEventListener("click",PagamentoBTN1)
    })    
    const btnsPagameto2 = document.querySelectorAll(".navigator2 button")
    function PagamentoBTN2() {
        btnsPagameto2.forEach((btn)=>{
            btn.classList.remove("active1")
        })
        this.classList.add("active1")
    }
    btnsPagameto2.forEach((iten)=>{
        iten.addEventListener("click",PagamentoBTN2)
    })    
    const btnsPagameto3 = document.querySelectorAll(".navigator3 button")
    function PagamentoBTN3() {
        btnsPagameto3.forEach((btn)=>{
            btn.classList.remove("active1")
        })
        this.classList.add("active1")
    }
    btnsPagameto3.forEach((iten)=>{
        iten.addEventListener("click",PagamentoBTN3)
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



     //gerenciamento da navegação ou rotas do meu site
    const dashBoardsreen = document.getElementById("dash")
    const cursoScreen = document.getElementById("curs")
    const formador = document.getElementById("forms")
    const alunos = document.getElementById("alns")
    const pagamento = document.getElementById("pagamnt")
    const admin = document.getElementById("adm")

    const screndash = document.getElementById("inicial")
    const screnCurs = document.getElementById("allcurs")
    const screnForms = document.getElementById("formadores")
    const screnLns = document.getElementById("alunos")
    const screnPay = document.getElementById("pagamentos")
    const screnAdmin = document.getElementById("Administrador")
    let lista =[]

    dashBoardsreen.addEventListener("click",(e)=>{
        e.preventDefault()
        screndash.classList.add("show")
        screndash.classList.remove("hiden")
        lista = [screnCurs,screnForms,screnPay,screnLns,screnAdmin]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })
    cursoScreen.addEventListener("click",(e)=>{
        e.preventDefault()
        screnCurs.classList.add("show")
        screnCurs.classList.remove("hiden")
        lista = [screndash,screnForms,screnPay,screnLns,screnAdmin]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })
    formador.addEventListener("click",(e)=>{
        e.preventDefault()
        screnForms.classList.add("show")
        screnForms.classList.remove("hiden")
        lista = [screndash,screnCurs,screnPay,screnLns,screnAdmin]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    alunos.addEventListener("click",(e)=>{
        e.preventDefault()
        screnLns.classList.add("show")
        screnLns.classList.remove("hiden")
        lista = [screndash,screnCurs,screnPay,screnForms,screnAdmin]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })
    pagamento.addEventListener("click",(e)=>{
        e.preventDefault()
        screnPay.classList.add("show")
        screnPay.classList.remove("hiden")
        lista = [screndash,screnCurs,screnLns,screnForms,screnAdmin]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })
    admin.addEventListener("click",(e)=>{
        e.preventDefault()
        screnAdmin.classList.add("show")
        screnAdmin.classList.remove("hiden")
        lista = [screndash,screnCurs,screnLns,screnForms,screnPay]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })



    //tela do gerenciamento dos cursos

    const btnCadastrarCurso = document.getElementById("cadastrarCurso")
    const btnLitarCuros= document.getElementById("listarCurso")
    const btnBuscarCurso= document.getElementById("buscarCurso")
    const btnDeletarCurso = document.getElementById("deletarCurso")
    const btnalterarCurso = document.getElementById("alterarCurso")
    const titulopageCurso = document.getElementById("titulopageCurso")

    const screenCadastrarCurso = document.getElementsByClassName("cadastrar")[0]
    const screenListarCurso = document.getElementsByClassName("listar")[0]
    const screenBuscarCurso = document.getElementsByClassName("Buscar")[0]
    const screenDeletarCurso = document.getElementsByClassName("deletar")[0]
    const screenAlterarCurso = document.getElementsByClassName("alterar")[0]

    btnCadastrarCurso.addEventListener("click",()=>{
        screenCadastrarCurso.classList.remove("hiden")
        screenCadastrarCurso.classList.add("show")
        titulopageCurso.textContent = "Cadastro de Curso"
        lista = [ screenBuscarCurso, screenDeletarCurso,screenListarCurso,screenAlterarCurso]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    btnBuscarCurso.addEventListener("click",()=>{
        screenBuscarCurso.classList.remove("hiden")
        screenBuscarCurso.classList.add("show")
        titulopageCurso.textContent = "Pesquisa de Curso"
        lista = [ screenCadastrarCurso, screenDeletarCurso,screenListarCurso,screenAlterarCurso]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    btnLitarCuros.addEventListener("click",()=>{
        screenListarCurso.classList.remove("hiden")
        screenListarCurso.classList.add("show")
        titulopageCurso.textContent = "Listagem de Curso"
        lista = [ screenCadastrarCurso, screenDeletarCurso, screenBuscarCurso,screenAlterarCurso]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    btnDeletarCurso.addEventListener("click",()=>{
        screenDeletarCurso.classList.remove("hiden")
        screenDeletarCurso.classList.add("show")
        titulopageCurso.textContent = "Remoção de Curso"
        lista = [ screenCadastrarCurso, screenListarCurso, screenBuscarCurso,screenAlterarCurso]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })
    btnalterarCurso.addEventListener("click",()=>{
        screenAlterarCurso.classList.remove("hiden")
        screenAlterarCurso.classList.add("show")
        titulopageCurso.textContent = "Actualização de Curso"
        lista = [ screenCadastrarCurso, screenListarCurso, screenBuscarCurso,screenDeletarCurso]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
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
    
    const titulopageFormadores = document.getElementById("titulopageFormadores")


    btncadastrarFormador.addEventListener("click",()=>{
        screencadastrarFormador.classList.remove("hiden")
        screencadastrarFormador.classList.add("show")
        titulopageFormadores.textContent = "Cadastro de Formador"
        lista = [ screenlistarFormador,  screenBuscarFormador, screendeletarFormador,screenalterarFormador]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })
    btnbuscarFormador.addEventListener("click",()=>{
        screenBuscarFormador.classList.remove("hiden")
        screenBuscarFormador.classList.add("show")
        titulopageFormadores.textContent = "Pesquisa de Formadores"
        lista = [ screenlistarFormador,screencadastrarFormador, screendeletarFormador,screenalterarFormador]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })
    btnlistarFormador.addEventListener("click",()=>{
        screenlistarFormador.classList.remove("hiden")
        screenlistarFormador.classList.add("show")
        titulopageFormadores.textContent = "Listagem de Formadores"
        lista = [screenBuscarFormador,screencadastrarFormador, screendeletarFormador,screenalterarFormador]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    btndeletarFormador.addEventListener("click",()=>{
        screendeletarFormador.classList.remove("hiden")
        screendeletarFormador.classList.add("show")
        titulopageFormadores.textContent = "Remoção de Formador"
        lista = [screenBuscarFormador,screencadastrarFormador, screenlistarFormador,screenalterarFormador]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    btnalterarFormador.addEventListener("click",()=>{
        screenalterarFormador.classList.remove("hiden")
        screenalterarFormador.classList.add("show")
        titulopageFormadores.textContent = "Actualização de Formador"
        lista = [screenBuscarFormador,screencadastrarFormador, screenlistarFormador,screendeletarFormador]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    
     //tela do gerenciamento dos alunos
    const btncadastrarAluno = document.getElementById("cadastrarAluno")
    const btnlistarAluno = document.getElementById("listarAluno")
    const btnbuscarAluno = document.getElementById("buscarAluno")
    const btndeletarAluno = document.getElementById("deletarAluno")
    const btnalterarAluno = document.getElementById("alterarAluno")

    const screencadastrarAluno = document.getElementsByClassName("cadastrarAluno")[0]
    const screenlistarAluno = document.getElementsByClassName("listarAluno")[0]
    const screenBuscarAluno = document.getElementsByClassName("BuscarAluno")[0]
    const screendeletarAluno = document.getElementsByClassName("deletarAluno")[0]
    const screenalterarAluno = document.getElementsByClassName("alterarAluno")[0]
    const titulPageAluno = document.getElementById("titulPageAluno")

    
    btncadastrarAluno.addEventListener("click",()=>{
        screencadastrarAluno.classList.remove("hiden")
        screencadastrarAluno.classList.add("show")
        titulPageAluno.textContent = "Cadastro de Aluno"
        lista = [ screenlistarAluno,  screenBuscarAluno, screendeletarAluno,screenalterarAluno]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })
    btnbuscarAluno.addEventListener("click",()=>{
        screenBuscarAluno.classList.remove("hiden")
        screenBuscarAluno.classList.add("show")
        titulPageAluno.textContent = "Pesquisa de Aluno"
        lista = [ screenlistarAluno,  screencadastrarAluno, screendeletarAluno,screenalterarAluno]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    btnlistarAluno.addEventListener("click",()=>{
        screenlistarAluno.classList.remove("hiden")
        screenlistarAluno.classList.add("show")
        titulPageAluno.textContent = "Listagem de Aluno"
        lista = [ screenBuscarAluno,  screencadastrarAluno, screendeletarAluno,screenalterarAluno]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    btndeletarAluno.addEventListener("click",()=>{
        screendeletarAluno.classList.remove("hiden")
        screendeletarAluno.classList.add("show")
        titulPageAluno.textContent = "Remoção de Aluno"
        lista = [ screenBuscarAluno,  screencadastrarAluno, screenlistarAluno,screenalterarAluno]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    btnalterarAluno.addEventListener("click",()=>{
        screenalterarAluno.classList.remove("hiden")
        screenalterarAluno.classList.add("show")
        titulPageAluno.textContent = "Actualização de Aluno"
        lista = [ screenBuscarAluno,  screencadastrarAluno, screenlistarAluno,screendeletarAluno]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
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
        screenpay.classList.remove("hiden")
        screenpay.classList.add("show")
        pagamentoTitle.textContent = "Pagamento de Propina"
        lista = [ screenverf, screenSalario]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    Pagametoverificar.addEventListener("click",()=>{
        screenverf.classList.remove("hiden")
        screenverf.classList.add("show")
        pagamentoTitle.textContent = "Verificação de Credenciais"
        lista = [ screenpay, screenSalario]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })

    salariobtn.addEventListener("click",()=>{
        screenSalario.classList.remove("hiden")
        screenSalario.classList.add("show")
        pagamentoTitle.textContent = "Pagamento de Salário"
        lista = [ screenverf, screenpay]
        lista.forEach((iten)=>{
            iten.classList.remove("show")
            iten.classList.add("hiden")
        })
    })
    
}