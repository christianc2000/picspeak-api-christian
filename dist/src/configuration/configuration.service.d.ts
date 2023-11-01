import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LanguageUser } from './entities/language_user.entity';
import { InterestUser } from './entities/interest_user.entity';
import { InappropriateContentUser } from './entities/inappropriate_content_user.entity';
import { CreateLanguageUserDto } from './dto/create-language-user.dto';
import { Language } from 'src/language/entities/language.entity';
import { SelectNacionalityUserDto } from './dto/select-nacionality-user.dto';
import { User } from 'src/users/entities/user.entity';
import { Nacionality } from 'src/nacionality/entities/nacionality.entity';
import { SelectNacionalityMatternLanguageUserDto } from './dto/select-nacionality-mattern-language-user.dto';
import { InappropriateContent } from 'src/inappropriate-content/entities/inappropriate-content.entity';
import { CreateInappropriateContentUserDto } from './dto/create-inappropriate-content-user.dto';
import { Interest } from 'src/interest/entities/interest.entity';
import { CreateInterestUserDto } from './dto/create-interest-user.dto';
import { SelectNacionalityLanguageUserDto } from './dto/select-nacionality-language.dto';
export declare class ConfigurationService {
    private nacionalityRepository;
    private userRepository;
    private languageRepository;
    private inappropriateContentRepository;
    private interestRepository;
    private languageUserRepository;
    private interestUserRepository;
    private inappropriateContentUserRepository;
    constructor(nacionalityRepository: Repository<Nacionality>, userRepository: Repository<User>, languageRepository: Repository<Language>, inappropriateContentRepository: Repository<InappropriateContent>, interestRepository: Repository<Interest>, languageUserRepository: Repository<LanguageUser>, interestUserRepository: Repository<InterestUser>, inappropriateContentUserRepository: Repository<InappropriateContentUser>);
    createSelectLanguageUser(id: number): Promise<"se inicializó correctamente" | "ya está creado sus lenguajes para el usuario">;
    updateSelectLanguageUser(id: number, languageUser: CreateLanguageUserDto[]): Promise<{
        message: string;
    }>;
    getLanguagesUser(id: number): Promise<HttpException | {
        message: string;
        data: LanguageUser[];
    }>;
    selectNacionalityUser(id: number, selectNacionalityUser: SelectNacionalityUserDto): Promise<HttpException | {
        message: string;
        data: User;
    }>;
    selectMatternLanguage(id: number, selectNacionalityMatternLanguageUser: SelectNacionalityMatternLanguageUserDto): Promise<HttpException | {
        message: string;
        data: LanguageUser;
    }>;
    selectLanguageNationalityUser(id: number, selectLanguageNationalityUser: SelectNacionalityLanguageUserDto): Promise<HttpException | "no hay user language" | {
        message: string;
        data: (User | LanguageUser)[];
    }>;
    getInterestsUser(id: number): Promise<HttpException | {
        message: string;
        data: InterestUser[];
    }>;
    createSelectInterestUser(id: number): Promise<{
        message: string;
    }>;
    updateSelectInterestUser(id: number, interestUser: CreateInterestUserDto[]): Promise<{
        message: string;
    }>;
    getInappropriateContentUser(id: number): Promise<InappropriateContentUser[] | HttpException>;
    createSelectInappropriateContentUser(id: number): Promise<{
        message: string;
    }>;
    updateSelectInappropriateContentUser(id: number, inappropriateContentUser: CreateInappropriateContentUserDto[]): Promise<{
        message: string;
    }>;
}
