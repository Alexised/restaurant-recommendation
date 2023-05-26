// recommendation.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../Model/restaurant.model';
import { Dish } from '../Model/dish.model';
@Controller('recommendation')
export class RecommendationController {
  constructor(
    @InjectModel('Restaurant') private readonly restaurantModel: Model<Restaurant>,
    @InjectModel('Dish') private readonly dishModel: Model<Dish>,
  ) {}

  @Post()
  async getRecommendation(@Body() preferences): Promise<any> {
    const { cuisine, dietaryRestrictions } = preferences;

    // Realizar la consulta a la base de datos para obtener la recomendación
    const restaurants = await this.restaurantModel.find({ cuisine });
    const dishes = await this.dishModel.find({ ingredients: { $nin: dietaryRestrictions } });

    // Implementar lógica para generar la recomendación

    // Devolver la recomendación generada
    return {
      restaurant: restaurants[0],
      dish: dishes[0],
    };
  }
}
