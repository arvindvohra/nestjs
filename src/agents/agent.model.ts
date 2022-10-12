import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Agent extends Model {
    @Column
    agentid : number;

    @Column
    agentname: string;

    @Column
    email: string;

    @Column
    country: string;

    @Column({ defaultValue: true})
    status: boolean;
}