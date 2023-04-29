import express from "express";
import cors from "cors";
import { alojamientosRouter } from "./router/alojamientos.router";


const app = express();
app.use(cors());

app.use("/alojamientos", alojamientosRouter)


app.listen(3001, ()=>{
    console.log("server escuchando en el puerto 3001");
    
})

