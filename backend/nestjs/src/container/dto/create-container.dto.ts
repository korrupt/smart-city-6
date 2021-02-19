
import { IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateContainerDto {

    @IsNotEmpty()
    @IsString()
    wasteType: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^([0-9]+)\.([0-9]+)\, ([0-9]+)\.([0-9]+)$/, { message: 'Location must be two decimal locations separated by a comma' })
    location: string;
    
    @IsNotEmpty()
    @IsString()
    name: string;

}