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


    // @Get("/view/:boardNo")
    // getOne(@Param() params : any){
    //     console.log("Notice Controller - view");
    //     console.log("board no : " + params);
    //     console.log("type of : " + typeof params);
    //     var exam = this.notiService.getOne(params);
    //     console.log("exam : " + exam);
    //     return exam;
    // }

    @Get("/write")
    write(@Body() param : any){
        console.log("Notice Controller 컨트롤러 - write");
        return null;
        // return this.notiService.insertBoard(param);
    }

}
