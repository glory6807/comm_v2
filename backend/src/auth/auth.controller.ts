import { Controller, Get, Header, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Controller('oauth')
export class AuthController {


    //public loginConfig = require('../../login_config.json');

    @Post('/kakaoLogin')
    async kakaoLogin(@Req() req: Request) {

        console.log("KAKAO LOGIN START---");
        
        console.log();
        
        var httpservice = new HttpService();

        var headerConfig = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        };

        var code = req.body.code;
        var grant_type = "authorization_code";
        var client_id = "bda37b02398840d9c442af816cd74a69";
        var redirect_uri = "http://localhost:3000/kakaoLogin";
        var client_secret = "H6joLoNtXQ0XFlqfTz1oJNraTVDLqmKp";
        
        var url = "https://kauth.kakao.com/oauth/token?grant_type="+grant_type+"client_id="+client_id+"redirect_url="+redirect_uri+"client_secret="+client_secret+"code="+code;
        
        const response = await httpservice.post(url, '', headerConfig).toPromise();

        console.log(response)

    }
  
    @Get('/naverLogin')
    getProfile(@Req() req) {

        console.log("NAVER LOGIN");
        return 'HELLO';
    }
}
