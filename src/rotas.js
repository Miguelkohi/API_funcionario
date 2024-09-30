import funcionariosController from  './controller/funcionariosController.js'


export default function adicionarRotas (servidor){
    servidor.use (funcionariosController); 
}