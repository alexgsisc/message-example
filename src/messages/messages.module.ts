import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessageRespository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessageRespository]
})
export class MessagesModule { }
