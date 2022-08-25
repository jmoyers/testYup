"use strict";
exports.__esModule = true;
var yup_1 = require("yup");
var testSchema = (0, yup_1.object)({
    a: (0, yup_1.boolean)().required(),
    b: (0, yup_1.boolean)().optional(),
    c: (0, yup_1.boolean)().required()
});
var test = {
    a: false,
    b: false,
    c: false
};
var test2 = {
    a: true,
    c: true
};
