import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleParamDto } from './dto/ExampleParamDto';
import { MemberService } from './member/member.service';

@Controller('')
export class AppController {

    constructor(readonly memberService:MemberService){};

    @Get()
    home(@Body() param : ExampleParamDto){
        return this.memberService.getBoardList(param);
    }

    @Post("/board")
    saveBoardList(@Body() paramArr : ExampleParamDto[]){
        this.memberService.saveBoardList(paramArr);
        return true;
    }

    
}
