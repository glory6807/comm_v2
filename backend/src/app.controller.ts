import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { BoardService } from './board/board.service';

@Controller('board')
export class AppController {

    constructor(readonly memberService:BoardService){};

    @Render('freeList')
    @Get()
    home(){
        console.log('hihi');
        return "COMM_V2 API";
    }
    
}
