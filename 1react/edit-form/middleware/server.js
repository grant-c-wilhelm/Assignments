const express = require ('express')
const app = express();

app.listen(process.env.PORT, () => (`Listening on PORT ${process.env.PORT}`))