import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ExampleParamDto } from 'src/dto/ExampleParamDto';
import { NotiService } from './noti.service';

@Controller('noti')
export class NotiController {

    constructor(readonly notiService:NotiService){};

    @Get("/list")
    async getList(@Query('page') curPage: number){
        console.log('notice controller - list');
        if(isNaN(curPage)) {
            curPage = 1;
        }
        const array = [];
        const count = await this.notiService.getBoardCount();
        const notiData = await this.notiService.getBoardList(curPage);
        const page = {'page' : curPage}
        array.push(count, notiData, page);
        return array;
    }

    @Get("/view")
    async getOne(@Query('boardNo') boardNo: number){
        console.log('notice controller - get one');
        const notiData = await this.notiService.getOne(boardNo);
        return notiData;
    }

    @Post('/write')
    write(@Body() notiData){
        console.log('noti controller - write');
        return this.notiService.write(notiData);
    }

}
