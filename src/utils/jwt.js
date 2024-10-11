import jwt from 'jsonwebtoken'
const KEY = 'diario'

export  function gerarToken(resposta) {

 return jwt.sign(resposta, KEY )
 
}

export  function Autenticar(req, resp, next) {

    return autenticacao(req, resp, next)
}


export function autenticacao(req, resp, next){

    try {
        let token = req.headers['x-access-token']
      
        if(token === undefined) 
            token = req.query['x-access-token']


        let signed = jwt.verify(token, KEY)

        req.user = signed

        next();

        
    } catch (e) {
        resp.status(401).end()
    }

}