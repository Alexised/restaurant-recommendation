// recommendation.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationController } from './recommendation.controller';
import { getModelToken } from '@nestjs/mongoose';

describe('RecommendationController', () => {
  let recommendationController: RecommendationController;
  let mockRestaurantModel: any;
  let mockDishModel: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecommendationController],
      providers: [
        {
          provide: getModelToken('Restaurant'),
          useValue: mockRestaurantModel,
        },
        {
          provide: getModelToken('Dish'),
          useValue: mockDishModel,
        },
      ],
    }).compile();

    recommendationController = module.get<RecommendationController>(RecommendationController);
    mockRestaurantModel = module.get(getModelToken('Restaurant'));
    mockDishModel = module.get(getModelToken('Dish'));
  });

  describe('getRecommendation', () => {
    it('should return a recommendation', async () => {
      const mockPreferences = {
        cuisine: 'Italiana',
        dietaryRestrictions: ['Lactosa', 'Gluten'],
      };

      const mockRestaurants = [{ name: 'Restaurante Italiano' }];
      const mockDishes = [{ name: 'Pizza Margarita' }];

      // mockRestaurantModel.find.mockReturnValueOnce(mockRestaurants);
      mockDishModel.find.mockReturnValueOnce(mockDishes);

      const result = await recommendationController.getRecommendation(mockPreferences);

      expect(result.restaurant).toEqual(mockRestaurants[0]);
      expect(result.dish).toEqual(mockDishes[0]);
    });
  });
});
