import { HttpException } from '@nestjs/common';
import { Interest } from './entities/interest.entity';
import { Repository } from 'typeorm';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';
export declare class InterestService {
    private interestRepository;
    constructor(interestRepository: Repository<Interest>);
    createInterest(interest: CreateInterestDto): Promise<HttpException | {
        message: string;
        data: Interest;
    }>;
    getInterests(): Promise<{
        message: string;
        data: Interest[];
    }>;
    getInterest(id: number): Promise<HttpException | {
        message: string;
        data: Interest;
    }>;
    deleteInterest(id: number): Promise<HttpException | {
        message: string;
    }>;
    updateInterest(id: number, interest: UpdateInterestDto): Promise<HttpException | {
        message: string;
        data: Interest & typeof Interest;
    }>;
}
