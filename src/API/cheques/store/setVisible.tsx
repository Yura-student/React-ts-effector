import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";
import { addCheques } from "..";

interface Visible {
  visible: boolean
}


export const update = createEvent<Visible>();
/* 
export const $setVisible = createStore<Visible>(true, false);
const updateStore = (state: Visible[], data: Visible) => {
  const visibled = state.findIndex((visible) => visible.true === data.t);

 
$setVisible
  .on(update, updateStore); */