import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ResponseHandlerService } from 'src/services/handleReponse-service';

@Controller('user')
export class UsersController {
  constructor(private readonly handleResponse: ResponseHandlerService) {}

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
      this.handleResponse.sendOK(response, { something: '1' });
    } catch (error) {
      this.handleResponse.sendInternalServerError(response);
    }
  }
}
