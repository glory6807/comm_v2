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
exports.BoardFree = void 0;
const typeorm_1 = require("typeorm");
const ReplyFree_1 = require("./ReplyFree");
let BoardFree = class BoardFree {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        name: "BOARD_NO",
        comment: "게시글 일련번호",
    }),
    __metadata("design:type", Number)
], BoardFree.prototype, "boardNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "BOARD_TTL",
        nullable: true,
        comment: "제목",
        length: 3000,
    }),
    __metadata("design:type", String)
], BoardFree.prototype, "boardTtl", void 0);
__decorate([
    (0, typeorm_1.Column)("blob", { name: "BOARD_CNTN", nullable: true, comment: "본문" }),
    __metadata("design:type", Buffer)
], BoardFree.prototype, "boardCntn", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "CRT_DT", nullable: true, comment: "작성일" }),
    __metadata("design:type", String)
], BoardFree.prototype, "crtDt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "MOD_DT", nullable: true, comment: "수정일" }),
    __metadata("design:type", String)
], BoardFree.prototype, "modDt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "REG_MEM_ID",
        nullable: true,
        comment: "작성자",
        length: 100,
    }),
    __metadata("design:type", String)
], BoardFree.prototype, "regMemId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "IS_DEL",
        nullable: true,
        comment: "삭제여부",
        length: 1,
    }),
    __metadata("design:type", String)
], BoardFree.prototype, "isDel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ReplyFree_1.ReplyFree, (replyFree) => replyFree.boardNo2),
    __metadata("design:type", Array)
], BoardFree.prototype, "replyFrees", void 0);
BoardFree = __decorate([
    (0, typeorm_1.Entity)("BOARD_FREE", { schema: "ywc9403" })
], BoardFree);
exports.BoardFree = BoardFree;
//# sourceMappingURL=BoardFree.js.map