import { client } from "./redisConnection";

class redisDeleteUser {
    async removeUser(id: string) {
        try {
            const userId = id;
            const userFromRedis = await client.del(`user|${userId}`);
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    redisDeleteUser
}