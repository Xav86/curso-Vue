const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const router = require("./routes/routes")
const cors = require('cors');
require("dotenv").config();
 
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/",router);

//------------- Iniciar o servidor ----------------

const PORT = process.env.PORT || 8686;

app.listen(PORT, () => {
  console.log(`
    ***********************************

      Servidor rodando na porta: ${PORT}

    ***********************************
    `);
});
