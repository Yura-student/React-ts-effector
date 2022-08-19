import React from "react";
import { createEvent, createStore, forward, sample } from "effector"
import { createForm } from 'effector-forms'
import { addCheques, deleteCheques, fetchCheques } from "..";

export const openModal = createEvent()
export const closeModal = createEvent()
export const $VisibleModal = createStore(false).on(openModal, () => true).reset(closeModal)

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

sample({
    clock: addCheques.doneData, 
    target: [fetchCheques, addModalForm.reset, closeModal]         // создаем массив куда передаем теккущии значения и добавляем в конец новое и закрываем модальное окно
})

export const AddElement = createEvent<React.Key[]>()
export const $SelectedList = createStore<React.Key[]>([]).on(AddElement, (_state, payload) => payload)  // создаем стор для поулчения id

forward({
    from: deleteCheques.doneData,
    to: fetchCheques
})