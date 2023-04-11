import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";
import { Document } from "mongoose";

export type verifiedInfoDocument = verifiedInfo & Document;


@Schema()
export class verifiedInfo {

    @Prop()
    @IsNotEmpty()
    Name: string;

    @Prop()
    @IsNotEmpty()
    father_name:string;

    @Prop()
    @IsNotEmpty()
    email: string;

    
    @Prop()
    @IsNotEmpty()
    number: number;

    @Prop()
    @IsNotEmpty()
    age: number;

    @Prop()
    @IsNotEmpty()
    address:string;

    @Prop()
    @IsNotEmpty()
    blood_g: string;

    @Prop()
    @IsNotEmpty()
    date:Date;

    @Prop()
    @IsNotEmpty()
    password:string;

    @Prop()
    @IsNotEmpty()
    DA:string;

    @Prop({ default: new Date() })
    dateofragister:Date;
    
    @Prop()
    token:string;
}



export const verifiedSchema = SchemaFactory.createForClass(verifiedInfo)
