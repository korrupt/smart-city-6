import { Container } from "src/container/container.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('sensor')
export class Sensor {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToOne(type => Container, { primary: true, nullable: true })
    container?: Container;

    @JoinColumn({name: 'containerId'})
    containerId?: number;

    @CreateDateColumn()
    created: string;

    @UpdateDateColumn()
    updated: string;

}