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
        this.connInfo = require('../../db_config.json');
        this.connection = this.mysql.createConnection(this.connInfo);
        this.preMapperRoad = './src/querybuilder/sql/';
    }
    executeSQL(queryFileName, queryId, param) {
        return this.createSQL(queryFileName, queryId, param);
    }
    executeSQLWithPaging(queryFileName, queryId, param) {
        return this.createSQL(queryFileName, queryId, param);
    }
    createSQL(queryFileName, queryId, param) {
        this.mybatisMapper.createMapper([this.preMapperRoad + queryFileName + '.xml']);
        var query = this.mybatisMapper.getStatement(queryFileName, queryId, param, { language: 'sql', indent: '  ' });
        this.connection.query(query, function (err, results, fields) {
            console.log("----------------------------------------------QUERY BUILDER START--------------------------------------------------------\n\n");
            if (err != null || err != undefined) {
                console.log("ERR : ");
                console.log(err);
                return;
            }
            console.log("QUERY ID : " + queryId + "\n");
            console.log(query);
            console.log("\nRESULT : ");
            console.log(results);
            console.log("\n\n----------------------------------------------QUERY BUILDER FINISH--------------------------------------------------------");
            return results;
        });
    }
};
Querybuilder = __decorate([
    (0, common_1.Injectable)()
], Querybuilder);
exports.Querybuilder = Querybuilder;
//# sourceMappingURL=querybuilder.js.map