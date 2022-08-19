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
export const addCheques = createEffect <any, any> (
   async({...rest}) => {
      try{
         const res: any = await axiosInstance.post(`/cheques`, rest);
         return res;
      }
      catch (error) {
         return Promise.reject(error);
      }
   }
);

//DELETE
export const deleteCheques = createEffect<any, any>(
   async(id) => {
      console.log("id:", id);
      try{
         const res: any = await axiosInstance.delete(`/cheques/${id}`);
         return res;
      }
      catch (error) {
         return Promise.reject(error);
      }
   }
);

