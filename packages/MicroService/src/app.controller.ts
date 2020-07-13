import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Payload, Ctx, RedisContext, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
	private logger = new Logger('Micro');

	constructor(private readonly appService: AppService) {}

	@MessagePattern('micro')
	getHello(@Payload() data: string, @Ctx() context: RedisContext): string {
		this.logger.log(data);
		this.logger.log(context);
		return this.appService.getHello(data);
	}
}
