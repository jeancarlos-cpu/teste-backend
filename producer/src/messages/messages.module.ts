import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ClientsModule.register([
      {
        name: 'MESSAGE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.AMQP_LOCAL_URL, process.env.AMQP_URL],
          queue: 'main_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [MessagesService],
})
export class MessagesModule {}
