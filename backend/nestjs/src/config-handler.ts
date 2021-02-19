
import * as config from 'config';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class ConfigHandler {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            ...config.get('typeorm'),
            entities: [
                "dist/**/*.entity.js"
            ]
        }
    }
}