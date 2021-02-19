import { Sensor } from "src/sensor/sensor.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('container')
export class Container {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    location: string;

    @Column()
    name: string;

    @Column()
    wasteType: string;

    @UpdateDateColumn()
    updated: Date;

    @CreateDateColumn()
    created: Date;

    @OneToOne(type => Sensor, { primary: false, nullable: true })
    sensor?: Sensor;
}

// import {  } from "@nestjs/typeorm";
// export class Container extends 