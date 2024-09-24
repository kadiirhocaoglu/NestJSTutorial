import { Controller, Get } from "@nestjs/common";

@Controller('/api')
export class AppController {
    @Get('/first-route')
    getRootRoute() {
        return 'hi there!';
    }
    @Get('/second-route')
    getSecondRoute() {
        return 'bye there!';
    }
}

