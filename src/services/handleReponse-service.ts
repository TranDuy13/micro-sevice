import { Injectable, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ResponseHandlerService {
  sendOK<T>(response: Response, data: T, message: string = 'Success') {
    response.status(HttpStatus.OK).send({ message, data });
  }

  sendError(response: Response, error: any, message: string = 'Error') {
    response.status(HttpStatus.BAD_REQUEST).send({ message, error });
  }
  sendNotAuthorized(response: Response) {
    response.status(HttpStatus.UNAUTHORIZED).send({ message: 'UNAUTHORIZED' });
  }
}
