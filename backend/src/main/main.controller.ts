import { Body, Controller, Get, Query } from '@nestjs/common';
import { GlobalVariableService } from 'src/global-variable/global-variable.service';
import { MainService } from './main.service';

@Controller('main')
export class MainController {

    constructor(readonly mainService:MainService){};

    @Get('/')
    getRecentBoardList(@Body() param:any){

        return this.mainService.getRecentBoardList();
    }

    @Get('/cnt')
    getCountData(){
        var cntData = this.mainService.getCountData();
        console.log(GlobalVariableService.VISIT_USR_CNT);

        
        return this.mainService.getCountData();
    }

    @Get('/recentUsr')
    getRecentUsr(){

    }

}
