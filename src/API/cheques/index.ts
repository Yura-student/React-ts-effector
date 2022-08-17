import { createEffect } from "effector";
import { ICheques } from "src/types";
import axiosInstance from "src/utils/axios";
import {ChequesTable} from "./store/addCheques";

//! GET
// Получение данных с API
export const fetchCheques = createEffect<any, ICheques[]>(
   async() => {
      try{
         const res: { items : ICheques[] } = await axiosInstance.get(`/cheques`);
         return res.items;
      }
      catch (error) {
         return Promise.reject(error);
      }
   }
);

// POST
export const addCheques = createEffect<ChequesTable, any>(
   async({...rest}) => {
      try{
         const res:any = await axiosInstance.post(`/chequesm?id{Math.random()}`, rest);
         return res;
      }
      catch (error) {
         return Promise.reject(error);
      }
   }
);
