import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { UserDocument } from 'src/users/DTO/userdata.dto';
import { UserInformation } from '../../DTO/userdata.dto'
// import { MailerService } from '@nestjs-modules/mailer'
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { HistoryDocument, historyinfo } from 'src/users/DTO/history.dto';
import { DonarDocument, DonarInfo } from 'src/users/DTO/Donar.dto';
import Module from 'module';
import { RecipentDocument, RecipentInfo } from 'src/users/DTO/recipent.Dto';
import { verifiedInfo, verifiedInfoDocument } from 'src/users/DTO/verified.dto';



@Injectable()
export class RequestServicesService {
    findById: any;
    constructor(@InjectModel(UserInformation.name) private userModel: Model<UserDocument>, private jwtservice: JwtService,
        @InjectModel(historyinfo.name) private historyMoule: Model<HistoryDocument>,
        @InjectModel(DonarInfo.name) private donarModule: Model<DonarDocument>,
        @InjectModel(RecipentInfo.name) private recpentModule: Model<RecipentDocument>,
        @InjectModel(UserInformation.name) private userModule: Model<UserDocument>,
        @InjectModel(verifiedInfo.name) private verifiedModule: Model<verifiedInfoDocument>
    ) { }
    async postdata(user: UserInformation): Promise<UserInformation> {
        user.isActive = false
        if (user.number.length != 10) {
            throw new BadRequestException("number is not Valid")
        }
        if (user.DA == 'recipent') {
            let bloodDonar = await this.donarModule.aggregate([
                {
                    $match: {
                        blood_g: user.blood_g
                    }
                },
                {

                    $group: {
                        _id: {
                            blood_g: '$blood_g'

                        },
                        totalBlood: { $sum: '$amount' }
                    }


                }
            ]);

            const bloodAccepter = await this.recpentModule.aggregate([
                {
                    $match: {
                        blood_g: user.blood_g
                    }
                },
                {
                    $group: {
                        _id: {
                            blood_g: '$blood_g'
                        },
                        totalBlood: { $sum: '$amount' }
                    }
                }
            ])
            // console.log(bloodDonar, 'hfdsgjhdsbghj');
            if (bloodDonar.length == 0) {
                throw new BadRequestException(`${user.blood_g} is not avalaible`)
            }
            if (bloodAccepter.length == 0) {
                if (bloodDonar[0].totalBlood - user.amount < 0) {
                    throw new BadRequestException(`${user.blood_g} is not avalaible`)
                }
                else {
                    var pass = await bcrypt.hash(user.password, 12);
                    user.password = pass
                    try {
                        let userRecord = await this.userModel.findOne({
                            email: user.email,
                        });
                        // console.log("userRecord==>", userRecord);
                        if (!userRecord) {
                            const userRecord = new this.userModel(user);
                            const userdata = new this.historyMoule(user);
                            // if (userRecord.DA == 'Donar') {
                            //     const blood_g = new this.bloodModule(user.amount)
                            //     console.log("blood_g", blood_g);
                            // }
                            userdata.save()
                            return userRecord.save();
                        }
                        else {
                            // console.log(`User ${userRecord} exist`);
                            return userRecord.save();
                        }
                    } catch (e) {
                        // console.log("e===>", e);

                    }
                }
            }
            else if (((bloodDonar[0].totalBlood - bloodAccepter[0].totalBlood) - user.amount) < 0) {
                throw new BadRequestException(`${user.blood_g} is not avalaible`)
            }
        }
        var pass = await bcrypt.hash(user.password, 12);
        user.password = pass
        try {
            let userRecord = await this.userModel.findOne({
                email: user.email,
            });
            // console.log("userRecord==>", userRecord);
            if (!userRecord) {
                const userRecord = new this.userModel(user);
                const userdata = new this.historyMoule(user);
                // if (userRecord.DA == 'Donar') {
                //     const blood_g = new this.bloodModule(user.amount)
                //     console.log("blood_g", blood_g);
                // }
                userdata.save()
                return userRecord.save();
            }
            else {
                // console.log(`User ${userRecord} exist`);
                return userRecord.save();
            }
        } catch (e) {
            // console.log("e===>", e);

        }
    }
    async findOne(userFilterQuery: FilterQuery<historyinfo>): Promise<historyinfo> {
        // console.log(userFilterQuery.item, 'fhkjdf');
        // console.log(userFilterQuery.id, 'ghdfhdahf');
        // console.log(userFilterQuery, 'gfhsdhjf');


        if (!userFilterQuery.id) {
            return this.historyMoule.findById(userFilterQuery.item);
        }
        else {
            return this.historyMoule.findById(userFilterQuery.id);
        }
    }
    async find(userFilterQuery: FilterQuery<UserInformation>): Promise<UserInformation[]> {
        // console.log(userFilterQuery.query, "request==");
        const page: number = parseInt(userFilterQuery.query.page) || 1;
        const limit = parseInt(userFilterQuery.query.limit) || 9;
        var user = this.Pagination(page, limit)
        return this.userModel.find(userFilterQuery)
        // return user;

    }
    async findOneAndUpdate(userFilterQuery: FilterQuery<UserInformation>, user: Partial<UserInformation>): Promise<UserInformation> {
        return this.userModel.findOneAndUpdate(userFilterQuery, user);
    }
    async findOneAndDelete(userFilterQuery: FilterQuery<UserInformation>) {
        // console.log(userFilterQuery);

        if (!userFilterQuery.imp) {
            throw new BadRequestException('something is wrong')
        } if (userFilterQuery.imp) {
            const userData = await this.userModel.findOne(userFilterQuery);
            // console.log("data==>", userData);
            return this.userModel.findByIdAndDelete(userFilterQuery.imp)
        }
    }

