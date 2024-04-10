import * as mongoose from 'mongoose';

export const DeviceSchema = new mongoose.Schema(
  {
    uuid: String,
    name: String,
    brand: String,
    type: String,
    price: Number,
    status: Number,
    stock: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
