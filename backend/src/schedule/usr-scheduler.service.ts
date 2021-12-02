import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { GlobalVariableService } from 'src/global-variable/global-variable.service';

@Injectable()
export class UsrSchedulerService {

  @Cron('0 0 24 * * *')
  initVisitCnt() {
    GlobalVariableService.VISIT_USR_CNT = 0;
  }
}
