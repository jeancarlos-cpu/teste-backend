import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @EventPattern('message')
  async handle(data: string) {
    return this.messagesService.handle(data);
  }
}
