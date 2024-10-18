import { gerarToken } from '../utils/jwt.js';
import * as db from '../repository/funcionariosRepository.js';

import { Router } from 'express';
const endpoints = Router (); 

endpoints.get('/entrar/', async (req, resp) => {
    try {
        let user =  req.body

        let registros = await db.validarUsuario(user);
        
        if(registros == null){
            resp.send({ erro: "Usuário ou senha incorreto(s)"})
        } else{
            let token = gerarToken(registros)
            resp.send({
                "token": token
            })
        }
    } catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})
