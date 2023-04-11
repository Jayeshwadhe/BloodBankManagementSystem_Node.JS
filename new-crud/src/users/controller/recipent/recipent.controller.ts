import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecipentInfo } from 'src/users/DTO/recipent.Dto';
import { RecipentService } from 'src/users/services/recipent/recipent.service';

@Controller('recipent')
export class RecipentController {
constructor(private recipentService:RecipentService){}
    @Post('postrecipent')
    postdata(@Body() data:RecipentInfo){
        
        return this.recipentService.postAccepter(data)
    }
    @Get('getrecipent')
    getAllUser(){
        return  this.recipentService.getAllrecipent()
    }
}
