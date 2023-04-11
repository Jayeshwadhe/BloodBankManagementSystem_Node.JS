import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { verifiedInfo, verifiedInfoDocument } from 'src/users/DTO/verified.dto';

@Injectable()
export class VerifiedService {
constructor(@InjectModel(verifiedInfo.name) private verifiedModule: Model<verifiedInfoDocument>) {}
    async getAllData():Promise<verifiedInfo[]>{
        return this.verifiedModule.find()
    }
}
