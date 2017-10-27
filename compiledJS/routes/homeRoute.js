"use strict";
exports.__esModule = true;
var regDB_1 = require("../models/regDB");
var HomeRoute = (function () {
    function HomeRoute() {
    }
    HomeRoute.prototype.getRegNum = function (req, res) {
        regDB_1["default"].find({})
            .then(function (allPlates) {
            res.render('registration_number', {
                regPlate: allPlates
            });
        })["catch"](function (error) { return (console.log(error)); });
    };
    HomeRoute.prototype.createRegNum = function (req, res) {
        var enteredRegNum = req.body.takeReg;
        var regPlates = new regDB_1["default"]({
            regNum: enteredRegNum
        });
        regPlates.save()
            .then(function (plate) {
            req.session.flash = "registration successfully added.";
            res.redirect('/');
        })["catch"](function (error) { return (console.log(error)); });
    };
    return HomeRoute;
}());
exports.HomeRoute = HomeRoute;
//# sourceMappingURL=homeRoute.js.map