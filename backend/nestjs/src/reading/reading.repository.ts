import { EntityRepository, Repository } from "typeorm";
import { Reading } from "./reading.entity";

@EntityRepository(Reading)
export class ReadingRepository extends Repository<Reading> {
    
    getAllUnboundReadings(){}

}