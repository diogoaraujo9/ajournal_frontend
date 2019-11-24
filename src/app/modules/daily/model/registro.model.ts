import { TipoDeRegistro } from '../enum/tipoDeRegistro.enum';

export class Registro
{
    public _id?: any;
    public data?: Date;
    public tipo?: TipoDeRegistro;
    public tarefaCompleta?: boolean; 
    public descricao?: string;
    public categoriaIndex?: number;
}