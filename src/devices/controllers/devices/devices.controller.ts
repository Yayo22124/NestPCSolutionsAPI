import { Device } from '@interfaces/device.interface';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Req, Res } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { DevicesService } from 'src/devices/services/devices/devices.service';

@Controller("devices")
export class DevicesController {
    constructor(
        private devicesService: DevicesService
    ) {

    }

    @Get("/")
    public async getDevices(@Res() res: Response) {
        try {
            const devices: Device[] = await this.devicesService.getDevices();

            res.status(200).json(
                devices
            )
        } catch (error) {

        }
    }

    @Get("/:uuid")
    public async getDevice(@Param('uuid') uuid: string, @Res() res: Response) {
        try {
            const device = await this.devicesService.getDevice(uuid.toString());

            if (!device) {
                throw new NotFoundException(`Cannot GET, Device: ${uuid} not found.`)
            }

            return {
                device
            }
        } catch (error) {
            if (error instanceof NotFoundException) {
                res.status(404).json({
                    error
                })
            }
            res.status(500).json({
                error
            })
        }
    }

    @Post("/")
    @ApiCreatedResponse({
        description: "Successfully created new Device in the database.",
    })
    public async insertDevice(@Body() newDevice: Device, @Res() res: Response) {
        try {
            await this.devicesService.insertDevice(newDevice);

            
            res.status(200).json({
                created: true,
                msg: "New device successfully created.",
                newDevice
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    }

    @Delete("/:uuid")
    public async deleteDevice(@Param("uuid") uuid: string, @Res() res: Response) {
        try {
            const deleteDevice = await this.devicesService.deleteDevice( uuid.toString() );

            if (!deleteDevice) {
                throw new NotFoundException(`Device with uuid: ${uuid} not found to delete.`)
            }
            
            res.status(200).json({
                deleted: true,
                msg: `Device: ${uuid} successfully deleted.`,
                
            })
        } catch (error) {
            if (error instanceof NotFoundException) {
                res.status(404).json({
                    error
                })
            }
            res.status(500).json({
                error
            })
        }
    }

    @Put("/:uuid")
    public async updateDevice(@Body() updatedDevice: Device, @Param("uuid") uuid: string, @Res() res: Response) {
        try {
            const updateDevice = await this.devicesService.updateDevice( uuid.toString() , updatedDevice  );

            if (!updateDevice) {
                throw new NotFoundException(`Device with uuid: ${uuid.toString()} not found to update.`)
            }
            
            res.status(200).json({
                updated: true,
                msg: `Device: ${uuid} successfully updated.`,
                updateDevice
                
            })
        } catch (error) {
            if (error instanceof NotFoundException) {
                res.status(404).json({
                    error
                })
            }
            res.status(500).json({
                error
            })
        }
    }
}
