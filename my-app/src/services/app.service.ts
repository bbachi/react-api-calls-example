const axios = require('axios');

export class AppService {


    public async getUsers(): Promise<any> {
        const response = await axios.get('/api/users');
        return response.data;
    }

    public async addUser(user: any) {
        const response = await axios.post(`/api/user`, {user});
        return response.data;
    }

}