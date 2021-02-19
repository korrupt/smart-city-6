import { Body, Controller, Get, Post } from '@nestjs/common';
import { Container } from './container.entity';
import { ContainerService } from './container.service';
import { CreateContainerDto } from './dto/create-container.dto';

@Controller('container')
export class ContainerController {

    constructor(
        private container: ContainerService
    ){}

    @Get()
    findAllContainers(): Promise<Container[]> {
        return this.container.getAllContainers();
    }

    @Post()
    createContainer(@Body() dto: CreateContainerDto): Promise<Container> {
        return this.container.createContainer(dto);
    }

}
