import { Router } from "express";

const rapperRoutes = Router();

let rappers = [
    {
        id: Math.floor(Math.random() * 999999),
        nome: "Will Smith",
        idade: 56,
        descricaoFisica: ["Negro", "1.88m de altura" , "cabelo curto", "cavanhaque"],
        envolvimento: "sim"
    },
    {
        id: Math.floor(Math.random() * 999999),
        nome: "P.Diddy",
        idade: 54,
        descricaoFisica: ["Negro", "1.78m de altura" , "cabelo crespo e curto", "barba rasa ou cavanhaque"],
        envolvimento: "sim"
    },
    {
        id: Math.floor(Math.random() * 999999),
        nome: "Eminem",
        idade: 51,
        descricaoFisica: ["Branco", "1.73m de altura", "Cabelo curto", "Barba", "Tatuagem na mão e nos braços visíveis "],
        envolvimento: "não"
    },
];

rapperRoutes.get("/", (req,res) => {
    return res.status(200).json(rappers);
});

export default rapperRoutes;