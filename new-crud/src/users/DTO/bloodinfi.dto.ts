import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";
import { Document } from "mongoose";

export type bloodInfoDocument =  bloodInfo & Document;


@Schema()
export class bloodInfo {

    @Prop()
    Apositive: number;

    @Prop()
    Anegative:number;

    @Prop()
    Bpositive: number;

    
    @Prop()
    Bnegative: number;

    @Prop()
    ABpositive: number;

    @Prop()
    ABnegative:number;

    @Prop()
    Opositive: number;

    @Prop()
    Onegative:number;
}



export const bloodSchema = SchemaFactory.createForClass(bloodInfo)
