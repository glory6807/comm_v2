"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Querybuilder = void 0;
const common_1 = require("@nestjs/common");
let Querybuilder = class Querybuilder {
    constructor() {
        this.mysql = require('mysql2');
        this.mybatisMapper = require('mybatis-mapper');
        this.connection = this.mysql.createConnection({
            host: 'maria-instance.cax8xhgqikxw.us-east-2.rds.amazonaws.com',
            user: 'admin',
            password: '1q2w3e4r!#',
            database: 'ywc9403'
        });
    }
    executeQuery() {
        this.mybatisMapper.createMapper(['/Users/choi/Desktop/SYSTEM/comm_v2/backend/src/sql/member/member.xml']);
        var query = this.mybatisMapper.getStatement('member', 'testBasic', { param: 'param' }, { language: 'sql', indent: '  ' });
        this.connection.query(query, function (err, results, fields) {
            console.log("------------------------------------------------------------------------------------------------------");
            console.log(results);
        });
    }
};
Querybuilder = __decorate([
    (0, common_1.Injectable)()
], Querybuilder);
exports.Querybuilder = Querybuilder;
//# sourceMappingURL=querybuilder.js.map