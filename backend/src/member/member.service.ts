import { Injectable, Param } from '@nestjs/common';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class MemberService {

    constructor(readonly dao : Querybuilder){}

    async getBoardList(){
        return await this.dao.select("member", "selectList", {});
    }

    async getBoardOne(@Param('boardNo') boardNo :number){
        const param = { boardNo : boardNo }
        return await this.dao.select("member", "selectOne", param);
    }
}
