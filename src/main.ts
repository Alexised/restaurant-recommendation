import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function connectMongo() {
  // Conectar a la base de datos MongoDB
  await mongoose.connect('mongodb://localhost:27017/Recomendador');

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
connectMongo();