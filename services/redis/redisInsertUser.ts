import { client } from "./redisConnection";

class redisInsertUser {
    async saveUser(id: string, name: string, age: number) {
        try {
            const user = { id, name, age };
            await client.set(`user|${id}`, JSON.stringify(user));
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    redisInsertUser
}