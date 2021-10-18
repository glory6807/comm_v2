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
exports.BoardNotice = void 0;
const typeorm_1 = require("typeorm");
const ReplyNotice_1 = require("./ReplyNotice");
let BoardNotice = class BoardNotice {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        name: "BOARD_NO",
        comment: "게시글 일련번호",
    }),
    __metadata("design:type", Number)
], BoardNotice.prototype, "boardNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "BOARD_TTL",
        nullable: true,
        comment: "제목",
        length: 3000,
    }),
    __metadata("design:type", String)
], BoardNotice.prototype, "boardTtl", void 0);
__decorate([
    (0, typeorm_1.Column)("blob", { name: "BOARD_CNTN", nullable: true, comment: "본문" }),
    __metadata("design:type", Buffer)
], BoardNotice.prototype, "boardCntn", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "CRT_DT", nullable: true, comment: "작성일" }),
    __metadata("design:type", String)
], BoardNotice.prototype, "crtDt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "MOD_DT", nullable: true, comment: "수정일" }),
    __metadata("design:type", String)
], BoardNotice.prototype, "modDt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "REG_MEM_ID",
        nullable: true,
        comment: "작성자",
        length: 100,
    }),
    __metadata("design:type", String)
], BoardNotice.prototype, "regMemId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "IS_DEL",
        nullable: true,
        comment: "삭제여부",
        length: 1,
    }),
    __metadata("design:type", String)
], BoardNotice.prototype, "isDel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ReplyNotice_1.ReplyNotice, (replyNotice) => replyNotice.boardNo2),
    __metadata("design:type", Array)
], BoardNotice.prototype, "replyNotices", void 0);
BoardNotice = __decorate([
    (0, typeorm_1.Entity)("BOARD_NOTICE", { schema: "ywc9403" })
], BoardNotice);
exports.BoardNotice = BoardNotice;
//# sourceMappingURL=BoardNotice.js.map