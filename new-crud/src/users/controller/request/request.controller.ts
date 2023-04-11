import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res, UnauthorizedException, ValidationPipe } from '@nestjs/common';
import { UserInformation } from 'src/users/DTO/userdata.dto';
import { RequestServicesService } from 'src/users/services/request-services/request-services.service';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';


@Controller('request')
export class RequestController {
    constructor(private request: RequestServicesService, private jwtservice: JwtService) { }
    @Post()
    postinformation(@Body(new ValidationPipe()) data: UserInformation) {
        return this.request.postdata(data)
    }

    @Get('getAll')
    async getusersinfo(@Req() request: Request): Promise<UserInformation[]> {
        return this.request.find(request)
    }


    @Get('user')
    async getbyid(@Body('id') id: string): Promise<UserInformation> {
        if (!id) {
            return;
        }
        else {
            return this.request.findOne({ id })
        }
    }

    @Post('delete')
    async DeleteById(@Body(new ValidationPipe()) data: object) {
        console.log("user ==>", data['_id']);
        var imp = data['_id']
        return this.request.findOneAndDelete({ imp })
    }

    //not working properly;
    @Patch('update:userId')
    async UpdateByID(@Param('userId') userId: string, @Body(new ValidationPipe) data: UserInformation): Promise<UserInformation> {
        return this.request.findOneAndUpdate({ userId }, data)
    }

    @Post('login')
    async loginById(@Body('email') email: string, @Body('password') password: string, @Res({ passthrough: true }) response: Response) {
        console.log(email, password);

        const token = await this.request.login({ email }, password)
        response.cookie('jwt', token)
        var user = this.request.getByToken(token)
        return user;

    }

    @Get('userToken')
    async userToken(@Req() request: Request) {
        try {
            const cookie = request.cookies['jwt'];
            console.log(cookie);

            return this.request.getByToken(cookie);
        } catch (e) {
            throw new UnauthorizedException();
        }
    }
    @Post('logout')
    async logout(@Res({ passthrough: true }) response: Response) {
        response.clearCookie('jwt')
        return {
            message: 'success'
        }
    }



    //History api is here
    @Get('history')
    async gethistory(@Req() request: Request) {
        return this.request.getHisory(request)
    }


    //dahsbord api is here
    @Get('dashbord')
    async getdash(@Req() request: Request) {
        return this.request.dashbord()
    }
}

