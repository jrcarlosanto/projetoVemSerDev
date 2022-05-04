import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Carlos' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'carlos.gmail.com' })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'senha' })
    @IsString()
    @IsNotEmpty()
    password: string;

}
