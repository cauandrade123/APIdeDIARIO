import { Router } from "express";
import * as db from '../repository/userRepository.js'
import {gerarToken} from "../utils/jwt.js"
const endpoints  =  Router()

endpoints.post('/inserir/usuario',async (req,resp) => {
    try {
        let user =  req.body
    
        let idGerado = await db.inserirUser(user)

        resp.status(200).send(
            idGerado
        )

    } catch (error) {
        resp.status(500).send({
            message: "erro ao inserir usuario", 
            error: error.message
        })
    }
})



endpoints.post('/logar/user', async (req,resp) => {
try {
        let user =  req.body;
    
        let resposta = await db.logarUser(user)
    
            if (usuario == null) {
                resp.send({ erro: 'Usuario ou senha incorreto'})
            } else {
                let token = gerarToken(resposta)
                resp.status(200).send({
                    resposta: token
                })
            }
     

            
          

} catch (error) {
    resp.status(500).send({
        error: error
    })
}
   
})





export default endpoints;