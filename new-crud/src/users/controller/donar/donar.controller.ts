import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { DonarInfo } from 'src/users/DTO/Donar.dto';
import { DonarService } from 'src/users/services/donar/donar.service';

@Controller('donar')
export class DonarController {

    constructor(private DonarService: DonarService) {}
    @Post('postDonar')
    donarPost(@Body() data:DonarInfo){
        return this.DonarService.Donarpostdata(data)
    }

    @Get('getDonar')
     getallDonar():Promise<DonarInfo[]>{
        return this.DonarService.getallDonar({})
    }
}
