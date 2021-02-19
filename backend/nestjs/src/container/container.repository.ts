import { EntityRepository, Repository } from "typeorm";
import { Container } from "./container.entity";

@EntityRepository(Container)
export class ContainerRepository extends Repository<Container> {
    
}