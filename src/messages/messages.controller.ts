import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor(){
    this.messagesService = new MessagesService();
  }

  @Get()
  getAllMessages() { 
    return this.messagesService.finAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log(body);
    return this.messagesService.create(body.content);
  }

  @Get(':id')
  getMessageById(@Param('id') id: string) {
    console.log(id)
    return this.messagesService.findOne(id);
  }
}
