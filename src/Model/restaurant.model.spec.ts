// restaurant.model.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Restaurant, RestaurantSchema } from './restaurant.model';
import * as mongoose from 'mongoose';

describe('Restaurant', () => {
  let restaurantModel: mongoose.Model<Restaurant>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken('Restaurant'),
          useValue: mongoose.model('Restaurant', RestaurantSchema),
        },
      ],
    }).compile();

    restaurantModel = module.get(getModelToken('Restaurant'));
  });

  it('should be defined', () => {
    expect(restaurantModel).toBeDefined();
  });

  it('should create a new restaurant', async () => {
    const restaurantData = {
      name: 'Restaurante Italiano',
      location: 'Ciudad A',
      cuisine: 'Italiana',
    };

    const restaurant = new restaurantModel(restaurantData);
    const savedRestaurant = await restaurant.save();

    expect(savedRestaurant._id).toBeDefined();
    expect(savedRestaurant.name).toEqual(restaurantData.name);
    expect(savedRestaurant.location).toEqual(restaurantData.location);
    expect(savedRestaurant.cuisine).toEqual(restaurantData.cuisine);
  });
});
