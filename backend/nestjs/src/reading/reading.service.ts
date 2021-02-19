import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NestLoggerService } from 'src/core/logger/nest-logger.service';
import { Sensor } from 'src/sensor/sensor.entity';
import { SensorRepository } from 'src/sensor/sensor.repository';
import { ReceivedReadingDto } from './dto/reading.dto';
import { Reading } from './reading.entity';
import { ReadingRepository } from './reading.repository';

@Injectable()
export class ReadingService {
    constructor(
        @InjectRepository(ReadingRepository) private reading: ReadingRepository,
        @InjectRepository(SensorRepository) private sensor: SensorRepository,
        private logger: NestLoggerService
    ){}

    public async saveReading(dto: ReceivedReadingDto): Promise<any> {
        this.logger.debug('Creating new reading');
        const { sensorId, data } = dto;

        this.logger.debug(`Finding sensor with id ${sensorId}`)
        const sensor = await this.sensor.findOne({id: sensorId});
        if (!sensor) {
            this.logger.warn(`Sensor not found.`);
            throw new NotFoundException(`Sensor with id ${sensorId} not found.`)
        }
        this.logger.debug('Sensor found.');


        const reading = new Reading();
        reading.sensor = sensor;
        reading.data = data;

        try {
            this.logger.debug('Trying to save reading ...');
            await this.reading.save([reading]);
            this.logger.debug('Reading saved successfully');
        } catch (error) {
            const exception = new InternalServerErrorException();
            this.logger.error(`Error saving reading: ${error}`)
            throw exception;
        }

        this.logger.log(`Created new reading for sensor ${sensorId}`);
        

    }

}
