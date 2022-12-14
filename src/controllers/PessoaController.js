import Pessoa from '../models/Pessoa.js';
import * as dbCache from '../database/redis.js';

dbCache.conectar();

export const salvarPessoa = async (req,res) =>{
    try{
        const pessoa = Pessoa.build(req.body);
        await pessoa.save();
        res.status(201).send('Usuário criado');
    }catch{
        res.status(400).send('Falha ao salvar');
    }
}

export const listarPessoas = async (req, res) =>{
    const pessoas = await Pessoa.findAll();
    res.status(200).send(pessoas);
}

export const buscarPessoa = async (req, res)=>{
	const {id} = req.params;
	
	const saida = await dbCache.buscar(id);
	if(saida === null){
		const pessoa = await Pessoa.findByPk(id);
		if(pessoa === null){
			res.status(404).send('Usuário não encontrado');
		} else {
			dbCache.salvar(pessoa);
			res.status(200).send(pessoa);
		}
	} else {
		res.status(200).send(saida);
	}
}

export const deletarPessoa = async (req,res)=>{
    const pessoa = await Pessoa.findByPk(req.params.id);
    if(pessoa === null){
        res.status(404).send('Usuário não encontrado');
    }else{
        await pessoa.destroy();
        res.status(200).send('Removido com sucesso');
    }
}

export const atualizarPessoa = async (req,res)=>{
    const pessoa = await Pessoa.findByPk(req.params.id);
    if(pessoa === null){
        res.status(404).send('Usuário não encontrado');
    }else{
        pessoa.set(req.body);
        await pessoa.save();
        res.status(200).send('Atualizado com sucesso');
    }
}
