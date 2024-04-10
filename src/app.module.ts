import { RouterModule, Routes } from '@nestjs/core';

import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { DevicesModule } from './devices/devices.module';
import { Module } from '@nestjs/common';

const routes: Routes = [
  {
    path: 'devices',
    module: DevicesModule,
  },
];

@Module({
  imports: [
    DatabaseModule,
    DevicesModule,
    ConfigModule.forRoot({
      envFilePath: 'src/.env',
      isGlobal: true,
    }),
    RouterModule.register(routes),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
