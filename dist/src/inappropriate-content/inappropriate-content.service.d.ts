import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InappropriateContent } from './entities/inappropriate-content.entity';
import { CreateInappropriateContentDto } from './dto/create-inappropriate-content.dto';
import { UpdateInappropriateContentDto } from './dto/update-inappropriate-content.dto';
export declare class InappropriateContentService {
    private inappropriateContentRepository;
    constructor(inappropriateContentRepository: Repository<InappropriateContent>);
    createInappropriateContent(inappropriateContent: CreateInappropriateContentDto): Promise<HttpException | {
        message: string;
        data: InappropriateContent;
    }>;
    getInappropriateContents(): Promise<{
        message: string;
        data: InappropriateContent[];
    }>;
    getInappropriateContent(id: number): Promise<HttpException | {
        message: string;
        data: InappropriateContent;
    }>;
    deleteInappropriateContent(id: number): Promise<HttpException | {
        message: string;
    }>;
    updateInappropriateContent(id: number, inappropriateContent: UpdateInappropriateContentDto): Promise<HttpException | {
        message: string;
        data: InappropriateContent & UpdateInappropriateContentDto;
    }>;
}
