import { Injectable } from "@nestjs/common";

@Injectable()
export class Querybuilder {

    private mysql  = require('mysql2/promise');
    private mybatisMapper  = require('mybatis-mapper');
    private connInfo = require('../../db_config.json');
    private mapperRoad = './src/querybuilder/sql/';        
    private pool = this.mysql.createPool(this.connInfo);


    // description : 일반 쿼리 실행
    // param : 쿼리 파일명, 쿼리아이디, 쿼리 파라미터
    async executeQB(queryFileName: string, queryId: string, param: any){
        
        console.log("------------------------------------QUERY BUILDER START-------------------------------------");
        const connection = await this.pool.getConnection(async conn => conn);
        try{
            await this.mybatisMapper.createMapper([ this.mapperRoad + queryFileName + '.xml' ]);
            var query = await this.mybatisMapper.getStatement(queryFileName, queryId, param, {language: 'sql', indent: '  '});

            // 쿼리 로그
            console.log(query);

            await connection.beginTransaction(); // START TRANSACTION
			const [rows] = await connection.query(query);
			await connection.commit(); // COMMIT
			connection.release();

			return rows;
        }catch(e){
			await connection.rollback(); // ROLLBACK
			connection.release();
			console.log('Query Error');
			return false;
        }finally{

            console.log("------------------------------------QUERY BUILDER END-------------------------------------");
        }


    }

}
