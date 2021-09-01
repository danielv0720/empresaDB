//requerir modulo mongoose
const mongoose = require("mongoose");

//url de conexion
const atlas =
  "mongodb+srv://danielv0720:grajales@cluster0.fn83n.mongodb.net/empresaDB?retryWrites=true&w=majority";

//hacer la conexion
mongoose
  .connect(atlas, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("Conexion a mongoDB exitosa :)"))
  .catch((err) => console.log(err));

module.exports = mongoose;
