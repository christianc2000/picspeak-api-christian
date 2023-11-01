import { HttpException } from '@nestjs/common';
import { Nacionality } from './entities/nacionality.entity';
import { Repository } from 'typeorm';
import { CreateNacionalityDto } from './dto/create-nacionality.dto';
import { UpdateNacionalityDto } from './dto/update-nacionality.dto';
export declare class NacionalityService {
    private nacionalityRepository;
    constructor(nacionalityRepository: Repository<Nacionality>);
    createNacionality(nacionality: CreateNacionalityDto): Promise<HttpException | {
        message: string;
        data: Nacionality;
    }>;
    createNacionalities(nacionalities: CreateNacionalityDto[]): Promise<{
        message: string;
        data: any[];
    }>;
    getNacionalities(): Promise<{
        message: string;
        data: Nacionality[];
    }>;
    getNacionality(id: number): Promise<HttpException | {
        message: string;
        data: Nacionality;
    }>;
    deleteNacionality(id: number): Promise<HttpException | {
        message: string;
    }>;
    updateNacionality(id: number, nacionality: UpdateNacionalityDto): Promise<HttpException | {
        message: string;
        data: Nacionality & UpdateNacionalityDto;
    }>;
}
