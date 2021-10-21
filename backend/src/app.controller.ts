import { Body, Controller, Get } from '@nestjs/common';
import { ExampleParamDto } from './dto/ExampleParamDto';
import { Querybuilder } from './querybuilder/querybuilder';

@Controller('')
export class AppController {

    constructor(readonly query : Querybuilder){}

    public async = require('async');

    @Get()
    home(@Body() param : ExampleParamDto){
        let result = this.query.executeQB("member", "testBasic", param);
        return result;

    }

    
}
