import { Schema, model } from "mongoose";

export interface Food {
  id: string;
  name: string;
  price: number;
  tags: string[];
  favorite: boolean;
  stars: number;
  imageUrl: string;
  origins: string[];
  cookTime: string;
}

export const FoodSchema = new Schema<Food>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    favorite: { type: Boolean, required: true },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    origins: { type: [String], required: true },
    cookTime: { type: String, required: true },
  },
  {
    toJSON: {
      // virtuals wiil be generated by the database
      // so we want our foodid to be used by mongoose ie _id
      // we need to allow virtuals to true
      virtuals: true,
    },
    toObject: {
      // when you get value from db and you want to work in code with it
      virtuals: true,
    },
    timestamps: true,
  }
);

export const FoodModel = model<Food>("food", FoodSchema);