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
                    validator: (val) => (val?.toString()?.length || 0) > 0,
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
    filter: addModalForm.$isValid,
    fn: (source, clock) =>  {
        return ({
        dateReg: source.dateReg,
        kioskName: source.kioskName,
        chequeType: Number(source.chequeType),
        sum: Number(source.sum) * 100,
        
        pays: [{
            sum: Number(source.pay) * 100
        }],
        positions: [{
            name: source.positionsName,
            quantity: Number(source.positions)
        }]
    })},
    target: addCheques
})


interface CreateCheques{
    onCreate: () => void
}
export interface ChequesTable {
    id: string,
    dateReg: string,
    kioskName: string,
    chequeType:number,
    paysTatus: IPays[],
    pay: IPays[],
    sum: number,
    positions: IPositions[],
    positionsName: IPositions[],
  }