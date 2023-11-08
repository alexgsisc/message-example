import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {}

  @Post()
  createMessages(@Body() body:any) {
    console.log(body);
  }

  @Get(':id')
  getMessageById(@Param('id') id: string) {
    console.log(id)
  }
}
