import * as mongoose from 'mongoose';

const generateUUID = () => {
  return crypto.randomUUID();
};

export const DeviceSchema = new mongoose.Schema(
  {
    uuid: {
      default: generateUUID,
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
