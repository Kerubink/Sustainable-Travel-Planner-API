import express from "express";

const app = express();
app.use(express.json());


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`a api muito foda esta fodando aqui meu chapa: http://localhost:${PORT}`);
})