    async login(email, password) {
        const userData = await this.historyMoule.findOne(email);
        // console.log(userData);
        if (!userData) {
            throw new BadRequestException('Invalid Crud')
        }
        if (!await bcrypt.compare(password, userData.password)) {
            throw new BadRequestException('Invalid Crud')
        }
        const jwt = await this.jwtservice.signAsync({ id: userData.id })
        return jwt;
    }

    async getByToken(response) {
        const data = await this.jwtservice.verifyAsync(response);
        // console.log("data==>", data.id);
        var item = data.id
        if (!data) {
            throw new UnauthorizedException();
        }
        const user = await this.findOne({ item })
        // console.log(user, "jhasdjasjhdgj")
        // console.log(user, "jhasdjasjhdgj")
        // console.log(user);
        return user;
    }

    //History Service is here
    async getHisory(request): Promise<historyinfo[]> {
        // console.log(request.query, "ghdfdfdfdfdfdfdfdfdfdf");

        return this.historyMoule.find()
    }

    //Pagination
    async Pagination(pageno?: any, limit?: any) {
        let pageNumber = pageno ? pageno : 1;
        let pageLimit = limit ? limit : 9;
        const panibnatedValue = this.historyMoule.find()
            .sort({ _id: 1 })
            .skip(pageNumber > 0 ? ((pageNumber - 1) * pageLimit) : 0)
            .limit(pageLimit)
        // console.log(panibnatedValue, "jesdc3sbghjufbdsghufgsde");
        return panibnatedValue;
    }

    // dashbord
    async dashbord() {
        const data = await this.historyMoule.aggregate([
            { $count: 'history' }
        ])
        const dataDonar = await this.donarModule.aggregate([
            { $count: 'donar' }
        ])
        const accepter = await this.recpentModule.aggregate([
            { $count: 'recipent' }
        ])
        const request = await this.userModule.aggregate([
            { $count: 'users' }
        ])
        const verified = await this.verifiedModule.aggregate([
            { $count: 'users' }
        ])

        const bloodDonar = await this.donarModule.aggregate([
            {
                $group: {
                    _id: {
                        blood_g: '$blood_g'

                    },
                    totalBlood: { $sum: '$amount' }
                }
            }
        ])

        const bloodAccepter = await this.recpentModule.aggregate([
            {
                $group: {
                    _id: {
                        blood_g: '$blood_g'
                    },
                    totalBlood: { $sum: '$amount' }
                }
            }
        ])

        // console.log(bloodDonar, "donar blood");
        // console.log(bloodAccepter, "bloodAccepter");



        return { data, dataDonar, accepter, request, bloodDonar, bloodAccepter, verified };
    }
}
