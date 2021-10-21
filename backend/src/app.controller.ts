import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleParamDto } from './dto/ExampleParamDto';
import { BoardService } from './board/board.service';

@Controller('')
export class AppController {

    constructor(readonly memberService:BoardService){};

    @Get()
    home(){
        return "COMM_V2 API";
    }
    
}
