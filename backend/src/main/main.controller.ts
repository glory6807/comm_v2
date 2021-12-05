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

    @Get('/analysisData')
    async getCountData(){
        var cntData = await this.mainService.getAnalysisData();
        return Object.assign(cntData, {VISIT_USR_CNT : GlobalVariableService.VISIT_USR_CNT});
    }

    @Get('/recentUsr')
    getRecentUsr(){

    }

}
