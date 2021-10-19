import { Body, Controller, Get } from '@nestjs/common';
import { ExampleParamDto } from './dto/ExampleParamDto';
import { Querybuilder } from './querybuilder/querybuilder';


@Controller('')
export class AppController {

    constructor(readonly query : Querybuilder){}

    @Get()
    home(@Body() param : ExampleParamDto){
        let result = this.query.executeSQL("member", "testBasic", param);
        // create the connection to database

        console.log("??? >>> " + result);
        return result;
    }
}
