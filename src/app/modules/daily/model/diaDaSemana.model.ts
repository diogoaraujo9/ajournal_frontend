import { Registro } from './registro.model';

export class DiaDaSemana
{
    public dia: number;
    public mes: number;
    public ano: number;
    public data: Date;
    public diaDaSemana: string;
    public registros: Array<Registro>;
}