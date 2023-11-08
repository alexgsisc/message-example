import { IsString } from "class-validator";

export class CreateMessageDto {
    @IsString({message: 'The content is not valid'})
    content: string;
}
