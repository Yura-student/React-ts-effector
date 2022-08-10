import React from "react"

export interface ICheques {
        key: number,
        uid: string,
        sum:number,
        payType:number,
        info:string,
        chequeState:number,
        selectedQRCODE: string,
        clientUID:string,
        clietnInfo:string,
        chequeType:number,
        dateReg:string,
        dateClose:string,
        kioskUid:string,
        kioskName:string,
        photos:number,
        num:string,
        videoState:number,
        id: string
        
        pays:IPays[],
        positions:IPositions[]
}

export interface IPays {
    sum: number,
}

export interface IPositions {
    quantity: number,
    name: string,
}