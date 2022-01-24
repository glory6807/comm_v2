import { Body, Injectable, Param } from '@nestjs/common';
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

    async write(@Body() notiData){
        const data = JSON.parse(JSON.stringify(notiData));
        const param = { title : data.notiData.title,
                        content : data.notiData.content,
                        writer : data.notiData.writer }
        return await this.dao.insert("notice", "write", param);
    }

    async edit(@Body() notiData){
        const data = JSON.parse(JSON.stringify(notiData));
        const param = { boardNo : data.notiData.boardNo,
                        title : data.notiData.title,
                        content : data.notiData.content }
        
        return await this.dao.insert("notice", "edit", param);
    }

    async delete(@Body() boardNo){
        const data = JSON.parse(JSON.stringify(boardNo));
        const param = { boardNo : data.boardNo }
        return await this.dao.insert("notice", "delete", param);
    }

}
