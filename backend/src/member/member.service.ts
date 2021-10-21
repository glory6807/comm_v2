import { Injectable } from '@nestjs/common';
import { ExampleParamDto } from 'src/dto/ExampleParamDto';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class MemberService {

    constructor(readonly dao : Querybuilder){}

    async getBoardList(param:ExampleParamDto){
        return await this.dao.select("board", "selectList", param);
    }

    async saveBoardList(param:ExampleParamDto[]){
        await this.dao.insert("board", "insertBoard", param);
    }

}
