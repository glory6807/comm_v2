import { Injectable, Param, Body } from '@nestjs/common';
import { FreeParamDto } from 'src/dto/FreeParamDto';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class FreeService {

    constructor(readonly dao : Querybuilder){}

    async getBoardCount(){
        return await this.dao.select("free", "selectListCount", {});
    }

    async getBoardList(@Param('curPage') curPage :number){
        const offset = 10 * curPage - 10;
        console.log('offset : ' + offset)
        const param = { offset : offset }
        return await this.dao.select("free", "selectList", param);
    }

    async getBoardOne(@Param('boardNo') boardNo :number){
        const param = { boardNo : boardNo }
        return await this.dao.select("free", "selectOne", param);
    }

    async writeBoardOne(@Body() datas){
        const jsonData = JSON.parse(JSON.stringify(datas));
        const param = { title   : jsonData.datas.title,
                        content : jsonData.datas.content}
        return await this.dao.insert("free", "writeOne", param)
    }

    async modifyBoardOne(@Body() datas){
        const jsonData = JSON.parse(JSON.stringify(datas));
        const param = { title   : jsonData.datas.modifyData.title,
                        content : jsonData.datas.modifyData.content,
                        boardNo : jsonData.datas.boardNo}
        return await this.dao.insert("free", "modifyOne", param)
    }

}
