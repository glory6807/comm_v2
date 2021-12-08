import { Body, Controller, Get, Query } from '@nestjs/common';
import { FreeService } from './free.service'
import { FreeParamDto } from 'src/dto/FreeParamDto';

@Controller('free')
export class FreeController {
    
    constructor(readonly freeService:FreeService){};

    @Get('/list')
    async getList(@Query('page') curPage: number){
        console.log('FreeController');
        const array = [];
        const count = await this.freeService.getBoardCount();
        const freeData = await this.freeService.getBoardList(curPage);
        const page = {'page' : 1}
        array.push(count, freeData, page)
        return array;
    }

    @Get('/view')
    getOne(@Query('boardNo') boardNo: number){
        return this.freeService.getBoardOne(boardNo); 
    }

}
