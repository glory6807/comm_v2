"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    await app.listen(8080, () => {
        console.log("-------------------------------------------------------------------------");
        console.log("COMM_V2 Backend API Server is running...");
        console.log("Server 8080 Port Listening...");
        console.log("-------------------------------------------------------------------------");
    });
}
bootstrap();
//# sourceMappingURL=main.js.map