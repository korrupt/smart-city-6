import { Global, Module } from '@nestjs/common';
import { NestLoggerService } from './logger/nest-logger.service';

@Global()
@Module({
    providers: [
        NestLoggerService
    ],
    exports: [
        NestLoggerService
    ]
})
export class CoreModule {}
