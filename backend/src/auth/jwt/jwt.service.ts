import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtService {

    async createJwtToken(id: string, email: string, nickname: string){

        var jwt = require('jsonwebtoken');

        var token = jwt.sign({login_id: id, exp: Math.floor(Date.now() / 1000) + 60}, 'edddc81b-b051-4b66-9a2f-f6538efaf81c');

        var tokenWithProfile = {
            "comm_v2_token" : token,
            "user_id" : id,
            "email" : email,
            "nick_name" : nickname
        }

        return tokenWithProfile;
    }

    async verifyJwtToken(token: any){
        var jwt = require('jsonwebtoken');
        var decodeData = "";
        try{
            //edddc81b-b051-4b66-9a2f-f6538efaf81c
            var decodedData = jwt.verify(token, 'JWT_SECRET_KEY');
            if (decodedData != null) return true;
        }catch(e){
            return false;
        }
        return false;
    }

    async validateJwtToken(){

    }
}
