import { InappropriateContentService } from './inappropriate-content.service';
import { InappropriateContent } from './entities/inappropriate-content.entity';
import { CreateInappropriateContentDto } from './dto/create-inappropriate-content.dto';
import { UpdateInappropriateContentDto } from './dto/update-inappropriate-content.dto';
export declare class InappropriateContentController {
    private inappropriateContentService;
    constructor(inappropriateContentService: InappropriateContentService);
    getInappropriateContents(): Promise<{
        message: string;
        data: InappropriateContent[];
    }>;
    createInappropriateContent(newInappropriateContent: CreateInappropriateContentDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: InappropriateContent;
    }>;
    getInappropriateContent(id: number): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: InappropriateContent;
    }>;
    deleteInappropriateContent(id: number): Promise<import("@nestjs/common").HttpException | {
        message: string;
    }>;
    updateInappropriateContent(id: number, Language: UpdateInappropriateContentDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: InappropriateContent & UpdateInappropriateContentDto;
    }>;
}
