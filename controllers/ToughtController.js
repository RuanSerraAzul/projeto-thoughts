const Tought = require("../models/Tought");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class ToughtController {
    static async showToughts(req, res) {
        res.render("toughts/home");
    }

    static async dashboard(req, res) {
        res.render("toughts/dashboard");
    }

    static async createTought(req, res) {
        res.render("toughts/create");
    }
};
