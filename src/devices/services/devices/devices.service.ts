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

  public async getDevice( uuid: string ) {
    try {
        const device = await this.deviceModel.findOne({ uuid }).exec();

        return device;
    } catch (error) {
        console.error(`Error in DevicesService: getDevice; ${error}`);
    }
  }

  public async insertDevice( newDevice: Device ) {
    try {
        const createDevice = new this.deviceModel( newDevice );

        return createDevice.save();
    } catch (error) {
        console.error(`Error in DevicesService: insertDevice; ${error}`);
    }
  }

  public async deleteDevice( uuid: string ) {
    try {
        const deleteDevice = this.deviceModel.findOneAndDelete({ uuid }).exec();

        return deleteDevice;
    } catch (error) {
        console.error(`Error in DevicesService: deleteDevice; ${error}`);
    }
  }

  public async updateDevice( uuid: string, updatedDevice: Device ) {
    try {
        const updateDevice = this.deviceModel.findOneAndUpdate({ uuid }, updatedDevice);

        return updateDevice;
    } catch (error) {
        console.error(`Error in DevicesService: updateDevice; ${error}`);
    }
  }
}
