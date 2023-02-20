import express from "express";
import cors from "cors";
import Students from './students.json' assert { type: "json" };

export const app = express();
export const port = 3000;
const studentsData = Students;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World! the backend for the angular test! ");
  });   

app.get("/characters", (req, res) => {
    res.send(studentsData);
    });

app.get("/characters/:id", (req, res) => {
    const student = studentsData.find((s) => s.ID === req.params.id);
    res.send(student);
    });

app.post("/characters", (req, res) => {
    const student = req.body;
    studentsData.push(student);
    res.send(student);
    });

app.put("/characters/:id", (req, res) => {
    const student = studentsData.find((s) => s.ID === req.params.id);
    student = req.body;
    res.send(student);
    });

app.delete("/characters/:id", (req, res) => {
    const student = studentsData.find((s) => s.ID === req.params.id);
    const index = studentsData.indexOf(student);
    studentsData.splice(index, 1);
    res.send(student);
    });