
import { IsNotEmpty, IsNumber, IsString, IsNumberString } from "class-validator";
import { Transform } from "class-transformer";

export class ReceivedReadingDto {

    @IsNotEmpty()
    @IsString()
    sensorId: string;

    @IsNotEmpty()
    @IsNumberString()
    data: string;
}

export class ReadingDto {

    @IsNotEmpty()
    id: string;

    data: number;

}