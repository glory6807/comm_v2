import { Body, Controller, Get, Query } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
    
    constructor(readonly memberService:MemberService){};

    @Get('/list')
    async getList(@Query('page') curPage: number){
        const array = [];
        //게시판 처음 로드될 때 페이지 설정을 위해 넣어줌
        if(isNaN(curPage)) {
            curPage = 1;
        }
        const freeData = await this.memberService.getBoardList(curPage);
        const count = await this.memberService.getBoardCount();
        const page = {'page' : curPage};
        array.push(freeData, count, page);

        return array;
    }

    @Get('/view')
    async getOne(@Query('boardNo') boardNo: number){
        console.log(typeof boardNo);
        return this.memberService.getBoardOne(boardNo);
    }

}
