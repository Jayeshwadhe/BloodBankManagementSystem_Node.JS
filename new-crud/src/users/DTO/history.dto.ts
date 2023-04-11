import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserInformation } from "./userdata.dto";


export type HistoryDocument = historyinfo & Document;

@Schema()
export class historyinfo extends UserInformation {

    isActive:boolean;
}

export const HistorySchema = SchemaFactory.createForClass(historyinfo)
