import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseHandlerService } from './services/handleReponse-service';
import { UsersModuleMiddleWare } from './middleware/user.middleware';
import { UsersController } from './controllers/users.controller';
import { RegexServicesMiddleWare } from './func/regex';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron/cron.service';
import { RsaService } from './services/RSA.service';
import { MYSQLService } from './services/MYSQL.serivce';

@Module({
  imports: [UsersModuleMiddleWare, ScheduleModule.forRoot()],
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    ResponseHandlerService,
    RegexServicesMiddleWare,
    CronService,
    RsaService,
    MYSQLService,
  ],
  exports: [MYSQLService],
})
export class AppModule {}
