"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs = require("bcryptjs");
const individual_users_service_1 = require("../individual-users/individual-users.service");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
const AWS = require("aws-sdk");
const config_1 = require("@nestjs/config");
const dotenv = require("dotenv");
dotenv.config();
const configService = new config_1.ConfigService();
const AWS_S3_BUCKET_NAME = configService.get('AWS_BUCKET');
const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
    secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
    region: configService.get('AWS_DEFAULT_REGION')
});
let AuthService = class AuthService {
    constructor(individualUsersService, jwtService, mailService) {
        this.individualUsersService = individualUsersService;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async register({ name, lastname, username, email, password, birthDate, photo_url }) {
        const base64Image = photo_url.replace(/^data:image\/[a-z]+;base64,/, '');
        const imageBuffer = Buffer.from(base64Image, 'base64');
        await s3.upload({
            Bucket: AWS_S3_BUCKET_NAME,
            Key: `${Date.now().toString()} - ${name}`,
            Body: imageBuffer,
            ACL: 'public-read',
            ContentType: 'image/png',
        }).promise();
        const existUser = await this.individualUsersService.findOneByEmail(email);
        if (existUser) {
            throw new common_1.BadRequestException('Email already exists');
        }
        const token = this.generateRandomNumber().toString();
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = await this.individualUsersService.create({
            photo_url,
            name,
            lastname,
            username,
            birthDate,
            email,
            password: hashedPassword,
            activationToken: token
        });
        await this.mailService.sendVerificationEmail(email, token);
        return {
            message: "User created successfully",
            user: newUser
        };
    }
    async login({ email, password }) {
        const user = await this.individualUsersService.findOneByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException("Invalid email");
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException("Invalid password");
        }
        const payload = { email: user.email };
        const token = await this.jwtService.signAsync(payload);
        return {
            message: "Login successful",
            token: token,
            email: user.email
        };
    }
    async profile({ email }) {
        return await this.individualUsersService.findOneByEmail(email);
    }
    async verifyEmail(verifyEmailDto) {
        try {
            const { token } = verifyEmailDto;
            const user = await this.individualUsersService.findOneByToke(token);
            if (!user) {
                throw new common_1.BadRequestException('INVALID_TOKEN');
            }
            if (user.active) {
                throw new common_1.BadRequestException('USER_ALREADY_ACTIVE');
            }
            user.active = true;
            user.activationToken = null;
            await this.individualUsersService.save(user);
            return {
                message: 'Email del usuario verificado correctamente',
                user
            };
        }
        catch (error) {
            return error;
        }
    }
    generateRandomNumber() {
        const min = 1000;
        const max = 9999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [individual_users_service_1.IndividualUsersService,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map