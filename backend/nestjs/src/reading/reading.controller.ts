import { Body, Controller, Post } from '@nestjs/common';
import { ReceivedReadingDto } from './dto/reading.dto';
import { ReadingService } from './reading.service';

@Controller('reading')
export class ReadingController {

    constructor(
        private reading: ReadingService
    ){}

    @Post()
    saveReading(@Body() dto: ReceivedReadingDto){
        return this.reading.saveReading(dto);        
    }

}
