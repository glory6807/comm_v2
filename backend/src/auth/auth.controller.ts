import { Controller, Get, Header, Post, Req, Res, UseGuards } from '@nestjs/common';


@Controller('oauth')
export class AuthController {

    public loginConfig = require('../../login_config.json');

    public passport = require('passport');
    public KakaoStrategy = require('passport-kakao').Strategy;

    @Get('/kakaoLogin')
    async kakaoLogin(@Req() req) {
        const apiKey = this.loginConfig.kakaoKey;
        const redirectUrl = this.loginConfig.kakaoRedirecturl;

        console.log("KAKAO LOGIN START");
        console.log(this.passport.Passport)

        this.passport.use(new this.KakaoStrategy({
            clientID : apiKey,
            callbackURL : redirectUrl
        }, async (accessToken, refreshToken, profile, done) => {
            console.log("hihi");
            console.log(profile);
            return done(null, profile);
        }));

        console.log("KAKAO LOGIN END");
    }
  
    @Get('')
    getProfile(@Req() req) {

        console.log("HI REDIRECT");
        return req.user;
    }
}
