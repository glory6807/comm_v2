import { Body, Controller, Get, Query } from '@nestjs/common';
import { FreeService } from './free.service'
import { FreeParamDto } from 'src/dto/FreeParamDto';

@Controller('free')
export class FreeController {
    
    constructor(readonly freeService:FreeService){};

    @Get('/list')
    getList(@Body() param:any){
        console.log('FreeController');
        return this.freeService.getBoardList();
    }

    @Get('/view')
    getOne(@Query('boardNo') boardNo: number){
        return this.freeService.getBoardOne(boardNo); 
    }

}
