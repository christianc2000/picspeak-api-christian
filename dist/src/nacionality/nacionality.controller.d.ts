import { CreateNacionalityDto } from './dto/create-nacionality.dto';
import { NacionalityService } from "./nacionality.service";
import { Nacionality } from './entities/nacionality.entity';
import { UpdateNacionalityDto } from './dto/update-nacionality.dto';
export declare class NacionalityController {
    private nacionalitiesService;
    constructor(nacionalitiesService: NacionalityService);
    getNacionalities(): Promise<{
        message: string;
        data: Nacionality[];
    }>;
    createNacionality(newNacionality: CreateNacionalityDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: Nacionality;
    }>;
    createNacionalities(newNationalities: CreateNacionalityDto[]): Promise<{
        message: string;
        data: any[];
    }>;
    getNacionality(id: number): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: Nacionality;
    }>;
    deleteNacionality(id: number): Promise<import("@nestjs/common").HttpException | {
        message: string;
    }>;
    updateNacionality(id: number, nacionality: UpdateNacionalityDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: Nacionality & UpdateNacionalityDto;
    }>;
}
