import { InterestService } from './interest.service';
import { Interest } from './entities/interest.entity';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';
export declare class InterestController {
    private interestService;
    constructor(interestService: InterestService);
    getInterests(): Promise<{
        message: string;
        data: Interest[];
    }>;
    createInterest(newInterest: CreateInterestDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: Interest;
    }>;
    getInterest(id: number): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: Interest;
    }>;
    deleteInterest(id: number): Promise<import("@nestjs/common").HttpException | {
        message: string;
    }>;
    updateInterest(id: number, interest: UpdateInterestDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        data: Interest & typeof Interest;
    }>;
}
