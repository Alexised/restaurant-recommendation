import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  // Conectar a la base de datos MongoDB
  await mongoose.connect('mongodb://localhost:27017/Restaurant', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();