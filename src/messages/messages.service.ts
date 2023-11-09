
import { Injectable } from '@nestjs/common';
import { MessageRespository } from './messages.repository';

@Injectable()
export class MessagesService {

    constructor(public messagesRepo: MessageRespository) {}

    async findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    async finAll() {
        return this.messagesRepo.findAll();
    }

    async create(content: string) {
        return this.messagesRepo.create(content);
    }
}
