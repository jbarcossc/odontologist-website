import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"lama123",
    database:"consultorio"
});

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.json("hello this is the backend");
});

app.get("/turnos", (req,res) => {
    const query = "SELECT * FROM turnos";
    db.query(query,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.post("/turnos", (req,res) => {
    const query = "INSERT INTO turnos (`nombre`, `apellido`, `fecha`, `hora`, `email`, `tel`, `dni`, `duracion`, `descripcion`) VALUES (?)";
    const values = [
        req.body.nombre, req.body.apellido, req.body.fecha, req.body.hora, req.body.email, req.body.tel, req.body.dni, req.body.duracion, req.body.descripcion
    ];

    db.query(query, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json({msg: "El turno ha sido creado exitosamente."});
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!");
});