import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { BoardService } from './board/board.service';

@Controller('board')
export class AppController {

    constructor(readonly memberService:BoardService){};

    @Get('/freeList')
    home(@Body() param:any){
        console.log('GET HOME');

        console.log("GET param >>> ");
        console.log(param);

        return "COMM_V2 API";
    }

    @Post('/freeList')
    postHome(@Body() param:any){
        console.log('POST HOME');

        console.log("POST param >>> ");
        console.log(param);

        return "COMM_V2 API";
    }

    // PUT CONTROLLER

    // DELETE CONTROLLER
    
}
