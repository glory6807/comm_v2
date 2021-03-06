import { Controller, Get, Body, Query, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { KakaoAuthService } from './kakao-auth.service';
import { JwtService } from './jwt/jwt.service';


@Controller('/oauth')
export class AuthController {

    constructor(readonly authService:AuthService, 
                readonly kakaoAuthService:KakaoAuthService,
                readonly jwtService:JwtService){};
    //public loginConfig = require('../../login_config.json');

    @Post('/kakaoLogin')
    async kakaoLogin(@Req() req: Request) {
        var token = await this.kakaoAuthService.getTokenByKakaoApi(req.body.code.code);
        var profile = await this.kakaoAuthService.getProfileByKakaoApi(token);
        
        var result = await this.authService.saveUserByProfile(profile.data);

        if (result){
            var auth = await this.authService.getAuthById(profile.data.id);
            var comm_v2_token = await this.jwtService.createJwtToken(profile.data.id
                                                                    ,profile.data.kakao_account.email
                                                                    ,profile.data.properties.nickname
                                                                    );
            comm_v2_token = Object.assign(comm_v2_token, auth);
            
            return comm_v2_token;
        }else{
            return null;
        }
    }

    @Get('/naverLogin')
    async naverProfile(@Query('Authorization') naverToken: string) {
        let result = await this.authService.getNaverProfile(naverToken);

        if(result){
            var comm_v2_token = await this.jwtService.createJwtToken(result.id
                                                                    ,result.email
                                                                    ,result.nickname);            
            return comm_v2_token;
        } else {
            return null; 
        }
    }

    @Post('/googleLogin')
    async googleLogin(@Req() req: Request){
        let result = await this.authService.getGoogleProfile(req.body);
        if(result){
            var comm_v2_token = await this.jwtService.createJwtToken(result.id, result.email, result.nickname);
            return comm_v2_token;
        } else {
            return null;
        }
    }
  
}
