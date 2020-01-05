import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users: any[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'password',
                pet: { name: 'alfred', picId: 1},
            },
            {
                userId: 2,
                username: 'james',
                password: 'guess',
                pet: { name: 'cane', picId: 2},
            },
            {
                userId: 3,
                username: 'john',
                password: 'secret',
                pet: { name: 'pony', picId: 3},
            },
        ];
    }

    async findOne(username: string): Promise<any> {
        return this.users.find(user => user.username === username);
    }

}
