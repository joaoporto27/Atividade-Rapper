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

rapperRoutes.post("/", (req, res) => {
    const {nome, idade, descricaoFisica, envolvimento} = req.body;

    if (!nome || !idade || !envolvimento) {
        return res.status(400).json({
            message: "Os campos nome, idade e envolvimento são obrigatórios",
        });
    }

    if (envolvimento != "sim" && envolvimento != "não"){
        return res.status(400). send ({
            message: "Digite 'sim' ou 'não'!",
        });
    }

    if(Number.isInteger(idade) == false){
        return res.status(400). send ({
            message: "Digite um número inteiro!",
        });
    }

    const novoRapper = {
        id: Math.floor(Math.random() * 999999),
        nome,
        idade,
        descricaoFisica,
        envolvimento
    };

    rappers.push(novoRapper);

    return res.status(201).json ({
        message: "Rapper cadastrado com sucesso!",
        novoRapper,
    });
});

rapperRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const rapper = rappers.find((artista) => artista.id == id);

    if (!rapper){
        return res
        .status(404)
        .json({message:`Rapper com id ${id} não encontrado!`});
    }

    return res.status(200).json(rapper);
});
 
export default rapperRoutes;