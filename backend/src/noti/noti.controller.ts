import { Body, Controller, Get, Param } from '@nestjs/common';
import { ExampleParamDto } from 'src/dto/ExampleParamDto';
import { NotiService } from './noti.service';

@Controller('noti')
export class NotiController {

    constructor(readonly notiService:NotiService){};

    @Get("/list")
    home(@Body() param : any){
        console.log("Notice Controller 컨트롤러 - list");
        // return null;
        return this.notiService.getBoardList(param);
    }

    @Get("/view/:board_no")
    getOne(@Param('board_no') boardNo: number){
        console.log("Notice Controller - view");
        console.log("board no : " + boardNo);
        return this.notiService.getOne(boardNo);
    }

    @Get("/write")
    write(@Body() param : any){
        console.log("Notice Controller 컨트롤러 - write");
        return null;
        // return this.notiService.insertBoard(param);
    }

}
