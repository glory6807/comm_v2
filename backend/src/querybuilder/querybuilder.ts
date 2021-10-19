import { Injectable } from "@nestjs/common";

@Injectable()
export class Querybuilder {

    public mysql  = require('mysql2');
    public mybatisMapper  = require('mybatis-mapper');


    executeQuery(){

        this.mybatisMapper.createMapper([ '/Users/choi/Desktop/SYSTEM/comm_v2/backend/src/sql/member/member.xml' ]);

        var query = this.mybatisMapper.getStatement('member', 'testBasic', {param:'param'}, {language: 'sql', indent: '  '});

        this.connection.query(query, function(err, results, fields) {
            console.log("------------------------------------------------------------------------------------------------------")
        
            console.log(results); 
        });
    }
}
