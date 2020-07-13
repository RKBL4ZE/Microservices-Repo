import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'MICRO_SERVICE',
				transport: Transport.REDIS,
				options: {
					url: 'redis://redis:6379'
				}
			}
		])
	],
	controllers: [ AppController ]
})
export class AppModule {}
