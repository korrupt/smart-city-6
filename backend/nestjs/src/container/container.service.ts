import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NestLoggerService } from 'src/core/logger/nest-logger.service';
import { Container } from './container.entity';
import { ContainerRepository } from './container.repository';
import { CreateContainerDto } from './dto/create-container.dto';

@Injectable()
export class ContainerService {
    constructor(
        @InjectRepository(ContainerRepository) private container: ContainerRepository,
        private logger: NestLoggerService
    ){}

    async getAllContainers(): Promise<Container[]> {
        return this.container.find();   
    }

    async createContainer(dto: CreateContainerDto): Promise<Container> {
        const { name, location, wasteType } = dto;
        this.logger.log(`Creating container with name ${name}`);

        const container = new Container();
        container.name = name;
        container.location = location;
        container.wasteType = wasteType;
        
        try {
            this.logger.debug(`Saving container to database`);
            await this.container.save(container);
            this.logger.debug(`Saved container.`);
        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException();
        }

        return container;
    }


}
