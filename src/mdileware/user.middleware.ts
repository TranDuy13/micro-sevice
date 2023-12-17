// products.module.ts
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from './auth.middleware';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ResponseHandlerService } from 'src/services/handleReponse-service';

@Module({
  controllers: [AppController],
  providers: [AppService, ResponseHandlerService],
  imports: [],
})
export class UsersModuleMiddleWare {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: '/', method: RequestMethod.GET },
        { path: 'products/getMyProduct', method: RequestMethod.GET },
      );
  }
}
