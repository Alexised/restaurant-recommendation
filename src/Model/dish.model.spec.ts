// dish.model.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Dish, DishSchema } from './dish.model';
import * as mongoose from 'mongoose';

describe('Dish', () => {
  let dishModel: mongoose.Model<Dish>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken('Dish'),
          useValue: mongoose.model('Dish', DishSchema),
        },
      ],
    }).compile();

    dishModel = module.get(getModelToken('Dish'));
  });

  it('should be defined', () => {
    expect(dishModel).toBeDefined();
  });

  it('should create a new dish', async () => {
    const dishData = {
      name: 'Pizza Margarita',
      ingredients: ['Tomate', 'Queso', 'Albahaca'],
      price: 10.99,
    };

    const dish = new dishModel(dishData);
    const savedDish = await dish.save();

    expect(savedDish._id).toBeDefined();
    expect(savedDish.name).toEqual(dishData.name);
    expect(savedDish.ingredients).toEqual(dishData.ingredients);
    expect(savedDish.price).toEqual(dishData.price);
  });
});
