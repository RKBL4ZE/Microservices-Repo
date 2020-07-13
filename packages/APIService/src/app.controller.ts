import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
	constructor(@Inject('MICRO_SERVICE') private client: ClientProxy) {}

	@Get(':id')
	getHello(@Param('id') id: string) {
    return this.client.send('micro', id);
  }
}
