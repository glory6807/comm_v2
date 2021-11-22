import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { JwtService } from "../auth/jwt/jwt.service";

export class AuthCheckMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){

        console.log("************ Middleware START ***********");
        console.log("COMM_V2 AUTH CHECK MIDDLEWARE...");
        console.log("************ Middleware END   ***********");

        var jwtService = new JwtService();
        if(jwtService.verifyJwtToken(req.headers["authorization"])){
            console.log("AUTH_OK");
            next();
        }else{
            console.log("AUTH_NOT_OK");
            return false;
        }

        
    }
}