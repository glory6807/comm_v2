import { Body, Controller, Get } from '@nestjs/common';
import { ExampleParamDto } from 'src/dto/ExampleParamDto';
import { NotiService } from './noti.service';

@Controller('noti')
export class NotiController {

    constructor(readonly notiService:NotiService){};

    @Get("/noti/list")
    home(@Body() param : any){
        console.log("Notice Controller 컨트롤러");
        return null;
        // return this.notiService.getBoardList(param);
    }

}
