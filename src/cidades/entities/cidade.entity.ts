import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity('cidades')
export class Cidade {
    @PrimaryColumn()
    id_coluna: string;

    @Column()
    id: number;
    
    @Column()
    nome: string;
    
    @Column()
    uf_id: string;
}
