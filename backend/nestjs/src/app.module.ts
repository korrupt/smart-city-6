import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ContainerModule } from './container/container.module';

import { ConfigHandler } from "./config-handler";
import { SensorModule } from './sensor/sensor.module';
import { ReadingModule } from './reading/reading.module';
import { CoreModule } from './core/core.module';
// import { LoggerService } from './core/logger/logger.service';

@Module({
  imports: [
    CoreModule,
    TypeOrmModule.forRootAsync({
      useClass: ConfigHandler
    }),
    ContainerModule,
    SensorModule,
    ReadingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
