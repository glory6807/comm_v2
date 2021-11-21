import { Body, Controller, Get, Query } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
    
    constructor(readonly memberService:MemberService){};

    @Get('/list')
    getList(@Body() param:any){
        console.log('FreeController');
        return this.memberService.getBoardList();
    }

    @Get('/view')
    getOne(@Query('boardNo') boardNo: number){
        console.log(typeof boardNo);
        return this.memberService.getBoardOne(boardNo);
    }

}
