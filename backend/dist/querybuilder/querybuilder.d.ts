export declare class Querybuilder {
    private mysql;
    private mybatisMapper;
    private connInfo;
    private connection;
    private preMapperRoad;
    executeSQL(queryFileName: string, queryId: string, param: any): void;
    executeSQLWithPaging(queryFileName: string, queryId: string, param: any): void;
    createSQL(queryFileName: string, queryId: string, param: any): void;
}
