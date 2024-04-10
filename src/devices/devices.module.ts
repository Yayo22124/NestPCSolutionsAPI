import { DatabaseModule } from 'src/database/database.module';
import { DevicesService } from './services/devices/devices.service';
import { Module } from '@nestjs/common';
import { deviceProviders } from './providers/devices-providers/devices-providers';

@Module({
  imports: [DatabaseModule],
  providers: [...deviceProviders, DevicesService]
})
export class DevicesModule {}
