import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ExampleParamDto } from 'src/dto/ExampleParamDto';
import { NotiService } from './noti.service';

@Controller('noti')
export class NotiController {

    constructor(readonly notiService:NotiService){};

    @Get("/list")
    async getList(@Query('page') curPage: number){
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

    @Post('/write')
    write(@Body() notiData){
        return this.notiService.write(notiData);
    }

    @Post("/edit")
    async edit(@Body() notiData){
        return this.notiService.edit(notiData);
    }

    @Post("/delete")
    async delete(@Body() boardNo){
        return this.notiService.delete(boardNo);
    }


}
