import { Injectable, Param } from '@nestjs/common';
import { FreeParamDto } from 'src/dto/FreeParamDto';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class FreeService {

    constructor(readonly dao : Querybuilder){}

    async getBoardCount(){
        return await this.dao.select("free", "selectListCount", {});
    }

    async getBoardList(){
        return await this.dao.select("free", "selectList", {});
    }

    async getBoardOne(@Param('boardNo') boardNo :number){
        const param = { boardNo : boardNo }
        return await this.dao.select("free", "selectOne", param);
    }
}
