import { Body, Controller, Get, Post } from '@nestjs/common';
import { FreeService } from './free.service'

@Controller('free')
export class FreeController {
    freeService :FreeService;

    constructor() {}

}
