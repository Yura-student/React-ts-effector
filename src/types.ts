import React from "react"

export interface ICheques {
        sum:number,
        payType:number,
        info:string,
        chequeState:number,
        selectedQRCODE: string,
        clietnInfo:string,
        chequeType:number,
        dateReg:string,
        dateClose:string,
        kioskUid:string,
        kioskName:string,
        photos:string,
        num:string,
        videoState:number,
        clientUID:string,
        pays:[{
            sum: number,
        }],
        positions:[{
            quantity: number,
            name: string,
        }]
}