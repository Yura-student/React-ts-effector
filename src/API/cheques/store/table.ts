import { restore } from "effector";
import { ICheques } from "src/types";
import { fetchCheques } from "..";

export const $chequesList = restore<ICheques[]>(fetchCheques.doneData, []);
export const $chequesListForTable = $chequesList.map((array) => {
    if (array) {
      return array.map((item, number) => ({
        key: item.id,
        id: item.id,
        dateReg: item.dateReg,
        kioskName: item.kioskName,
        chequeType: item.chequeType,
        paysTatus: item.pays,
        pay: item.pays,
        sum: item.sum,
        positions: item.positions,
        positionsName: item.positions
      }));
    } else  {
      return [];
    }
  });