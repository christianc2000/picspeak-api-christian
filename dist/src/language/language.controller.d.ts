import { CreateLanguageDto } from './dto/create-language.dto';
import { LanguageService } from './language.service';
import { Language } from './entities/language.entity';
import { UpdateLanguageDto } from './dto/update-language.dto';
export declare class LanguageController {
    private languageService;
    constructor(languageService: LanguageService);
    getLanguages(): Promise<{
        message: string;
        data: Language[];
    }>;
    createLanguage(newLanguage: CreateLanguageDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: Language;
    }>;
    createLanguages(newLanguages: CreateLanguageDto[]): Promise<{
        message: string;
        data: any[];
    }>;
    getLanguage(id: number): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: Language;
    }>;
    deleteLanguage(id: number): Promise<import("@nestjs/common").HttpException | {
        message: string;
    }>;
    updateLanguage(id: number, Language: UpdateLanguageDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: Language & UpdateLanguageDto;
    }>;
}
