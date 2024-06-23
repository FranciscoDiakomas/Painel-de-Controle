function Server() {
        const express = require('express')
        const mysql = require('mysql')
        const validator = require('validator')
        const cors = require('cors')
        const bodyParser = require('body-parser')
        const path = require('path')

        const app = express()
        app.use(express.json())
        app.use(bodyParser.urlencoded({extended:true}))

    //desativando o cors
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
        app.options('*', (req, res) => {
                res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
                res.send();
            }
        );
    });


        const DB = mysql.createConnection({
            host: "localhost",
            user : "root",
            password : "",
            database : "Painel"
        })
        DB.connect((err)=>{
            if(err){
                console.table({
                    msg : "Erro ao se connectar com o banco de dados!",
                })
            }else{
                console.log("Connectado ao Banco de Dados com Sucesso!")



            app.get("/dash",(req,res)=>{
            let sql1  = "select id from alunos;"
            DB.query(sql1,(err,result)=>{
                    
                    if(err){
                        console.log(err)
                    }else{
                        let alunos = result.length
                    res.json({
                        alunos : alunos
                })
                        
                    }

                })  
        
        })
        app.get("/dash1",(req,res)=>{
            let sql1  = "select id from curso;"
            DB.query(sql1,(err,result)=>{
                    
                    if(err){
                        console,log(err)
                    }else{
                        let cursos = result.length
                    res.json({
                        cursos : cursos
                    })
                        
                    }

                })  
        })
        app.get("/dash2",(req,res)=>{
            let sql1  = "select id from formador;"
            DB.query(sql1,(err,result)=>{
                    
                    if(err){
                        console,log(err)
                    }else{
                        let formadores = result.length
                    res.json({
                        formadores : formadores
                    })
                        
                    }

                })
        })
        app.get("/admin/:senha",(req,res)=>{
            let senha = req.params.senha
            if(String(senha).length === 0){
                res.json({
                    msg : "Envia a senha"
                })
            }else{
                sql = "select * from Admin where senha = ?;"
                    DB.query(sql,[senha],(err,result)=>{
                        if(err){
                            res.json({
                                msg : "Erro na query",
                                error : err
                            })
                        }else{
                            if(result.length == 0){
                                res.json({
                                    msg : "Admin não encotrado"
                                })
                            }else{
                                const {id,nome,email,senha,theme} = result[0]
                                    res.json({
                                        msg : "Admin encotrado",
                                        id : id,
                                        nome: nome,
                                        senha : senha,
                                        email : email,
                                        tema : theme,
                                    })
                                
                            }
                        }
                }
            )
            }
            
        })

        app.post("/tema",(req,res)=>{
            let tema = req.body.tema
            sql = "update Admin set theme = ? where id = 1;"
            DB.query(sql,[tema],(err,reult)=>{
                if(err){
                    res.json({
                        msg : "erro ao definir o tema",
                        err : err

                    })
                }else{
                    res.json({
                        msg : "tema redifido",
                        
                    })
                }
            })
        })


        //cursos

        //cadastro de curso
        app.post("/curso",(req,res)=>{
            const {nome,preco,duracao} = req.body
            if(String(nome).length === 0 || String(preco).length === 0  || String(duracao).length === 0){
                res.json({
                    msg : "Preencha todos os campos"
                })

            }else{
                    sql = "insert into curso(nome,preco,duracao) values (?);"
                    let valores = [nome,preco,duracao]
                    DB.query(sql,[valores],(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao cadastrar um curso",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "Nenhum curso foi encotrado "
                        })
                    }else{
                            res.json({
                                msg : "curso cadastrado com sucesso",
                        })
                    }
                })                
            }
                    
        
        })

        //listagem de curso
        app.get("/curso",(req,res)=>{
            sql = "select * from curso;"
            DB.query(sql,(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao listar os curso",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "A lista de cursos esta vazia"
                        })
                        
                    }else{
                            res.json({
                                msg : "curso cadastrado",
                                cursos :result
                        })
                    }
                })                
        })
        

        //pegar um curso
        app.get("/curso/:id",(req,res)=>{
            let id = Number(req.params.id)
            if(String(id).length === 0){
                res.send({
                    msg : "O id deve ser um núumero"
                })
            }else{
                sql = "select * from curso where id = ?;"
            DB.query(sql,[id],(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao listar os curso",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "Nenhum curso foi encotrado"
                        })
                        
                    }else{
                            res.json({
                                msg : "curso encotrado com sucesso",
                                cursos :result
                        })
                    }
                })          
            }
        })

        //deletar curso
        app.delete("/curso/:id",(req,res)=>{
            let id = req.params.id
            if(!validator.isNumeric(id) || String(id).length === 0){
                res.send({
                    msg : "O id deve ser um núumero"
                })
            }else{
                sql = "select * from curso where id = ?;"
            DB.query(sql,[id],(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao listar os curso",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "Nenhum curso foi encotrado"
                        })
                        
                    }else{
                        sql = "delete from curso where id = ?;"
                        DB.query(sql,[id],(err,resultado)=>{
                            if(err){
                                res.json({
                                    msg : "Erro ao tentar deletar",
                                    error : err
                                })
                            }else{
                                res.json({
                                    msg : "Curso deletado com sucesso!"
                                })
                            }
                        })
                    }
                })          
            }
        })



        //aluno

        //cadastro de alunos
        app.post("/aluno",(req,res)=>{
            const {nome,email,imageUrl,curso,propina,turma,periodo} = req.body
            if(String(nome).length === 0 || String(email).length === 0  || String(curso).length === 0 || String(propina).length === 0 || String(turma).length === 0 || String(periodo).length === 0 || String(imageUrl).length === 0){
                res.json({
                    msg : "Preencha todos os dados"
                })

            }else{
                if(validator.isEmail(email)){
                    sql = "insert into alunos(nome,email,imageUrl,curso,propina,turma,periodo) value (?);"
                    let valores = [nome,email,imageUrl,curso,propina,turma,periodo]
                    DB.query(sql,[valores],(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao cadastrar um aluno",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "Nenhum aluno foi encotrado "
                        })
                    }else{
                            res.json({
                                msg : "Aluno cadastrado com sucesso",
                        })
                    }
                })             
                }else{
                    res.json({
                        msg : "email inválido"
                    })

                }
                    
            }
                    
        
        })

        //listagem de alunos
        app.get("/aluno",(req,res)=>{
            sql = "select * from alunos;"
            DB.query(sql,(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao listar os alunos",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "A lista de alunos esta vazia"
                        })
                        
                    }else{
                            res.json({
                                msg : "alunos cadastrado",
                                alunos :result
                        })
                    }
                })                
        })

        //pegar um aluno
        app.get("/aluno/:id",(req,res)=>{
            let id = req.params.id
            if(!validator.isNumeric(id) || String(id).length === 0){
                res.send({
                    msg : "O id deve ser um número"
                })
            }else{
                sql = "select * from alunos where id = ?;"
            DB.query(sql,[id],(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao listar o alunos",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "Nenhum aluno foi encotrado"
                        })
                        
                    }else{
                            res.json({
                                msg : "aluno encotrado com sucesso",
                                cursos :result
                        })
                    }
                })          
            }
        })

        //deletar aluno
        app.delete("/aluno/:id",(req,res)=>{
            let id = req.params.id
            if(!validator.isNumeric(id) || String(id).length === 0){
                res.send({
                    msg : "O id deve ser um núumero"
                })
            }else{
                sql = "select * from alunos where id = ?;"
            DB.query(sql,[id],(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao listar o aluno",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "Nenhum aluno foi encotrado"
                        })
                        
                    }else{
                        sql = "delete from alunos where id = ?;"
                        DB.query(sql,[id],(err,resultado)=>{
                            if(err){
                                res.json({
                                    msg : "Erro ao tentar deletar o aluno",
                                    error : err
                                })
                            }else{
                                res.json({
                                    msg : "aluno deletado com sucesso!"
                                })
                            }
                        })
                    }
                })          
            }
        })        



        //formador

        //cadastro de formador
        app.post("/formador",(req,res)=>{
            const {nome,email,imageUrl,curso,salario,turma,periodo,ultPagamento} = req.body
            if(String(nome).length === 0 || String(email).length === 0  || String(curso).length === 0 || String(salario).length === 0 || String(turma).length === 0 || String(periodo).length === 0 || String(imageUrl).length === 0 || String(ultPagamento).length === 0){
                res.json({
                    msg : "Preencha todos os dados"
                })

            }else{
                if(validator.isEmail(email)){
                    sql = "insert into formador(nome,email,imageUrl,curso,salario,turma,periodo,formador) value (?);"
                    let valores = [nome,email,imageUrl,curso,propina,turma,periodo]
                    DB.query(sql,[valores],(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao cadastrar formador",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "Nenhum formador foi encotrado "
                        })
                    }else{
                            res.json({
                                msg : "formador cadastrado com sucesso",
                        })
                    }
                })             
                }else{
                    res.json({
                        msg : "email inválido"
                    })

                }
                    
            }
                    
        
        })

        //listagem de formador
        app.get("/formador",(req,res)=>{
            sql = "select * from formador;"
            DB.query(sql,(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao listar os formadore",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "A lista de formadores esta vazia"
                        })
                        
                    }else{
                            res.json({
                                msg : "alunos cadastrado",
                                formadores :result
                        })
                    }
                })                
        })

        //pegar um formador
        app.get("/formador/:id",(req,res)=>{
            let id = req.params.id
            if(!validator.isNumeric(id) || String(id).length === 0){
                res.send({
                    msg : "O id deve ser um número"
                })
            }else{
                sql = "select * from formador where id = ?;"
            DB.query(sql,[id],(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao listar o formador",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "Nenhum formador foi encotrado"
                        })
                        
                    }else{
                            res.json({
                                msg : "formador encotrado com sucesso",
                                formador :result
                        })
                    }
                })          
            }
        })

        //deletar aluno
        app.delete("/formador/:id",(req,res)=>{
            let id = req.params.id
            if(!validator.isNumeric(id) || String(id).length === 0){
                res.send({
                    msg : "O id deve ser um núumero"
                })
            }else{
                sql = "select * from formador where id = ?;"
            DB.query(sql,[id],(err,result)=>{
                    if(err){
                        res.json({
                                msg : "Erro ao listar o formador",
                                err : err
                        })
                    }else if(result.length === 0){
                        res.json({
                            msg : "Nenhum formador foi encotrado"
                        })
                        
                    }else{
                        sql = "delete from formador where id = ?;"
                        DB.query(sql,[id],(err,resultado)=>{
                            if(err){
                                res.json({
                                    msg : "Erro ao tentar deletar o formador",
                                    error : err
                                })
                            }else{
                                res.json({
                                    msg : "formador deletado com sucesso!"
                                })
                            }
                        })
                    }
                })          
            }
        })       
            }
        })


        app.get("/",(req,res)=>{
            res.json({
                msg : "welcome!"
            })
        })
        

        app.listen(3030,(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("Servidor Rodando")
            }
        })

}
Server()