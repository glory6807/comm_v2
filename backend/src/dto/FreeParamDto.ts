import { IsNumber, IsOptional, IsString } from "class-validator";

export class FreeParamDto{
    @IsString()   
    readonly boardTtl: string;

    @IsString()
    readonly isDel: string[];

}