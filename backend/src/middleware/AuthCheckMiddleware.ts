import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { JwtService } from "../auth/jwt/jwt.service";

export class AuthCheckMiddleware implements NestMiddleware{
    async use(req: Request, res: Response, next: NextFunction){

        console.log("************ Middleware START ***********");

        var jwtService = new JwtService();

        try{
            if(await jwtService.verifyJwtToken(req.headers["authorization"])){
                console.log("AUTH_OK");
                next();
            }
        }catch(e){
            console.log("ERROR");
        }finally{
            console.log("************ Middleware END ***********");
        }

    }
}