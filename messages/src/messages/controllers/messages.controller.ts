import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../services/messages.service';
import { measureMemory } from 'vm';


@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService){
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id:string) {
        const message = await this.messagesService.findOne(id);

        if(!message)
        {
            throw new NotFoundException('message not found');
        }

        return message;
    }
}
