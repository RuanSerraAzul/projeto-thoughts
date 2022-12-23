const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts", "root", "Ruan@123", {
    host: "db",
    dialect: "mysql",
    port: 3306,
});

try {
    sequelize.authenticate();
    console.log("Conectado ao MySQL");
} catch (error) {
    console.log(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize;
