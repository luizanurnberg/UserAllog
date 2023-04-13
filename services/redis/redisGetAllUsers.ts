import { client } from "./redisConnection";

class redisGetAllUsers {
    async findAllUsers() {
        await client.keys('*');
    }
}