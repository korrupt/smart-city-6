import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReadingRepository } from './reading.repository';
import { ReadingService } from './reading.service';
import { ReadingController } from './reading.controller';
import { SensorRepository } from 'src/sensor/sensor.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ReadingRepository,
            SensorRepository
        ])
    ],
    providers: [ReadingService],
    controllers: [ReadingController]
})
export class ReadingModule {}
