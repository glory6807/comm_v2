import { Injectable } from '@nestjs/common';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class AuthService {
    constructor(readonly dao : Querybuilder){}

    async saveUserByProfile(param:any){

        console.log(param);

        var sqlParam = {
            'id':param.id,
            'nickname':param.kakao_account.profile.nickname,
            'email':param.kakao_account.email,
            'regType':'kakao'
        }

        return await this.dao.insert("auth", "selectUserById", sqlParam);
    }
}
