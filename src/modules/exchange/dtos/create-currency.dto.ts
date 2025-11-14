import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateCurrencyDto {
  @ApiProperty({ example: 'USD', description: 'ISO 4217 currency code' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ example: 'US Dollar', description: 'Currency name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '$', description: 'Currency symbol' })
  @IsString()
  @IsNotEmpty()
  symbol: string;

  @ApiProperty({ default: true, required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

