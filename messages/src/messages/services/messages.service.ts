import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "../repositories/messages.repository";

@Injectable()
export class MessagesService {
    constructor(public messageRepository: MessagesRepository) {
    }

    async findOne(id:string) {
        return this.messageRepository.findOne(id);
    }

    async findAll() {
        return this.messageRepository.findAll();
    }

    async create(content: string) {
        return this.messageRepository.create(content);
    }
}