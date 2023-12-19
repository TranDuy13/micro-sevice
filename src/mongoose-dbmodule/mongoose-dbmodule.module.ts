import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationSchema } from 'src/schema/notifications.schema';

@Module({
  imports: [
    //     MongooseModule.forRoot('mongodb://localhost/nest'),
    //     MongooseModule.forFeature([
    //       { name: 'Notification', schema: NotificationSchema },
    //     ]),
  ],
})
export class MongooseDbModule {}
