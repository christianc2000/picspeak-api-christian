"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const individual_users_module_1 = require("./individual-users/individual-users.module");
const auth_module_1 = require("./auth/auth.module");
const nacionality_module_1 = require("./nacionality/nacionality.module");
const language_module_1 = require("./language/language.module");
const interest_module_1 = require("./interest/interest.module");
const inappropriate_content_module_1 = require("./inappropriate-content/inappropriate-content.module");
const configuration_module_1 = require("./configuration/configuration.module");
const mail_module_1 = require("./mail/mail.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    logging: true,
                    autoLoadEntities: true,
                    synchronize: true,
                    cache: false
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
            individual_users_module_1.IndividualUsersModule,
            auth_module_1.AuthModule,
            nacionality_module_1.NacionalityModule,
            language_module_1.LanguageModule,
            interest_module_1.InterestModule,
            inappropriate_content_module_1.InappropriateContentModule,
            configuration_module_1.ConfigurationModule,
            mail_module_1.MailModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map