import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class KakaoAuthService {

    private headerConfig =  {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
    };

    async getTokenByKakaoApi(authorizationCode:string):Promise<string>{

        let httpservice = new HttpService();

        let grant_type = 'authorization_code';
        let client_id = '8b95db3101a37fdacc8b13f404c1620d';
        let redirect_uri = 'http://localhost:3000/kakaoLogin';
        let client_secret = 'H6joLoNtXQ0XFlqfTz1oJNraTVDLqmKp';

        let url = "https://kauth.kakao.com/oauth/token?";
            url += "grant_type="+grant_type+"&";
            url += "client_id="+client_id+"&";
            url += "redirect_uri="+redirect_uri+"&";
            url += "client_secret="+client_secret+"&";
            url += "code="+authorizationCode;

        
        let tokenResponse = null;
        try {
            tokenResponse = await httpservice.post(url, '', this.headerConfig).toPromise();
        } catch (error) {
            return error;
        }

        return tokenResponse.data.access_token.toString();
    }

    async getProfileByKakaoApi(authorizationToken:string):Promise<any>{

        let httpservice = new HttpService();
        
        var profileUrl = "https://kapi.kakao.com/v2/user/me"
        var profile = await httpservice.get(profileUrl, {headers : {Authorization : 'Bearer ' + authorizationToken}}).toPromise();

        return profile;
    }
}
