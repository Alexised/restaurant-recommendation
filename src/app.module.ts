// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecommendationController } from './recommendation/recommendation.controller';
import { RestaurantSchema } from './Model/restaurant.model';
import { DishSchema } from './Model/dish.model';

DishSchema
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mydatabase'),
    MongooseModule.forFeature([{ name: 'Restaurant', schema: RestaurantSchema }]),
    MongooseModule.forFeature([{ name: 'Dish', schema: DishSchema }]),
  ],
  controllers: [RecommendationController],
})
export class AppModule {}
