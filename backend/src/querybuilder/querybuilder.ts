import { Injectable } from "@nestjs/common";

@Injectable()
export class Querybuilder {

    private mysql  = require('mysql2');
    private mybatisMapper  = require('mybatis-mapper');
    private connInfo = require('../../db_config.json');

    private connection = this.mysql.createConnection(this.connInfo);
    private preMapperRoad = './src/querybuilder/sql/';

    // description : 일반 쿼리 실행
    // param : 쿼리 파일명, 쿼리아이디, 쿼리 파라미터
    executeSQL(queryFileName: string, queryId: string, param: any){
        return this.createSQL(queryFileName, queryId, param);
    }

    // description : 페이징 쿼리 실행
    // param : 쿼리 파일명, 쿼리아이디, 쿼리 파라미터
    executeSQLWithPaging(queryFileName: string, queryId: string, param: any){
        return this.createSQL(queryFileName, queryId, param);
    }




    // 아래는 SQL을 만드는 함수입니다. 
    createSQL(queryFileName: string, queryId: string, param: any){
        this.mybatisMapper.createMapper([ this.preMapperRoad + queryFileName + '.xml' ]);
                                                    //xml 네임값. // queryId // Param       :?
        var query = this.mybatisMapper.getStatement(queryFileName, queryId, param, {language: 'sql', indent: '  '});

        this.connection.query(query, function(err, results, fields) {
            console.log("----------------------------------------------QUERY BUILDER START--------------------------------------------------------\n\n");
            
            if (err != null || err != undefined){
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
}
