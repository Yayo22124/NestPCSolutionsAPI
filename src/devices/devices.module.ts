import { DatabaseModule } from 'src/database/database.module';
import { DevicesService } from './services/devices/devices.service';
import { Module } from '@nestjs/common';
import { deviceProviders } from './providers/devices-providers/devices-providers';
import { DevicesController } from './controllers/devices/devices.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...deviceProviders, DevicesService],
  controllers: [DevicesController],
})
export class DevicesModule {}
