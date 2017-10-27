"use strict";
exports.__esModule = true;
var regDB_1 = require("../models/regDB");
var FilterRoute = (function () {
    function FilterRoute() {
    }
    ;
    FilterRoute.prototype.filter = function (req, res) {
        var selectedCity = req.body.filter;
        console.log('**********');
        console.log(selectedCity);
        regDB_1["default"].find({ regNum: { $regex: selectedCity } })
            .then(function (searchResults) {
            res.render('registration_number', {
                regPlate: searchResults
            });
        })["catch"](function (error) { return console.log(error); });
    };
    return FilterRoute;
}());
exports.FilterRoute = FilterRoute;
//# sourceMappingURL=filterRoute.js.map