const axios = require("axios")
const express = require("express")
const app = express()
app.use(express.json())
const port = 3000

const API_KEY = require("./keys")

app.get('/clima/:cidade', async (req, res) => {
    try {
        const {cidade} = req.params
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`)
        let clima = response.data
        res.json(clima).status(200)

    }catch (error) {
        console.error("Erro ao coletar dados: ", error.mensagem)
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando em localhost:${port}`)
})