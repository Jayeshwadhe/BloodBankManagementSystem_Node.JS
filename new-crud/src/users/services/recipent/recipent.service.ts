import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { historyinfo } from 'src/users/DTO/history.dto';
import { RecipentDocument, RecipentInfo } from 'src/users/DTO/recipent.Dto';
import { verifiedInfo, verifiedInfoDocument } from 'src/users/DTO/verified.dto';

@Injectable()
export class RecipentService {
    constructor(@InjectModel(RecipentInfo.name) private recipentModule: Model<RecipentDocument>,
    @InjectModel(verifiedInfo.name) private verifiedModule:Model<verifiedInfoDocument>,
    @InjectModel(historyinfo.name) private historyModel:Model<verifiedInfoDocument> ) { }
    async postAccepter(info) {
        // console.log(info);
        // info._id= null
        if (!info) {
            throw new BadRequestException("something is wrong")
        } else {
            const recipent = new this.recipentModule(info)
            const verified =new this.verifiedModule(info)
            // console.log(info);
            
            this.historyModel.findByIdAndUpdate(info._id ,{isActive:true})
            verified.save()
            return recipent.save()
        }
    }

    async getAllrecipent(){
        return this.recipentModule.find()
    }
}
