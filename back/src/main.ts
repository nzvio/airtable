import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({origin: ["http://air.vio.net.ua"]});	
	await app.listen(3032);
}
bootstrap();
