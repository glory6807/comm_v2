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

    // async getOne(boardNo: number){
    //     console.log('notice service - get one');
    //     console.log('no : ' + boardNo);
    //     return await this.dao.select("notice", "getOne", boardNo);
    // }

    async getOne(param:any){
        console.log('notice service - get one');
        console.log('no : ' + param);
        console.log('typeof : ' + typeof param);
        return await this.dao.select("notice", "getOne", param);
    }

    async insertBoard(param:any){
        console.log('notice service - write');
        return await this.dao.insert("notice", "insertBoard", param);
    }

}
