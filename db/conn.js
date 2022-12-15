const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts", "root", "Ruan@123", {
    host: "localhost",
    dialect: "mysql",
});

try {
    sequelize.authenticate();
    console.log("Conectado ao MySQL");
} catch (error) {
    console.log(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize;
