import userController from './controller/userController.js'
import diarioControler from './controller/diarioController.js'


export default function rotas (server) { 

    server.use(userController)
    server.use(diarioControler)

}