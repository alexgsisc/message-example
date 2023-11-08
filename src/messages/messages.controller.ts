import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {}

  @Post()
  createMessages() {}

  @Get(':id')
  getMessageById() {}
}
