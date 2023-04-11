import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";
import { Document } from "mongoose";

export type DonarDocument = DonarInfo & Document;

@Schema()
export class DonarInfo {

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
    amount:number;

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

    isActive:boolean;
}

export const DonarSchema = SchemaFactory.createForClass(DonarInfo)
