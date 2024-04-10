import { DeviceSchema } from '@schemas/device.schema';

export const deviceProviders = [
  {
    provide: 'DEVICE_MODEL',
    useFactory: (connection) => connection.model('Device', DeviceSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
