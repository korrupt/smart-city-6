import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContainerRepository } from './container.repository';
import { ContainerService } from './container.service';
import { ContainerController } from './container.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ContainerRepository])
    ],
    providers: [ContainerService],
    controllers: [ContainerController]
})
export class ContainerModule {}
