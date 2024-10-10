import { Router} from "express";

import rapperRoutes from "./rapper.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).json({message: "Servidor rodando!"});
});

routes.use("/rappers", rapperRoutes);

export default routes;