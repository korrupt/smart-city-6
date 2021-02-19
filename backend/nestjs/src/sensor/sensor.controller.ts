import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSensorDto } from './dto/sensor.dto';
import { Sensor } from './sensor.entity';
import { SensorService } from './sensor.service';

@Controller('sensor')
export class SensorController {

    constructor(
        private sensor: SensorService
    ){}

    @Post()
    createSensor(@Body() dto: CreateSensorDto): Promise<Sensor> {
        return this.sensor.createSensor(dto)
    }

    /**debug from this point and downwards */
    
    @Get()
    getAllSensors(): Promise<Sensor[]> {
        return this.sensor.getAllSensors();
    }

    

}
