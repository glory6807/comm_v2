import { BoardNotice } from "./BoardNotice";
export declare class ReplyNotice {
    replyNo: number;
    boardNo: number;
    replyCntn: string | null;
    upReplyNo: string | null;
    isDel: string | null;
    regMemId: string | null;
    crtDt: string | null;
    modDt: string | null;
    depth: number | null;
    boardNo2: BoardNotice;
}
