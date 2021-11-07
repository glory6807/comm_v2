import { Body, Controller, Get, Post } from '@nestjs/common';
import { FreeService } from './free.service'

@Controller('free')
export class FreeController {
    
    constructor(readonly freeService:FreeService){};

    @Get('/list')
    home(@Body() param:any){
        console.log('FreeController');
        return this.freeService.getBoardList();
    }

    // @Post('/freeList')
    // postHome(@Body() param:any){
    //     console.log('POST HOME');

    //     console.log("POST param >>> ");
    //     console.log(param);

    //     return "COMM_V2 API";
    // }

}
