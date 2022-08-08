/* import { createEffect, createEvent, createStore } from 'effector'

export const $cheques = createStore<cheques[]>([]);
export const update = createEvent<cheques>();

const updateStore = (state: cheques[], data: cheques) => {
    const userIndex = state.findIndex((user) => user.id === data.id);
  
 */
    import { restore } from "effector";

    restore