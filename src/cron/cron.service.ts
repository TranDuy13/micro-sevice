import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronService {
  private readonly logger = new Logger();
  @Cron(CronExpression.EVERY_MINUTE)
  handleCron() {
    console.log('123123');
    this.logger.debug('Called when the current second is 45');
  }
}
