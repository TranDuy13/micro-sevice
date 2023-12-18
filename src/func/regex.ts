import { HttpStatus, Injectable } from '@nestjs/common';
import { SQLCommand } from 'src/variables';
import { Response } from 'express';
@Injectable()
export class RegexServices {
  HandleRequest<T>(response: Response, data: T) {
    switch (typeof data) {
      case 'object':
        for (const property in data) {
          if (typeof data[property] === 'string') {
            const CHECK_SQL_COMMAND: string = data[
              property
            ] as unknown as string;
            if (
              SQLCommand.includes(
                CHECK_SQL_COMMAND.toLowerCase() as unknown as string,
              )
            ) {
              response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({ message: 'INTERNAL SERVER ERROR' });
            }
          } else if (typeof data[property] === 'object') {
            this.HandleRequest(response, data[property]);
          }
        }
      case 'string':
        if (SQLCommand.includes(data as unknown as string)) {
          response
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send({ message: 'INTERNAL SERVER ERROR' });
        }
      case 'function':
        response
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send({ message: 'INTERNAL SERVER ERROR' });
    }
  }
}
