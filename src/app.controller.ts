import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { ResponseHandlerService } from './services/handleReponse-service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly handleResponse: ResponseHandlerService,
  ) {}

  @Get()
  getHello(@Res() response?: Response) {
    this.handleResponse.sendOK(response, { something: '1' });
  }
}
