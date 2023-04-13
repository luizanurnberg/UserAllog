import { client } from "./redisConnection";

class redisUpdateUser {
    async editUser(id: string, name: string, age: number) {
        try {
            const user = { name, age };
            await client.set(`user|${id}`, JSON.stringify(user));
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    redisUpdateUser
}