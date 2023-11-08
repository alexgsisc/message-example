
import { MessageRespository } from './messages.repository';

export class MessagesService {
    messagesRepo: MessageRespository;

    constructor() {
        //Service is creating its own dependencies
        //Dont Do This on real APPS
        this.messagesRepo = new MessageRespository();
    }

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
