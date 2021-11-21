import { Controller, Get, Body, Query, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { AuthService } from './auth.service';
import { KakaoAuthService } from './kakao-auth.service';

@Controller('/oauth')
export class AuthController {

    constructor(readonly authService:AuthService, 
                readonly kakaoAuthService:KakaoAuthService){};
    //public loginConfig = require('../../login_config.json');

    @Post('/kakaoLogin')
    async kakaoLogin(@Req() req: Request) {
        console.log("KAKAO LOGIN START---");

        var token = await this.kakaoAuthService.getTokenByKakaoApi(req.body.code.code);
        var profile = await this.kakaoAuthService.getProfileByKakaoApi(token);
        
        // 프로필 가져와 이메일을 기준으로 DB 조회 후 없으면,
        // 간편 회원가입 동의
        console.log(profile.data);
        var result = await this.authService.saveUserByProfile(profile.data);

        console.log(result);
    }

    @Get('/naverLogin')
    async naverProfile(@Query('Authorization') naverToken: string) {
        let result = await this.authService.getNaverProfile(naverToken);
        return result;
    }

    @Post('/googleLogin')
    async googleLogin(@Req() req: Request){
        await this.authService.getGoogleProfile(req.body);
    }
  
}
