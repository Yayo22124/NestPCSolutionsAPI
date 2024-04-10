import * as mongoose from 'mongoose';

export const mongooseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => mongoose.connect(process.env.CONNECTION_STRING_DB),
  },
];