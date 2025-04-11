import { IsNumber, IsString } from "class-validator";

export class CreateCidadeDto {

    @IsNumber()
    id: number;

    @IsString()
    nome: string;

    @IsString()
    uf_id: string;

}
