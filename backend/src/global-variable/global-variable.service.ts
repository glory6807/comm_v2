import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalVariableService {
    static VISIT_USR_CNT = 0;
}