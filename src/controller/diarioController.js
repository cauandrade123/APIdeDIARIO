import { Router, response } from "express";
import * as db  from '../repository/diarioRepository.js'
import {Autenticar} from '../utils/jwt.js'
const endpoints = Router()





endpoints.post('/inserir/conteudo', Autenticar, async (req,resp) => {
    try {
        let conteudo = req.body;
            
        if(conteudo == null || conteudo == undefined){

            resp.status(500).send({
                message : ''
            })

        } else {
            let conteudoInserido = await db.inserirNotaDiario(conteudo)
            
            resp.status(200).send({
                notaInserida: conteudoInserido
            })
        }

    } catch (error) {
        resp.status(500).send({
            error:error
        })
    }
  
})




endpoints.get('/consultar/notaDiario', Autenticar, async (req,resp) => {
  
    try {
        let consultasDiario = req.body;
    
    
        let resposta = await db.consultarNota(consultasDiario)
    
        resp.status(200).send(
            resposta
        )
    
    } catch (error) {

        resp.status(500).send({
                error : error
        })
    }
    
})




export default endpoints;