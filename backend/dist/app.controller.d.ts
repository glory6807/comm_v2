import { Querybuilder } from './querybuilder/querybuilder';
export declare class AppController {
    readonly query: Querybuilder;
    constructor(query: Querybuilder);
    home(): string;
}
