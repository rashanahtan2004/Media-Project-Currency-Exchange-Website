import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateCurrencyDto {
  @ApiProperty({ required: false, example: 'US Dollar' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false, example: '$' })
  @IsOptional()
  @IsString()
  symbol?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

