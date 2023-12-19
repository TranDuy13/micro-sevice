import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {
  @Prop({ required: true, type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  content: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
