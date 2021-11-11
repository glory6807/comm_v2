import { IsDate, IsNumber, IsString } from "class-validator";

export class FreeParamDto{

    @IsNumber()
    readonly boardNo: number;

    @IsString()   
    readonly boardTtl: string;

    @IsString()   
    readonly boardCntn: string;

    @IsString()   
    readonly boardWrtr: string;

    @IsDate()
    readonly regDt: Date;

    @IsString()
    readonly isDel: string;

}