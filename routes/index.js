//Testar a conexão com o sequelize
// const sequelize = require('./database/db');
// async function testar(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// testar();

// Sincronizar o banco de dados
// import Pessoa from '../models/Pessoa.js';
// async function sincronizar(){
//   await Pessoa.sync();
//   console.log('Sincronizado');
// }
// sincronizar();

//Salvar uma pessoa
// const pessoa = require('./models/Pessoa');
// async function salvar(){
//   const paulo = pessoa.build({
//     nome: "Paulo",
//     email: "paulo@gmail.com"
//   });
//   await paulo.save();
// }
// salvar();

import express from 'express';
import dotenv from 'dotenv';

const router = express.Router();
router.use(express.json());
import {salvarPessoa, listarPessoas, buscarPessoa, deletarPessoa, atualizarPessoa} from '../controllers/PessoaController.js';

dotenv.config();
//Rotas para a entidade pessoa
router.get('/pessoas', listarPessoas);
router.get('/pessoas/:id', buscarPessoa);
router.post('/pessoas', salvarPessoa);
router.delete('/pessoas/:id', deletarPessoa);
router.put('/pessoas/:id', atualizarPessoa);

export default router;
