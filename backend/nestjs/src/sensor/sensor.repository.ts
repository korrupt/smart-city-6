import { EntityRepository, Repository } from "typeorm";
import { CreateSensorDto } from "./dto/sensor.dto";
import { Sensor } from "./sensor.entity";

@EntityRepository(Sensor)
export class SensorRepository extends Repository<Sensor> {

    // public async createSensor(dto: CreateSensorDto): Promise<Sensor> {
    //     const { name } = dto;

    //     const sensor = new Sensor();
    //     sensor.name = name;

    // }
    
}