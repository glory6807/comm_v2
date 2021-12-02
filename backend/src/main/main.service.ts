import { Injectable, Param } from '@nestjs/common';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class MainService {
    constructor(readonly dao : Querybuilder){}

    async getRecentBoardList(){
        return await this.dao.select("main", "selectRecentBoardList", {});
    }

    async getCountData(){
        return await this.dao.select("main", "selectTotalCnt", {});
    }
}
