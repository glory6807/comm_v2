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
exports.Member = void 0;
const typeorm_1 = require("typeorm");
let Member = class Member {
};
__decorate([
    (0, typeorm_1.Column)("varchar", {
        primary: true,
        name: "MEM_ID",
        comment: "회원_id",
        length: 100,
    }),
    __metadata("design:type", String)
], Member.prototype, "memId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "MEM_PW",
        nullable: true,
        comment: "비밀번호",
        length: 1000,
    }),
    __metadata("design:type", String)
], Member.prototype, "memPw", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "GRADE",
        nullable: true,
        comment: "회원등급",
        length: 100,
    }),
    __metadata("design:type", String)
], Member.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "IS_DEL",
        nullable: true,
        comment: "탈퇴여부",
        length: 1,
    }),
    __metadata("design:type", String)
], Member.prototype, "isDel", void 0);
Member = __decorate([
    (0, typeorm_1.Entity)("MEMBER", { schema: "ywc9403" })
], Member);
exports.Member = Member;
//# sourceMappingURL=Member.js.map