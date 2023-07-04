import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';


export class PaginationDto {
    @ApiProperty({
        default: 10,
        description: 'The amount of items to be returned',
    })
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?: number;

    @ApiProperty({
        default: 0,
        description: 'The amount of items to skip',
    })
    @IsOptional()
    @Min(0)
    @Type(() => Number)
    offset?: number;
}