"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const alojamientos_router_1 = require("./router/alojamientos.router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/alojamientos", alojamientos_router_1.alojamientosRouter);
app.listen(3001, () => {
    console.log("server escuchando en el puerto 3001");
});
