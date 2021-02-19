import { Injectable, Logger, LoggerService } from '@nestjs/common';

@Injectable()
export class NestLoggerService implements LoggerService{
    private readonly logger = new Logger('Logger')

    debug(text: string): void {
        this.logger.debug(text);
    }

    log(text: string): void {
        this.logger.log(text)
    }

    error(text: string): void {
        this.logger.error(text)
    }

    warn(text: string): void {
        this.logger.warn(text)
    }

}
