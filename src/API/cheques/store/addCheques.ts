import { restore, sample, createEffect } from "effector"
import { createForm } from 'effector-forms'

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
    source: addModalForm.$values

})