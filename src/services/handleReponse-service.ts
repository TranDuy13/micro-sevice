import { Injectable, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ResponseHandlerService {
  sendOK<T>(response: Response, data: T, message = 'Success') {
    response.status(HttpStatus.OK).send({ message, data });
  }
  sendError(response: Response, error: any, message = 'Error') {
    response.status(HttpStatus.BAD_REQUEST).send({ message, error });
  }
  sendNotAuthorized(response: Response) {
    response.status(HttpStatus.UNAUTHORIZED).send({ message: 'UNAUTHORIZED' });
  }
  sendInternalServerError(response: Response) {
    response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'INTERNAL SERVER ERROR' });
  }
}
