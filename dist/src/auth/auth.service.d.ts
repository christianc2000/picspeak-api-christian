import { RegisterDto } from './dto/register.dto';
import { IndividualUsersService } from 'src/individual-users/individual-users.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { VerifyEmailDto } from './dto/verify-email.dto';
export declare class AuthService {
    private readonly individualUsersService;
    private readonly jwtService;
    private readonly mailService;
    constructor(individualUsersService: IndividualUsersService, jwtService: JwtService, mailService: MailService);
    register({ name, lastname, username, email, password, birthDate, photo_url }: RegisterDto): Promise<{
        message: string;
        user: import("../individual-users/dto/create-individual-user.dto").CreateIndividualUserDto & import("../individual-users/entities/individual-user.entity").IndividualUser;
    }>;
    login({ email, password }: LoginDto): Promise<{
        message: string;
        token: string;
        email: string;
    }>;
    profile({ email }: {
        email: string;
    }): Promise<import("../individual-users/entities/individual-user.entity").IndividualUser>;
    verifyEmail(verifyEmailDto: VerifyEmailDto): Promise<any>;
    generateRandomNumber(): number;
}
