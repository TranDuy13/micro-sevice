import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from './auth.middleware';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ResponseHandlerService } from 'src/services/handleReponse.service';
import { UsersController } from 'src/controllers/users.controller';
import { RegexServicesMiddleWare } from 'src/func/regex';
import { RsaService } from 'src/services/RSA.service';

@Module({
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    ResponseHandlerService,
    RegexServicesMiddleWare,
    RsaService,
  ],
  imports: [],
})
export class UsersModuleMiddleWare {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'user/:id', method: RequestMethod.GET },
        { path: 'products/getMyProduct', method: RequestMethod.GET },
      );
    consumer
      .apply(RegexServicesMiddleWare)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
