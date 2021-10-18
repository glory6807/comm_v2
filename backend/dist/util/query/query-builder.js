"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
const mysql = require('mysql2');
const mybatisMapper = require('mybatis-mapper');
class QueryBuilder {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'maria-instance.cax8xhgqikxw.us-east-2.rds.amazonaws.com',
            user: 'admin',
            password: '1q2w3e4r!#',
            database: 'ywc9403'
        });
    }
}
exports.QueryBuilder = QueryBuilder;
var param = {
    category: 'apple'
};
executeQuery();
{
    mybatisMapper.createMapper(['/Users/choi/Desktop/SYSTEM/comm_v2/backend/src/sql/member/member.xml']);
    var query = mybatisMapper.getStatement('member', 'testBasic', param, { language: 'sql', indent: '  ' });
    connection.query(query, function (err, results, fields) {
        console.log("------------------------------------------------------------------------------------------------------");
        console.log(results);
    });
    return null;
}
//# sourceMappingURL=query-builder.js.map