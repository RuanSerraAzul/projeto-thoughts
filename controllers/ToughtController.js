const Tought = require("../models/Tought");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class ToughtController {
    static async showToughts(req, res) {
        res.render("toughts/home");
    }

    static async dashboard(req, res) {
        const userId = req.session.userid;

        const user = await User.findOne({
            where: {
                id: userId,
            },
            include: Tought,
            plain: true,
        });

        //check if user exists
        if (!user) {
            res.redirect("/login");
        }

        const toughts = user.Toughts.map((result) => result.dataValues);
        res.render("toughts/dashboard", { toughts });
    }

    static async createTought(req, res) {
        res.render("toughts/create");
    }

    static async createToughtSave(req, res) {
        const tought = {
            title: req.body.title,
            UserId: req.session.userid,
        };

        try {
            await Tought.create(tought);

            req.flash("message", "Pensamento criado com sucesso!");

            req.session.save(() => {
                res.redirect("/toughts/dashboard");
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async removeTought(req, res) {
        const id = req.body.id;

        const userId = req.session.userid;

        try {
            await Tought.destroy({ where: { id: id, UserId: userId } });

            req.flash("message", "Pensamento excluido com sucesso!");

            req.session.save(() => {
                res.redirect("/toughts/dashboard");
            });
        } catch (error) {
            console.log(error);
        }
    }
};
