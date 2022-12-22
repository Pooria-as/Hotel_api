import { Schema, model } from "mongoose";

const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  distance: {
    type: String,
    required: true,
  },

  photos: {
    type: [String],
  },

  description: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },

  rooms: {
    type: [String],
  },
  cheapest: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default model("Hotel", HotelSchema);