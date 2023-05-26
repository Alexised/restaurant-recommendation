// dish.model.ts

import * as mongoose from 'mongoose';

export const DishSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  price: Number,
});

export interface Dish extends mongoose.Document {
  name: string;
  ingredients: string[];
  price: number;
}
