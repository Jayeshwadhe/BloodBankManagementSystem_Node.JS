import { Controller, Get } from '@nestjs/common';
import { VerifiedService } from 'src/users/services/verified/verified.service';

@Controller('verified')
export class VerifiedController {
constructor(private verifiedService : VerifiedService){}
    @Get('getverifieddata')
    getalldata(){
        return this.verifiedService.getAllData()
    }
}
