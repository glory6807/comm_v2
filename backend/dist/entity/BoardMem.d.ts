/// <reference types="node" />
import { ReplyMem } from "./ReplyMem";
export declare class BoardMem {
    boardNo: number;
    boardTtl: string | null;
    boardCntn: Buffer | null;
    crtDt: Date | null;
    modDt: Date | null;
    regMemId: string | null;
    isDel: string | null;
    replyMems: ReplyMem[];
}
