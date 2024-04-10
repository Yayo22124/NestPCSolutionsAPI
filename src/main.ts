import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: {
        enabled: true,
        timestamp: false,
        level: 'debug',
      }
    })
  );

  app.enableCors({
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'POST'],
  });

  const config = new DocumentBuilder()
    .setTitle('PCSolutions NestJS x Fastify API REST')
    .setDescription(
      'The best e-commerce for search and buy electronic devices and more.',
    )
    .setVersion('1.0')
    .addTag('pc-components', 'Find and shop components for your PC.')
    .addTag('pcsolutions', 'Business web e-commerce.')
    .addTag('mongoose', 'Javascript ODM for MongoDB.')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(parseInt(process.env.PORT) || 3000, '0.0.0.0');
}
bootstrap();
