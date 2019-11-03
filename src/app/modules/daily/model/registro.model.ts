import { TipoDeRegistro } from '../enum/tipoDeRegistro.enum';

export class Registro
{
    public diaDoRegistro?: Date;
    public tipo?: TipoDeRegistro;
    public tarefaCompleta?: boolean; 
    public descricao?: string;
    public editando?: boolean;
    public novaDescricao?: string;
}