import { createEffect } from "effector";
import React from "react";
import { ICheques } from "src/types";
import axiosInstance from "src/utils/axios";
import { IPayload } from "./types";

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
export const addCheques = createEffect <IPayload, ICheques> (
   async({...rest}) => {
      try{
         const res: ICheques = await axiosInstance.post(`/cheques`, rest);
         return res;
      }
      catch (error) {
         return Promise.reject(error);
      }
   }
);

//DELETE
// id передается по React.key
export const deleteCheques = createEffect<React.Key , ICheques>(
   async(id) => {
      try{
         const res: ICheques = await axiosInstance.delete(`/cheques/${id}`);
         return res;
      }
      catch (error) {
         return Promise.reject(error);
      }
   }
);

