import { IPays, IPositions } from "src/types";

export interface IPayload {
    chequeType: number,
    dateReg: string,
    kioskName: string,
    sum: number,

    pays:IPays[],
    positions:IPositions[]
}