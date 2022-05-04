import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserAuthDto {

    @ApiProperty({ example: 'carlos.gmail.com' })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'senha' })
    @IsString()
    @IsNotEmpty()
    password: string;

}
