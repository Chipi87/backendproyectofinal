"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alojamientosController = void 0;
exports.alojamientosController = {
    getAlojamientos: (req, res) => {
        try {
            res.status(200).json({
                alojamientos: [
                    "Cabaña1", " Cabaña2", "Cabaña3"
                ]
            });
        }
        catch (error) {
        }
    }
};
