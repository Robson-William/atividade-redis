import { createClient } from 'redis';

const client = createClient();

export async function conectar(){
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
}

export async function salvar(obj){
    const saida = await client.set(JSON.stringify(obj.id), JSON.stringify(obj), {EX: 3600});
    console.log(saida);
}

export async function buscar(id){
    const saida = await client.get(id);
    return saida;
}
