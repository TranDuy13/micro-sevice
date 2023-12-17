import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseHandlerService } from './services/handleReponse-service';
import { UsersModuleMiddleWare } from './middleware/user.middleware';

@Module({
  imports: [UsersModuleMiddleWare],
  controllers: [AppController],
  providers: [AppService, ResponseHandlerService],
})
export class AppModule {}
