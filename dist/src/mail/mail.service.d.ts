import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendVerificationEmail(email: string, token: string): Promise<void>;
}
