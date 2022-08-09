/* import { createEffect, createEvent, createStore } from 'effector'
import {ICheques} from '.../types'

export const $cheques = createStore<ICheques[]>([]); //создание хранилища
export const update = createEvent<ICheques>(); //

const updateStore = (state: ICheques[], data: ICheques) => {
    const chequeIndex = state.findIndex((cheque) => cheque.clientUID === data.clientUID);

   if (chequeIndex > -1) {
    state.splice(chequeIndex, 1, data);
   } else {
    state.push(data);
   }

   return [...state];
};
//Подписка на обновления
$cheques
   .on(update, updateStore);

 */
    import { restore } from "effector";

    restore