import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { BoardService } from './board/board.service';

@Controller('')
export class AppController {

    constructor(readonly memberService:BoardService){};

    @Get('/')
    home(@Body() param:any){}

    @Post('/')
    postHome(@Body() param:any){}
    
}
