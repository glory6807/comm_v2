"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Querybuilder = void 0;
class Querybuilder {
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
        var query = this.mybatisMapper.getStatement('member', 'testBasic', '', { language: 'sql', indent: '  ' });
        this.connection.query(query, function (err, results, fields) {
            console.log("------------------------------------------------------------------------------------------------------");
            console.log(results);
        });
    }
}
exports.Querybuilder = Querybuilder;
//# sourceMappingURL=queryBuilder.js.map