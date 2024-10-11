import { conection } from "./conection.js"



export async function inserirUser (user){
    let comando = `
    insert into usuario(nome, senha )
    values(?,?)
    `

    let resposta = await conection.query(comando, [user.nome, user.senha])

    let info  =  resposta[0]

    return info.insertId
}


export async function logarUser (user){


    let comando = `
    SELECT nome, senha
    FROM usuario
    where nome = ?
    and senha = ?
    `

    let resposta = await conection.query(comando, [user.nome, user.senha])


    let linhas =  resposta[0]


    return linhas[0]

}





