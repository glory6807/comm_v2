"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyNotice = void 0;
const typeorm_1 = require("typeorm");
const BoardNotice_1 = require("./BoardNotice");
let ReplyNotice = class ReplyNotice {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        name: "REPLY_NO",
        comment: "댓글 일련번호",
    }),
    __metadata("design:type", Number)
], ReplyNotice.prototype, "replyNo", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "BOARD_NO", comment: "게시글 일련번호" }),
    __metadata("design:type", Number)
], ReplyNotice.prototype, "boardNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "REPLY_CNTN",
        nullable: true,
        comment: "댓글 본문",
        length: 4000,
    }),
    __metadata("design:type", String)
], ReplyNotice.prototype, "replyCntn", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "UP_REPLY_NO",
        nullable: true,
        comment: "부모 댓글 번호",
        length: 1000,
    }),
    __metadata("design:type", String)
], ReplyNotice.prototype, "upReplyNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "IS_DEL",
        nullable: true,
        comment: "삭제여부",
        length: 1,
    }),
    __metadata("design:type", String)
], ReplyNotice.prototype, "isDel", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "REG_MEM_ID",
        nullable: true,
        comment: "작성자",
        length: 100,
    }),
    __metadata("design:type", String)
], ReplyNotice.prototype, "regMemId", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "CRT_DT", nullable: true, comment: "작성일" }),
    __metadata("design:type", String)
], ReplyNotice.prototype, "crtDt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "MOD_DT", nullable: true, comment: "수정일" }),
    __metadata("design:type", String)
], ReplyNotice.prototype, "modDt", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DEPTH", nullable: true }),
    __metadata("design:type", Number)
], ReplyNotice.prototype, "depth", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BoardNotice_1.BoardNotice, (boardNotice) => boardNotice.replyNotices, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "BOARD_NO", referencedColumnName: "boardNo" }]),
    __metadata("design:type", BoardNotice_1.BoardNotice)
], ReplyNotice.prototype, "boardNo2", void 0);
ReplyNotice = __decorate([
    (0, typeorm_1.Index)("FK_REPLY_NOTICE_BOARD_NO_BOARD_NOTICE_BOARD_NO", ["boardNo"], {}),
    (0, typeorm_1.Entity)("REPLY_NOTICE", { schema: "ywc9403" })
], ReplyNotice);
exports.ReplyNotice = ReplyNotice;
//# sourceMappingURL=ReplyNotice.js.map