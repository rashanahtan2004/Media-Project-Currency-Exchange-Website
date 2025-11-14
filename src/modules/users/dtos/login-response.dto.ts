import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

export class LoginResponseDto {
  @ApiProperty()
  _id: ObjectId;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  message: string;
}
