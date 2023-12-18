// products.module.ts
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from './auth.middleware';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ResponseHandlerService } from 'src/services/handleReponse-service';
import { UsersController } from 'src/controllers/users.controller';
import { RegexServices } from 'src/func/regex';

@Module({
  controllers: [AppController, UsersController],
  providers: [AppService, ResponseHandlerService, RegexServices],
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
  }
}
