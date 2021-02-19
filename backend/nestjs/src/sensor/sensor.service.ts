import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NestLoggerService } from 'src/core/logger/nest-logger.service';
import { CreateSensorDto } from './dto/sensor.dto';
import { Sensor } from './sensor.entity';
import { SensorRepository } from './sensor.repository';

@Injectable()
export class SensorService {

    constructor(
        @InjectRepository(SensorRepository) private sensor: SensorRepository,
        private logger: NestLoggerService
        // @InjectRepository()
    ){}

    public async createSensor(dto: CreateSensorDto): Promise<Sensor> {
        const { name } = dto;
        this.logger.log('Creating new sensor')

        const sensor = new Sensor()
        sensor.name = name;

        try {
            this.logger.debug('Saving new sensor');
            await this.sensor.save([sensor]);
            this.logger.debug('Sensor saved successfully');
        } catch (error) {
            const exception = new InternalServerErrorException();
            this.logger.error(error);
            throw exception;
        }
        
        return sensor;
    }

    getAllSensors(): Promise<Sensor[]> {
        return this.sensor.find();
    }

}
