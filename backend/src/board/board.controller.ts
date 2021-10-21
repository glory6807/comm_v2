import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleParamDto } from 'src/dto/ExampleParamDto';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    
    constructor(readonly memberService:BoardService){};

    @Get("/board")
    home(@Body() param : ExampleParamDto){
        return this.memberService.getBoardList(param);
    }

    @Post("/board")
    saveBoardList(@Body() paramArr : ExampleParamDto[]){
        this.memberService.saveBoardList(paramArr);
        return true;
    }
    
}