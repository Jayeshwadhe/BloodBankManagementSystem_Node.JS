import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestController } from './controller/request/request.controller';
import { UserInformation, UserSchema } from './DTO/userdata.dto';
import { RequestServicesService } from './services/request-services/request-services.service';
import { DonarService } from './services/donar/donar.service';
import { DonarInfo, DonarSchema } from './DTO/Donar.dto';
import { DonarController } from './controller/donar/donar.controller';
import { RecipentController } from './controller/recipent/recipent.controller';
import { RecipentService } from './services/recipent/recipent.service';
import { RecipentInfo, RecipentSchema } from './DTO/recipent.Dto';
import { verifiedInfo, verifiedSchema } from './DTO/verified.dto';
import { VerifiedController } from './controller/verified/verified.controller';
import { VerifiedService } from './services/verified/verified.service';
import { historyinfo, HistorySchema } from './DTO/history.dto';
import { bloodInfo, bloodSchema } from './DTO/bloodinfi.dto';


@Module({
  imports: [MongooseModule.forFeature([{ name: UserInformation.name, schema: UserSchema },
  { name: DonarInfo.name, schema: DonarSchema },
  { name: RecipentInfo.name, schema: RecipentSchema },
  { name: verifiedInfo.name, schema: verifiedSchema },
  { name: historyinfo.name, schema: HistorySchema },
  { name: bloodInfo.name, schema: bloodSchema }]), JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '1d' }
  })],
  controllers: [RequestController, DonarController, RecipentController, VerifiedController],
  providers: [RequestServicesService, DonarService, RecipentService, VerifiedService]
})
export class UsersModule { }
