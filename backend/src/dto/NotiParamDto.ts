import { IsDate, IsNumber, IsString } from "class-validator";

export class NotiParamDto{
    readonly boardTtl: string;
    readonly boardCntn: string;
    readonly boardWrtr: string;
    readonly regDt: Date;
    readonly isDel: string;
}