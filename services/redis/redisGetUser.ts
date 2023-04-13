import { client } from "./redisConnection";

class redisGetUser {
    async findUser(id: string) {
        try {
            const userId = id;
            const userFromRedis = await client.get(`user|${userId}`);
            return userFromRedis;
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    redisGetUser
}