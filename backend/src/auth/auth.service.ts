import { Injectable } from '@nestjs/common';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class AuthService {
    constructor(readonly dao : Querybuilder){}

    async isUserByEmail(email:string){
        return await this.dao.select("auth", "selectSnsUserByEmail", email);
    }
}
