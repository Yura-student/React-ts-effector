import { sample } from "effector"
import { createForm } from 'effector-forms'
import { ICheques, IPays, IPositions } from "src/types";
import { addCheques } from "..";


export const addModalForm = createForm ({
    fields: {
        dateReg: { 
            init: "", 
            rules: [
                {
                    name: "dateReg",
                    validator: (val) => {
                        return val !== null ? val?.toString().length > 0 : false;
                      },
                },
            ],
        },
        kioskName: {
            init: "", 
            rules: [
                {
                    name: "kioskName",
                    validator: (val) => {
                        return val !== null ? val?.toString().length > 0 : false;
                      },

                },
            ],
        },
        chequeType: {
            init: "", 
            rules: [
                {
                    name: "chequeType",
                    validator: (value: string) => value != ''
                },
            ],
        },
        paysTatus: {
            init: "", 
            rules: [
                {
                    name: "paysTatus",
                    validator: (value: string) => value != ''
                },
            ],
        },
        pay: {
            init: "", 
            rules: [
                {
                    name: "pay",
                    validator: (value: string) => value != ''
                },
            ],
        },
        sum: {
            init: "", 
            rules: [
                {
                    name: "sum",
                    validator: (value: string) => value != ''
                },
            ],
        },
        positions: {
            init: "", 
            rules: [
                {
                    name: "positions",
                    validator: (value: string) => value != ''
                },
            ],
        },
        positionsName: {
            init: "", 
            rules: [
                {
                    name: "positionsName",
                    validator: (value: string) => value != ''
                },
            ],
        },
    },
        validateOn: ["submit"],
})

sample({
    clock: addModalForm.submit,
    source: addModalForm.$values,
    /* target: addCheques */
})

export interface ChequesTable {
    dateReg: string,
    kioskName: string,
    chequeType:number,
    paysTatus: IPays[],
    pay: IPays[],
    sum: number,
    positions: IPositions[],
    positionsName: IPositions[],
  }

/* const ChequesData: ChequesTable = {
    dateReg: '',
    kioskName: '',
    chequeType: 12,
    paysTatus: 11,
    pay: 11,
    sum: 11,
    positions: 1,
    positionsName: 'Люля',
} */