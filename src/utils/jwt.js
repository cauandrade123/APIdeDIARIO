import jwt from 'jsonwebtoken'
const KEY = 'diario'

export default function gerarToken(userInfo) {
 return jwt.sign(userInfo, KEY )
}

export default function Autenticar(req,resp,next) {
    return autenticacao(req, resp, next)
}


export default function autenticacao(res, resp, next){

    try {
        let token = req.headers['x-access-token']

        if(token == undefined) 
            token =  req.query['x-access-token']


        let signed = jwt.verify(token, KEY)

        req.user = signed

        next();

        
    } catch (error) {
        resp.status(401).end()
    }

}