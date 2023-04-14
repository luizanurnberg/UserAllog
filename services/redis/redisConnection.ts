import { createClient } from 'redis';

const client = createClient();
async function runRedis() {
    try {
        await client.connect();
        console.log('Conectado ao Redis!');
    } catch (error) {
        console.log(error);
    }
}

runRedis();

export {
    client
}