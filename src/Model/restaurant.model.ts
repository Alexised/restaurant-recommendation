// restaurant.model.ts

import * as mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  cuisine: String,
});

export interface Restaurant extends mongoose.Document {
  name: string;
  location: string;
  cuisine: string;
}

