import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtService {

    async createJwtToken(id: any){

        var jwt = require('jsonwebtoken');

        var token = jwt.sign({login_id: id, exp: Math.floor(Date.now() / 1000) + 60}, 'edddc81b-b051-4b66-9a2f-f6538efaf81c');
        return token;
    }

    async verifyJwtToken(token: any){
        var jwt = require('jsonwebtoken');
        var decodeData = "";
        try{
            var decodedData = jwt.verify(token, 'edddc81b-b051-4b66-9a2f-f6538efaf81c');
            if (decodedData != null) return true;
        }catch(e){
            return false;
        }
        return false;
    }

}
