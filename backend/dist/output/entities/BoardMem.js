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
exports.BoardMem = void 0;
const typeorm_1 = require("typeorm");
const ReplyMem_1 = require("./ReplyMem");
let BoardMem = class BoardMem {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        name: "BOARD_NO",
        comment: "게시글 일련번호",
    }),
    __metadata("design:type", Number)
], BoardMem.prototype, "boardNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "BOARD_TTL",
        nullable: true,
        comment: "제목",
        length: 3000,
    }),
    __metadata("design:type", String)
], BoardMem.prototype, "boardTtl", void 0);
__decorate([
    (0, typeorm_1.Column)("blob", { name: "BOARD_CNTN", nullable: true, comment: "본문" }),
    __metadata("design:type", Buffer)
], BoardMem.prototype, "boardCntn", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CRT_DT", nullable: true }),
    __metadata("design:type", Date)
], BoardMem.prototype, "crtDt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "MOD_DT", nullable: true }),
    __metadata("design:type", Date)
], BoardMem.prototype, "modDt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "REG_MEM_ID",
        nullable: true,
        comment: "작성자",
        length: 100,
    }),
    __metadata("design:type", String)
], BoardMem.prototype, "regMemId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "IS_DEL",
        nullable: true,
        comment: "삭제여부",
        length: 1,
    }),
    __metadata("design:type", String)
], BoardMem.prototype, "isDel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ReplyMem_1.ReplyMem, (replyMem) => replyMem.boardNo2),
    __metadata("design:type", Array)
], BoardMem.prototype, "replyMems", void 0);
BoardMem = __decorate([
    (0, typeorm_1.Entity)("BOARD_MEM", { schema: "ywc9403" })
], BoardMem);
exports.BoardMem = BoardMem;
//# sourceMappingURL=BoardMem.js.map