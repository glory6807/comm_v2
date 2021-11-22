import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtService {

    private jwt = require('jsonwebtoken');

    async createJwtToken(id: string, email: string, nickname: string){
                                                          // 1시간    1일     //100일
        var token = this.jwt.sign({login_id: id, exp: Math.floor(Date.now() / 1000) + ((60 * 60) * 24 * 100)}, 'edddc81b-b051-4b66-9a2f-f6538efaf81c');

        var tokenWithProfile = {
            "comm_v2_token" : token,
            "user_id" : id,
            "email" : email,
            "nick_name" : nickname
        }

        return tokenWithProfile;
    }

    async verifyJwtToken(token: any){
        var decodeData = "";
        try{
            this.jwt.verify(token, 'edddc81b-b051-4b66-9a2f-f6538efaf81c');
            return true;
        }catch(e){
            // 로그인 다시 시키거나 등등..
            return false;
        }
    }
}
