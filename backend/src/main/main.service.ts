import { Injectable, Param } from '@nestjs/common';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class MainService {
    constructor(readonly dao : Querybuilder){}

    async getRecentBoardList(){
        return await this.dao.select("main", "selectRecentBoardList", {});
    }

    async getAnalysisData(){
        var data = await this.dao.select("main", "selectTotalCnt");
        data = data[0];
        return data;
    }
}
