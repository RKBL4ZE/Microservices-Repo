import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
	constructor(@Inject('MICRO_SERVICE') private client: ClientProxy) {}

	@Get()
	getHello() {
    return this.client.send('micro', 'Random Data');
  }
}
