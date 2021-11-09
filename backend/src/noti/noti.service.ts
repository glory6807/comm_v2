import { Injectable } from '@nestjs/common';
import { ExampleParamDto } from 'src/dto/ExampleParamDto';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class NotiService {

    constructor(readonly dao : Querybuilder){}

    async getBoardList(param:any){
        console.log('notice service - ㅠㅠ');
        return await this.dao.select("notice", "selectList", param);
    }

    async insertBoard(param:any){
        console.log('notice service - write');
        return await this.dao.select("notice", "insertBoard", param);
    }

}
