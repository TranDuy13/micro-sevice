import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { SQLCommand } from 'src/variables';
import { Response } from 'express';
import { NextFunction } from 'express';
@Injectable()
export class RegexServicesMiddleWare implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    switch (typeof request.body) {
      case 'object':
        for (const property in request.body) {
          if (typeof request.body[property] === 'string') {
            const CHECK_SQL_COMMAND: string = request.body[
              property
            ] as unknown as string;
            if (
              SQLCommand.includes(
                CHECK_SQL_COMMAND.toUpperCase() as unknown as string,
              )
            ) {
              response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({ message: 'INTERNAL SERVER ERROR' });
            } else {
              next();
            }
          } else if (typeof request.body[property] === 'object') {
            this.use(request.body[property], response, next);
          } else {
            next();
          }
        }
      case 'string':
        const CHECK_SQL_COMMAND: string = request.body as unknown as string;
        if (SQLCommand.includes(CHECK_SQL_COMMAND.toUpperCase())) {
          response
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send({ message: 'INTERNAL SERVER ERROR' });
        } else {
          next();
        }
      case 'function':
        response
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send({ message: 'INTERNAL SERVER ERROR' });
      default:
        next();
    }
  }
}
