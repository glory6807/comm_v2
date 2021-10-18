/// <reference types="node" />
import { ReplyFree } from "./ReplyFree";
export declare class BoardFree {
    boardNo: number;
    boardTtl: string | null;
    boardCntn: Buffer | null;
    crtDt: string | null;
    modDt: string | null;
    regMemId: string | null;
    isDel: string | null;
    replyFrees: ReplyFree[];
}
