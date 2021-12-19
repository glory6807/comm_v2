import { Injectable, Param } from '@nestjs/common';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class NotiService {

    constructor(readonly dao : Querybuilder){}

    async getBoardCount(){
        return await this.dao.select("notice", "getCount", {});
    }

    async getBoardList(@Param('curPage') curPage: number){
        const offset = 10 * curPage - 10;
        const param = { offset : offset }
        return await this.dao.select("notice", "selectList", param);
    }

    async getOne(@Param('boardNo') boardNo: number){
        const param = {boardNo : boardNo}
        return await this.dao.select("notice", "getOne", param);
    }

    async insertBoard(param:any){
        console.log('notice service - write');
        return await this.dao.insert("notice", "insertBoard", param);
    }

}
