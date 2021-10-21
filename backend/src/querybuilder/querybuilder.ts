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
    async select(queryFileName: string, queryId: string, param: any){
        console.log("------------------------------------QUERY BUILDER START-------------------------------------");
        try{
            const connection = await this.pool.getConnection(async conn => conn);
            try{

                let query = await this.createSQL(queryFileName, queryId, param);
                console.log(query);

                await connection.beginTransaction(); // START TRANSACTION
                const [rows] = await this.executeSQL(connection, query);

                return rows;

            }catch(e){

                console.log('Query Error ' + e);

                return false;
            }finally{
                connection.release();
                console.log("------------------------------------QUERY BUILDER END-------------------------------------");
            }
        }catch(e){
            console.log("Connection Error");
            console.log(e);
        }
    }


    async insert(queryFileName: string, queryId: string, param: any){
        
        console.log("------------------------------------QUERY BUILDER START-------------------------------------");
        try{
            const connection = await this.pool.getConnection(async conn => conn);
            try{
                
                await connection.beginTransaction();
                if(!Array.isArray(param)){

                    let query = await this.createSQL(queryFileName, queryId, param);
                    this.executeSQL(connection, query);

                    console.log(query);
                    await connection.commit(); // COMMIT
                    return true;
                }else{
                    for(var i = 0; i < param.length; i++){
                        let query = await this.createSQL(queryFileName, queryId, param[0]);

                        this.executeSQL(connection, query);
                        console.log(query);
                    }

                    await connection.commit(); // COMMIT
                    return true;
                }

            }catch(e){
                await connection.rollback(); // ROLLBACK

                console.log('Query Error ' + e);
                console.log('Transaction Rollback executed');

                return false;
            }finally{
                await connection.release();
                console.log("------------------------------------QUERY BUILDER END-------------------------------------");
            }
        }catch(e){
            console.log("Connection Error");
            console.log(e);
        }
    }



    // 쿼리 맹금
    async createSQL(queryFileName: string, queryId: string, param: any){
        try{
            await this.mybatisMapper.createMapper([ this.mapperRoad + queryFileName + '.xml' ]);
            var query = await this.mybatisMapper.getStatement(queryFileName, queryId, param, {language: 'sql', indent: '  '});
        }catch(e){
            console.log(e);
        }
        return query;
    }

    async executeSQL(connection: any, query: string){
        return await connection.query(query);
    }
}
