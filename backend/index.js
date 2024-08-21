const express = require('express') 
const app = express()
const mongoose = require('mongoose')
const port = process.envPORT || 5000;

async function main() {
    await mongoose.connect('mongodb+srv://rockzila2011:<password>@santa-rosa-rolera-clust.giqq6.mongodb.net/?retryWrites=true&w=majority&appName=santa-rosa-rolera-cluster');    
}

main().then(() => console.log('Mongodb conectodo exitosamente')).catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send("Hola Mundo!!")
})

app.listen(port, () =>{
    console.log(`App escuchando en puerto ${port}`)
})