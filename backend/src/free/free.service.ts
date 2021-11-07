import { Injectable } from '@nestjs/common';
import { FreeParamDto } from 'src/dto/FreeParamDto';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class FreeService {

    constructor(readonly dao : Querybuilder){}

    async getBoardList(){
        return await this.dao.select("free", "selectList", {});
    }
}
