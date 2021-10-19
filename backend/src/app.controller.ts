import { Controller, Get } from '@nestjs/common';
import { Querybuilder } from './querybuilder/querybuilder';

@Controller('')
export class AppController {

    constructor(readonly query : Querybuilder){}

    @Get()
    home(){
        this.query.executeQuery();
        // create the connection to database
        return "COMM API";
    }
}
