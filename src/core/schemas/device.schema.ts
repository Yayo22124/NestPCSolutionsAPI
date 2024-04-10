import * as mongoose from 'mongoose';

export const DeviceSchema = new mongoose.Schema(
  {
    uuid: {
      default: crypto.randomUUID(),
      type: String
    },
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
