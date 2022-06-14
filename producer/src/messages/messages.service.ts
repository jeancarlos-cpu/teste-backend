import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class MessagesService {
  constructor(
    @Inject('MESSAGE_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Cron('*/5 * * * * *')
  handle() {
    return this.client.emit('message', 'Olá!');
  }
}
