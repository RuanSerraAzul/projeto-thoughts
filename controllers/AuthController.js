const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
    static login(req, res) {
        res.render("auth/login");
    }

    static register(req, res) {
        res.render("auth/register");
    }

    static async registerPost(req, res) {
        const { name, email, password, confirmPassword } = req.body;

        //password match validation
        if (password != confirmPassword) {
            //mensagem de erro
            req.flash("message", "Senhas diferentes, tente novamente");
            res.render("auth/register");
        }
    }
};
