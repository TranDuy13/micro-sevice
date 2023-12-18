import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RegexServices } from 'src/func/regex';
import { ResponseHandlerService } from 'src/services/handleReponse-service';

@Controller('user')
export class UsersController {
  constructor(
    private readonly handleResponse: ResponseHandlerService,
    private readonly handleRequest: RegexServices,
  ) {}

  @Get(':id')
  getInfomationUser(@Res() response: Response) {
    try {
      this.handleResponse.sendOK(response, { something: '1' });
    } catch (error) {
      this.handleResponse.sendInternalServerError(response);
    }
  }

  @Post('register')
  registerUser(@Req() request: Request, @Res() response: Response) {
    try {
      this.handleRequest.HandleRequest(response, request.body);
      this.handleResponse.sendOK(response, { something: '1' });
    } catch (error) {
      this.handleResponse.sendInternalServerError(response);
    }
  }
}
