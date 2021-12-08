import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Querybuilder } from 'src/querybuilder/querybuilder';

@Injectable()
export class AnalyzeSchedulerService {

constructor(readonly dao : Querybuilder){}

  //@Cron('8 * * * * *')
  async analyzeCntBatch() {
    console.log("메인 데이터 집계 배치 START");
    await this.dao.insert("main", "updateAnalysis");
    console.log("메인 데이터 집계 배치 END");
  }
}
