import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { FreeService } from './free.service'
import { FreeParamDto } from 'src/dto/FreeParamDto';
import { isNull } from 'util';

@Controller('free')
export class FreeController {
    
    constructor(readonly freeService:FreeService){};

    @Get('/list')
    async getList(@Query('page') curPage: number){
        console.log('FreeController');
        const array = [];
        //게시판 처음 로드될 때 페이지 설정을 위해 넣어줌
        if(isNaN(curPage)) {
            curPage = 1;
        }
        const freeData = await this.freeService.getBoardList(curPage);
        const count = await this.freeService.getBoardCount();
        const page = {'page' : curPage}
        array.push(freeData, count, page)

        return array;
    }

    @Get('/view')
    getOne(@Query('boardNo') boardNo: number){
        return this.freeService.getBoardOne(boardNo); 
    }

    @Post('/write')
    writeOne(@Body() datas){
        return this.freeService.writeBoardOne(datas);
    }
    
    @Post('/modify')
    modifyOne(@Body() datas){
        return this.freeService.modifyBoardOne(datas);
    }

}
