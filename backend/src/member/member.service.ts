import { Injectable, Param } from '@nestjs/common';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class MemberService {

    constructor(readonly dao : Querybuilder){}

    async getBoardList(@Param('curPage') curPage :number){
        const offset = 10 * curPage - 10;
        console.log('offset : ' + offset)
        const param = { offset : offset }
        return await this.dao.select("member", "selectList", param);
    }

    async getBoardOne(@Param('boardNo') boardNo :number){
        const param = { boardNo : boardNo }
        return await this.dao.select("member", "selectOne", param);
    }

    async getBoardCount(){
        return await this.dao.select("member", "selectListCount", {});
    }
}
