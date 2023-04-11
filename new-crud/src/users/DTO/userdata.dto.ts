import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { IsNotEmpty, isNumber, IsPhoneNumber } from "class-validator";
import { Document } from "mongoose";

export type UserDocument = UserInformation & Document;

@Schema()
export class UserInformation {

    @Prop()
    @IsNotEmpty()
    Name: string;

    @Prop()
    @IsNotEmpty()
    father_name: string;

    @Prop()
    @IsNotEmpty()
    email: string;


    @Prop()
    @IsNotEmpty()
    number: string;

    @Prop()
    @IsNotEmpty()
    age: number;

    @Prop()
    @IsNotEmpty()
    address: string;

    @Prop()
    @IsNotEmpty()
    blood_g: string;

    @Prop()
    @IsNotEmpty()
    amount: number;

    @Prop()
    @IsNotEmpty()
    password: string;

    @Prop()
    @IsNotEmpty()
    DA: string;

    @Prop({ default: new Date() })
    dateofragister: Date;

    @Prop()
    token: string;

    @Prop()
    isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserInformation)
