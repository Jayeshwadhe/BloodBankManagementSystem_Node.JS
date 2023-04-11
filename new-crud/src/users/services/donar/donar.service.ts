import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { DonarDocument, DonarInfo } from 'src/users/DTO/Donar.dto';
import { historyinfo } from 'src/users/DTO/history.dto';
import { verifiedInfo, verifiedInfoDocument } from 'src/users/DTO/verified.dto';

@Injectable()
export class DonarService {
    constructor(@InjectModel(DonarInfo.name) private donarModule: Model<DonarDocument>,
        @InjectModel(verifiedInfo.name) private verifiedModule: Model<verifiedInfoDocument>,
        @InjectModel(historyinfo.name) private historyModel: Model<verifiedInfoDocument>) { }
    async Donarpostdata(info: DonarInfo): Promise<DonarInfo> {
        // console.log(info);
        try {
            if (!info) {
                throw new BadRequestException("something is wrong")
            } else {
                // console.log(info['_id']);
                
                const donarInfo = new this.donarModule(info)
                const verified = new this.verifiedModule(info)
                this.historyModel.findOneAndUpdate({email:info.email}, { isActive: true })
                verified.save()
                return donarInfo.save()
            }
        }
        catch (e) {
            throw (e)
        }
    }

    async getallDonar(donarFilterQuery: FilterQuery<DonarInfo>): Promise<DonarInfo[]> {
        return this.donarModule.find(donarFilterQuery)
    }

}
