import { MessagesRepository } from "../repositories/messages.repository";

export class MessagesService {
    messageRepository: MessagesRepository;
    constructor() {
        //MARK: Burada dependency injection yapılmadı, bu proje syntax'i görmek için
        this.messageRepository = new MessagesRepository();
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