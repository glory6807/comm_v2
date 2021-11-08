import { Controller, Get, Headers, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Controller('/oauth')
export class AuthController {


    //public loginConfig = require('../../login_config.json');

    @Post('/kakaoLogin')
    async kakaoLogin(@Req() req: Request) {
        console.log("KAKAO LOGIN START---");
        var httpservice = new HttpService();

        // TOKEN 가져오기.
        var headerConfig = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            }
        };

        console.log(req.body);
        var code = req.body.code.code;

        console.log(code);

        var grant_type = 'authorization_code';
        var client_id = '8b95db3101a37fdacc8b13f404c1620d';
        var redirect_uri = 'http://localhost:3000/kakaoLogin';
        var client_secret = 'H6joLoNtXQ0XFlqfTz1oJNraTVDLqmKp';
        
        var url = "https://kauth.kakao.com/oauth/token?";
            url += "grant_type="+grant_type+"&";
            url += "client_id="+client_id+"&";
            url += "redirect_uri="+redirect_uri+"&";
            url += "client_secret="+client_secret+"&";
            url += "code="+code;
        
        var tokenResponse = await httpservice.post(url, '', headerConfig).toPromise();

        console.log(tokenResponse.data);

        var profileUrl = "https://kapi.kakao.com/v2/user/me"
        var profile = await httpservice.get(profileUrl, {headers : {Authorization : 'Bearer ' + tokenResponse.data.access_token}}).toPromise();

        console.log(profile);
        // TOKEN 가져오기.
    }

    @Get('/naverLogin')
    getProfile(@Headers() headers) {
        const httpservice = new HttpService();

        const auth = 'bearer ' + headers.authorization;
        const url = "https://openapi.naver.com/v1/nid/me";
        
        return httpservice.post(url, {}, {
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+headers.authorization
                    }
               }).pipe(map((res) => {console.log(res.data)}));
    }
  
}
