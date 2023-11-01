import { ConfigurationService } from './configuration.service';
import { CreateLanguageUserDto } from './dto/create-language-user.dto';
import { SelectNacionalityUserDto } from './dto/select-nacionality-user.dto';
import { SelectNacionalityMatternLanguageUserDto } from './dto/select-nacionality-mattern-language-user.dto';
import { CreateInappropriateContentUserDto } from './dto/create-inappropriate-content-user.dto';
import { CreateInterestUserDto } from './dto/create-interest-user.dto';
import { SelectNacionalityLanguageUserDto } from './dto/select-nacionality-language.dto';
export declare class ConfigurationController {
    private configurationService;
    constructor(configurationService: ConfigurationService);
    getLanguagesUser(id: number): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: import("./entities/language_user.entity").LanguageUser[];
    }>;
    updateSelectLanguageUser(id: number, newLanguageUser: CreateLanguageUserDto[]): Promise<{
        message: string;
    }>;
    createSelectLanguageUser(id: number): Promise<"se inicializó correctamente" | "ya está creado sus lenguajes para el usuario">;
    selectMatternLanguageUser(id: number, newSelectMatternLanguage: SelectNacionalityMatternLanguageUserDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: import("./entities/language_user.entity").LanguageUser;
    }>;
    selectLanguageNationalityUser(id: number, newSelectNacionalityLanguageUser: SelectNacionalityLanguageUserDto): Promise<import("@nestjs/common").HttpException | "no hay user language" | {
        message: string;
        data: (import("../users/entities/user.entity").User | import("./entities/language_user.entity").LanguageUser)[];
    }>;
    selectNacionalityUser(id: number, newSelectNacionalityUser: SelectNacionalityUserDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: import("../users/entities/user.entity").User;
    }>;
    getInappropriateContentsUser(id: number): Promise<import("./entities/inappropriate_content_user.entity").InappropriateContentUser[] | import("@nestjs/common").HttpException>;
    updateSelectInappropriateContentUser(id: number, newInappropriateContentUser: CreateInappropriateContentUserDto[]): Promise<{
        message: string;
    }>;
    createSelectInappropriateContentUser(id: number): Promise<{
        message: string;
    }>;
    getInterestsUser(id: number): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: import("./entities/interest_user.entity").InterestUser[];
    }>;
    updateSelectInterestUser(id: number, newInterestUser: CreateInterestUserDto[]): Promise<{
        message: string;
    }>;
    createSelectInterestUser(id: number): Promise<{
        message: string;
    }>;
}
