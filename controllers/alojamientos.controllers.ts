import { Request, Response } from "express";
export const alojamientosController:any = {
    getAlojamientos: (req: Request, res: Response) =>{
        try{
            res.status(200).json({
                alojamientos: [
                    "Cabaña1", " Cabaña2", "Cabaña3"
                ]
            })

        }catch (error:any){

        }
    }
};