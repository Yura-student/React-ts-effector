import { createEffect } from "effector";
import { ICheques } from "src/types";
import axiosInstance from "src/utils/axios";

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


