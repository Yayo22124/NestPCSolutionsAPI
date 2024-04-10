import { Device } from '@interfaces/device.interface';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class DevicesService {
  constructor(
    @Inject('DEVICE_MODEL')
    private deviceModel: Model<Device>,
  ) {}

  public async getDevices(): Promise<Device[]> {
    try {
        const devices: Device[] = await this.deviceModel.find({}).exec();

        return devices;
    } catch (error) {
        console.error(`Error in DevicesService: getDevices; ${error}`);
    }
  }
}
