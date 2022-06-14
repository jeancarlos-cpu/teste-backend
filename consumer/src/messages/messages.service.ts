import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { Message } from './messages.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private httpService: HttpService,
  ) {}

  async handle(content: string) {
    const discordApiResponse = await lastValueFrom(
      this.httpService.post(process.env.DISCORD_WEBHOOK_URL, {
        content,
      }),
    );

    if (discordApiResponse.status !== 204) {
      throw new BadRequestException('Invalid webhook request');
    }

    const message = await this.messageRepository.save({
      content,
      statusCode: discordApiResponse.status,
      httpMethod: discordApiResponse.config.method,
      webhookUrl: discordApiResponse.config.url,
    });

    return message;
  }
}
