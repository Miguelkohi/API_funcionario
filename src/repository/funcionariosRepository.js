// 

import con from './Connection.js'

export async function validarUsuario(user){
    const comando = `
    select  
        id        id ,   
        nome      nome
    from usuarios
    where
        nome = ?
        and senha = ?
    `;

    let registros = await con.query(comando , [user.nome, user.senha]);
    return registros[0][0];
}

export async function alterarUsuario(id, user){
    const comando = `
        update usuarios
        set nome = ?,
            senha = ?
        where id = ?
    `;

    let resposta = await con.query(comando , [user.nome, user.senha, id])
    let info = resposta [0];

    return info.affectedRows;
}

export async function deletarUsuario(id){
    const comando = `
        delete from usuarios
        where id = ?
    `
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}