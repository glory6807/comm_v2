import { Body, Controller, Get, Post, Render } from '@nestjs/common';

@Controller('')
export class AppController {

    @Get('/')
    home(@Body() param:any){}

    @Post('/')
    postHome(@Body() param:any){}
    
}
