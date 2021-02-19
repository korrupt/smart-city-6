import { Sensor } from "src/sensor/sensor.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('reading')
export class Reading {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({type: 'datetime'})
    created: string;

    @Column()
    data: string;

    @JoinColumn({name: 'sensorId'})
    sensorId: string;

    @ManyToOne(type => Sensor)
    sensor?: Sensor;

}