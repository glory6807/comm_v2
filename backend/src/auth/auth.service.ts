import { Injectable, Param } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class AuthService {
    constructor(readonly dao : Querybuilder){}

    async saveUserByProfile(param:any){

        var sqlParam = {
            'id':param.id,
            'nickname':param.kakao_account.profile.nickname,
            'email':param.kakao_account.email,
            'regType':'kakao'
        }

        return await this.dao.insert("auth", "selectUserById", sqlParam);
    }

    async getNaverProfile(@Param('naverToken') naverToken :string) {
        let httpservice = new HttpService();
        let url = "https://openapi.naver.com/v1/nid/me";

        let naverProfile = await httpservice.post(url, {}, {
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + naverToken
                    }
               }).toPromise();
        
        let profileParam = {
            'id': naverProfile.data.response.id,
            'nickname': naverProfile.data.response.nickname,
            'email': naverProfile.data.response.email,
            'regType':'naver'
        }

        if(profileParam) {
            await this.dao.insert("auth", "selectUserById", profileParam);
            return profileParam;
        } else {
            return null;
        }
    }

    async getGoogleProfile(param: any) {
        let googleProfile = {
            'id' : param.res.googleId,
            'nickname' : param.res.name,
            'email' : param.res.email,
            'regType' : 'google'
        }
        return await this.dao.insert("auth", "selectUserById", googleProfile);
    }

}
