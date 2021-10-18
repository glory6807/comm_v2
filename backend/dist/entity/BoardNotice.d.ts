/// <reference types="node" />
import { ReplyNotice } from "./ReplyNotice";
export declare class BoardNotice {
    boardNo: number;
    boardTtl: string | null;
    boardCntn: Buffer | null;
    crtDt: string | null;
    modDt: string | null;
    regMemId: string | null;
    isDel: string | null;
    replyNotices: ReplyNotice[];
}
