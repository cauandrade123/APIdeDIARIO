import { conection } from "./conection.js";



export async function inserirNotaDiario(dadosDiario) {


    let comando = `
    
    insert into tb_diario (conteudo,data_dt,id_usuario) values (?,?,?)

    `

    let resposta = await conection.query(comando, [dadosDiario.conteudo, dadosDiario.data_dt, dadosDiario.id_usuario])

    let info = resposta[0]

    return info.insertId
}

export async function consultarNota (dadosDiario) {

    let comando = `
    
    select * from tb_diario
    where data_dt = ? and id_usuario = ?

    `

    let resposta = await conection.query(comando, [dadosDiario.data_dt, dadosDiario.id_usuario])

    let info = resposta[0]

    return info


}

