import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user: import("../individual-users/dto/create-individual-user.dto").CreateIndividualUserDto & import("../individual-users/entities/individual-user.entity").IndividualUser;
    }>;
    login(loginDto: LoginDto): Promise<{
        message: string;
        token: string;
        email: string;
    }>;
    profile(req: any): any;
    validateEmail(verifyEmailDto: VerifyEmailDto): Promise<any>;
}
