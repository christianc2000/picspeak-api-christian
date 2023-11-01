import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateLanguageDto } from './dto/create-language.dto';
import { Language } from './entities/language.entity';
import { UpdateLanguageDto } from './dto/update-language.dto';
export declare class LanguageService {
    private languageRepository;
    constructor(languageRepository: Repository<Language>);
    createLanguage(language: CreateLanguageDto): Promise<HttpException | {
        message: string;
        data: Language;
    }>;
    createLanguages(languages: CreateLanguageDto[]): Promise<{
        message: string;
        data: any[];
    }>;
    getLanguages(): Promise<{
        message: string;
        data: Language[];
    }>;
    getLanguage(id: number): Promise<HttpException | {
        message: string;
        data: Language;
    }>;
    deleteLanguage(id: number): Promise<HttpException | {
        message: string;
    }>;
    updateLanguage(id: number, language: UpdateLanguageDto): Promise<HttpException | {
        message: string;
        data: Language & UpdateLanguageDto;
    }>;
}
