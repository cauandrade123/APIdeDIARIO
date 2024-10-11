import 'dotenv/config'
import express from  'express'
import cors from 'cors'
import { conection } from './repository/conection.js'
import rotas from './rotas.js'

const server = express()
server.use(express.json())
server.use(cors())


rotas(server)



const PORTA = process.env.PORTA
server.listen(PORTA, () => console.log('api subiu na porta' + PORTA))